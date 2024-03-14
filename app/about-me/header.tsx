import { Highlight } from "@/components/highlight";
import TicTacToe from "@/components/tic-tac-toe";
import { Button } from "@/components/ui/button";
import SendMessageBtn from "@/components/ui/send-message-btn";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Wrapper from "@/components/wrapper";
import { AboutHeaderData } from "@/data/about-me/header";
import { HeaderData } from "@/data/home/header";
import { splitString } from "@/lib/utils";
import Image from "next/image";

// import { HeaderData } from "data/home/header";
const Header = () => {
  return (
    <header className="flex items-center justify-center relative overflow-hidden antialiased mt-12 md:mt-14 py-8">
      <Wrapper className="">
        <div>
          <h2 className="text-headerFg">{AboutHeaderData.title}</h2>
          <span className="text-xs">{AboutHeaderData.description}</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between max-md:gap-12 w-full py-8">
          <ul className="flex-1 flex flex-col gap-3">
            {AboutHeaderData.lines.map((line, idx) => (
              <li key={idx} className="text-sm md:text-small leading-6">
                <p>{line}</p>
              </li>
            ))}
          </ul>

          <div className="flex-1 flex flex-col gap-8 items-center relative">
            <Image
              src={AboutHeaderData.imageUrl}
              alt="profile pic"
              width={337}
              height={507}
              className="object-contain w-64 border-b border-r shadow-lg border-primary"
            />
            <SendMessageBtn className="mb-8" />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
