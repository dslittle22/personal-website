import fs from "fs/promises";

export type Frontmatter = {
  title: string;
  date: Date;
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
  return new Date(stat.mtimeMs);
}

export async function get_post_by_slug(slug: string) {
  const { compileMDX } = await import("next-mdx-remote/rsc");

  let mdxSource: string = await fs.readFile(
    `${blog_posts_path}/${slug}.mdx`,
    "utf-8"
  );
  let { frontmatter, content } = await compileMDX({
    source: mdxSource,
    options: { parseFrontmatter: true },
  });
  if (frontmatter?.draft && process.env.LOCAL === "true") {
    frontmatter.title += " [draft]";
  }
  // const date = frontmatter.date as Date;
  // date.setDate(date.getDate() + 1);
  // Frontmatter date gets moved back a day because of time zones

  return {
    content,
    frontmatter: {
      ...frontmatter,
      slug,
    } as Frontmatter,
  };
}

export async function get_all_posts() {
  const posts: {
    content: JSX.Element;
    frontmatter: Frontmatter;
  }[] = [];
  const blogFilePaths = await fs.readdir(blog_posts_path);
  for (const path of blogFilePaths) {
    const { frontmatter, content } = await get_post_by_slug(path_to_slug(path));

    posts.push({ content, frontmatter });
  }
  return posts.sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1
  );
}

export function path_to_slug(path: string) {
  const parts = path.split("/");
  return parts[parts.length - 1].replace(".mdx", "");
}
