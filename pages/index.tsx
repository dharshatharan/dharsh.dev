import Head from "next/head";
import Layout from "@components/Layouts/Layout";
import { siteTitle } from "./_document";
import { getSortedBlogsData } from "@lib/blogs";
import { GetStaticProps } from "next";
import BlogItem from "@components/Blog/BlogItem";
import HeaderContent from "@components/HeaderContent/HeaderContent";
import { PostData } from "@localTypes/posts";
import { generateRssFeed } from "@scripts/generate-rss";

interface Props {
  latestBlogData: PostData[];
}

export default function Home({ latestBlogData }: Props) {
  return (
    <Layout headerContent={<HeaderContent />}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="w-full">
        <div id="recentBlogs" className="flex flex-col">
          <div className="prose md:prose-xl">
            <p />
            <h1 className="text-smooth-black dark:text-off-white">
              Latest Blogs
            </h1>
            <p />
          </div>
          <div className="grid place-items-center">
            <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
              {latestBlogData.map((blogData) => (
                <li className="" key={blogData.id}>
                  <BlogItem blogId={blogData.id} blogData={blogData} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const latestBlogData = getSortedBlogsData(3);
  generateRssFeed();
  return {
    props: {
      latestBlogData,
    },
  };
};
