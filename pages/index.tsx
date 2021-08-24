import Head from "next/head";
import Layout from "@components/Layouts/Layout";
import { siteTitle } from "./_document";
import { getSortedBlogsData } from "@lib/blogs";
import { GetStaticProps } from "next";
import BlogItem from "@components/Blog/BlogItem";
import HeaderContent from "@components/HeaderContent/HeaderContent";
import { PostData } from "@localTypes/posts";
import { generateRssFeed } from "@scripts/generate-rss";
import FadeInWhenVisible from "@components/Animations/FadeInWhenVisible";

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
        <FadeInWhenVisible>
          <div id="blog" className="flex flex-col">
            <h1 className="text-smooth-black dark:text-off-white">
              Latest Blogs
            </h1>
            <div className="flex w-full flex-1 justify-center">
              <ul className="grid lg:grid-cols-2 xl:grid-cols-3">
                {latestBlogData.map((blogData) => (
                  <li className="p-5" key={blogData.id}>
                    <BlogItem blogId={blogData.id} blogData={blogData} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInWhenVisible>
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
