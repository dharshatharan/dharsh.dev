import Document, { Html, Head, Main, NextScript } from 'next/document';

export const siteTitle = 'Dharsh'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/iAWriterQuattroS-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/iAWriterQuattroS-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/iAWriterQuattroS-Italic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/iAWriterQuattroS-BoldItalic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/icons/favicon.png" />
          <meta
            name="description"
            content="I share things that I consider 'cool' on here"
          />
          <meta
            property="og:image"
            content="/images/open-graph-image.png"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content={siteTitle} />
          <meta name="twitter:site" content="@dharshatharan" />
          <meta name="twitter:creator" content="@dharshatharan" />
        </Head>
        <body className="bg-off-white dark:bg-smooth-black text-off-white dark:text-smooth-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;