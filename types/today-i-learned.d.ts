export type Tag = {
  id: string;
  name: string;
  color:
    | "default"
    | "gray"
    | "brown"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "red";
};

export type TodayILearned = {
  id: string;
  emoji: string;
  createdAt: string;
  name: string;
  tags: Tag[];
  url: string | null;
  content: string;
};
