import BlogPostPreview from "@/components/BlogPostPreview";
import { get_all_posts } from "@/lib/mdx";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Blog",
};

async function list_blog_posts() {
  const posts = await get_all_posts();
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
  const blog_posts = await list_blog_posts();

  return (
    <div>
      <div>{blog_posts}</div>
    </div>
  );
}
