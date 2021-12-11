import PageLayout from "@components/Layout";
import { getAllBlogIds, getBlogData } from "@lib/notion/blogs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Date from "@components/Formatters/Date";
import components from "@components/MDXComponents";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { BlogData } from "@localTypes/blog";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { ArticleImage } from "@components/Image/ArticleImage";

interface Props {
  blog: BlogData;
}

export default function Post({ blog }: Props) {
  const Component = useMemo(
    () => getMDXComponent(blog.contentHtml!),
    [blog.contentHtml]
  );

  return (
    <PageLayout title={blog.title}>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <div className="w-full flex justify-center mt-10">
        <div className="max-w-full md:max-w-3xl md:mx-10 mb-10 md:mb-20">
          <article className="prose lg:prose-lg dark:prose-light py-5">
            <small className="flex justify-center align-middle text-teal-grey dark:text-dark-yellow my-5">
              <span>
                <Image
                  src="/images/profile-square.png"
                  alt="Author, Dharsh"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              </span>
              <span>&nbsp;Dharsh</span>
              <span>&nbsp;&bull;&nbsp;</span>
              <Date dateString={blog.published} />
              <span>&nbsp;&bull;&nbsp;</span>
              <span>{blog.readTime.text}</span>
            </small>
            <h1 className="text-center">
              <div className="mb-4">{blog.title}</div>
              <div className="text-xl text-gray-600 dark:text-gray-400 font-normal italic">
                {blog.description}
              </div>
            </h1>
            <p className=""></p>
            <ArticleImage
              src={blog.image}
              alt={`${blog.title} Cover`}
              width={800}
              height={400}
              priority={true}
              objectFit="cover"
            />
            <Component
              className="my-10 leading-relaxed"
              components={components}
            />
          </article>
          <div className="text-teal-grey hover:underline text-md md:text-xl">
            <Link href="/blog">
              <a>← Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const blogData = await getBlogData(params!.id as string);

  if (!blogData || !blogData.contentHtml) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: blogData,
    },
    revalidate: 60,
  };
};
