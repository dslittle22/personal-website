import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Layout from '../../components/layout';
import markdownToHTML from '../../lib/markdown';
import styled from 'styled-components';
import getAllFiles from '../../lib/blogposts';
import PostButtons from '../../components/PostButtons';

const Post = ({ htmlString, frontmatter, nextPost, lastPost }) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta title='description' content={frontmatter.description} />
      </Head>
      <Layout page={frontmatter.title}>
        <BlogStyle>
          <section>
            <h1>{frontmatter.title}</h1>
            <small>
              Written by {frontmatter.author} on {frontmatter.date}
            </small>
          </section>
          <section>
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
          </section>
          <PostButtons nextPost={nextPost} lastPost={lastPost} />
        </BlogStyle>
      </Layout>
    </>
  );
};

export default Post;

const BlogStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  img {
    padding: 0.5rem 0;
    max-width: 70%;
    min-width: 40%;
    margin: auto;
    display: block;
  }
`;

export const getStaticPaths = async () => {
  const postsDirname = path.join('pages', 'blog', 'posts').toString();
  const files = fs.readdirSync(postsDirname);
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const postsDirname = path.join('pages', 'blog', 'posts').toString();
  const rawMarkdown = fs
    .readFileSync(path.join(postsDirname, slug + '.md'))
    .toString();

  const parsedMarkdown = matter(rawMarkdown);
  const frontmatter = parsedMarkdown.data;
  const htmlString = await markdownToHTML(parsedMarkdown.content);
  frontmatter.date = new Date(frontmatter.date).toISOString().substring(0, 10);

  const files = getAllFiles();
  let nextPost;
  let lastPost;
  files.forEach((file, idx) => {
    if (file.slug === slug) {
      nextPost = idx > 0 ? files[idx - 1] : null;
      lastPost = idx < files.length - 1 ? files[idx + 1] : null;
    }
  });
  return {
    props: {
      htmlString,
      frontmatter,
      nextPost,
      lastPost,
    },
  };
};
