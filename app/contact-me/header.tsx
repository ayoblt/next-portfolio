import Wrapper from "@/components/wrapper";
import { ContactMeHeaderData } from "@/data/contact-me/header";

const Header = () => {
  return (
    <header className="mt-12 md:mt-14">
      <Wrapper className="">
        <div className="mb-8">
          <h2 className="text-headerFg">{ContactMeHeaderData.path}</h2>
          <span className="text-xs">{ContactMeHeaderData.pathDescription}</span>
        </div>
        <div className="h-80 sm:h-72 px-4 text-center grid place-content-center gap-3 md:gap-4 bg-[#4E42D7] rounded-lg relative">
          <div className="absolute pointer-events-none inset-0 flex items-center bg-colorBg dark:bg-[#04051A] justify-center [mask-image:radial-gradient(ellipse_at_top_right,transparent_40%,#ffffff)] dark:[mask-image:radial-gradient(ellipse_at_top_right,transparent_40%,#04051A)]"></div>
          <ul className="flex gap-3 md:gap-4 rounded-full py-2 px-3 md:py-3 md:px-4 w-fit mx-auto z-10 bg-[#4E42D7] shadow-lg dark:shadow">
            {ContactMeHeaderData.socials.map((item, idx) => (
              <a
                href={item.link}
                aria-label={item.label}
                key={idx}
                className="border rounded-full border-white/70 dark:border-white/50 flex items-center justify-center p-[0.3rem] md:p-[0.35rem] relative"
              >
                <div className="absolute bg-primary blur w-full h-full rounded-full -z-10"></div>
                <span className="border rounded-full border-white/70 dark:border-white/50 h-7 md:h-8 w-7 md:w-8 flex items-center justify-center">
                  {item.icon}
                </span>
              </a>
            ))}
          </ul>
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold">
            {ContactMeHeaderData.title}
          </h1>
          <p className="text-small md:text-sm w-5/6 lg:w-4/5 mx-auto text-white/90">
            {ContactMeHeaderData.description}
          </p>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
