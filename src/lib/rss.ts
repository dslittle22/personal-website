import fs from "fs";
import { Feed } from "feed";
import { getAllPosts } from "./mdx";
import { generateStaticMarkup } from "@/components/GetStaticMarkup";

async function asyncTest() {
  return Promise.resolve("hello world");
}

export default async function generateRssFeed() {
  let site_url = "dlittle.me";
  if (process.env.LOCAL === "true") {
    site_url = "localhost:3000";
  }

  const feed = new Feed({
    title: "Danny Little | Blog",
    description: "Blog posts by Danny Little",
    link: site_url,
    id: site_url,
    feedLinks: {
      rss2: `${site_url}/rss/feed.xml`,
      json: `${site_url}/rss/feed.json`,
      atom: `${site_url}/rss/atom.xml`,
    },
    image: `${site_url}/favicon.ico`,
    updated: new Date(),
    copyright: `${new Date().getFullYear()} Danny Little`,
    language: "en",
  });

  const posts = await getAllPosts();

  const markup: { [key: string]: string } = {};
  for (let i = 0; i < posts.length; i++) {
    const {
      frontmatter: { slug },
    } = posts[i];
    markup[slug] = await generateStaticMarkup(slug);
    // markup[slug] = await asyncTest();
    await generateStaticMarkup(slug);
  }

  posts.map(({ frontmatter: { title, date, description, slug } }) => {
    feed.addItem({
      title,
      description,
      date: new Date(date),
      link: `${site_url}/blog/${slug}`,
      content: markup[slug],
    });
  });

  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}
