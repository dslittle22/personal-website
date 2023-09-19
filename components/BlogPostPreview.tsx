import SmartLink from "@/components/SmartLink";
import { formatDate } from "@/lib/date";
import { Frontmatter } from "@/lib/mdx";

export default function BlogPostPreview({
  frontmatter: { title, date, description, slug },
}: {
  frontmatter: Frontmatter;
}) {
  return (
    <div key={slug}>
      <SmartLink href={`/blog/${slug}`}>{title}</SmartLink>: {description}
      <br />
      <small>Written on {formatDate(date)}</small>
    </div>
  );
}
