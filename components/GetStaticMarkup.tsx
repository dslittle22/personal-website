import Mdx from "./Mdx";
import { relative_url } from "@/lib/site_url";
import { get_post_by_slug, get_source_by_slug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote";

export default function None() {
  return;
}

export async function generate_static_markup(slug: string) {
  const ReactDomServer = (await import("react-dom/server")).default;

  const mdxSource = get_source_by_slug(slug);
  let element;
  // element = <Mdx source={mdxSource} />;

  element = (
    <a
      href={`${relative_url}/blog/${slug}`}
    >{`${relative_url}/blog/${slug}`}</a>
  );

  const static_markup = ReactDomServer.renderToString(element);
  return static_markup;
}
