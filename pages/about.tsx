import { ArticleImage } from "@components/Image/ArticleImage";
import PageLayout from "@components/Layout";
import { SmartLink } from "@components/SmartLink";
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
              I am a recent Software Engineering Graduate from Carleton
              University living in Ottawa, Canada. I currently work at{" "}
              <SmartLink href="https://component.fi/">Component.fi</SmartLink>{" "}
              as a Software Engineer. Component is a DeFi startup that aims to
              create asset management solutions for fund managers in VCs and
              Headge Funds. I lead infrastructure and DevOps efforts at
              Component aside from developing fullstack features. Previously
              I&apos;ve worked with{" "}
              <SmartLink href="https://www.moveworks.com/">Moveworks</SmartLink>
              , <SmartLink href="https://www.kinaxis.com/">Kinaxis</SmartLink>{" "}
              and <SmartLink href="https://www.ciena.com/">Ciena</SmartLink> in
              their DevOps teams.
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
