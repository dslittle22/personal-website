import Layout from '../components/layout';
import ProjectsGrid from '../components/ProjectsGrid';
import styled from 'styled-components';
import getAllFiles from '../lib/blogposts';
import Link from 'next/link';

const Index = ({ filesWithFrontmatter }) => {
  const renderBlogPosts = () => {
    return filesWithFrontmatter.map(post => {
      return (
        <div key={`${post.frontmatter.date}-${post.frontmatter.date}`}>
          <BlogPost>
            <div>
              <Link href={'/blog/' + post.slug}>
                <a>{post.frontmatter.title + ':'}</a>
              </Link>
              {' ' + post.frontmatter.description}
            </div>
            <small>{`Written on ${post.frontmatter.date}`}</small>
          </BlogPost>
        </div>
      );
    });
  };

  return (
    <Layout page='home'>
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
      <section>
        <h3>
          Read my{' '}
          <Link href='/blog'>
            <a>blog:</a>
          </Link>{' '}
        </h3>
        {renderBlogPosts()}
      </section>
      <section>
        <h3>
          Look at my{' '}
          <Link href='/projects'>
            <a>projects:</a>
          </Link>
        </h3>
        <ProjectsGrid />
      </section>
    </Layout>
  );
};

export default Index;

export const getStaticProps = () => {
  return {
    props: {
      filesWithFrontmatter: getAllFiles(),
    },
  };
};

const BlogPost = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
