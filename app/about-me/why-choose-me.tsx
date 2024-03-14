import HorizontalCard from "@/components/horizontal-card";
import SectionHeader from "@/components/section-header";
import Wrapper from "@/components/wrapper";
import { WhyChooseMeData } from "@/data/about-me/why-choose-me";

const WhyChooseMe = () => {
  return (
    <section className="py-12">
      <Wrapper>
        <div className="mb-12">
          <SectionHeader className="mb-10">
            {WhyChooseMeData.title}
          </SectionHeader>
          <p className="mx-auto text-center text-small md:text-sm md:w-2/3 text-colorTextPrimary">
            {WhyChooseMeData.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {WhyChooseMeData.items.map((item, idx) => (
            <HorizontalCard
              key={idx}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default WhyChooseMe;
