import readingTime from "reading-time";

export type PostData = {
  id: string;
  title: string;
  date: string;
  readTime: readingTime.IReadTimeResults;
  image: string;
  contentHtml: string;
};
