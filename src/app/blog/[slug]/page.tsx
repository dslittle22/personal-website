import { Mdx } from "@/components/Mdx";

import {
  getAllPostsFrontmatter,
  getFrontmatterBySlug,
  getSourceBySlug,
} from "@/lib/mdx";

type Props = {
  params: { slug: string };
};
export default async function Post({ params: { slug } }: Props) {
  const frontmatter = await getFrontmatterBySlug(slug);
  const source = getSourceBySlug(slug);

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <Mdx source={source} />
    </>
  );
}

export async function generateStaticParams() {
  const frontsmatter = await getAllPostsFrontmatter();

  return frontsmatter.map((frontmatter) => ({
    slug: frontmatter.slug,
  }));
}
