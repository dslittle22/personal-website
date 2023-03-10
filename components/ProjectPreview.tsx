import SizedImage from "@/components/SizedImage";
import SmartLink from "./SmartLink";

export type Project = {
  image_src: string;
  title: string;
  description: string;
  href?: string;
};

type Props = {
  project: Project;
};

export default function ProjectPreview({ project, ...props }: Props) {
  function Parent({ children }: { children: React.ReactNode }) {
    return project.href == undefined ? (
      <div {...props}>{children}</div>
    ) : (
      <SmartLink href={project.href} {...props}>
        {children}
      </SmartLink>
    );
  }

  return (
    <Parent>
      <div style={{ marginBottom: "10px" }}>
        <h3 style={{ display: "inline" }}>{project.title}</h3>
        <br />
        <small>{project.description}</small>
      </div>
      <SizedImage
        image_src={project.image_src}
        priority
        borderRadius={"10px"}
      />
    </Parent>
  );
}
