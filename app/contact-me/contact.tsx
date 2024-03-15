import Wrapper from "@/components/wrapper";
import { ContactForm } from "./contact-form";

const Contact = () => {
  return (
    <section className="py-12">
      <Wrapper className="">
        <div className="border py-10">
          <ContactForm />
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
