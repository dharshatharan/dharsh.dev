import { Tag } from "@localTypes/tag";

interface Props {
  tag: Tag;
}

export const NotionTag = ({ tag }: Props) => {
  const colors = {
    default: "bg-gray-500",
    gray: "bg-gray-500",
    brown: "bg-red-500",
    orange: "bg-red-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    red: "bg-red-500",
  };
  return (
    <div
      key={tag.id}
      className={`text-sm font-semibold whitespace-nowrap text-white px-1 rounded-sm ${
        colors[tag.color]
      }`}
    >
      {tag.name}
    </div>
  );
};
