import Mdx from "./Mdx";
import { getSourceBySlug } from "@/lib/mdx";

export default function None() {
  return;
}

export async function generateStaticMarkup(slug: string) {
  const ReactDomServer = (await import("react-dom/server")).default;
  const mdxSource = getSourceBySlug(slug);
  const element = <Mdx source={mdxSource} />;
  const staticMarkup = ReactDomServer.renderToString(element);
  return staticMarkup;
}
