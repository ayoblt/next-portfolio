"use client";

import { NavRoutes } from "@/data/navbar";
import { useToggle } from "@/hooks/use-toggle";
import { m } from "framer-motion";
import Link from "next/link";

const MobileMenu = () => {
  const { isOpen, handleToggle } = useToggle();
  return (
    <m.ul
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: {
          scale: 1,
          display: "flex",
          transition: {
            type: "spring",
            duration: 0.7,
            ease: "easeInOut",
          },
        },
        closed: {
          scale: 0,
        },
      }}
      initial={{ x: "-50%" }}
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed md:hidden px-4 py-7 flex-col justify-center items-center gap-3 bg-gray-700/70 bottom-24 w-5/6 left-1/2 rounded-2xl origin-bottom z-50`}
    >
      {NavRoutes.map((route) => (
        <m.li
          variants={{
            open: {
              opacity: 1,
              y: 0,
            },
            closed: {
              opacity: 0,
              y: "20px",
            },
          }}
          initial={{ opacity: 0, y: "20px" }}
          key={route.label}
          className="text-small capitalize w-full text-center font-medium tracking-wider py-1 translate-y-5 opacity-0"
        >
          <Link
            href={route.path}
            className={`text-white relative after:absolute after:h-3 after:bg-white after:rounded-full after:top-1/2 transition after:opacity-0 after:transition after:duration-700 after:-left-4 after:scale-0 after:-translate-y-full after:w-0`}
            onClick={handleToggle}
          >
            {route.label}
          </Link>
        </m.li>
      ))}
    </m.ul>
  );
};

export default MobileMenu;
