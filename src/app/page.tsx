import SmartLink from "@/components/SmartLink";
import BlogPostPreview from "@/components/BlogPostPreview";
import { getAllPosts } from "@/lib/mdx";
import ProjectsList from "@/components/ProjectsList";

export default async function Home() {
  async function listNBlogPosts(n: number) {
    const posts = await getAllPosts();

    if (process.env.LOCAL === "true") {
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
  const blogPosts = await listNBlogPosts(4);

  return (
    <>
      <section>
        <p>
          {`Hi! I'm Danny Little. I'm a web developer and a musician.
          I'm also a recent graduate of Bowdoin College, where I double majored in computer
           science and music performance.`}
        </p>
        <p>
          {`If you'd like to get in touch with me, my email is
          hi@{this domain}. You can find me elsewhere at the
          bottom of the page.`}
        </p>
      </section>
      <section>
        <h3>
          Read my <SmartLink href="/blog">blog:</SmartLink> <br />
        </h3>

        {blogPosts}
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
