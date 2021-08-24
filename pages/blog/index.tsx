import Head from "next/head";
import Layout from "@components/Layouts/Layout";
import BlogItem from "@components/Blog/BlogItem";
import { getSortedBlogsData } from "@lib/blogs";
import { PostData } from "@localTypes/posts";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import FadeInWhenVisible from "@components/Animations/FadeInWhenVisible";

interface Props {
  allBlogsData: PostData[];
}

export default function index({ allBlogsData }: Props): ReactElement {
  return (
    <Layout>
      <Head>
        <title> ✍️ My Blog</title>
      </Head>
      <FadeInWhenVisible>
        <section id="Blog" className="">
          <h1 className="text-smooth-black dark:text-off-white">Blog</h1>
          <ul className="grid lg:grid-cols-2 xl:grid-cols-3">
            {allBlogsData.map((blogData) => (
              <li className="p-5" key={blogData.id}>
                <BlogItem blogId={blogData.id} blogData={blogData} />
              </li>
            ))}
          </ul>
        </section>
      </FadeInWhenVisible>
    </Layout>
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
