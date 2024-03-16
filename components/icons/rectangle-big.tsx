"use client";

import { m } from "framer-motion";

const RectangleBig = ({
  className,
  strokeClassName,
}: {
  className?: string;
  strokeClassName?: string;
}) => {
  return (
    <svg
      width="68"
      height="155"
      viewBox="0 0 68 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <m.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "circInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        strokeWidth={2}
        x="0.5"
        y="0.5"
        width="154"
        height="154"
        stroke="currentColor"
        className={strokeClassName}
      />
    </svg>
  );
};

export default RectangleBig;
