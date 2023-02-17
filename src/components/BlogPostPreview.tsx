import SmartLink from "@/components/SmartLink";
type Props = {};

export default function BlogPostPreview({
  frontmatter: { title, date, author, description, slug },
}: {
  frontmatter: {
    title: string;
    date: string;
    author: string;
    description: string;
    slug: string;
  };
}) {
  return (
    <div key={slug}>
      <SmartLink href={`/blog/${slug}`}>{title}</SmartLink>: {description}
      <br />
      <small>Written on {date}</small>
    </div>
  );
}
