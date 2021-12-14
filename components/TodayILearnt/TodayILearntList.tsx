import { IconButton } from "@components/Buttons/IconButton";
import Date from "@components/Formatters/Date";
import { NotionTag } from "@components/Tags/NotionTag";
import { TodayILearned } from "@localTypes/today-i-learned";
import Link from "next/link";
import MenuIcon from "@components/Icons/MenuIcon";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalNavigationContext } from "@components/Providers";

interface ListProps {
  todayILearnedData: TodayILearned[];
}

export function TodayILearnedList({ todayILearnedData }: ListProps) {
  const router = useRouter();
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext);
  return (
    <div className="relative">
      <div className="md:w-96 h-screen flex flex-col overflow-y-auto bg-panel">
        <div className="px-1 py-3 md:px-3 sticky flex items-center space-x-2 top-0 bg-glass border-0 z-10">
          {!isOpen && (
            <IconButton
              icon={<MenuIcon height={25} width={25} className="self-center" />}
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
          <div className="p-3 text-lg font-bold">Today I Learned</div>
        </div>
        <div className="p-1 md:p-3 flex flex-col space-y-1">
          {todayILearnedData.map((item) => {
            const isActive = router.asPath === `/today-i-learned/${item.id}`;
            return (
              <Link
                key={item.id}
                href="/today-i-learned/[id]"
                as={`/today-i-learned/${item.id}`}
              >
                <a
                  className={`flex flex-col space-y-1 p-3 hover:bg-gray-200 dark:hover:bg-[#222222] rounded-md transform duration-300 ${
                    isActive ? "bg-gray-200 dark:bg-[#222222]" : ""
                  }`}
                >
                  <div className="text-sm text-gray-500 font-semibold">
                    <Date dateString={item.createdAt} />
                  </div>
                  <div className="text-sm font-semibold">{item.name}</div>
                  <div className="flex items-center space-x-3 overflow-x-auto text-xl">
                    {item.emoji && <div>{item.emoji}</div>}
                    {item.tags.map((tag) => (
                      <NotionTag tag={tag} key={tag.id} />
                    ))}
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
