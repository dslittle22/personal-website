import Image from "next/image";
import SmartLink from "./SmartLink";

export type Project = {
  src: string;
  alt: string;
  title: string;
  description: string;
  href?: string;
  width: number;
  height: number;
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
      <Image
        src={project.src}
        alt={project.alt}
        width={project.width}
        height={project.height}
        style={{ borderRadius: "10px", maxWidth: "100%", height: "auto" }}
      />
    </Parent>
  );
}
