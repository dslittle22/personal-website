import type { Metadata } from "next";
import Mdx from "@/components/Mdx";
import generate_rss_feed from "@/lib/rss";

import {
  get_all_posts,
  get_post_by_slug,
  get_source_by_slug,
  get_last_modified_by_slug,
} from "@/lib/mdx";
import { generate_sitemap } from "@/lib/sitemap";
import LastEdited from "@/components/LastEdited";

type Props = {
  params: { slug: string };
};
export default async function Post({ params: { slug } }: Props) {
  const { frontmatter } = await get_post_by_slug(slug);
  const source = get_source_by_slug(slug);
  const lastModified = await get_last_modified_by_slug(slug);

  return (
    <>
      <h1 style={{ fontSize: "clamp(2rem, 1.5rem + 5vw, 4rem)" }}>
        {frontmatter.title}
      </h1>
      <Mdx source={source} />
      <LastEdited lastModified={lastModified} />
    </>
  );
}

export async function generateStaticParams() {
  await generate_sitemap();
  await generate_rss_feed();

  const posts = await get_all_posts();
  return posts.map(({ frontmatter }) => ({
    slug: frontmatter.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const {
    frontmatter: { title, description },
  } = await get_post_by_slug(slug);
  return { title, description };
}
