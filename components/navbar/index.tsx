"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "../logo";
import DesktopMenu from "./desktop-menu";
import ThemeToggler from "./theme-toggler";
import {
  AnimatePresence,
  LazyMotion,
  m,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
const loadFeatures = () =>
  import("@/app/features.js").then((res) => res.default);

export const Navbar = ({ className }: { className?: string }) => {
  const { scrollY, scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

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
        <m.nav
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "w-full fixed top-0 px-8 h-12 md:h-14 flex items-center justify-between z-[999] backdrop-blur-md",
            className
          )}
        >
          <Logo />
          <DesktopMenu />
          <ThemeToggler />
        </m.nav>
      </AnimatePresence>
    </LazyMotion>
  );
};
