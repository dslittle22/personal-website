export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
  borderRadius?: string;
};

export const allImages: { [key: string]: ImageType } = {
  "/bitwrought.png": {
    src: "/bitwrought.png",
    alt: "image of bitwrought cli app in a terminal",
    width: 1682,
    height: 858,
  },
  "/subjectsearcher.png": {
    src: "/subjectsearcher.png",
    alt: "image of subject searcher, a wrapper on Bowdoin's classfinder",
    width: 3566,
    height: 1996,
  },
  "/conway.png": { 
    src: "/conway.png", 
    alt: "image of conway's game of life implementation", 
    width: 4208, 
    height: 2168 
  },
  "/simpletasks.png": {
    src: "/simpletasks.png",
    alt: "image of simpletasks web app",
    width: 3452,
    height: 1950,
  },
  "/visual-countdown.png": {
    src: "/visual-countdown.png",
    alt: "image of visual countdown web app",
    width: 650,
    height: 838,
  },
  "/regex-tool.png": {
    src: "/regex-tool.png",
    alt: "image of regex tool web app",
    width: 705,
    height: 846,
  },
  "/blog/grid-1.png": {
    src: "/blog/grid-1.png",
    alt: "CSS grid container with items",
    width: 466,
    height: 197,
  },
  "/blog/grid-2.png": {
    src: "/blog/grid-2.png",
    alt: "CSS grid container with horizontally centered items",
    width: 468,
    height: 198,
  },
  "/blog/grid-3.png": {
    src: "/blog/grid-3.png",
    alt: "CSS grid container with  each item at the bottom of its grid space",
    width: 469,
    height: 197,
  },
  "/blog/grid-4.png": {
    src: "/blog/grid-4.png",
    alt: "CSS grid container with both items stacked in the bottom of the container",
    width: 464,
    height: 194,
  },
  "/blog/grid-5.png": {
    src: "/blog/grid-5.png",
    alt: "CSS grid container with align-items: end, and dev tools",
    width: 466,
    height: 197,
  },
  "/blog/grid-6.png": {
    src: "/blog/grid-6.png",
    alt: "CSS grid container with align-content: end, and dev tools",
    width: 465,
    height: 195,
  },
  "/blog/grid-7.png": {
    src: "/blog/grid-7.png",
    alt: "CSS grid container with space-evenly",
    width: 466,
    height: 195,
  },
  "/blog/grid-8.png": {
    src: "/blog/grid-8.png",
    alt: "CSS grid container with space-between",
    width: 466,
    height: 197,
  },
};
