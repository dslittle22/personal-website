import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import SmartLink from "./SmartLink";
import Popout from "./Popout";
import Counter from "./Counter";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { getHighlighter } from "shiki";

import type { JSX } from "react";

type MDXComponentType = string | ((args: any) => JSX.Element);

export const customMDXComponents = {
  a: SmartLink,
  SmartLink,
  Image,
  Popout,
  Counter,
};

export type CustomMDXComponents = {
  [key in keyof typeof customMDXComponents]: MDXComponentType;
};

export type MDXProvidedComponents = CustomMDXComponents;

const prettycodeOptions = {
  keepBackground: "false",
  theme: { dark: "github-dark", light: "github-light" },
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  getHighlighter: async (options: any) => {
    const highlighter = await getHighlighter(options);
    await Promise.all([
      highlighter.loadTheme("github-dark"),
      highlighter.loadTheme("github-light"),
    ]);
    return highlighter;
  },
};

export default async function Mdx({
  isRss = false,
  source,
  components = {},
}: {
  components?: MDXComponents;
  source: string;
  isRss?: boolean;
}) {
  const mdxOptions: MDXRemoteOptions["mdxOptions"] = {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettycodeOptions]],
  };

  if (!isRss) {
    mdxOptions.rehypePlugins!.push(rehypeSlug, [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
      },
    ]);
  }

  return MDXRemote({
    source,
    components: {
      ...customMDXComponents,
      ...components,
      ...(isRss ? { Image: "img" } : {}),
    },
    options: {
      parseFrontmatter: true,
      mdxOptions,
    },
  });
}
