import { FooterData } from "@/data/footer";
import Logo from "../logo";
import Wrapper from "../wrapper";
import Link from "next/link";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <footer className="relative bottom-0 py-6 border-t border-colorBorder">
      <Wrapper className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between text-colorTextSecondary text-center md:text-start mb-5">
        <div className="text-small">
          <div className="mb-4 md:mb-3 flex flex-col items-center md:flex-row gap-1">
            <Logo />
            <span className="text-colorTextPrimary">{FooterData.email}</span>
          </div>
          <p className="capitalize font-light">{FooterData.description}</p>
        </div>
        <div className="">
          <h4 className="mb-2">Media</h4>
          <ul className="flex gap-2 items-center justify-center">
            {FooterData.links.map((item, idx) => (
              <li key={idx} className="">
                <Link href={item.link}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
      <Copyright />
    </footer>
  );
};

export default Footer;
