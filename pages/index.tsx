import Head from "next/head";
import Layout from "@components/Layouts/Layout";
import { siteTitle } from "./_document";
import { getSortedBlogsData } from "@lib/blogs";
import { GetStaticProps } from "next";
import BlogItem from "@components/Blog/BlogItem";
import HeaderContent from "@components/HeaderContent/HeaderContent";
import { PostData } from "@localTypes/posts";

interface Props {
  allBlogsData: PostData[];
}

export default function Home({ allBlogsData }: Props) {
  return (
    <Layout headerContent={<HeaderContent />}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="w-full">
        <div className="w-full flex flex-1 justify-center py-10 px-5">
          <div className="max-w-7xl">
            <div id="blog" className="flex flex-col">
              <h1 className="text-smooth-black dark:text-off-white">Blog</h1>
              <div className="flex w-full flex-1 justify-center">
                <ul className="grid lg:grid-cols-2 xl:grid-cols-3">
                  {allBlogsData.map((blogData) => (
                    <li className="p-5" key={blogData.id}>
                      <BlogItem blogId={blogData.id} blogData={blogData} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
