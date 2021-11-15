import { ArticleImage } from "@components/Image/ArticleImage";
import PageLayout from "@components/Layout";
import { SmartLink } from "@components/SmartLink";

interface Props {}

export default function About(props: Props) {
  return (
    <PageLayout>
      <section className="prose lg:prose-xl dark:prose-light mt-10 mb-20">
        <ArticleImage
          src="/images/cover-picture.jpg"
          alt="A picture of me in front of a lake"
          width={800}
          height={400}
          priority={true}
          objectFit="cover"
        />
        <p>
          I am a third year Software Engineering Student from Carleton
          University living in Ottawa. I am currently doing my co-op at{" "}
          <SmartLink href="https://www.ciena.com/">Ciena</SmartLink> with the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ciena.com/products/6500"
          >
            6500 DevOps Team
          </a>
          . And I am also the Vice President of a Society on campus called{" "}
          <SmartLink href="https://www.scesoc.ca/">SCESoc</SmartLink>.
        </p>
        <p>
          Not too long ago I worked at a startup called{" "}
          <SmartLink href="https://www.lisnclips.app/">LISN</SmartLink>.
          Currently working on a few side projects. I am working on a knowledge
          sharing platform for students in SCESoc called{" "}
          <SmartLink href="https://github.com/SCESoc/torch">Torch</SmartLink>.
          Torch is a web application that sufaces open source knowledge created
          by students in SCESoc in the our{" "}
          <SmartLink href="https://github.com/SCESoc/knowledge-base">
            Knowldege Base repository
          </SmartLink>
          . These are efforts taken to help encourage students to work on side
          projects, learn new skills, share knowledge and contribute to the
          community through the{" "}
          <SmartLink href="https://makers.scesoc.ca/">Makers Club</SmartLink>{" "}
          Program. I also love stalking personal websites, so I am also creating
          a platform called{" "}
          <SmartLink href="https://github.com/dharshatharan/web-book">
            WebBook
          </SmartLink>{" "}
          to discover people through their personal websites.
        </p>
        <p>
          On this site, I share things I am working on and my thoughts on
          different things that make this world such an interesting place. I
          find philosophy very interesting, and love exploring new ideas and
          concepts. I am always down to meet new people, so feel free to reach
          out to me at <a href="mailto:me@dharsh.dev">me@dharsh.dev</a> if you
          have any questions or want to connect!
        </p>
      </section>
    </PageLayout>
  );
}
