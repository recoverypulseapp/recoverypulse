"use client";

import { useEffect } from "react";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import { motion } from "./motion";

export default function Page() {
  // Stripe Checkout
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        priceId: "price_12345", // replace with your Stripe price ID
      }),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  // Safe Parallax (disabled on mobile)
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      document.querySelectorAll<HTMLElement>(".parallax").forEach((el) => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 overflow-hidden">

      {/* GLOBAL ANIMATIONS */}
      <style>{`
        .parallax { transition: transform 0.2s ease-out; will-change: transform; }
        .cta-glow { animation: ctaPulse 2.4s infinite ease-in-out; }
        .cta-tilt:hover { transform: perspective(600px) rotateX(4deg) rotateY(-3deg) scale(1.05); }
        .player-tilt:hover { transform: perspective(800px) rotateY(-6deg) scale(1.03); }

        @keyframes ctaPulse {
          0% { box-shadow: 0 0 10px #00FF6A; }
          50% { box-shadow: 0 0 25px #00FF6A; }
          100% { box-shadow: 0 0 10px #00FF6A; }
        }

        @media (max-width: 768px) {
          .parallax { transform: none !important; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center text-center py-32">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00FF6A55] blur-[120px] opacity-40 parallax"></div>
        </div>

        {/* Floating Stats */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 pl-6 z-10 text-left">
          {[
            ["Recovery Speed", "+32%"],
            ["Mobility Score", "78/100"],
            ["Pain Reduction", "−45%"],
            ["Confidence Boost", "+21%"],
          ].map(([label, value], i) => (
            <Reveal delay={i * 0.15} key={i}>
              <div className="parallax bg-black/40 backdrop-blur-md border border-[#00FF6A55] rounded-xl px-5 py-4 shadow-[0_0_15px_#00FF6A33] hover:scale-105 transition-transform">
                <p className="text-sm text-gray-300">{label}</p>
                <p className="text-3xl font-bold text-[#00FF6A]">
                  <CountUp value={value} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hero Player */}
        <img
          src="/neon-football-player.png"
          alt="Neon Player"
          className="absolute right-0 top-1/2 -translate-y-[40%] h-[115%] object-contain opacity-60 blur-[1px] z-10 parallax player-tilt"
        />

        {/* Injury Meter */}
        <div className="absolute right-[12%] top-[65%] bg-black/50 backdrop-blur-xl border border-red-500/40 rounded-2xl px-6 py-4 shadow-[0_0_25px_rgba(255,0,0,0.4)] flex flex-col items-center text-center parallax">
          <p className="text-sm text-gray-300 tracking-wide">Injury Risk</p>
          <p className="text-4xl font-extrabold text-red-400">
            <CountUp value="14" />%
          </p>
        </div>

        {/* Title */}
        <Reveal>
          <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight">
            Recover Stronger.
            <span className="block text-[#00FF6A]">Return Confident.</span>
          </h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={0.2}>
          <p className="relative z-10 mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl">
            Elite physio‑guided injury rehab and performance tracking for footballers.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.4}>
          <button
            onClick={handleCheckout}
            className="relative z-10 mt-8 px-7 py-3 bg-[#00FF6A] text-black font-semibold rounded-full text-lg transition-transform duration-300 ease-out hover:scale-[1.03] hover:bg-[#00cc55] shadow-[0_0_12px_#00FF6Aaa] cta-glow cta-tilt parallax"
          >
            Start Your Recovery
          </button>
        </Reveal>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-24">
        {[
          ["Log Your Injury", "Track pain, mobility, swelling, and load tolerance with daily check‑ins."],
          ["Follow Your Rehab Plan", "Physio‑approved exercises with progression steps to guide your recovery."],
          ["Monitor Your Progress", "Visualize your recovery timeline and readiness score as you improve."],
        ].map(([title, desc], i) => (
          <div key={i} className="p-8 bg-[#0a0a0a] rounded-2xl border border-[#1f1f1f]">
            <h3 className="text-2xl font-bold text-[#00FF6A] mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      {/* MENTAL WELLNESS */}
      <section className="text-center max-w-3xl mx-auto py-20">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#00FF6A]">Stay Mentally Strong</h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 text-gray-400 text-lg">
            Football injuries affect confidence and mindset. Track motivation, focus, and mental resilience throughout your recovery.
          </p>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 py-14 mt-24 border-t border-[#1f1f1f]">
        © 2026 RecoveryPulse. All rights reserved.
      </footer>
    </main>
  );
}
