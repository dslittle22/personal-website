import { siteTitle as parentTitle } from "../head";

const routeTitle = "Blog";
export const siteTitle = parentTitle + " | " + routeTitle;
export default function Head() {
  return (
    <>
      <title>{siteTitle}</title>
    </>
  );
}
