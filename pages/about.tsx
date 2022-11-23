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
              width={800}
              height={400}
              priority={true}
              placeholder="blur"
              objectFit="cover"
            />
            <p>
              I am a fourth-year Software Engineering Student from Carleton
              University living in Ottawa. I&apos;m currently working as a
              DevOps Co-op at{" "}
              <SmartLink href="https://www.kinaxis.com/">Kinaxis</SmartLink>. I
              am also the Vice President of a Society on campus called{" "}
              <SmartLink href="https://www.scesoc.ca/">SCESoc</SmartLink>, where
              I organize various workshops, events and projects to help peers.
            </p>
            <p>
              Not too long ago, I worked at a startup called{" "}
              <SmartLink href="https://www.lisnclips.app/">LISN</SmartLink>.
              Now, I am working on a few side projects. I am working on a
              knowledge-sharing platform for students in SCESoc called,{" "}
              <SmartLink href="https://wiki.scesoc.ca/knowledge-base/">
                Knowledge Base
              </SmartLink>
              . This effort helps encourage students to work on side projects,
              learn new skills, share knowledge and contribute to the community
              through the{" "}
              <SmartLink href="https://makers.scesoc.ca/">
                Makers Club
              </SmartLink>{" "}
              Program. I also love stalking personal websites, so I am also
              creating a platform called{" "}
              <SmartLink href="https://github.com/dharshatharan/web-book">
                WebBook
              </SmartLink>{" "}
              to discover people through their websites.
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
