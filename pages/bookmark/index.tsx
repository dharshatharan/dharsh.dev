import { BookmarkList } from "@components/Bookmarks/BookmarkList";
import PageLayout, { ListDetailView } from "@components/Layout";
import { getBookmarks } from "@lib/notion/bookmarks";
import { Bookmark } from "@localTypes/bookmark";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

interface Props {
  bookmarkData: Bookmark[];
}

export default function BookmarkPage({ bookmarkData }: Props) {
  return (
    <ListDetailView
      list={<BookmarkList bookmarkData={bookmarkData} />}
      hasDetail={false}
    >
      <PageLayout title="Bookmarks">
        <NextSeo
          title="Bookmarks"
          description="Curating interesting things I come across"
        />
        <div />
      </PageLayout>
    </ListDetailView>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const bookmarkData = await getBookmarks();
  return {
    props: {
      bookmarkData,
    },
    revalidate: 60,
  };
};
