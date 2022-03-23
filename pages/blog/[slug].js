import { getBlogPosts, getFileByFilename, getNextAndLastPosts } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';
import PostButtons from '@/components/PostButtons';
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head';
import React from 'react';
import next from 'next';

export default function Blog({ mdxSource, frontmatter, nextPost, lastPost }) {

  return (
    <React.Fragment>
      <Head>
        <title>{frontmatter.title}</title>
        <meta title='description' content={frontmatter.description} />
      </Head>
      <h1>{frontmatter.title}</h1>
      <small>
        Written by {frontmatter.author} on {frontmatter.date}
      </small>
      <MDXRemote {...mdxSource} components={MDXComponents} />
      <PostButtons nextPost={nextPost} lastPost={lastPost} />
    </React.Fragment>
  );
}

export async function getStaticPaths() {
  const posts = await getBlogPosts();

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getFileByFilename(slug + '.mdx');
  const {nextPost, lastPost} = await getNextAndLastPosts(post.frontmatter.date)
  return {
    props: { frontmatter: post.frontmatter, mdxSource: post.mdxSource, nextPost: nextPost || null, lastPost: lastPost || null},
  };
}
