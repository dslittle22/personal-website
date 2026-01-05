import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import SmartLink from "./SmartLink";
import SizedImage from "./SizedImage";
import Popout from "./Popout";
import Counter from "./Counter";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import type { JSX } from "react";

type MDXComponentType = string | ((args: any) => JSX.Element);

export const customMDXComponents = {
  a: SmartLink,
  SmartLink,
  SizedImage,
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
      ...(isRss ? { SizedImage: "img" } : {}),
    },
    options: {
      parseFrontmatter: true,
      mdxOptions,
    },
  });
}
