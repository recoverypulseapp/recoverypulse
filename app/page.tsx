"use client";

import { motion } from "./motion";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import { useEffect } from "react";

export default function Page() {

  // ⭐ SAFE PARALLAX SCRIPT
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {

      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

    document.querySelectorAll<HTMLElement>(".parallax").forEach((el) => {
  el.style.transform = `translate(${x}px, ${y}px)`;
});


    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6">

      {/* CLEAN FAST ANIMATIONS */}
      <style>{`
        @keyframes cleanRing {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 0.4; }
        }

        @keyframes cleanGrid {
          0% { opacity: 0.1; }
          50% { opacity: 0.2; }
          100% { opacity: 0.1; }
        }

        @keyframes cleanPitch {
          0% { opacity: 0.25; }
          50% { opacity: 0.6; }
          100% { opacity: 0.25; }
        }

        @keyframes cleanSparkle {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
          100% { opacity: 0.2; transform: scale(1); }
        }

        .parallax {
          transition: transform 0.2s ease-out;
          will-change: transform;
        }

        .rimlight {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-40%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #00FF6A55 0%, transparent 70%);
          filter: blur(80px);
          opacity: 0.6;
          pointer-events: none;
        }

        @keyframes sweep {
          0% { opacity: 0; transform: translateX(-40%); }
          50% { opacity: 0.4; }
          100% { opacity: 0; transform: translateX(40%); }
        }

        .sweep {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120%;
          height: 200px;
          background: linear-gradient(90deg, transparent, #00FF6A33, transparent);
          transform: translate(-50%, -50%);
          animation: sweep 6s infinite ease-in-out;
          pointer-events: none;
        }

        @keyframes ctaPulse {
          0% { box-shadow: 0 0 10px #00FF6A; }
          50% { box-shadow: 0 0 25px #00FF6A; }
          100% { box-shadow: 0 0 10px #00FF6A; }
        }

        .cta-glow {
          animation: ctaPulse 2.4s infinite ease-in-out;
        }

        @media (max-width: 768px) {
          .parallax {
            transform: none !important;
          }
          .rimlight {
            opacity: 0.3;
            filter: blur(40px);
          }
          .sweep {
            opacity: 0.2;
          }
        }

        * {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
          .cta-tilt:hover {
  transform: perspective(600px) rotateX(4deg) rotateY(-3deg) scale(1.05);
}
.player-tilt:hover {
  transform: perspective(800px) rotateY(-6deg) scale(1.03);
}


      `}</style>

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center py-32 overflow-hidden">

        <div className="rimlight parallax"></div>

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div
            className="absolute w-[500px] h-[500px] border-[4px] border-[#00FF6A] rounded-full blur-xl opacity-40 parallax"
            style={{ animation: "cleanRing 5s infinite ease-in-out" }}
          ></div>

          <div
            className="absolute w-[650px] h-[650px] border-[3px] border-[#00FF6A55] rounded-full blur-2xl opacity-30 parallax"
            style={{ animation: "cleanRing 7s infinite ease-in-out reverse" }}
          ></div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none opacity-20 parallax"
  

          style={{
            backgroundImage:
              "linear-gradient(#00FF6A22 1px, transparent 1px), linear-gradient(90deg, #00FF6A22 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            animation: "cleanGrid 6s infinite ease-in-out",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 right-0 h-[140px] bg-[#00FF6A22] rounded-t-[45%] blur-xl"
          style={{ animation: "cleanPitch 4s infinite ease-in-out" }}
        ></div>

        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#00FF6A] opacity-60"></div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#00FF6A] rounded-full blur-sm"
              style={{
                top: `${15 + i * 7}%`,
                left: `${10 + (i * 9) % 80}%`,
                animation: "cleanSparkle 3.5s infinite ease-in-out",
              }}
            ></div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-[#00FF6A22] to-transparent blur-3xl"></div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 pl-6 z-10 text-left">
 {[
  ["Recovery Speed", "+32%"],
  ["Mobility Score", "78/100"],
  ["Pain Reduction", "−45%"],
  ["Confidence Boost", "+21%"],
].map(([label, value], i) => (
  <Reveal delay={i * 0.15} key={i}>
    <div
      className="parallax bg-black/40 backdrop-blur-md border border-[#00FF6A55] rounded-xl px-5 py-4 shadow-[0_0_15px_#00FF6A33] hover:scale-105 transition-transform"
   style={{ transform: "translateZ(20px)" }}

   >
      <p className="text-sm text-gray-300">{label}</p>
      <p className="text-3xl font-bold text-[#00FF6A]">
        <CountUp value={value} />
      </p>
    </div>
  </Reveal>
))}

</div>

<img
  src="/neon-football-player.png"
  alt="Neon Player"
  className="absolute right-0 top-1/2 -translate-y-[40%] h-[115%] object-contain opacity-60 blur-[1px] z-10 parallax player-tilt"
  style={{ transform: "translateZ(40px)" }}
/>
<div
  className="
    absolute right-[12%] top-[65%]
    bg-black/50 backdrop-blur-xl border border-red-500/40
    rounded-2xl px-6 py-4 shadow-[0_0_25px_rgba(255,0,0,0.4)]
    flex flex-col items-center text-center
    parallax injury-meter
  "
>
  <p className="text-sm text-gray-300 tracking-wide">Injury Risk</p>

  <p className="text-4xl font-extrabold text-red-400">
    <CountUp value="14" />%
  </p>

</div>

<div className="sweep"></div>


<Reveal>
  <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight">
    Recover Stronger.
    <span className="block text-[#00FF6A]">Return Confident.</span>
  </h1>
</Reveal>

<Reveal delay={0.2}>
  <p className="relative z-10 mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl">
    Elite physio‑guided injury rehab and performance tracking for footballers.
  </p>
</Reveal>

<Reveal delay={0.4}>
 <button
  className="
    relative z-10 mt-8 px-7 py-3 
    bg-[#00FF6A] text-black font-semibold rounded-full text-lg
    transition-transform duration-300 ease-out
    hover:scale-[1.03] hover:-rotate-[0.5deg] hover:bg-[#00cc55]
    shadow-[0_0_12px_#00FF6Aaa]
    cta-glow cta-tilt parallax
  "
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
    <div
      key={i}
      className="p-8 bg-[#0a0a0a] rounded-2xl border border-[#1f1f1f]"
    >
      <h3 className="text-2xl font-bold text-[#00FF6A] mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  ))}
</section>


      {/* MENTAL WELLNESS */}
      <section className="text-center max-w-3xl mx-auto py-20">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#00FF6A]">
            Stay Mentally Strong
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 text-gray-400 text-lg">
            Football injuries affect confidence and mindset. Track motivation, focus, and mental resilience throughout your recovery.
          </p>
        </Reveal>
      </section>

      <footer className="text-center text-gray-400 py-14 mt-24 border-t border-[#1f1f1f]">
  © 2026 RecoveryPulse. All rights reserved.
</footer>


    </main>
  );
}
