import fs from "fs";
import { globby } from "globby";
import { getAllPosts } from "./mdx";
import { prod_url } from "@/lib/siteUrl";

export async function generateSitemap() {
  const pagePaths = await globby(["**/page.tsx", "!**/[slug]/**"]);
  const pages: { [key: string]: string } = pagePaths.reduce((obj, page) => {
    let realPage = page.substring(3).replace("/page.tsx", "");
    if (!realPage) realPage = "/";
    return {
      ...obj,
      [realPage]: fs.statSync(page).mtime.toISOString().substring(0, 10),
    };
  }, {});

  const posts = await getAllPosts();
  const blogPostPages: { [key: string]: string } = {};
  posts.forEach(({ frontmatter: { slug, date } }) => {
    pages[`/blog/${slug}`] = date;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${Object.entries(pages)
        .map(([page, date]) => {
          const path = page
            .replace("pages", "")
            .replace("data", "")
            .replace(".js", "")
            .replace(".mdx", "");
          const route = path === "/index" ? "" : path;

          return `
    <url>
        <loc>${`${prod_url}${route}`}</loc>
        <lastmod>${date}</lastmod>
    </url>
          `;
        })
        .join("")}
</urlset>`;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}
