import type { Metadata } from "next";
import Mdx from "@/components/Mdx";

import {
  get_all_posts,
  get_post_by_slug,
  get_source_by_slug,
  get_last_modified_by_slug,
} from "@/lib/mdx";
import LastEdited from "@/components/LastEdited";

export default async function Post(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const { slug } = params;

  const { frontmatter } = await get_post_by_slug(slug);
  const source = await get_source_by_slug(slug);
  const lastModified = await get_last_modified_by_slug(slug);

  return (
    <>
      <h1 style={{ fontSize: "clamp(2rem, 2rem + .25vw, 2.5rem)" }}>
        {frontmatter.title}
      </h1>
      <Mdx source={source} />
      <LastEdited written={frontmatter.date} modified={String(lastModified)} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await get_all_posts();
  return posts.map(({ frontmatter }) => ({
    slug: frontmatter.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { slug } = params;

  const {
    frontmatter: { title, description },
  } = await get_post_by_slug(slug);
  return { title, description };
}
