"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== "undefined" ? window.location.pathname : ""}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="p-10"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
