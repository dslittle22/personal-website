import ProjectsList from "@/components/ProjectsList";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div>
      <h2>Projects</h2>
      <section>
        <ProjectsList />
      </section>
    </div>
  );
}
