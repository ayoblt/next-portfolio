import HorizontalCard from "@/components/horizontal-card";
import SectionHeader from "@/components/section-header";
import {
  SlideRightTransition,
  SlideUpTransition,
} from "@/components/slide-transitions";
import Wrapper from "@/components/wrapper";
import { MyExpertiseData } from "@/data/home/my-expertise";

const MyExpertise = () => {
  return (
    <section className="py-12">
      <Wrapper className="">
        <div className="mb-12">
          <SlideRightTransition>
            <SectionHeader className="mb-10">
              {MyExpertiseData.title}
            </SectionHeader>
          </SlideRightTransition>
          <SlideUpTransition className="mx-auto text-center text-small md:text-sm md:w-2/3 text-colorTextPrimary">
            {MyExpertiseData.description}
          </SlideUpTransition>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {MyExpertiseData.items.map((item, idx) => (
            <SlideRightTransition custom={idx} key={idx}>
              <HorizontalCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </SlideRightTransition>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default MyExpertise;
