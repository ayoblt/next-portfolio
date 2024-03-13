'use client'

import { LazyMotion, domAnimation } from "framer-motion";

const FramerLazyMotion = ({ children }: { children: React.ReactNode }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default FramerLazyMotion;
