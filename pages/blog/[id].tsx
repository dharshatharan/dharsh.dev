import Layout from "@components/Layouts/Layout";
import { getAllBlogIds, getBlogData } from "@lib/blogs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Date from "@components/Formatters/Date";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { PostData } from "@localTypes/posts";

interface Props {
  blog: PostData;
}

export default function Post({ blog }: Props) {
  return (
    <Layout>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <div className="w-full flex justify-center">
        <div className="max-w-full p-5 md:max-w-3xl md:mx-10 mb-10 md:mb-20">
          <article className="text-md md:text-xl text-smooth-black dark:text-off-white">
            <h1>{blog.title}</h1>
            <div className="text-teal-grey my-5">
              <Date dateString={blog.date} />
              &nbsp;&bull;&nbsp;{blog.readTime + " min read"}
            </div>
            <div className="w-full h-96 relative mb-10">
              <Image
                src={blog.image}
                alt={`${blog.title} Cover`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={"my-10 leading-relaxed"}
              dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            />
          </article>
          <div className="text-teal-grey hover:underline text-md md:text-xl">
            <Link href="/#blog">
              <a>← Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const blogData = await getBlogData(params!.id as string);
  return {
    props: {
      blog: blogData,
    },
  };
};
