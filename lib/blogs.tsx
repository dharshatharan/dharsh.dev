import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import readingTime from "reading-time";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const blogsDirectory = path.join(process.cwd(), "blogs");

export function getSortedBlogsData(limit: number = -1) {
  // Get file names under /blogs
  const fileNames = fs.readdirSync(blogsDirectory);
  let targetFiles = fileNames.filter((fileName) => {
    return path.extname(fileName).toLowerCase() === ".mdx";
  });
  if (limit !== -1) targetFiles = targetFiles.slice(0, limit);
  const allBlogData = targetFiles.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the blog metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        image: string;
      }),
      readTime: readingTime(fileContents),
    };
  });
  // Sort blogs by date
  return allBlogData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogsDirectory);
  if (fileNames) {
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.mdx$/, ""),
        },
      };
    });
  }
  return [
    {
      params: {
        id: "",
      },
    },
  ];
}

export async function getBlogData(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX(fileContents, {
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

  return {
    id,
    contentHtml: code,
    readTime: readingTime(fileContents),
    ...(frontmatter as {
      date: string;
      title: string;
      image: string;
    }),
  };
}
