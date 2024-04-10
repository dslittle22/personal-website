import SmartLink from "@/components/SmartLink";
import BlogPostPreview from "@/components/BlogPostPreview";
import { get_all_posts } from "@/lib/mdx";
import ProjectsList from "@/components/ProjectsList";
import SizedImage from "@/components/SizedImage";
import isLocal from "@/lib/local";

export default async function Home() {
  async function list_n_blog_posts(n: number) {
    const posts = await get_all_posts();

    if (isLocal()) {
      return posts.map(({ frontmatter }) => (
        <BlogPostPreview key={frontmatter.slug} frontmatter={frontmatter} />
      ));
    }

    return posts
      .filter((post) => post.frontmatter.draft != true)
      .map(({ frontmatter }) => (
        <BlogPostPreview key={frontmatter.slug} frontmatter={frontmatter} />
      ))
      .slice(0, n);
  }
  const blog_posts = await list_n_blog_posts(4);

  return (
    <>
      <section className="intro-paragraph">
        <div>
          <p>Hi! I'm Danny Little. I'm a web developer and musician.</p>
          <p>
            I'm a recent graduate from Bowdoin College, where I majored in
            computer science and music performance.
          </p>
          <p>
            I'm currently working as a frontend software engineer at HubSpot,
            working in React.
          </p>
          <p>
            On my own time, I enjoy learning more about computer systems,
            compilers, and the web.
          </p>
        </div>
        <SizedImage src="/senior-portrait.jpg" priority />
      </section>
      <section>
        <h3>
          Read my <SmartLink href="/blog">blog:</SmartLink> <br />
        </h3>

        {blog_posts}
      </section>
      <section>
        <h3>
          Look at my <SmartLink href="/projects">projects</SmartLink>
        </h3>

        <ProjectsList count={4} />
      </section>
    </>
  );
}
