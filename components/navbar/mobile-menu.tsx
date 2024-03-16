"use client";

import { NavRoutes } from "@/data/navbar";
import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SquigglyUnderline from "../squigly-underline";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const { isOpen, handleToggle } = useToggle();
  const pathname = usePathname();
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
            className={`text-white relative`}
            onClick={handleToggle}
          >
            {route.label}
            {pathname === route.path && <SquigglyUnderline />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
