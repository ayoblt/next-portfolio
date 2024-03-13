"use client";

import { NavRoutes } from "@/data/navbar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DesktopMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="hidden md:flex text-small gap-5">
      {NavRoutes.map((route) => (
        <li
          key={route.label}
          className={cn(
            "font-medium relative px-2",
            pathname === route.path && "text-headerFg"
          )}
        >
          <Link href={route.path}>_{route.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
