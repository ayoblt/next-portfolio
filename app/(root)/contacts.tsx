import SendPlaneIcon from "@/components/icons/send-plane";
import SectionHeader from "@/components/section-header";
import {
  SlideRightTransition,
  SlideUpTransition,
} from "@/components/slide-transitions";
import { Button } from "@/components/ui/button";
import SendMessageBtn from "@/components/ui/send-message-btn";
import Wrapper from "@/components/wrapper";
import { ContactsData } from "@/data/home/contacts";
import Link from "next/link";

const Contacts = () => {
  return (
    <section className="py-16">
      <Wrapper>
        <SlideRightTransition>
          <SectionHeader className="mb-8">contacts</SectionHeader>
        </SlideRightTransition>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 justify-between">
          <div className="flex flex-col gap-6 text-center md:text-start items-center md:items-start justify-between">
            <SlideRightTransition custom={2}>
              <p className="text-small text-colorTextPrimary sm:w-96">
                {ContactsData.description}
              </p>
            </SlideRightTransition>
            <SlideRightTransition custom={3}>
              <SendMessageBtn />
            </SlideRightTransition>
          </div>
          <SlideUpTransition className="border border-colorBorder p-3 w-fit">
            <SlideUpTransition custom={2}>
              <h6 className="text-sm text-colorTextSecondary mb-2">
                {ContactsData.socialMessage}
              </h6>
            </SlideUpTransition>
            <ul className="flex flex-col gap-2">
              {ContactsData.contactLinks.map((item, idx) => (
                <SlideUpTransition custom={idx + 1} key={idx}>
                  <Link
                    href={item.link}
                    className="flex gap-1 items-center text-small text-colorTextPrimary"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </SlideUpTransition>
              ))}
            </ul>
          </SlideUpTransition>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contacts;
