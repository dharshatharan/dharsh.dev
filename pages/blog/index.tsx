import Head from "next/head";
import PageLayout from "@components/Layout";
import BlogItem from "@components/Items/BlogItem";
import { getSortedBlogsData } from "@lib/blogs";
import { PostData } from "@localTypes/posts";
import { GetStaticProps } from "next";
import { ReactElement } from "react";

interface Props {
  allBlogsData: PostData[];
}

export default function index({ allBlogsData }: Props): ReactElement {
  return (
    <PageLayout title="Writing">
      <Head>
        <title>Writing</title>
      </Head>
      <section id="Blog" className="w-full mt-10 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Writing</h1>
        <div id="recentBlogs" className="flex flex-col">
          <div className="grid place-items-center">
            <ul className="w-full grid sm:grid-cols-2 gap-8 p-5">
              {allBlogsData.map((blogData) => (
                <li className="" key={blogData.id}>
                  <BlogItem blogId={blogData.id} blogData={blogData} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogsData = getSortedBlogsData();
  return {
    props: {
      allBlogsData,
    },
  };
};
