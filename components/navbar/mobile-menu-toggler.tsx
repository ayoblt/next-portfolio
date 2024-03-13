"use client";

import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";

const MobileMenuToggler = () => {
  const { isOpen, handleToggle } = useToggle();

  return (
    <div
      onClick={handleToggle}
      className={`fixed md:hidden antialiased backdrop-blur-xl flex items-center justify-center bg-primary dark:bg-backgroundDarker hover:bg-backgroundDarker/60 shadow-md dark:shadow-[3px_0px_150px_2px] shadow-[#011627]/30 rounded-full cursor-pointer bottom-7 left-1/2 -translate-x-1/2 z-50 w-fit transition-all duration-300
        ${isOpen ? "gap-0 p-5" : "gap-2 py-[10px] px-5"}
      `}
    >
      <div className="flex flex-col items-center justify-center gap-[3px] transition-all">
        <span
          className={cn(
            "w-3 h-[3px] rounded-full bg-[#011627] dark:bg-primary transition-all",
            isOpen
              ? "rotate-45 translate-y-[6px] w-5"
              : "rotate-0 translate-y-0"
          )}
        ></span>
        <span
          className={cn(
            "w-5 h-[3px] rounded-full bg-[#011627] dark:bg-primary origin-left transition-all",
            isOpen ? "scale-x-0 opacity-0" : ""
          )}
        ></span>
        <span
          className={cn(
            "w-3 h-[3px] rounded-full bg-[#011627] dark:bg-primary transition-all",
            isOpen
              ? "-rotate-45 -translate-y-[6px] w-5"
              : "rotate-0 translate-y-0"
          )}
        ></span>
      </div>
      <p
        className={cn(
          "text-sm text-[#011627] dark:text-primary font-medium whitespace-nowrap origin-right w-fit ",
          isOpen ? "w-0 scale-0 opacity-0" : ""
        )}
      >
        Menu
      </p>
    </div>
  );
};

export default MobileMenuToggler;
