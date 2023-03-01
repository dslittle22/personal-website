import Mdx from "./Mdx";
import { getPostBySlug, getSourceBySlug } from "@/lib/mdx";

export default function None() {
  return;
}

export async function generateStaticMarkup(slug: string) {
  const ReactDomServer = (await import("react-dom/server")).default;

  const mdxSource = getSourceBySlug(slug);
  let element;
  element = <Mdx source={mdxSource} />;

  const {
    frontmatter: { description },
  } = await getPostBySlug(slug);
  element = <a href={`/blog/${slug}`}>{description}</a>;
  const staticMarkup = ReactDomServer.renderToString(element);
  return staticMarkup;
}
