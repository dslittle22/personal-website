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

export default function ProjectPreview({ project }: Props) {
  function Parent({ children }: { children: React.ReactNode }) {
    return project.href == undefined ? (
      <div>{children}</div>
    ) : (
      <SmartLink href={project.href}>{children}</SmartLink>
    );
  }

  return (
    <div style={{ maxHeight: "300px" }}>
      <Parent>
        <h3 style={{ display: "inline" }}>{project.title}</h3>
        <div>{project.description}</div>
        <SizedImage imageSrc={project.imageSrc} round={5} maxHeight={200} />
      </Parent>
    </div>
  );
}
