import hydrate from 'next-mdx-remote/hydrate';
import { getBlogPosts, getFileByFilename } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';
import Head from 'next/head';

export default function Blog({ mdxSource, frontmatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta title='description' content={frontmatter.description} />
      </Head>
      <h1>{frontmatter.title}</h1>
      <small>
        Written by {frontmatter.author} on {frontmatter.date}
      </small>
      {content}
      {/* <PostButtons nextPost={nextPost} lastPost={lastPost} /> */}
    </>
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
  return {
    props: { frontmatter: post.frontmatter, mdxSource: post.mdxSource },
  };
}
