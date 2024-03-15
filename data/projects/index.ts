export interface ProjectsDataType {
  tags: string[];
  title: string;
  description: string;
  liveLink?: string;
  gitLink?: string;
  imageUrl?: string;
}

export const ProjectsData: ProjectsDataType[] = [
  {
    tags: ["Html", "Css", "JavaScript"],
    title: "Insure Landing Page",
    description: "A landing page for an insurance website",
    liveLink: "https://ayoblt.github.io/insure-project/",
    gitLink: "https://github.com/ayoblt/insure-project",
    imageUrl: "/images/insure.png",
  },

  {
    tags: ["ReactJs", "NextJs", "TypeScript", "Framer motion"],
    title: "Brochureware Website",
    description: "Website for a construction company detail",
    liveLink: "https://saheed-taiwo-brochureware.vercel.app/",
    imageUrl: "/images/brochureware.png",
  },
  {
    tags: ["React", "NextJs", "TypeScript", "Framer motion"],
    title: "Portfolio Website",
    description: "You are using it right now",
    gitLink: "https://github.com/ayoblt/next-portfolio",
    imageUrl: "/images/personal-portfolio.png",
  },
];
