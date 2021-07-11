import fs from "fs";
import externalLinks from "remark-external-links";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "blogs");

export function getSortedBlogsData() {
  // Get file names under /blogs
  const fileNames = fs.readdirSync(blogsDirectory);
  const targetFiles = fileNames.filter((fileName) => {
    return path.extname(fileName).toLowerCase() === ".md";
  });
  const allBlogData = targetFiles.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

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
        readTime: number;
      }),
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
          id: fileName.replace(/\.md$/, ""),
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
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the blog metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(externalLinks, { target: "_blank" })
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      date: string;
      title: string;
      image: string;
      readTime: number;
    }),
  };
}
