import Document, { Html, Head, Main, NextScript } from "next/document";

export const siteTitle = "Dharsh";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/fkt1fzm.css"
          ></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          {process.env.NODE_ENV === "production" && (
            <link
              rel="dns-prefetch"
              href={process.env.NEXT_PUBLIC_FATHOM_CUSTOM_DOMAIN}
            ></link>
          )}
          {process.env.NODE_ENV === "production" && (
            <link
              rel="preconnect"
              href={process.env.NEXT_PUBLIC_FATHOM_CUSTOM_DOMAIN}
              crossOrigin=""
            />
          )}
          <link
            rel="dns-prefetch"
            href={process.env.NEXT_PUBLIC_SENTRY_DOMAIN}
          ></link>
          <link
            rel="preconnect"
            href={process.env.NEXT_PUBLIC_SENTRY_DOMAIN}
            crossOrigin=""
          />
          <meta name="description" content="Developer, Writer, Student" />
          <meta property="og:image" content="/images/open-graph-image.png" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content={siteTitle} />
          <meta name="twitter:site" content="@dharshatharan" />
          <meta name="twitter:creator" content="@dharshatharan" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/icons/favicons/site.webmanifest" />
          <script
            async
            defer
            data-domains="www.dharsh.dev"
            data-website-id="f26a1dbe-84ce-430a-8520-712367f92cf9"
            src="https://analytics.dharsh.dev/umami.js"
          ></script>
        </Head>
        <body className="bg-off-white dark:bg-[#101010] text-smooth-black dark:text-off-white transition duration-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
