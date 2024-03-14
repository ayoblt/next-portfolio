import Wrapper from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Wrapper className="h-screen bg-background relative flex flex-col items-center justify-center py-36">
      <h2 className="mb-8 text-lg font-medium whitespace-nowrap">
        This page is under construction!
      </h2>
      <div className="w-fit mb-8">
        <Image
          src="/images/under-construction.svg"
          alt="under construction"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>
      <div>
        <Link
          href="/"
          className="text-secondary hover:no-underline hover:font-medium underline"
        >
          Go back Home
        </Link>
      </div>
    </Wrapper>
  );
}
