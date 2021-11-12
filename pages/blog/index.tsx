import Head from "next/head";
import PageLayout from "@components/Layouts/Layout";
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
    <PageLayout>
      <Head>
        <title> ✍️ My Blog</title>
      </Head>
      <section id="Blog" className="w-full">
        <div id="recentBlogs" className="flex flex-col">
          <h1 className="text-5xl font-extrabold my-5">Blog</h1>
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
