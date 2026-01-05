import fs from "fs/promises";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import isLocal from "./local";

export type Frontmatter = {
  title: string;
  date: string;
  author: string;
  description: string;
  slug: string;
  draft?: boolean;
};

const blog_posts_path = "data/blog_posts";

export async function get_source_by_slug(slug: string) {
  return await fs.readFile(`${blog_posts_path}/${slug}.mdx`, "utf-8");
}

export async function get_last_modified_by_slug(slug: string) {
  const stat = await fs.stat(`${blog_posts_path}/${slug}.mdx`);
  return stat.mtimeMs;
}

export async function get_post_by_slug(slug: string) {
  let mdxSource: string = await fs.readFile(
    `${blog_posts_path}/${slug}.mdx`,
    "utf-8"
  );

  const { frontmatter } = getFrontmatter<Frontmatter>(mdxSource);

  if (frontmatter?.draft && isLocal()) {
    frontmatter.title += " [draft]";
  }

  return {
    source: mdxSource,
    frontmatter: {
      ...frontmatter,
      slug,
    } as Frontmatter,
  };
}

export async function get_all_posts() {
  const posts: {
    frontmatter: Frontmatter;
  }[] = [];
  const blogFilePaths = await fs.readdir(blog_posts_path);
  for (const path of blogFilePaths) {
    const { frontmatter } = await get_post_by_slug(path_to_slug(path));

    posts.push({ frontmatter });
  }
  return posts.sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1
  );
}

export function path_to_slug(path: string) {
  const parts = path.split("/");
  return parts[parts.length - 1].replace(".mdx", "");
}
