import SizedImage, { Props as SizedImageProps } from "@/components/SizedImage";
import SmartLink from "./SmartLink";

export type Project = {
  imageSrc: string;
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
      <SizedImage imageSrc={project.imageSrc} maxHeight={300} priority={true} />
    </Parent>
  );
}
