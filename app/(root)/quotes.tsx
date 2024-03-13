import { CardStack } from "@/components/ui/card-stacks";
import Wrapper from "@/components/wrapper";
import { QuotesData } from "@/data/home/quotes";

const Quotes = () => {
  return (
    <section className="py-6">
      <Wrapper className="flex items-center justify-center w-full text-small">
        <CardStack
          items={QuotesData}
          containerClassName="h-28"
          cardClassName="h-28"
        />
      </Wrapper>
    </section>
  );
};

export default Quotes;
