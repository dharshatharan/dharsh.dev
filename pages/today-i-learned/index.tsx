import PageLayout, { ListDetailView } from "@components/Layout";
import { TodayILearnedList } from "@components/TodayILearnt/TodayILearntList";
import { getTodayILearned } from "@lib/notion/todayILearned";
import { TodayILearned } from "@localTypes/today-i-learned";
import { GetStaticProps } from "next";

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
