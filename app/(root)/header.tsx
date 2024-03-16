import { Highlight } from "@/components/highlight";
import TicTacToe from "@/components/tic-tac-toe";
import { Spotlight } from "@/components/ui/spotlight";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Wrapper from "@/components/wrapper";
import { HeaderData } from "@/data/home/header";
// import { splitString } from "@/lib/utils";

const Header = () => {
  return (
    <header className="max-md:min-h-screen max-md:pt-10 md:h-screen flex items-center justify-center text-center md:text-start relative overflow-hidden antialiased">
      <Spotlight
        className="-top-40 left-0 md:left-32 lg:left-52 md:-top-20 fill-black"
        fill="fill-headerFg"
      />
      <Wrapper className="flex flex-col md:flex-row items-center justify-center gap-10 w-full py-16">
        <div className="flex flex-col justify-evenly">
          <div>
            <p className="">
              {HeaderData.greeting.start}
              <Highlight>{HeaderData.greeting.middle}</Highlight>
              {HeaderData.greeting.end}
            </p>
            {/* <TypewriterEffect
              words={splitString(HeaderData.name)}
              className="text-4xl md:text-5xl lg:text-6xl leading-10 md:leading-[4rem] lg:leading-[5rem] text-headerFg whitespace-nowrap delay-0"
              cursorClassName="hidden"
            /> */}
            <h3 className="text-xl md:text-[1.75rem] lg:text-3xl text- mb-4 md:mb-2 bg-emerald-100 text-emerald-700 dark:bg-transparent dark:text-primary px-1 py-0.5">
              {HeaderData.description}
            </h3>
            {/* <TextGenerateEffect
              words={HeaderData.playText}
              className="text-small text-white py-1 px-3 rounded-md bg-backgroundDarker dark:bg-backgroundDark w-fit delay-0"
            /> */}
          </div>
          <div className="mt-10 text-start text-xs md:text-small">
            <ul className="mb-2 flex flex-col gap-1">
              {HeaderData.commentCodes.map((comment, idx) => (
                <li key={idx}>
                  <span>{comment}</span>
                </li>
              ))}
            </ul>
            <div className="font-medium">
              <span className="text-accent">{HeaderData.github.const}</span>{" "}
              <span className="text-primary">{HeaderData.github.variable}</span>{" "}
              <span className="text-headerFg">{HeaderData.github.equal}</span>{" "}
              <span className="text-secondary">{HeaderData.github.link}</span>
            </div>
          </div>
        </div>

        <TicTacToe />
      </Wrapper>
    </header>
  );
};

export default Header;
