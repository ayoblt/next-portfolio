import { cn } from "@/lib/utils";
import { Bai_Jamjuree } from "next/font/google";
import Link from "next/link";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["600"],
});

const Logo = () => {
  return (
    <div
      className={cn(
        "flex gap-3 items-center text-lg md:text-xl text-headerFg tracking-wider font-semibold relative",
        baiJamjuree.className
      )}
    >
      <Link href="/">
        <span className="before:absolute before:top-1/2 before:-translate-y-1/2 before:h-3/4 before:w-[2.5px] before:-left-3 before:bg-primary">
          Lateef
        </span>
      </Link>
    </div>
  );
};

export default Logo;
