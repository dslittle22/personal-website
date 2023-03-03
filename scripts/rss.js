// import fs from "fs";
// import { Feed } from "feed";
// import { relative_url } from "@/lib/siteUrl";
// import { getAllPosts, getSourceBySlug } from "@/lib/mdx";
// import Mdx from "@/components/Mdx";

// export async function generateStaticMarkup(slug) {
//   const ReactDomServer = (await import("react-dom/server")).default;

//   const mdxSource = getSourceBySlug(slug);
//   const element = <Mdx source={mdxSource} />;

//   const staticMarkup = ReactDomServer.renderToString(element);
//   return staticMarkup;
// }

// export default async function generateRssFeed() {
//   const site_url = relative_url;
//   const feed = new Feed({
//     title: "Danny Little | Blog",
//     description: "Blog posts by Danny Little",
//     link: site_url,
//     id: `Danny Little | Blog`,
//     feedLinks: {
//       rss2: `${site_url}/rss/feed.xml`,
//       json: `${site_url}/rss/feed.json`,
//       atom: `${site_url}/rss/atom.xml`,
//     },
//     image: `${site_url}/favicon.ico`,
//     updated: new Date(),
//     copyright: `${new Date().getFullYear()} Danny Little`,
//     language: "en",
//   });

//   const posts = await getAllPosts();

//   const markup = {};
//   for (let i = 0; i < posts.length; i++) {
//     const {
//       frontmatter: { slug },
//     } = posts[i];
//     markup[slug] = await generateStaticMarkup(slug);
//     await generateStaticMarkup(slug);
//   }

//   posts.map(({ frontmatter: { title, date, description, slug } }) => {
//     feed.addItem({
//       title,
//       description,
//       date: new Date(date),
//       link: `${site_url}/blog/${slug}`,
//       content: markup[slug],
//     });
//   });

//   fs.mkdir("public/rss", () => {});

//   fs.writeFileSync("public/rss/feed.xml", feed.rss2());
//   fs.writeFileSync("public/rss/atom.xml", feed.atom1());
//   fs.writeFileSync("public/rss/feed.json", feed.json1());
// }

console.log("hello world");
