import Head from "next/head";
import Layout from "@components/Layouts/Layout";
import { siteTitle } from "./_document";
import { getSortedBlogsData } from "@lib/blogs";
import { GetStaticProps } from "next";
import BlogItem from "@components/Items/BlogItem";
import HeaderContent from "@components/HeaderContent/HeaderContent";
import { PostData } from "@localTypes/posts";
import { generateRssFeed } from "@scripts/generate-rss";
import { featuredProjects } from "@lib/projects";
import ProjectItem from "@components/Items/ProjectItem";
import Link from "next/link";

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
        <div id="recentBlogs" className="flex flex-col mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
            Latest Blogs
          </h1>
          <div className="grid place-items-center mb-5">
            <ul className="w-full grid sm:grid-cols-2 gap-8 p-5">
              {latestBlogData.map((blogData) => (
                <li className="" key={blogData.id}>
                  <BlogItem blogId={blogData.id} blogData={blogData} />
                </li>
              ))}
            </ul>
          </div>
          <Link href="/blog">
            <a className="text-2xl hover:underline">Read more → </a>
          </Link>
        </div>
        <div id="projects" className="flex flex-col mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
            Some Projects I&apos;m Working On
          </h1>
          <div className="grid place-items-center">
            <ul className="w-full p-5 space-y-10">
              {featuredProjects.map((projectData, index) => (
                <li className="" key={projectData.name}>
                  <ProjectItem
                    imageLeft={index % 2 === 0}
                    project={projectData}
                  />
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
  const latestBlogData = getSortedBlogsData(2);
  generateRssFeed();
  return {
    props: {
      latestBlogData,
      featuredProjects,
    },
  };
};
