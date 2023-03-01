import type { Metadata } from "next";
import Mdx from "@/components/Mdx";
import generateRssFeed from "@/lib/rss";

import { getAllPosts, getPostBySlug, getSourceBySlug } from "@/lib/mdx";

type Props = {
  params: { slug: string };
};
export default async function Post({ params: { slug } }: Props) {
  const { frontmatter } = await getPostBySlug(slug);
  const source = getSourceBySlug(slug);

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <Mdx source={source} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  await generateRssFeed();

  return posts.map(({ frontmatter }) => ({
    slug: frontmatter.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const {
    frontmatter: { title, description },
  } = await getPostBySlug(slug);
  return { title, description };
}
