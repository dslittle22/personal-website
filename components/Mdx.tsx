import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Compatible } from "vfile";
import SmartLink from "./SmartLink";
import SizedImage from "./SizedImage";
import Popout from "./Popout";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

const custom_components = {
  a: SmartLink,
  SizedImage,
  Popout,
};

const options = {
  keepBackground: "false",
  theme: { dark: "github-dark", light: "github-light" },
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

export default function Mdx(props: {
  components?: MDXComponents;
  source: Compatible;
}) {
  return (
    // @ts-ignore
    <MDXRemote
      {...props}
      components={{
        ...(custom_components as MDXComponents),
        ...(props.components || {}),
      }}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [[rehypePrettyCode, options]],
        },
      }}
    />
  );
}
