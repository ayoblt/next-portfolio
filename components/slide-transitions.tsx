"use client";

import { Variants, motion } from "framer-motion";

const slideUpVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeIn",
      delay: i * 0.1,
    },
  }),
};

const slideRightVariants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      type: "spring",
      delay: i * 0.1,
    },
  }),
  hidden: {
    opacity: 0,
    x: -100,
  },
};

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  custom?: number;
  viewport?: {
    amount?: number;
    once?: boolean;
  };
}

const SlideUpTransition = ({
  children,
  className,
  custom,
  viewport,
}: SlideInProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={custom}
      viewport={viewport || { amount: 0.2, once: true }}
      variants={slideUpVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SlideRightTransition = ({
  children,
  className,
  custom,
  viewport,
}: SlideInProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={custom}
      viewport={viewport || { amount: 0.2, once: true }}
      variants={slideRightVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { SlideUpTransition, SlideRightTransition };
