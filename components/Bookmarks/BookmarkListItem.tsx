import { FaviconImage } from "@components/Image/FaviconImage";
import { Bookmark } from "@localTypes/bookmark";
import Link from "next/link";

type Props = {
  item: Bookmark;
  isActive: boolean;
  url: string | null;
};

export const BookmarkListItem = ({ item, isActive, url }: Props) => {
  return (
    <Link key={item.id} href="/bookmark/[id]" as={`/bookmark/${item.id}`}>
      <a
        className={`flex flex-col space-y-1 p-3 hover:bg-gray-200 dark:hover:bg-[#222222] rounded-md transform duration-300 ${
          isActive ? "bg-gray-200 dark:bg-[#222222]" : ""
        }`}
      >
        <div className="text-sm font-bold">{item.name}</div>
        {url && (
          <div className="flex items-center text-sm text-gray-500 font-semibold space-x-3 overflow-x-auto overflow-y-hidden">
            <FaviconImage
              src={url}
              height={16}
              width={16}
              alt={`Website Favicon: ${url}`}
              className="rounded"
            />
            <div>{url}</div>
          </div>
        )}
      </a>
    </Link>
  );
};
