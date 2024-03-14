"use client";

import { AnimatePresence } from "framer-motion";

const AnimatePresenceComp = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default AnimatePresenceComp;
