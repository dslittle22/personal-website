import SmartLink from "@/components/SmartLink";
import BlogPostPreview from "@/components/BlogPostPreview";
import { getAllPostsFrontmatter } from "@/lib/mdx";
import React from "react";

async function listBlogPosts() {
  const frontsmatter = await getAllPostsFrontmatter();
  return frontsmatter.map((frontmatter) => (
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
