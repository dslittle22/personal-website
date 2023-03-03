import BlogPostPreview from "@/components/BlogPostPreview";
import { getAllPosts } from "@/lib/mdx";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Blog",
};

async function listBlogPosts() {
  const posts = await getAllPosts();
  if (process.env.LOCAL === "true") {
    return posts.map(({ frontmatter }) => (
      <BlogPostPreview key={frontmatter.slug} frontmatter={frontmatter} />
    ));
  }

  return posts
    .filter((post) => post.frontmatter.draft != true)
    .map(({ frontmatter }) => (
      <BlogPostPreview key={frontmatter.slug} frontmatter={frontmatter} />
    ));
}

type Props = {};

export default async function Blog(props: Props) {
  const blogPosts = await listBlogPosts();

  return (
    <div>
      <div>{blogPosts}</div>
    </div>
  );
}
