import { ArticleImage } from "@components/Image/ArticleImage";
import PageLayout from "@components/Layout";
import { SmartLink } from "@components/SmartLink";
import Head from "next/head";
import { ReactElement } from "react";

interface Props {}

export default function WebBook(props: Props): ReactElement {
  return (
    <PageLayout title="WebBook">
      <Head>
        <title>WebBook</title>
      </Head>
      <section className="prose md:prose-xl dark:prose-light mt-10 mb-20">
        <p>
          <ArticleImage
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
            alt="An open graph image of the makers club website"
            width={800}
            height={400}
            priority={true}
            objectFit="cover"
          />
        </p>
        <p>
          Personal Websites are not only a great way go showcase your work, but
          also to share your thoughts and ideas and connect with people in
          similar paths. There is so much wisdom and creativity in personal
          websites.
        </p>
        <p>
          Recently, while I started creating my own personal website, I fell in
          love with discovering people through their personal websites. I learn
          so much from seeing different people and their work. It is truly
          inspiring and exiting. Hence, I am now building a platform called
          WebBook to help people do the same and discover people through
          personal websites.
        </p>
        <p>
          GitHub Repository:{" "}
          <SmartLink href="https://github.com/dharshatharan/web-book">
            https://github.com/dharshatharan/web-book
          </SmartLink>
        </p>
      </section>
    </PageLayout>
  );
}
