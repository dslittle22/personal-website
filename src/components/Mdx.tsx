import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { Compatible } from "vfile";
import SmartLink from "./SmartLink";
import SizedImage from "./SizedImage";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const customComponents = {
  a: SmartLink,
  SizedImage,
};

const options = {
  keepBackground: "false",
  // theme: { dark: "github-dark", light: "github-light" },
  theme: "github-dark",
  // @ts-expect-error
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  // @ts-expect-error
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  // @ts-expect-error
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

export function Mdx(props: { components?: MDXComponents; source: Compatible }) {
  return (
    // @ts-ignore
    <MDXRemote
      compiledSource=""
      {...props}
      components={{
        ...(customComponents as MDXComponents),
        ...(props.components || {}),
      }}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [rehypePrettyCode, options],
            rehypeSlug,
            rehypeAutolinkHeadings,
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ["anchor"],
                },
              },
            ],
          ],
        },
      }}
    />
  );
}
