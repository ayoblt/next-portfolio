"use client";

import { NavRoutes } from "@/data/navbar";
import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MobileMenu = () => {
  const { isOpen, handleToggle } = useToggle();
  return (
    <ul
      className={`${
        isOpen ? "scale-100" : "scale-0"
      } fixed flex md:hidden px-4 py-7 flex-col justify-center items-center gap-3 bg-gray-700/70 bottom-24 w-5/6 left-1/2 rounded-2xl origin-bottom z-50 -translate-x-1/2 transition-all`}
    >
      {NavRoutes.map((route) => (
        <li
          key={route.label}
          className={cn(
            "text-small capitalize w-full text-center font-medium tracking-wider py-1 ",
            isOpen ? "opacity-100 translate-y-0" : "translate-y-5 opacity-0"
          )}
        >
          <Link
            href={route.path}
            className={`text-white relative after:absolute after:h-3 after:bg-white after:rounded-full after:top-1/2 transition after:opacity-0 after:transition after:duration-700 after:-left-4 after:scale-0 after:-translate-y-full after:w-0`}
            onClick={handleToggle}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
