'use client'

import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust max-width as needed
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  return isMobile;
};

export const Overlay = () => {
  const { isOpen, handleToggle } = useToggle();
  const isMobile = useIsMobile();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (isOpen && isMobile) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
  }, [isOpen, isMobile]);

  return (
    <div
      className={cn(
        "fixed md:hidden top-0 bottom-0 left-0 right-0 bg-transparent backdrop-blur-md z-30",
        isOpen ? "block" : "hidden"
      )}
      role="none"
      onClick={handleToggle}
    ></div>
  );
};
