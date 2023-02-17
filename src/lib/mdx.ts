import { readFileSync } from "fs";
import { readdirSync } from "fs";
const fs = require("fs").promises;

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
  return readFileSync(`${blogPostsPath}/${slug}.mdx`);
}

export async function getFrontmatterBySlug(slug: string) {
  let mdxSource: string = await fs.readFile(`${blogPostsPath}/${slug}.mdx`);
  let { frontmatter } = await compileMDX({
    source: mdxSource,
    compiledSource: "",
    options: { parseFrontmatter: true },
  });

  return {
    ...frontmatter,
    slug,
    // @ts-ignore
    date: frontmatter.date.toISOString().substring(0, 10),
  } as Frontmatter;
}

export async function getAllPostsFrontmatter() {
  const frontsmatter: Frontmatter[] = [];
  const blogFilePaths = readdirSync(blogPostsPath);
  for (const path of blogFilePaths) {
    const frontmatter = await getFrontmatterBySlug(pathToSlug(path));
    if (frontmatter.draft) {
      if (process.env.LOCAL === "true") {
        frontsmatter.push(frontmatter);
      }
    } else {
      frontsmatter.push(frontmatter);
    }
  }
  return frontsmatter.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function slugToPath(slug: string) {
  return slug + ".mdx";
}

export function pathToSlug(path: string) {
  const parts = path.split("/");
  return parts[parts.length - 1].replace(".mdx", "");
}
