import Mdx from "./Mdx";
import { getPostBySlug, getSourceBySlug } from "@/lib/mdx";
import { prod_url } from "@/lib/siteUrl";

export default function None() {
  return;
}

export async function generateStaticMarkup(slug: string) {
  const ReactDomServer = (await import("react-dom/server")).default;

  // const mdxSource = getSourceBySlug(slug);
  //const element = <Mdx source={mdxSource} />;

  const {
    frontmatter: { description },
  } = await getPostBySlug(slug);
  const element = <a href={`${prod_url}/${slug}`}>{description}</a>;
  const staticMarkup = ReactDomServer.renderToString(element);
  return staticMarkup;
}
