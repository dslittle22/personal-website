import Link from 'next/link';
import Head from 'next/head';
import { getBlogPostsWithFrontmatter } from '@/lib/mdx';
import styled from 'styled-components';

const Blog = ({ files }) => {
  const renderBlogPosts = () => {
    return files.map(frontmatter => {
      return (
        <BlogPost key={frontmatter.date}>
          <div>
            <Link href={'/blog/' + frontmatter.slug}>
              <a>{frontmatter.title + ':'}</a>
            </Link>
            {' ' + frontmatter.description}
          </div>
          <small>{frontmatter.date}</small>
        </BlogPost>
      );
    });
  };

  return (
    <>
      <Head>
        <title>{'Danny Little - Blog'}</title>
      </Head>
      <div>
        Read my blog posts:
        {renderBlogPosts()}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      files: await getBlogPostsWithFrontmatter(),
    },
  };
};

export default Blog;

const BlogPost = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
