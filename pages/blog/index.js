import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../../components/layout';
import styled from 'styled-components';

const Index = ({ filesWithFrontmatter }) => {
  const renderBlogPosts = () => {
    return filesWithFrontmatter.map(post => {
      return (
        <div key={post.frontmatter.date}>
          <BlogPost>
            <div>
              <Link href={'/blog/' + post.slug}>
                <a>{post.frontmatter.title + ':'}</a>
              </Link>
              {' ' + post.frontmatter.description}
            </div>
            <small>{post.frontmatter.date}</small>
          </BlogPost>
        </div>
      );
    });
  };

  return (
    <Layout page='Blog'>
      <div>
        Read my blog posts:
        {renderBlogPosts()}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
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

  return {
    props: {
      filesWithFrontmatter: filesWithFrontmatter.sort((a, b) => {
        return a.frontmatter.date > b.frontmatter.date ? -1 : 1;
      }),
    },
  };
};

export default Index;

const BlogPost = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
