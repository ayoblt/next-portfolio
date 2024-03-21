import ArrowRight from "@/components/icons/arrow-right";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { AboutMeData } from "@/data/home/about-me";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="py-8">
      <Wrapper>
        <SectionHeader className="mb-7">about-me</SectionHeader>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8 items-center">
          <div className="flex-1">
            <ul className="flex flex-col gap-4 md:gap-5 mb-8">
              {AboutMeData.content.map((item, idx) => (
                <li key={idx} className="text-sm sm:text-base">
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <Button variant="outline" size="lg" asChild className="slideUp">
              <Link href={AboutMeData.link} className="flex gap-2 group">
                read more{" "}
                <ArrowRight className="fill-primary group-hover:fill-white" />
              </Link>
            </Button>
          </div>
          <div className="flex-1 flex justify-center relative border-y border-primary slideUp">
            <Image
              src={AboutMeData.imageUrl}
              alt="profile pic"
              width={337}
              height={507}
              className="object-contain w-64"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutMe;
