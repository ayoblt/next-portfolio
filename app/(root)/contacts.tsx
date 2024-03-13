import SendPlaneIcon from "@/components/icons/send-plane";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
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
            <p className="text-small text-colorTextPrimary sm:w-96">
              {ContactsData.description}
            </p>
            <Button className="w-fit" asChild>
              <Link href="/contact-me" className="flex items-center gap-2">
                send-a-message <SendPlaneIcon className="fill-white" />
              </Link>
            </Button>
          </div>
          <div className="border border-colorBorder p-3 w-fit">
            <h6 className="text-sm text-colorTextSecondary mb-2">
              {ContactsData.socialMessage}
            </h6>
            <ul className="flex flex-col gap-2">
              {ContactsData.contactLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="flex gap-1 items-center text-small text-colorTextPrimary"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
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
