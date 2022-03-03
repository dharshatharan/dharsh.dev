import fs from "fs";
import { Feed } from "feed";
import { getSortedBlogsData } from "@lib/notion/blogs";

export async function generateRssFeed(): Promise<void> {
  const posts = await getSortedBlogsData();
  const siteURL = "https://www.dharsh.dev";
  const date = new Date();
  const author = {
    name: "Dharshatharan Jayathtaran Aronan",
    email: "djayatharanaronan@gmail.com",
    link: siteURL,
  };

  const feed = new Feed({
    title: "Dharshatharan Jayatharan Aronan's Blog",
    description: "Developer, Writer, Student",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/icons/logo.svg`,
    favicon: `${siteURL}/icons/favicons/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Dharshatharan Jayatharan Aronan`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.id}`;

    feed.addItem({
      title: post.title,
      id: post.id,
      link: url,
      // description: post.summary,
      // content: post.summary,
      author: [author],
      contributor: [author],
      date: new Date(post.published),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}
