import Mdx from "./Mdx";
import { relative_url } from "@/lib/siteUrl";
import { getPostBySlug, getSourceBySlug } from "@/lib/mdx";

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
  const element = <a href={`${relative_url}/blog/${slug}`}>{description}</a>;

  const staticMarkup = ReactDomServer.renderToString(element);
  return staticMarkup;
}
