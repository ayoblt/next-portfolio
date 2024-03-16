import { Card, CardGrid } from "@/components/card";
// import ArrowRight from "@/components/icons/arrow-right";
// import RectangleBig from "@/components/icons/rectangle-big";
import SectionHeader from "@/components/section-header";
// import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { ProjectsData } from "@/data/projects";
// import Link from "next/link";

const Projects = () => {
  return (
    <section className="py-12 relative">
      {/* <RectangleBig
        className="absolute right-0 top-1/2 -translate-y-1/2"
        strokeClassName="stroke-border"
      /> */}
      <Wrapper>
        <div className="flex justify-between mb-10">
          <SectionHeader>projects</SectionHeader>

          {/* <Button variant="link" asChild>
            <Link
              href="/projects"
              className="flex gap-2 items-center text-small"
            >
              View all <ArrowRight />
            </Link>
          </Button> */}
        </div>

        <div className="flex justify-center">
          <CardGrid>
            {ProjectsData.map((project, idx) => (
              <Card key={idx} imageUrl={project.imageUrl} project={project} />
            ))}
          </CardGrid>
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
