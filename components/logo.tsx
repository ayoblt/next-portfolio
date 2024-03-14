import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex gap-3 items-center text-headerFg font-medium">
      <Link href="/">
        <span>Lateef</span>
      </Link>
    </div>
  );
};

export default Logo;
