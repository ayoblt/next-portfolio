"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
