import { CTAData } from "@/data/cta";
import Wrapper from "./wrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-6">
      <Wrapper className="">
        <div className="px-3 py-8 md:px-6 md:py-12 rounded-lg bg-[#4E42D7] relative flex flex-col justify-center items-center font-jetBrainsMono">
          <div className="absolute pointer-events-none inset-0 flex items-center bg-colorBg dark:bg-[#04051A] justify-center [mask-image:radial-gradient(ellipse_at_top_right,transparent_40%,#ffffff)] dark:[mask-image:radial-gradient(ellipse_at_top_right,transparent_40%,#04051A)]"></div>
          <h3 className="text-2xl md:text-3xl text-center font-bold text-white mb-5">
            {CTAData.title}
          </h3>
          <p className="text-xs md:text-sm text-center w-11/12 sm:w-5/6 md:w-3/4 mx-auto text-white/90 mb-5">
            {CTAData.description}
          </p>
          <div className="text-center z-20">
            <Button
              variant="secondary"
              className="inline-block rounded-md"
              asChild
            >
              <Link href={CTAData.path}>contact-me</Link>
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CTA;
