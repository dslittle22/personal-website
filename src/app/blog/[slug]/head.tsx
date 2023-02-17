import { siteTitle as parentTitle } from "../head";

export default function Head({ params }: { params: { slug: string } }) {
  const siteTitle = parentTitle + ": " + params.slug;

  return (
    <>
      <title>{siteTitle}</title>
    </>
  );
}
