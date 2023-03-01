import fs from "fs";
import { Feed } from "feed";
import { getAllPosts, getSourceBySlug } from "./mdx";
import { serialize } from "next-mdx-remote/serialize";

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

  const posts = await getAllPosts();

  posts.map(
    async ({ content, frontmatter: { title, date, description, slug } }) => {
      // const file = getSourceBySlug(slug);
      // const mdxSource = await serialize(file);
      // const ReactDOMServer = (await import("react-dom/server")).default;
      // const staticMarkup = ReactDOMServer.renderToStaticMarkup(content);

      feed.addItem({
        title,
        description,
        date: new Date(date),
        link: `${site_url}/blog/${slug}`,
        // content: staticMarkup,
      });
    }
  );

  fs.writeFileSync("public/rss.xml", feed.rss2());
}
