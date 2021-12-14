import PageLayout, { ListDetailView } from "@components/Layout";
import { TodayILearnedList } from "@components/TodayILearnt/TodayILearntList";
import { getTodayILearned } from "@lib/notion/todayILearned";
import { TodayILearned } from "@localTypes/today-i-learned";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

interface Props {
  todayILearnedData: TodayILearned[];
}

export default function TodayILearnt({ todayILearnedData }: Props) {
  return (
    <ListDetailView
      list={<TodayILearnedList todayILearnedData={todayILearnedData} />}
      hasDetail={false}
    >
      <PageLayout title="Today I Learned">
        <NextSeo
          title="Today I Learned"
          description="Writing and Sharing Things I Learn Everyday"
        />
        <div />
      </PageLayout>
    </ListDetailView>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const todayILearnedData = await getTodayILearned();
  return {
    props: {
      todayILearnedData,
    },
    revalidate: 60,
  };
};
