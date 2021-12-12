import Head from "next/head";
import PageLayout from "@components/Layout";
import BlogItem from "@components/Items/BlogItem";
import { getSortedBlogsData } from "@lib/notion/blogs";
import { BlogData } from "@localTypes/blog";
import { GetStaticProps } from "next";
import { ReactElement } from "react";

interface Props {
  allBlogsData: BlogData[];
}

export default function index({ allBlogsData }: Props): ReactElement {
  return (
    <PageLayout title="Writing">
      <Head>
        <title>Writing</title>
      </Head>
      <section id="Blog" className="w-full flex justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Writing</h1>
          <div id="recentBlogs" className="flex flex-col">
            <div className="grid place-items-center">
              <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 p-5 list-none">
                {allBlogsData.map((blogData) => (
                  <li className="" key={blogData.id}>
                    <BlogItem blogId={blogData.id} blogData={blogData} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogsData = await getSortedBlogsData();
  return {
    props: {
      allBlogsData,
    },
  };
};
