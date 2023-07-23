import { notionClient } from "./index";
import { NotionToMarkdown } from "notion-to-md";
import { getBundledMDX } from "@lib/mdx";
import { Bookmark } from "@localTypes/bookmark";
import { avoidRateLimit } from "@utils/avoidRateLimit";

const notion = notionClient();
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getBookmarks() {
  await avoidRateLimit();
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BOOKMARKS_DATABASE ?? "",
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
  });
  return results
    .map((item) => {
      if (item.object === "page" && "properties" in item) {
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
      }
      return null;
    })
    .filter((item) => item !== null) as Bookmark[];
}

export async function getBookmarkByType(type: string): Promise<Bookmark[]> {
  await avoidRateLimit();
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BOOKMARKS_DATABASE ?? "",
    filter: {
      property: "Type",
      rich_text: {
        equals: type,
      },
    },
  });
  return results
    .map((item) => {
      if (item.object === "page" && "properties" in item) {
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
      }
      return null;
    })
    .filter((item) => item !== null) as Bookmark[];
}

export async function getBookmarkById(id: string) {
  try {
    await avoidRateLimit();
    const data = notion.pages.retrieve({
      page_id: id,
    });
    const mdblocks = await n2m.pageToMarkdown(id);
    const mdString = n2m.toMarkdownString(mdblocks);

    const mdx = getBundledMDX(mdString.parent ?? "");

    return Promise.all([data, mdx]).then(([data, mdx]) => {
      if ("properties" in data) {
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
          url:
            data.properties.URL.type === "url" ? data.properties.URL.url : "",
          content: mdx.code,
        } as Bookmark;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllBookmarkIds() {
  await avoidRateLimit();
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BOOKMARKS_DATABASE ?? "",
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
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
