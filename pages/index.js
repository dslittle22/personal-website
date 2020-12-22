import Layout from '../components/layout';
import Image from 'next/image';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
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
      <Link href={project.href} key={project.title}>
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
        <StyledProjectsGrid>{renderProjects()}</StyledProjectsGrid>
      </section>
    </Layout>
  );
};

export default Index;

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

const BlogPost = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledProjectsGrid = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  grid-gap: 10px;
  align-items: center;
  justify-content: center;

  .grid-item {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: 0.25fr 1fr;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    transition: transform 250ms;
    padding: 10px;

    :hover {
      transform: scale(1.02);
    }
  }
  a {
    background: none;
  }
`;
