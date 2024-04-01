import SizedImage from "@/components/SizedImage";
import SmartLink from "./SmartLink";

export type Project = {
  src: string;
  title: string;
  description: string;
  href?: string;
};

export default function ProjectPreview({ project }: { project: Project }) {
  function Parent({ children }: { children: React.ReactNode }) {
    return project.href == undefined ? (
      <div>{children}</div>
    ) : (
      <SmartLink href={project.href}>{children}</SmartLink>
    );
  }

  return (
    <Parent>
      <div style={{ marginBottom: "10px" }}>
        <h3 style={{ display: "inline" }}>{project.title}</h3>
        <br />
        <small>{project.description}</small>
      </div>
      <SizedImage src={project.src} borderRadius={"10px"} />
    </Parent>
  );
}
