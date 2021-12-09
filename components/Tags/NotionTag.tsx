import { Tag } from "@localTypes/today-i-learned";

interface Props {
  tag: Tag;
}

export const NotionTag = ({ tag }: Props) => {
  const colors = {
    default: "bg-gray-400",
    gray: "bg-gray-400",
    brown: "bg-red-400",
    orange: "bg-red-400",
    yellow: "bg-yellow-400",
    green: "bg-green-400",
    blue: "bg-blue-400",
    purple: "bg-purple-400",
    pink: "bg-pink-400",
    red: "bg-red-400",
  };
  return (
    <div
      key={tag.id}
      className={`text-xs font-bold whitespace-nowrap text-white px-2 rounded-sm ${
        colors[tag.color]
      }`}
    >
      {tag.name}
    </div>
  );
};
