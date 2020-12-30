import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export default function getAllFiles(markdown) {
  const postsDirname = path.join('pages', 'blog', 'posts').toString();
  const files = fs.readdirSync(postsDirname);

  const filesWithFrontmatter = files.map(filename => {
    const rawMarkdown = fs
      .readFileSync(path.join(postsDirname, filename))
      .toString();

    const slug = filename.replace('.md', '');
    const frontmatter = matter(rawMarkdown).data;
    frontmatter.date = new Date(frontmatter.date)
      .toISOString()
      .substring(0, 10);
    return { slug, frontmatter };
  });

  return filesWithFrontmatter.sort((a, b) => {
    return a.frontmatter.date > b.frontmatter.date ? -1 : 1;
  });
}
