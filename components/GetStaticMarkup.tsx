import Mdx from "./Mdx";
import { getSourceBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticMarkup(slug: string) {
  const ReactDomServer = (await import("react-dom/server")).default;

  const mdxSource = getSourceBySlug(slug);
  // const element = await (<Mdx source={mdxSource} />);
  const element = await (<MDXRemote source={`#hi`} compiledSource="" />);
  const staticMarkup = ReactDomServer.renderToStaticMarkup(element);
  return staticMarkup;
}
