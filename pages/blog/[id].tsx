import PageLayout from "@components/Layout";
import { getAllBlogIds, getBlogData } from "@lib/notion/blogs";
import Image from "next/image";
import Link from "next/link";
import Date from "@components/Formatters/Date";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { BlogData } from "@localTypes/blog";
import { ArticleImage } from "@components/Image/ArticleImage";
import { NextSeo } from "next-seo";
import { useMdxComponent } from "hooks/useMdxComponent";

interface Props {
  blog: BlogData;
}

export default function Post({ blog }: Props) {
  const Component = useMdxComponent(blog.contentHtml!);

  return (
    <PageLayout title={blog.title}>
      <NextSeo title={blog.title} description={blog.description} />
      <div className="flex justify-center md:mt-10">
        <div className="w-full max-w-4xl md:mx-10 mb-10 md:mb-20">
          <article className="prose lg:prose-lg max-w-none dark:prose-light py-5">
            <small className="flex justify-center align-middle text-teal-grey dark:text-dark-yellow my-5 not-prose">
              <Image
                src="/images/profile-square.png"
                alt="Author, Dharsh"
                width={28}
                height={28}
                className="rounded-full mx-1"
              />
              <span>
                &nbsp;Dharsh &nbsp;&bull;&nbsp;
                <Date dateString={blog.published} />
                &nbsp;&bull;&nbsp;
                {blog.readTime.text}
              </span>
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
              priority={true}
            />
            <Component className="my-10 leading-relaxed" />
          </article>
          <div className="text-teal-grey hover:underline text-md md:text-xl">
            <Link href="/blog">← Read More</Link>
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
    fallback: "blocking",
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
