"use client";

import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  LazyMotion,
  m,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
const loadFeatures = () =>
  import("@/app/features.js").then((res) => res.default);

const MobileMenuToggler = () => {
  const [visible, setVisible] = useState(true);
  const { isOpen, handleToggle } = useToggle();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollY.get() <= 150 || direction < 0) {
        // console.log("scrollY", scrollY.get(), "direction", direction);
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <LazyMotion features={loadFeatures}>
      <AnimatePresence mode="wait">
        <m.div
          initial={{
            opacity: 1,
            bottom: "1.75rem",
            x: "-50%",
          }}
          animate={{
            bottom: visible ? "1.75rem" : "-100%",
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={handleToggle}
          className={cn(
            "fixed md:hidden antialiased backdrop-blur-xl flex items-center justify-center bg-primary dark:bg-backgroundDarker hover:bg-backgroundDarker/60 shadow-md dark:shadow-[3px_0px_150px_2px] shadow-[#011627]/30 rounded-full cursor-pointer left-1/2 z-50 transition-all duration-300 -translate-x-1/2 bottom-7",
            isOpen ? "gap-0 h-10 w-10" : "gap-2 h-10 w-24"
          )}
        >
          <div className="flex flex-col items-center justify-center gap-[3px] transition-all duration-300">
            <span
              className={cn(
                "w-3 h-[3px] rounded-full bg-[#011627] dark:bg-primary transition-all duration-300",
                isOpen
                  ? "rotate-45 translate-y-[6px] w-5"
                  : "rotate-0 translate-y-0"
              )}
            ></span>
            <span
              className={cn(
                "w-5 h-[3px] rounded-full bg-[#011627] dark:bg-primary origin-left transition-all duration-300",
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
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
};

export default MobileMenuToggler;
