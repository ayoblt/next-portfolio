import PageHeader from "@/components/page-header";
import SendMessageBtn from "@/components/ui/send-message-btn";
import Wrapper from "@/components/wrapper";
import { AboutHeaderData } from "@/data/about-me/header";
import { HeaderData } from "@/data/home/header";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-center relative overflow-hidden antialiased mt-12 md:mt-14 py-8">
      <Wrapper>
        <PageHeader
          path={AboutHeaderData.path}
          pathDescription={AboutHeaderData.pathDescription}
        />
        <div className="flex flex-col md:flex-row justify-between max-md:gap-y-12 md:gap-x-4 w-full py-8">
          <ul className="flex-1 flex flex-col gap-3">
            {AboutHeaderData.lines.map((line, idx) => (
              <li key={idx} className="text-sm md:text-base leading-6">
                <p>{line}</p>
              </li>
            ))}
          </ul>

          <div className="flex-1 flex flex-col gap-y-6 items-center relative">
            {/* <div className="flex-1"> */}
            <Image
              src={AboutHeaderData.imageUrl}
              alt="profile pic"
              width={300}
              height={450}
              className="object-contain w-64 border-b border-r shadow-lg border-primary"
            />
            <SendMessageBtn className="mb-8" />
            {/* </div> */}
            {/* <ul className="flex-1 flex flex-col space-y-2 text-sm">
              {AboutHeaderData.summary.map((line, idx) => (
                <li className="" key={idx}>
                  <span className="font-semibold">{line.label}</span>
                  {line.text}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
