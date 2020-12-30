import Link from 'next/link';
import matter from 'gray-matter';
import Layout from '../../components/layout';
import styled from 'styled-components';
import getAllFiles from '../../lib/blogposts';

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
  return {
    props: {
      filesWithFrontmatter: getAllFiles(),
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
