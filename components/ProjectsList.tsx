import ProjectPreview, { Project } from "@/components/ProjectPreview";
import styles from "@/styles/projectsList.module.scss";

const projects: Project[] = [
  {
    title: "Bitwrought",
    description: "A cli app that checks data integrity, written in Rust.",
    href: "https://github.com/dslittle22/bitwrought",
    src: "/bitwrought.png",
    alt: "image of bitwrought cli app in a terminal",
    width: 1682,
    height: 858,
  },
  {
    title: "Subject Searcher",
    description:
      "A wrapper on Bowdoin's Classfinder, with massive speed and UX improvements.",
    src: "/subjectsearcher.png",
    alt: "image of subject searcher, a wrapper on Bowdoin's classfinder",
    width: 3566,
    height: 1996,
  },

  {
    title: "Conway's Game of Life",
    description:
      "An interactive React implementation of Conway's Game of Life.",
    src: "/conway.png",
    alt: "image of conway's game of life implementation",
    width: 4208,
    height: 2168,
    href: "https://conwaysgameoflife-react.netlify.app/",
  },
  {
    title: "Simple Tasks",
    description:
      "A simple task manager with database persistance and authentication.",
    src: "/simpletasks.png",
    alt: "image of simpletasks web app",
    width: 3452,
    height: 1950,
    href: "https://simpletasksonline.netlify.app/",
  },
  {
    title: "Visual Countdown",
    href: "https://visual-countdown.netlify.app",
    src: "/visual-countdown.png",
    alt: "image of visual countdown web app",
    width: 650,
    height: 838,
    description: "A site to visualize durations of time.",
  },
  {
    title: "Regex Tool",
    href: "https://regex-tool.netlify.app",
    src: "/regex-tool.png",
    alt: "image of regex tool web app",
    width: 705,
    height: 846,
    description: "A site to use and test several common regex patterns.",
  },
];

export default function ProjectsList({ count }: { count?: number }) {
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
