import { IconButton } from "../Buttons/IconButton";
import { Bookmark } from "@localTypes/bookmark";
import MenuIcon from "@components/Icons/MenuIcon";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalNavigationContext } from "../Providers";
import { BookmarkListItem } from "./BookmarkListItem";

interface ListProps {
  bookmarkData: Bookmark[];
}

export function BookmarkList({ bookmarkData }: ListProps) {
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
          <div className="px-3 text-lg font-bold">Bookmarks</div>
        </div>
        <div className="p-1 md:p-3 flex flex-col space-y-1">
          {bookmarkData.map((item) => {
            const isActive = router.asPath === `/bookmark/${item.id}`;
            const url = item.url ? new URL(item.url).hostname : null;
            return (
              <BookmarkListItem
                key={item.id}
                item={item}
                isActive={isActive}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
