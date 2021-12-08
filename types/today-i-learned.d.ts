export type todayILearned = {
  id: string;
  emoji: string;
  createdAt: string;
  name: string;
  tags: {
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
  }[];
  url: string | null;
  content: string;
};
