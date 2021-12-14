import Tag from "./tag";

export type TodayILearned = {
  id: string;
  emoji: string;
  createdAt: string;
  name: string;
  tags: Tag[];
  url: string | null;
  content: string;
};
