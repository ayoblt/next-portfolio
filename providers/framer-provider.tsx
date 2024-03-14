"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("./features.js").then((res) => res.default);

const FramerLazyMotion = ({ children }: { children: React.ReactNode }) => {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
};

export default FramerLazyMotion;
