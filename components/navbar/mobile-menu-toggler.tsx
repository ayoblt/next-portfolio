'use client'

import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";
import { m } from "framer-motion";

const MobileMenuToggler = () => {
  const { isOpen, handleToggle } = useToggle();

  return (
    <m.div
      onClick={handleToggle}
      initial={{ x: "-50%" }}
      animate={isOpen ? "open" : "closed"}
      className={`fixed md:hidden antialiased backdrop-blur-xl flex items-center justify-center bg-primary dark:bg-backgroundDarker hover:bg-backgroundDarker/60 shadow-md dark:shadow-[3px_0px_150px_2px] shadow-[#011627]/30 rounded-full cursor-pointer bottom-7 left-1/2 -translate-x-1/2 z-50 w-fit
        ${isOpen ? "gap-0 p-4" : "gap-2 py-[10px] px-5"}
      `}
    >
      <div className="flex flex-col items-center justify-center gap-[3px]">
        <m.span
          variants={{
            open: {
              rotate: "45deg",
              width: "20px",
              translateY: "6px",
            },
          }}
          className="w-3 h-[3px] rounded-full bg-[#011627] dark:bg-primary"
        ></m.span>
        <m.span
          variants={{
            open: {
              opacity: 0,
              scaleX: 0,
            },
          }}
          className="w-5 h-[3px] rounded-full bg-[#011627] dark:bg-primary origin-left"
        ></m.span>
        <m.span
          variants={{
            open: {
              rotate: "-45deg",
              width: "20px",
              translateY: "-6px",
            },
          }}
          className="w-3 h-[3px] rounded-full bg-[#011627] dark:bg-primary"
        ></m.span>
      </div>
      <m.p
        variants={{
          open: {
            scaleX: 0,
            width: 0,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
            },
          },
          closed: {
            scaleX: 1,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        // initial={{ display: "block" }}
        className={cn(
          "text-sm text-[#011627] dark:text-primary font-medium whitespace-nowrap origin-right w-fit"
        )}
      >
        Menu
      </m.p>
    </m.div>
  );
};

export default MobileMenuToggler;
