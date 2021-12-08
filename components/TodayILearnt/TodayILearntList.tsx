import { todayILearned } from "@localTypes/today-i-learned";
import Link from "next/link";

interface ListProps {
  todayILearnedData: todayILearned[];
}

export const TodayILearnedList = ({ todayILearnedData }: ListProps) => (
  <div className="w-72 h-screen flex flex-col space-y-5 overflow-y-auto">
    {todayILearnedData.map((item) => (
      <Link
        key={item.id}
        href="/today-i-learned/[id]"
        as={`/today-i-learned/${item.id}`}
      >
        <a className="flex flex-col">{item.name}</a>
      </Link>
    ))}
  </div>
);
