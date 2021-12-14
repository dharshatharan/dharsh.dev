import Head from "next/head";
import { DefaultSeo } from "next-seo";

import { baseUrl, defaultSEO } from "@config/seo";

export function SEO() {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <link rel="icon" href="/static/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/static/favicon.svg"
          type="image/svg+xml"
          sizes="any"
        />
        <link rel="mask-icon" href="/static/meta/mask-icon.svg" />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/static/meta/manifest.webmanifest" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS feed"
          href={`${baseUrl}/writing/rss`}
        />
        <meta
          name="theme-color"
          content="#fbfbfb"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#151515"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
    </>
  );
}
