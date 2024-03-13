import { cn } from "@/lib/utils";

const ArrowRight = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 34 15"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-5"
    >
      <path
        d="M0.993225 6.5H-0.0067749V8.5H0.993225V6.5ZM33.7003 8.20711C34.0909 7.81658 34.0909 7.18342 33.7003 6.79289L27.3364 0.428932C26.9458 0.0384079 26.3127 0.0384079 25.9222 0.428932C25.5316 0.819456 25.5316 1.45262 25.9222 1.84315L31.579 7.5L25.9222 13.1569C25.5316 13.5474 25.5316 14.1805 25.9222 14.5711C26.3127 14.9616 26.9458 14.9616 27.3364 14.5711L33.7003 8.20711ZM0.993225 8.5H32.9932V6.5H0.993225V8.5Z"
        fill="white"
        className={cn("fill-colorTextPrimary", className)}
      />
    </svg>
  );
};

export default ArrowRight;
