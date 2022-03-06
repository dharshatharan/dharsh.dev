import readingTime from "reading-time";
import { notionClient } from ".";
import { NotionToMarkdown } from "notion-to-md";
import { BlogData } from "@localTypes/blog";
import { getBundledMDX } from "@lib/mdx";

const notion = notionClient();
const n2m = new NotionToMarkdown({ notionClient: notion });

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
          rich_text: {
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

  return (
    await Promise.all(
      results.map(async (item) => {
        const mdblocks = await n2m.pageToMarkdown(item.id);
        const mdString = n2m.toMarkdownString(mdblocks);
        if ("properties" in item) {
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
        }
        return null;
      })
    )
  ).filter((item) => item !== null) as BlogData[];
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
          rich_text: {
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
  return results
    .map((item) => {
      if ("properties" in item) {
        return {
          params: {
            id:
              item.properties.ID.type === "rich_text"
                ? item.properties.ID.rich_text[0].plain_text
                : "",
          },
        };
      }
      return null;
    })
    .filter((item) => item !== null) as { params: { id: string } }[];
}

export async function getBlogData(id: string) {
  try {
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_WRITING_DATABASE ?? "",
      filter: {
        and: [
          {
            property: "ID",
            rich_text: {
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

    const item = results[0];
    const mdx = await getBundledMDX(mdString);

    if ("properties" in item && "cover" in item) {
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
        contentHtml: mdx.code,
      } as BlogData;
    }
  } catch (error) {
    console.log(error);
  }
}
