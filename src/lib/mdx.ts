const fs = require("fs").promises;
import { readFileSync } from "fs";
import { readdirSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

export type Frontmatter = {
  title: string;
  date: string;
  author: string;
  description: string;
  slug: string;
  draft?: boolean;
};

const blogPostsPath = "src/data/blogposts";

export function getSourceBySlug(slug: string) {
  return readFileSync(`${blogPostsPath}/${slug}.mdx`, "utf-8");
}

export async function getPostBySlug(slug: string) {
  let mdxSource: string = await fs.readFile(`${blogPostsPath}/${slug}.mdx`);
  let { frontmatter, content } = await compileMDX({
    source: mdxSource,
    compiledSource: "",
    options: { parseFrontmatter: true },
  });
  if (frontmatter?.draft && process.env.LOCAL === "true") {
    frontmatter.title += " [draft]";
  }

  return {
    content,
    frontmatter: {
      ...frontmatter,
      slug,
      // @ts-ignore
      date: frontmatter.date.toISOString().substring(0, 10),
    } as Frontmatter,
  };
}

export async function getAllPosts() {
  const posts: {
    content: JSX.Element;
    frontmatter: Frontmatter;
  }[] = [];
  const blogFilePaths = readdirSync(blogPostsPath);
  for (const path of blogFilePaths) {
    const { frontmatter, content } = await getPostBySlug(pathToSlug(path));

    posts.push({ content, frontmatter });
  }
  return posts.sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1
  );
}

export function slugToPath(slug: string) {
  return slug + ".mdx";
}

export function pathToSlug(path: string) {
  const parts = path.split("/");
  return parts[parts.length - 1].replace(".mdx", "");
}
