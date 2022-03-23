import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkFootnotes from 'remark-footnotes'
import mdxPrism from 'mdx-prism';


const root = process.cwd();

export async function getBlogPosts() {
  return fs.readdirSync(path.join(root, 'data', 'blogPosts'));
}

export async function getNextAndLastPosts(date) {
  const allPosts = await getBlogPostsWithFrontmatter()
  let i = 0
  for (i = 0; i < allPosts.length; i++) {
    const post = allPosts[i]
    if (post.date === date) break
  }
  const posts = {
    nextPost: allPosts[i - 1] || null,
    lastPost: allPosts[i + 1] || null
  }
  return posts
}

export async function getFileByFilename(filename) {
  const source = fs.readFileSync(
    path.join(root, 'data', 'blogPosts', filename),
    'utf8'
  );

  const { data, content } = matter(source);
  data.date = new Date(data.date).toISOString().substring(0, 10);
  const mdxSource = await serialize(
    content,
    {
      mdxOptions: {
        remarkPlugins: [remarkFootnotes],
        rehypePlugins: [mdxPrism],
        parseFrontmatter: false,
      }
    }
  )

  return {
    mdxSource,
    frontmatter: {
      slug: filename.replace('.md', ''),
      ...data,
    },
  };
}

export async function getBlogPostsWithFrontmatter() {
  const files = fs.readdirSync(path.join(root, 'data', 'blogPosts'));
  return files
    .map(filename => {
      const source = fs.readFileSync(
        path.join(root, 'data', 'blogPosts', filename),
        'utf-8'
      );
      const { data } = matter(source);
      data.date = new Date(data.date).toISOString().substring(0, 10);
      data.slug = filename.replace('.mdx', '');
      return { ...data };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
