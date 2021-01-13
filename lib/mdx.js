import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from '@/components/MDXComponents';

const root = process.cwd();

export async function getBlogPosts() {
  return fs.readdirSync(path.join(root, 'data', 'blogPosts'));
}

export async function getFileByFilename(filename) {
  const source = fs.readFileSync(
    path.join(root, 'data', 'blogPosts', filename),
    'utf8'
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require('remark-footnotes')],
      rehypePlugins: [mdxPrism],
    },
  });

  data.date = new Date(data.date).toISOString().substring(0, 10);
  return {
    mdxSource: mdxSource,
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
