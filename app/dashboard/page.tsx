"use client";

import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";

export default function DashboardPage() {
  return (
    <main
      className="
        min-h-screen 
        bg-black 
        text-white 
        px-4 sm:px-6 md:px-10 
        pt-[env(safe-area-inset-top)] 
        pb-[env(safe-area-inset-bottom)] 
        scroll-smooth
      "
    >
      {/* HEADER */}
      <div className="mt-6 mb-10">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Your Dashboard
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-gray-400 mt-2 text-base sm:text-lg max-w-md">
            Track your recovery, performance, and readiness with elite precision.
          </p>
        </Reveal>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Recovery Score */}
        <Reveal>
          <div
            className="
              bg-[#0A0A0A] 
              border border-[#00FF6A22] 
              rounded-2xl 
              p-6 
              shadow-[0_0_20px_rgba(0,255,106,0.15)]
              transition-transform 
              hover:scale-[1.02]
            "
          >
            <p className="text-gray-300 text-sm">Recovery Score</p>
            <p className="text-4xl font-bold text-[#00FF6A] mt-2">
              <CountUp value={68} />
            </p>
          </div>
        </Reveal>

        {/* Pain Level */}
        <Reveal delay={0.1}>
          <div
            className="
              bg-[#0A0A0A] 
              border border-[#00FF6A22] 
              rounded-2xl 
              p-6 
              shadow-[0_0_20px_rgba(255,0,0,0.15)]
              transition-transform 
              hover:scale-[1.02]
            "
          >
            <p className="text-gray-300 text-sm">Pain Level</p>
            <p className="text-4xl font-bold text-red-400 mt-2">
              <CountUp value={3} />/10
            </p>
          </div>
        </Reveal>

        {/* Mobility */}
        <Reveal delay={0.2}>
          <div
            className="
              bg-[#0A0A0A] 
              border border-[#00FF6A22] 
              rounded-2xl 
              p-6 
              shadow-[0_0_20px_rgba(0,255,106,0.15)]
              transition-transform 
              hover:scale-[1.02]
            "
          >
            <p className="text-gray-300 text-sm">Mobility</p>
            <p className="text-4xl font-bold text-[#00FF6A] mt-2">
              <CountUp value={78} />/100
            </p>
          </div>
        </Reveal>

      </div>

      {/* SECTION DIVIDER */}
      <div className="my-12 h-px bg-[#1f1f1f]" />

      {/* NEXT STEPS */}
      <Reveal>
        <h2 className="text-2xl font-bold text-[#00FF6A] mb-4">
          Next Steps
        </h2>
      </Reveal>

      <div className="flex flex-col gap-6">

        <Reveal delay={0.1}>
          <div
            className="
              bg-[#0A0A0A] 
              border border-[#00FF6A22] 
              rounded-xl 
              p-5 
              shadow-[0_0_15px_rgba(0,255,106,0.1)]
              hover:scale-[1.02] 
              transition-transform
            "
          >
            <p className="text-lg font-semibold text-white">
              Log Today’s Pain & Mobility
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Keep your recovery data accurate and up to date.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="
              bg-[#0A0A0A] 
              border border-[#00FF6A22] 
              rounded-xl 
              p-5 
              shadow-[0_0_15px_rgba(0,255,106,0.1)]
              hover:scale-[1.02] 
              transition-transform
            "
          >
            <p className="text-lg font-semibold text-white">
              Continue Your Rehab Plan
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Follow your physio‑approved exercises for today.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div
            className="
              bg-[#0A0A0A] 
              border border-[#00FF6A22] 
              rounded-xl 
              p-5 
              shadow-[0_0_15px_rgba(0,255,106,0.1)]
              hover:scale-[1.02] 
              transition-transform
            "
          >
            <p className="text-lg font-semibold text-white">
              Review Your Progress Timeline
            </p>
            <p className="text-gray-400 text-sm mt-1">
              See how your recovery is improving week by week.
            </p>
          </div>
        </Reveal>

      </div>

      <div className="h-20" />
    </main>
  );
}
