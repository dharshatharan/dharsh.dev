import PageLayout from "@components/Layout";
import { getSortedBlogsData } from "@lib/notion/blogs";
import { GetStaticProps } from "next";
import BlogItem from "@components/Items/BlogItem";
import { BlogData } from "@localTypes/blog";
import { generateRssFeed } from "@scripts/generate-rss";
import { featuredProjects } from "@lib/projects";
import ProjectItem from "@components/Items/ProjectItem";
import Link from "next/link";

interface Props {
  latestBlogData: BlogData[];
}

export default function Home({ latestBlogData }: Props) {
  return (
    <PageLayout title="Home">
      <div className="flex justify-center">
        <div className="pb-24 w-full max-w-5xl">
          <section className="w-full flex transform duration-300 mt-10 mb-16 font-['Inter']">
            <div className="max-w-6xl">
              <h1 className="text-4xl md:text-7xl text-smooth-black dark:text-off-white font-light mb-4">
                Hi, I&apos;m <br />
                <strong className="font-black">
                  Dharshatharan
                  <br /> Jayatharan Aronan
                </strong>
              </h1>
              <p className="text-gray-500 text-lg md:text-2xl font-extrabold mb-4">
                DEVELOPER, WRITER, STUDENT
              </p>
              <p className="text-xl md:text-3xl mb-4">
                You can call me{" "}
                <strong className="text-smooth-black dark:text-off-white">
                  Dharsh
                </strong>
                .&nbsp;Welcome to my corner of the Internet!
              </p>
            </div>
          </section>
          <section className="w-full">
            <div id="recentBlogs" className="flex flex-col mb-24">
              <h1 className="text-2xl md:text-4xl font-extrabold mb-5">
                Latest Blogs
              </h1>
              <div className="grid place-items-center">
                <ul className="w-full grid sm:grid-cols-2 gap-x-8 gap-y-24 p-5 list-none">
                  {latestBlogData.map((blogData) => (
                    <li className="" key={blogData.id}>
                      <BlogItem blogId={blogData.id} blogData={blogData} />
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/blog" passHref>
                <div className="text-xl hover:underline">Read more → </div>
              </Link>
            </div>
            <div id="projects" className="flex flex-col mb-24">
              <h1 className="text-2xl md:text-4xl font-extrabold mb-5">
                Some Projects I&apos;m Working On
              </h1>
              <div className="grid place-items-center">
                <ul className="w-full p-5 grid grid-cols-auto gap-8 list-none">
                  {featuredProjects.map((projectData, index) => (
                    <li
                      className={index === 2 ? "md:col-span-2" : ""}
                      key={projectData.name}
                    >
                      <ProjectItem project={projectData} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const latestBlogData = await getSortedBlogsData(2);
  generateRssFeed();
  return {
    props: {
      latestBlogData,
      featuredProjects,
    },
    revalidate: 60,
  };
};
