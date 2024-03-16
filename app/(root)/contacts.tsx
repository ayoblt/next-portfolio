import SectionHeader from "@/components/section-header";
import SendMessageBtn from "@/components/ui/send-message-btn";
import Wrapper from "@/components/wrapper";
import { ContactsData } from "@/data/home/contacts";
import Link from "next/link";

const Contacts = () => {
  return (
    <section className="py-16">
      <Wrapper>
        <SectionHeader className="mb-8">contacts</SectionHeader>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 justify-between">
          <div className="flex flex-col gap-6 text-center md:text-start items-center md:items-start justify-between">
            <p className="text-small text-colorTextPrimary sm:w-96 slideUp">
              {ContactsData.description}
            </p>
            <SendMessageBtn />
          </div>
          <div className="border border-colorBorder p-3 w-fit">
            <h6 className="text-sm text-colorTextSecondary mb-2 slideUp">
              {ContactsData.socialMessage}
            </h6>
            <ul className="flex flex-col gap-2">
              {ContactsData.contactLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="flex gap-1 items-center text-small text-colorTextPrimary slideUp"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contacts;
