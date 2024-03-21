import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex gap-3 items-center text-lg text-headerFg tracking-wider font-semibold relative">
      <Link href="/">
        <span className="before:absolute before:top-1/2 before:-translate-y-1/2 before:h-3/4 before:w-[2.5px] before:-left-3 before:bg-primary">
          Lateef
        </span>
      </Link>
    </div>
  );
};

export default Logo;
