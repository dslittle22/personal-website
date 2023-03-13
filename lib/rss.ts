import fs from "fs";
import { Feed } from "feed";
import { get_all_posts } from "./mdx";
import { generate_static_markup } from "@/components/GetStaticMarkup";
import { relative_url } from "./site_url";

export default async function generate_rss_feed() {
  const site_url = relative_url;
  const feed = new Feed({
    title: "Danny Little | Blog",
    description: "Blog posts by Danny Little",
    link: site_url,
    id: `Danny Little | Blog`,
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

  const posts = await get_all_posts();

  const markup: { [key: string]: string } = {};
  for (let i = 0; i < posts.length; i++) {
    const {
      frontmatter: { slug },
    } = posts[i];
    markup[slug] = await generate_static_markup(slug);
    await generate_static_markup(slug);
  }

  posts
    .filter((post) => post.frontmatter.draft !== true)
    .map(({ frontmatter: { title, date, description, slug } }) => {
      feed.addItem({
        title,
        description,
        date: new Date(date),
        link: `${site_url}/blog/${slug}`,
        // content: markup[slug],
      });
    });

  fs.mkdir("public/rss", () => {});

  fs.writeFileSync("public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("public/rss/feed.json", feed.json1());
}
