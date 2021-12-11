import readingTime from "reading-time";

export type BlogData = {
  id: string;
  title: string;
  published: string;
  updated: string;
  readTime: readingTime.IReadTimeResults;
  image: string;
  description: string;
  contentHtml?: string;
};
