import { ProjectsDataType } from "@/data/projects";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import ExternalLinkIcon from "./icons/external-link-icon";
import CodeSlashIcon from "./icons/code-slash";

interface CardContentProps {
  project: ProjectsDataType;
}

interface CardProps extends CardContentProps {
  // Your custom props
  imageUrl?: string;
}

const CardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {children}
    </div>
  );
};

const Card = ({ project, imageUrl }: CardProps) => {
  return (
    <div className="border lg:w-60">
      {imageUrl && (
        <div className="w-fit">
          <Image
            src={imageUrl}
            alt={project.title}
            width={331}
            height={202}
            className="object-cover "
          />
        </div>
      )}
      <CardContent project={project} />
    </div>
  );
};

const CardContent = ({ project }: CardContentProps) => {
  return (
    <div className="w-full border-t h-fit">
      <ul className="flex gap-2 text-small py-2 px-2 border-b flex-wrap">
        {project.tags.map((tag, idx) => (
          <li key={idx} className="">
            {tag}
          </li>
        ))}
      </ul>
      <div className="px-3 py-3">
        <h2 className="text-headerFg font-medium mb-3">{project.title}</h2>
        <p className="text-sm sm:text-base mb-3">{project.description}</p>
        <div className="flex gap-2">
          {project.liveLink && (
            <Button asChild size="sm" className="rounded-none">
              <a target="_blank" href={project.liveLink} className="flex gap-2">
                live <ExternalLinkIcon />
              </a>
            </Button>
          )}
          {project.gitLink && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-none "
            >
              <a target="_blank" href={project.gitLink} className="flex gap-2">
                github <CodeSlashIcon />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export { CardGrid, Card, CardContent };
