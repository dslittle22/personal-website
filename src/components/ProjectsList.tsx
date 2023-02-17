import ProjectPreview, { Project } from "@/components/ProjectPreview";
import styles from "@/styles/projectsList.module.scss";

const projects: Project[] = [
  {
    title: "Bitwrought",
    description: "A cli app that checks data integrity, written in Rust.",
    href: "https://github.com/dslittle22/bitwrought",
    imageSrc: "/bitwrought.png",
  },
  {
    title: "Subject Searcher",
    description:
      "A wrapper on Bowdoin's Classfinder, with massive speed and UX improvements.",
    imageSrc: "/subjectsearcher.png",
  },

  {
    title: "Conway's Game of Life",
    description:
      "An interactive implementation of Conway's Game of Life, written in React.",
    imageSrc: "/conway.png",
    href: "https://conwaysgameoflife-react.netlify.app/",
  },
  {
    title: "Simple Tasks",
    description:
      "A simple task manager with database persistance and authentication.",
    imageSrc: "/simpletasks.png",
    href: "https://simpletasksonline.netlify.app/",
  },
  {
    title: "Visual Countdown",
    href: "https://visual-countdown.netlify.app",
    imageSrc: "/visual-countdown.png",
    description: "A site to visualize durations of time.",
  },
  {
    title: "Regex Tool",
    href: "https://regex-tool.netlify.app",
    imageSrc: "/regex-tool.png",
    description: "A site to use and test several common regex patterns.",
  },
];

type Props = {
  count?: number;
};

export default function ProjectsList(props: Props) {
  let count = props.count;
  if (count === undefined) {
    count = projects.length;
  }
  return (
    <div className={styles.wrapper}>
      {projects
        .map((project) => (
          <ProjectPreview project={project} key={project.title} />
        ))
        .slice(0, count)}
    </div>
  );
}
