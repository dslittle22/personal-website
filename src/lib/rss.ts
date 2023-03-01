import fs from "fs";
import { Feed } from "feed";
import { getAllPosts, getSourceBySlug } from "./mdx";
import { serialize } from "next-mdx-remote/serialize";
import { ReactElement } from "react";

export default async function generateRssFeed() {
  let site_url = "dlittle.me";
  if (process.env.LOCAL === "true") {
    site_url = "localhost:3000";
  }

  const feed = new Feed({
    title: "Blog | Danny Little",
    description: "Blog posts by Danny Little",
    link: site_url,
    id: site_url,
    feedLinks: { rss2: `${site_url}/rss.xml` },
    image: `${site_url}/favicon.ico`,
    updated: new Date(),
    copyright: `${new Date().getFullYear()} Danny Little`,
    language: "en",
  });

  // import { renderToStaticMarkup } from "react-dom/server";
  // const ReactDOMServer = await (await import("react-dom/server")).default;

  const posts = await getAllPosts();
  posts.map(
    async ({ content, frontmatter: { title, date, description, slug } }) => {
      const file = getSourceBySlug(slug);
      const mdxSource = await serialize(file);

      feed.addItem({
        title,
        description,
        date: new Date(date),
        link: `${site_url}/blog/${slug}`,
        // content: ReactDOMServer.renderToStaticMarkup(content as ReactElement),
      });
    }
  );

  fs.writeFileSync("public/rss.xml", feed.rss2());
}
