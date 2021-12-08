import PageLayout, { ListDetailView } from "@components/Layout";
import { TodayILearnedList } from "@components/TodayILearnt/TodayILearntList";
import { getTodayILearned } from "@lib/notion/todayILearned";
import { todayILearned } from "@localTypes/today-i-learned";
import { GetStaticProps } from "next";

interface Props {
  todayILearnedData: todayILearned[];
}

export default function TodayILearnt({ todayILearnedData }: Props) {
  return (
    <ListDetailView
      list={<TodayILearnedList todayILearnedData={todayILearnedData} />}
      hasDetail={true}
    >
      <PageLayout title="Today I Learnt">
        <div className="bg-gray-200">Details</div>
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
