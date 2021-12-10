import { notionClient } from "./index";
// @ts-ignore
import notion2md from "notion-to-md";
import { getBundledMDX } from "@lib/mdx";
import { Bookmark } from "@localTypes/bookmark";

const notion = notionClient();
// passing notion client to the option
// eslint-disable-next-line new-cap
const n2m = new notion2md({ notionClient: notion });

export async function getBookmarks() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BOOKMARKS_DATABASE ?? "",
  });
  return results.map((item) => {
    const properties = item.properties;
    console.log(properties);
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
      type: properties.Type.type === "select" ? properties.Type.select : "",
      url: properties.URL.type === "url" ? properties.URL.url : "",
    } as Bookmark;
  });
}

export async function getBookmarkByType(type: string) {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BOOKMARKS_DATABASE ?? "",
    filter: {
      property: "Type",
      text: {
        equals: type,
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
      type: properties.Type.type === "select" ? properties.Type.select : "",
      url: properties.URL.type === "url" ? properties.URL.url : "",
    } as Bookmark;
  });
}

export async function getBookmarkById(id: string) {
  const data = notion.pages.retrieve({
    page_id: id,
  });
  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdblocks);

  const mdx = getBundledMDX(mdString);

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
      type:
        data.properties.Type.type === "select"
          ? data.properties.Type.select
          : [],
      url: data.properties.URL.type === "url" ? data.properties.URL.url : "",
      content: mdx.code,
    } as Bookmark;
  });
}

export async function getAllBookmarkIds() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BOOKMARKS_DATABASE ?? "",
    page_size: 20,
  });
  return results.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });
}
