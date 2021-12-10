import { BookmarkList } from "@components/Bookmarks/BookmarkList";
import PageLayout, { ListDetailView } from "@components/Layout";
import { getBookmarks } from "@lib/notion/bookmarks";
import { Bookmark } from "@localTypes/bookmark";
import { GetStaticProps } from "next";

interface Props {
  bookmarkData: Bookmark[];
}

export default function TodayILearnt({ bookmarkData }: Props) {
  return (
    <ListDetailView
      list={<BookmarkList bookmarkData={bookmarkData} />}
      hasDetail={false}
    >
      <PageLayout title="Bookmarks"></PageLayout>
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
