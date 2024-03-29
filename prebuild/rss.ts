import fs from "fs";
import { Feed } from "feed";
import { get_all_posts, get_source_by_slug } from "../lib/mdx";
import { relative_url } from "../lib/site_url";
import { renderToString } from "react-dom/server";
import { CustomComponents } from "@/components/Mdx";

export async function generate_static_markup(slug: string) {
  const MDXRemote = (await import("next-mdx-remote/rsc")).MDXRemote;
  const sourceWithFrontmatter = await get_source_by_slug(slug);
  const source = sourceWithFrontmatter.replace(/---(.|\n)*---/, "");

  const components: CustomComponents = {
    a: "a",
    SmartLink: "em",
    SizedImage: "img",
    Popout: "div",
  };

  const element = await MDXRemote({
    source,
    // @ts-expect-error I'm passing dom element names instead of components
    components,
  });

  const static_markup = renderToString(element);

  return static_markup;
}

export default async function generate_rss_feed() {
  const site_url = relative_url;

  const feed = new Feed({
    title: process.env.LOCAL
      ? "(Localhost) Danny Little | Blog"
      : "Danny Little | Blog",
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
        content: markup[slug],
      });
    });

  fs.mkdir("public/rss", () => {});

  fs.writeFileSync("public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("public/rss/feed.json", feed.json1());
}

generate_rss_feed();
