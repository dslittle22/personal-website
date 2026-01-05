import SmartLink from "@/components/SmartLink";
import { formatDateString } from "@/lib/date";
import { Frontmatter } from "@/lib/mdx";

export default function BlogPostPreview({
  frontmatter: { title, date, description, slug },
}: {
  frontmatter: Frontmatter;
}) {
  return (
    <div key={slug}>
      <SmartLink href={`/blog/${slug}`}>{title}</SmartLink>
      {description ? `: ${description}` : ""}
      <br />
      <small>Written on {formatDateString(date)}</small>
    </div>
  );
}
