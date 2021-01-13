import ProjectsGrid from '../components/ProjectsGrid';
import styled from 'styled-components';
import Link from 'next/link';
import { getBlogPostsWithFrontmatter } from '@/lib/mdx';
import Head from 'next/head';
const Index = ({ files }) => {
  const renderBlogPosts = () => {
    return files.map(post => {
      return (
        <div key={`${post.date}-${post.date}`}>
          <BlogPost>
            <div>
              <Link href={'/blog/' + post.slug}>
                <a>{post.title + ':'}</a>
              </Link>
              {' ' + post.description}
            </div>
            <small>{`Written on ${post.date}`}</small>
          </BlogPost>
        </div>
      );
    });
  };

  return (
    <>
      <Head>
        <title>{'Danny Little'}</title>
      </Head>
      <section>
        <p>
          Hi! I'm Danny Little. I'm a full stack web developer and a musician.
          I'm also a Junior at Bowdoin College, where I'm double majoring in
          computer science and music performance.
        </p>
        <p>
          If you'd like to get in touch with me, my email is daniel.little715
          (at) gmail.com. You can also find my various social media profiles at
          bottom of the page.
        </p>
      </section>
      <h3>
        Read my{' '}
        <Link href='/blog'>
          <a>blog:</a>
        </Link>{' '}
      </h3>
      <section>{renderBlogPosts()}</section>
      <h3>
        Look at my{' '}
        <Link href='/projects'>
          <a>projects:</a>
        </Link>
      </h3>
      <ProjectsGrid />
    </>
    //</Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: {
      files: await getBlogPostsWithFrontmatter(),
    },
  };
};

const BlogPost = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
