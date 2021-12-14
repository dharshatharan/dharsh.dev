import { DefaultSeoProps } from "next-seo";

export const baseUrl =
  process.env.NODE_ENV === "production" ? "https://dharsh.dev" : "";
export const baseEmail = "me@dharsh.dev";

export const defaultSEO: DefaultSeoProps = {
  title: "Hi! I'm Dharsh",
  description: "Developer, Writer, Student",
  openGraph: {
    type: "website",
    locale: "es_CA",
    url: baseUrl,
    site_name: "Hi! I'm Dharsh",
    images: [
      {
        url: `${baseUrl}/images/open-graph-image.png`,
        alt: "Hi! I'm Dharsh",
      },
    ],
  },
  twitter: {
    handle: "@dharshatharan",
    site: "@dharshatharan",
    cardType: "summary_large_image",
  },
};

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function extendSEO(options: SEOProps) {
  // const images = options.image
  // 	? [{ url: `${baseUrl}/static/${options.image}` }]
  // 	: defaultSEO.openGraph!.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      // images,
      url: `${baseUrl}/${options.url}`,
    },
  };
}
