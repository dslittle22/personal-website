import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Compatible } from "vfile";
import SmartLink from "./SmartLink";
import SizedImage from "./SizedImage";
import Popout from "./Popout";
import Counter from "./Counter";
import remarkGfm from "remark-gfm";

import rehypePrettyCode from "rehype-pretty-code";

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

export function useMDXComponents(): MDXProvidedComponents {
  return customMDXComponents;
}

const options = {
  keepBackground: "false",
  theme: { dark: "github-dark", light: "github-light" },
};

export default async function Mdx({
  isRss = false,
  source,
  components = {},
}: {
  components?: MDXComponents;
  source: Compatible;
  isRss?: boolean;
}): Promise<React.ReactNode> {
  const element = await MDXRemote({
    source,
    components: {
      ...(customMDXComponents as MDXComponents),
      ...components,
      ...(isRss ? { SizedImage: "img" } : {}),
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode as any, options]],
      },
    },
  });

  return element;
}
