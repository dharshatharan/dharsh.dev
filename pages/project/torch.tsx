import { ArticleImage } from "@components/Image/ArticleImage";
import PageLayout from "@components/Layout";
import { SmartLink } from "@components/SmartLink";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";

interface Props {}

export default function Torch(props: Props): ReactElement {
  return (
    <PageLayout title="Torch">
      <NextSeo title="Torch" description="A Platform to Share Knowledge" />
      <div className="flex justify-center">
        <section className="prose md:prose-lg dark:prose-light max-w-4xl mt-10 mb-20">
          <h1>Torch</h1>
          <ArticleImage
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
            alt="An open graph image of the makers club website"
            width={800}
            height={400}
            priority={true}
            objectFit="cover"
          />
          <p>
            As an effort to help students in{" "}
            <SmartLink href="https://www.scesoc.ca/">SCESoc</SmartLink> to work
            on personal projects through the Makers Club, SCESoc is also hosting
            a project that students can contribute to. This project is called{" "}
            <SmartLink href="https://github.com/SCESoc/torch">Torch</SmartLink>.
            It is a platform for students to share knowledge among peers.
          </p>
          <p>
            Torch is a web application that surfaces knowledge stored in the
            SCESoc{" "}
            <SmartLink href="https://github.com/SCESoc/knowledge-base">
              Knowledge Base Repository
            </SmartLink>
            . The web application is kept in a seperate repository from the
            content of the Knowledge Base to prevent having to rebuild the
            applciation every time a new page is added to the platform. GitHub
            is used as the CMS for this project and the added benefit of doing
            is that contributions to this open source project is visible to the
            entire world. It also encourages students to contribute to an open
            source project and learn by teaching people through written content.
          </p>
          For more information about the project, visit the following links:
          <ul>
            <li>
              Torch Repository -{" "}
              <SmartLink href="https://github.com/SCESoc/torch">
                https://github.com/SCESoc/torch
              </SmartLink>
            </li>
            <li>
              Knowledge Base Repository -{" "}
              <SmartLink href="https://github.com/SCESoc/knowledge-base">
                https://github.com/SCESoc/knowledge-base
              </SmartLink>
            </li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
