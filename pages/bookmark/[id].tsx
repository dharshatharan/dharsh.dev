import PageLayout, { ListDetailView } from "@components/Layout";
import {
  getAllBookmarkIds,
  getBookmarks,
  getBookmarkById,
} from "@lib/notion/bookmarks";
import { Bookmark } from "@localTypes/bookmark";
import components from "@components/MDXComponents";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useMemo } from "react";
import { BookmarkList } from "@components/Bookmarks/BookmarkList";
import { NotionTag } from "@components/Tags/NotionTag";
import { SmartLink } from "@components/SmartLink";
import LinkIcon from "@components/Icons/LinkIcon";
import RightArrowIcon from "@components/Icons/RightArrowIcon";
import { IconButton } from "@components/Buttons/IconButton";
import { useWindowSize } from "@components/hooks/WindowSize";
import { NextSeo } from "next-seo";
import { FaviconImage } from "@components/Image/FaviconImage";

interface Props {
  bookmarkData: Bookmark;
  allBookmarkData: Bookmark[];
}

const BackButton = () => {
  const size = useWindowSize();
  if (typeof window !== "undefined" && size.width && size.width < 1024) {
    return (
      <SmartLink href="/bookmark">
        <IconButton icon={<RightArrowIcon className="rotate-180" />} />
      </SmartLink>
    );
  } else {
    return <div />;
  }
};

export default function TodayILearnt({ bookmarkData, allBookmarkData }: Props) {
  const Component = useMemo(
    () => getMDXComponent(bookmarkData.content),
    [bookmarkData.content]
  );
  const url = bookmarkData.url ? new URL(bookmarkData.url).hostname : null;
  return (
    <ListDetailView
      list={<BookmarkList bookmarkData={allBookmarkData} />}
      hasDetail
    >
      <PageLayout title={bookmarkData.name} customLeftItem={<BackButton />}>
        <NextSeo
          title={bookmarkData.name}
          description={bookmarkData.url ?? ""}
        />
        <div className="mb-96 py-5 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="flex items-center space-x-2 overflow-x-auto">
              <NotionTag tag={bookmarkData.type} />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mt-10">
              {bookmarkData.name}
            </h1>
            {url && (
              <div className="flex items-center text-gray-500 font-semibold space-x-3 overflow-x-auto mt-5">
                <FaviconImage
                  src={url}
                  height={32}
                  width={32}
                  alt={`Website Favicon: ${url}`}
                  className="rounded"
                />
                <SmartLink className="text-md" href={bookmarkData.url ?? ""}>
                  {url}
                </SmartLink>
              </div>
            )}
            <article className="prose lg:prose-lg dark:prose-light py-5">
              <Component
                className="my-10 leading-relaxed"
                components={components}
              />
            </article>
            {bookmarkData.url && (
              <SmartLink href={bookmarkData.url}>
                <div className="bg-blue-500 text-md text-off-white p-3 mb-5 w-full flex items-center justify-center space-x-2 rounded-xl">
                  <LinkIcon height="17" width="17" />
                  <div className="font-semibold">Visit</div>
                </div>
              </SmartLink>
            )}
          </div>
        </div>
      </PageLayout>
    </ListDetailView>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllBookmarkIds();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const allBookmarkData = await getBookmarks();
  const bookmarkData = await getBookmarkById(params!.id as string);
  if (!bookmarkData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allBookmarkData,
      bookmarkData: bookmarkData,
    },
    revalidate: 60,
  };
};
