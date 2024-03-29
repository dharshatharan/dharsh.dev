import { ArticleImage } from "@components/Image/ArticleImage";
import PageLayout from "@components/Layout";
import { SmartLink } from "@components/SmartLink";
import { ReactElement } from "react";
import MakerImage from "@images/makers-club-open-graph.png";
import { NextSeo } from "next-seo";

interface Props {}

export default function MakersClub(props: Props): ReactElement {
  return (
    <PageLayout title="Makers Club">
      <NextSeo
        title="Makers Club"
        description="A Club for Makers at Caleton University"
      />
      <div className="flex justify-center">
        <section className="prose md:prose-lg dark:prose-light max-w-4xl mt-10 mb-20">
          <h1>Makers Club</h1>
          <ArticleImage
            src={MakerImage}
            alt="An open graph image of the makers club website"
            priority={true}
            placeholder="blur"
          />
          <p>
            The Makers Club is a club within{" "}
            <SmartLink href="https://www.scesoc.ca/">SCESoc</SmartLink>, the
            Systems and Computer Engineering Society. It is an internal society
            within SCESoc that comes together to work on side projects. I
            founded this club to encourage students to work on personal projects
            and learn new skills.
          </p>
          <p>
            Visit{" "}
            <SmartLink href="https://makers.scesoc.ca/">
              makers.scesoc.ca
            </SmartLink>{" "}
            to learn more about it.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
