import SectionHeader from "@/components/section-header";
import Wrapper from "@/components/wrapper";
import { MyFunFactsData } from "@/data/about-me/my-fun-facts";

const MyFunFacts = () => {
  return (
    <section className="py-12">
      <Wrapper>
        <SectionHeader className="mb-10">{MyFunFactsData.title}</SectionHeader>
        <div className="flex flex-col md:flex-row">
          <ul className="flex-1 flex flex-wrap gap-3">
            {MyFunFactsData.facts.map((item, idx) => (
              <li className="py-1 px-2 border w-fit" key={idx}>
                <span className="text-xs">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex-1"></div>
        </div>
      </Wrapper>
    </section>
  );
};

export default MyFunFacts;
