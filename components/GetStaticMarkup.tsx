import Mdx from "./Mdx";
import { getSourceBySlug } from "@/lib/mdx";
import CoolComponent from "./CoolComponent";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function None() {
  return;
}

export async function generateStaticMarkup(slug: string) {
  const ReactDomServer = (await import("react-dom/server")).default;

  let element: JSX.Element;
  // element = <CoolComponent>hello</CoolComponent>;
  const mdxSource = getSourceBySlug(slug);
  // element = await (<Mdx source={mdxSource} />);
  element = await (<MDXRemote source={mdxSource} compiledSource="" />);

  console.log(element);
  const staticMarkup = ReactDomServer.renderToStaticMarkup(element);
  console.log(staticMarkup);

  return staticMarkup;
}
