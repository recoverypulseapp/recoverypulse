"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-32">
        
        {/* Glowing Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF6A15] to-transparent blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Recover Stronger.
          <span className="block text-[#00FF6A]">Return Confident.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl"
        >
          Elite physio‑guided injury rehab and performance tracking for footballers.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 px-8 py-4 bg-[#00FF6A] text-black font-semibold rounded-full text-lg hover:bg-[#00cc55] transition-all shadow-[0_0_20px_#00FF6A]"
        >
          Start Your Recovery
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-24">

        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 bg-[#0a0a0a] rounded-2xl border border-[#00FF6A33] shadow-[0_0_20px_#00FF6A22]"
        >
          <h3 className="text-2xl font-bold text-[#00FF6A]">Log Your Injury</h3>
          <p className="mt-3 text-gray-400">
            Track pain, mobility, swelling, and load tolerance with daily check‑ins.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="p-8 bg-[#0a0a0a] rounded-2xl border border-[#00FF6A33] shadow-[0_0_20px_#00FF6A22]"
        >
          <h3 className="text-2xl font-bold text-[#00FF6A]">Follow Your Rehab Plan</h3>
          <p className="mt-3 text-gray-400">
            Physio‑approved exercises with progression steps to guide your recovery.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 bg-[#0a0a0a] rounded-2xl border border-[#00FF6A33] shadow-[0_0_20px_#00FF6A22]"
        >
          <h3 className="text-2xl font-bold text-[#00FF6A]">Monitor Your Progress</h3>
          <p className="mt-3 text-gray-400">
            Visualize your recovery timeline and readiness score as you improve.
          </p>
        </motion.div>

      </section>

      {/* Mental Wellness */}
      <section className="text-center max-w-3xl mx-auto py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#00FF6A]"
        >
          Stay Mentally Strong
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 text-lg"
        >
          Football injuries affect confidence and mindset. Track motivation, focus, and mental resilience throughout your recovery.
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} RecoveryPulse. All rights reserved.
      </footer>
    </main>
  );
}
