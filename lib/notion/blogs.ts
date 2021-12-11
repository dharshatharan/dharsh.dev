import readingTime from "reading-time";
import { notionClient } from ".";
// @ts-ignore
import notion2md from "notion-to-md";
import { BlogData } from "@localTypes/blog";
import { getBundledMDX } from "@lib/mdx";

const notion = notionClient();
// passing notion client to the option
// eslint-disable-next-line new-cap
const n2m = new notion2md({ notionClient: notion });

export async function getSortedBlogsData(limit?: number) {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_WRITING_DATABASE ?? "",
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: "Published",
          },
        },
        {
          property: "ID",
          text: {
            is_not_empty: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Published",
        direction: "descending",
      },
    ],
    page_size: limit,
  });

  console.log(results);

  return await Promise.all(
    results.map(async (item) => {
      const mdblocks = await n2m.pageToMarkdown(item.id);
      const mdString = n2m.toMarkdownString(mdblocks);
      const properties = item.properties;
      return {
        id:
          properties.ID.type === "rich_text"
            ? properties.ID.rich_text[0].plain_text
            : "",
        image:
          item.cover && item.cover.type === "file"
            ? item.cover.file.url
            : item.cover && item.cover.type === "external"
            ? item.cover.external.url
            : null,
        published:
          properties.Published.type === "date"
            ? properties.Published.date?.start
            : "",
        updated:
          properties.Updated.type === "date" ? properties.Updated.date : "",
        title:
          properties.Name.type === "title"
            ? properties.Name.title[0].plain_text
            : "",
        description:
          properties.Description.type === "rich_text"
            ? properties.Description.rich_text[0].plain_text
            : "",
        readTime: readingTime(mdString),
      } as BlogData;
    })
  );
}

export async function getAllBlogIds() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_WRITING_DATABASE ?? "",
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: "Published",
          },
        },
        {
          property: "ID",
          text: {
            is_not_empty: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Published",
        direction: "descending",
      },
    ],
    page_size: 20,
  });
  return results.map((item) => {
    return {
      params: {
        id:
          item.properties.ID.type === "rich_text"
            ? item.properties.ID.rich_text[0].plain_text
            : "",
      },
    };
  });
}

export async function getBlogData(id: string) {
  try {
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_WRITING_DATABASE ?? "",
      filter: {
        and: [
          {
            property: "ID",
            text: {
              equals: id,
            },
          },
          {
            property: "Status",
            select: {
              equals: "Published",
            },
          },
        ],
      },
      page_size: 1,
    });
    const mdblocks = await n2m.pageToMarkdown(results[0].id);
    const mdString = n2m.toMarkdownString(mdblocks);

    const mdx = await getBundledMDX(mdString);

    const properties = results[0].properties;
    return {
      id:
        properties.ID.type === "rich_text"
          ? properties.ID.rich_text[0].plain_text
          : "",
      image:
        results[0].cover && results[0].cover.type === "file"
          ? results[0].cover.file.url
          : results[0].cover && results[0].cover.type === "external"
          ? results[0].cover.external.url
          : null,
      published:
        properties.Published.type === "date"
          ? properties.Published.date?.start
          : "",
      updated:
        properties.Updated.type === "date" ? properties.Updated.date : "",
      title:
        properties.Name.type === "title"
          ? properties.Name.title[0].plain_text
          : "",
      description:
        properties.Description.type === "rich_text"
          ? properties.Description.rich_text[0].plain_text
          : "",
      readTime: readingTime(mdString),
      contentHtml: mdx.code,
    } as BlogData;
  } catch (error) {
    console.log(error);
  }
}
