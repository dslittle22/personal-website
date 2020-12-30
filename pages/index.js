import Layout from '../components/layout';
import CenteredGrid from '../components/CenteredGrid';
import Image from 'next/image';
import styled from 'styled-components';
import getAllFiles from '../lib/blogposts';
import Link from 'next/link';
import { projectsList } from '../content';

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
            <small>{`Written on ${post.frontmatter.date}`}</small>
          </BlogPost>
        </div>
      );
    });
  };

  const renderProjects = () => {
    return projectsList.map(project => (
      <StyledProject key={project.title}>
        <Link href={project.href}>
          <a target='_blank'>
            <div className='grid-item'>
              <h3>{project.title}</h3>
              <Image
                src={project.imageURL}
                alt={`Image of ${project.title}`}
                width={140}
                height={180}
                objectFit='cover'
              />
            </div>
          </a>
        </Link>
      </StyledProject>
    ));
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
        <CenteredGrid maxWidth='400px' minWidth='200px'>
          {renderProjects()}
        </CenteredGrid>
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

const StyledProject = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  transition: transform 250ms;
  :hover {
    transform: scale(1.02);
  }

  a {
    background: none;
  }
  .grid-item {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: 0.25fr 1fr;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    padding: 10px;
  }
`;
