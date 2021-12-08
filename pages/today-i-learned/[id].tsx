import PageLayout, { ListDetailView } from "@components/Layout";
import {
  getAllTodayILearnedIds,
  getTodayILearned,
  getTodayILearnedById,
} from "@lib/notion/todayILearned";
import { todayILearned } from "@localTypes/today-i-learned";
import components from "@components/MDXComponents";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useMemo } from "react";
import { TodayILearnedList } from "@components/TodayILearnt/TodayILearntList";

interface Props {
  todayILearnedData: todayILearned;
  allTodayILearnedData: todayILearned[];
}

export default function TodayILearnt({
  todayILearnedData,
  allTodayILearnedData,
}: Props) {
  const Component = useMemo(
    () => getMDXComponent(todayILearnedData.content),
    [todayILearnedData.content]
  );
  return (
    <ListDetailView
      list={<TodayILearnedList todayILearnedData={allTodayILearnedData} />}
      hasDetail={true}
    >
      <PageLayout title="Today I Learnt">
        <article className="prose lg:prose-xl dark:prose-light py-5">
          <h3>{todayILearnedData.name}</h3>
          <Component
            className="my-10 leading-relaxed"
            components={components}
          />
        </article>
      </PageLayout>
    </ListDetailView>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllTodayILearnedIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const allTodayILearnedData = await getTodayILearned();
  const todayILearnedData = await getTodayILearnedById(params!.id as string);
  return {
    props: {
      allTodayILearnedData,
      todayILearnedData: todayILearnedData,
    },
    revalidate: 60,
  };
};
