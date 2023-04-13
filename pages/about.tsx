import { ArticleImage } from "@components/Image/ArticleImage";
import PageLayout from "@components/Layout";
import CoverImage from "@images/cover-picture.png";
import { NextSeo } from "next-seo";

interface Props {}

export default function About(props: Props) {
  return (
    <PageLayout title="About">
      <NextSeo title="About" />
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <section className="prose lg:prose-lg dark:prose-light max-w-none mt-10 mb-20">
            <ArticleImage
              src={CoverImage}
              alt="A picture of me in front of a lake"
              priority={true}
              placeholder="blur"
            />
            <p>
              I am a fourth-year Software Engineering Student from Carleton
              University living in Ottawa.
            </p>
            <p>
              On this site, I share things I am working on as well as my
              thoughts on different things that make this world such an
              interesting place. I find philosophy very interesting and love
              exploring new ideas and concepts. I am always down to meet new
              people, so feel free to reach out to me at{" "}
              <a href="mailto:djayatharanaronan@gmail.com">
                djayatharanaronan@gmail.com
              </a>{" "}
              if you have any questions or want to connect!
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
