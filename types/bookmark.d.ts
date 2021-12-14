import Tag from "./tag";

export type Bookmark = {
  id: string;
  emoji: string;
  createdAt: string;
  name: string;
  type: Tag;
  url: string | null;
  content: string;
};
