import { IconButton } from "@components/Buttons/IconButton";
import { Bookmark } from "@localTypes/bookmark";
import Link from "next/link";
import MenuIcon from "@components/icons/Menu";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalNavigationContext } from "@components/Providers";
import Image from "next/image";

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
              <Link
                key={item.id}
                href="/bookmark/[id]"
                as={`/bookmark/${item.id}`}
              >
                <a
                  className={`flex flex-col space-y-1 p-3 hover:bg-gray-200 dark:hover:bg-[#222222] rounded-md transform duration-300 ${
                    isActive ? "bg-gray-200 dark:bg-[#222222]" : ""
                  }`}
                >
                  <div className="text-sm font-semibold">{item.name}</div>
                  {url && (
                    <div className="flex items-center text-sm text-gray-500 font-semibold space-x-3 overflow-x-auto">
                      <Image
                        height={20}
                        width={20}
                        src={`http://www.google.com/s2/favicons?domain=${url}`}
                        alt="Website Favicon"
                      />
                      <div>{url}</div>
                    </div>
                  )}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
