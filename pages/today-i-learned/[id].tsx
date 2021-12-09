import PageLayout, { ListDetailView } from "@components/Layout";
import {
  getAllTodayILearnedIds,
  getTodayILearned,
  getTodayILearnedById,
} from "@lib/notion/todayILearned";
import { TodayILearned } from "@localTypes/today-i-learned";
import components from "@components/MDXComponents";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useMemo } from "react";
import { TodayILearnedList } from "@components/TodayILearnt/TodayILearntList";
import { NotionTag } from "@components/Tags/NotionTag";
import Date from "@components/Formatters/Date";
import { SmartLink } from "@components/SmartLink";
import LinkIcon from "@components/Icons/Link";
import RightArrowIcon from "@components/Icons/RightArrow";
import { IconButton } from "@components/Buttons/IconButton";
import { useWindowSize } from "@components/hooks/WindowSize";

interface Props {
  todayILearnedData: TodayILearned;
  allTodayILearnedData: TodayILearned[];
}

const BackButton = () => {
  const size = useWindowSize();
  if (typeof window !== "undefined" && size.width && size.width < 1024) {
    return (
      <SmartLink href="/today-i-learned">
        <IconButton icon={<RightArrowIcon className="rotate-180" />} />
      </SmartLink>
    );
  } else {
    return <div />;
  }
};

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
      hasDetail
    >
      <PageLayout
        title={todayILearnedData.name}
        customLeftItem={<BackButton />}
      >
        <div className="mb-96 py-5">
          <div className="text-7xl mb-5">{todayILearnedData.emoji}</div>
          <div className="text-mb font-bold text-gray-500 mb-3">
            <Date dateString={todayILearnedData.createdAt} />
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto mb-3">
            {todayILearnedData.tags.map((tag) => (
              <NotionTag tag={tag} key={tag.id} />
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mt-10">
            {todayILearnedData.name}
          </h1>
          <article className="prose lg:prose-lg dark:prose-light py-5">
            <Component
              className="my-10 leading-relaxed"
              components={components}
            />
          </article>
          {todayILearnedData.url && (
            <SmartLink href={todayILearnedData.url}>
              <div className="bg-blue-500 text-md text-off-white p-3 mb-5 w-full flex items-center justify-center space-x-2 rounded-xl">
                <LinkIcon height="17" width="17" />
                <div className="">Read More</div>
              </div>
            </SmartLink>
          )}
        </div>
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
