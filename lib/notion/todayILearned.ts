import { todayILearned } from "@localTypes/today-i-learned";
import { notionClient } from "./index";
// @ts-ignore
import notion2md from "notion-to-md";
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const notion = notionClient();
// passing notion client to the option
// eslint-disable-next-line new-cap
const n2m = new notion2md({ notionClient: notion });

export async function getTodayILearned() {
  const { results } = await notion.databases.query({
    database_id: "7fb47f0b600a45c29f05d7774eaf0bc7",
    // filter: {
    // 	property: "Landmark",
    // 	text: {
    // 		contains: "Bridge",
    // 	},
    // },
  });
  return results.map((item) => {
    const properties = item.properties;
    return {
      id: item.id,
      emoji: item?.icon?.type === "emoji" ? item.icon.emoji : "",
      createdAt:
        properties.Created.type === "created_time"
          ? properties.Created.created_time
          : "",
      name:
        properties.Name.type === "title"
          ? properties.Name.title[0].plain_text
          : "",
      tags:
        properties.Tags.type === "multi_select"
          ? properties.Tags.multi_select
          : [],
      url: properties.URL.type === "url" ? properties.URL.url : "",
    } as todayILearned;
  });
}

export async function getTodayILearnedByTag(tag: string) {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_TODAY_I_LEARNED_DATABASE ?? "",
    filter: {
      property: "Tags",
      text: {
        contains: tag,
      },
    },
  });
  return results.map((item) => {
    const properties = item.properties;
    return {
      id: item.id,
      emoji: item?.icon?.type === "emoji" ? item.icon.emoji : "",
      createdAt:
        properties.Created.type === "created_time"
          ? properties.Created.created_time
          : "",
      name:
        properties.Name.type === "title"
          ? properties.Name.title[0].plain_text
          : "",
      tags:
        properties.Tags.type === "multi_select"
          ? properties.Tags.multi_select
          : [],
      url: properties.URL.type === "url" ? properties.URL.url : "",
    } as todayILearned;
  });
}

export async function getTodayILearnedById(id: string) {
  const data = notion.pages.retrieve({
    page_id: id,
  });
  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdblocks);
  console.log(mdString);

  const mdx = bundleMDX(mdString, {
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ];
      return options;
    },
  });

  return Promise.all([data, mdx]).then(([data, mdx]) => {
    return {
      id: data.id,
      emoji: data?.icon?.type === "emoji" ? data.icon.emoji : "",
      createdAt:
        data.properties.Created.type === "created_time"
          ? data.properties.Created.created_time
          : "",
      name:
        data.properties.Name.type === "title"
          ? data.properties.Name.title[0].plain_text
          : "",
      tags:
        data.properties.Tags.type === "multi_select"
          ? data.properties.Tags.multi_select
          : [],
      url: data.properties.URL.type === "url" ? data.properties.URL.url : "",
      content: mdx.code,
    } as todayILearned;
  });
}

export async function getAllTodayILearnedIds() {
  const { results } = await notion.databases.query({
    database_id: "7fb47f0b600a45c29f05d7774eaf0bc7",
  });
  return results.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });
}
