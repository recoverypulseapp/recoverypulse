"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Reveal({ children, delay = 0 }) {
  const { ref, visible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
