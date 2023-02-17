import ProjectPreview, { Project } from "@/components/ProjectPreview";
import conway from "/public/conway.png";
import simpleTasks from "/public/simpletasks.png";
import regexTool from "/public/regex-tool.png";
import visualCountdown from "/public/visual-countdown.png";
import bitwrought from "/public/bitwrought.png";
import subjectSearcher from "/public/subjectsearcher.png";
import ProjectsList from "@/components/ProjectsList";

const projects: Project[] = [
  {
    title: "Bitwrought",
    description: "A cli app that checks data integrity, written in Rust.",
    href: "https://github.com/dslittle22/bitwrought",
    image: { image: bitwrought, alt: "alt", maxHeight: 200 },
  },
  {
    title: "Subject Searcher",
    description:
      "A wrapper on Bowdoin's Classfinder, with massive speed and UX improvements.",
    image: { image: subjectSearcher, alt: "alt", maxHeight: 200 },
  },

  {
    title: "Conway's Game of Life",
    description:
      "An interactive implementation of Conway's Game of Life, written in React.",
    image: { image: conway, alt: "alt", maxHeight: 200 },
    href: "https://conwaysgameoflife-react.netlify.app/",
  },
  {
    title: "Simple Tasks",
    description:
      "A simple task manager with database persistance and authentication.",
    image: { image: simpleTasks, alt: "alt", maxHeight: 200 },
    href: "https://simpletasksonline.netlify.app/",
  },
  {
    title: "Visual Countdown",
    href: "https://visual-countdown.netlify.app",
    image: { image: visualCountdown, alt: "alt", maxHeight: 200 },
    description: "A site to visualize durations of time.",
  },
  {
    title: "Regex Tool",
    href: "https://regex-tool.netlify.app",
    image: { image: regexTool, alt: "alt", maxHeight: 200 },
    description: "A site to use and test several common regex patterns.",
  },
];

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
