export default function Dashboard() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_25px_#00FF6A]">
          Your Dashboard
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          Track your recovery, performance, and readiness with elite precision.
        </p>
      </div>

      {/* TOP METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        {[
          ["Recovery Score", "68"],
          ["Pain Level", "3/10"],
          ["Mobility", "78/100"],
          ["Confidence", "21"],
        ].map(([label, value], i) => (
          <div
            key={i}
            className="
              p-8 rounded-2xl bg-black/40 backdrop-blur-xl
              border border-[#00FF6A55]
              shadow-[0_0_25px_#00FF6A33]
              hover:shadow-[0_0_40px_#00FF6A55]
              transition-all duration-300
            "
          >
            <p className="text-gray-400 text-sm tracking-wide">{label}</p>
            <p className="text-4xl font-extrabold text-[#00FF6A] mt-2 drop-shadow-[0_0_15px_#00FF6A]">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* TODAY'S SUMMARY */}
      <div
        className="
          p-10 rounded-2xl bg-black/40 backdrop-blur-xl
          border border-[#00FF6A33]
          shadow-[0_0_30px_#00FF6A22]
          mb-20
        "
      >
        <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-[0_0_20px_#00FF6A]">
          Today’s Summary
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Your recovery is accelerating. Mobility is improving, pain is decreasing,
          and your readiness score is trending upward. Stay consistent with your rehab plan
          to maintain elite progress.
        </p>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          ["Log Today’s Injury Check‑In", "Record pain, swelling, mobility, and notes."],
          ["Start Your Rehab Exercises", "Complete today’s physio‑approved routine."],
          ["View Your Progress Timeline", "See how your recovery is improving over time."],
        ].map(([title, desc], i) => (
          <div
            key={i}
            className="
              p-10 rounded-2xl bg-black/40 backdrop-blur-xl
              border border-[#00FF6A55]
              shadow-[0_0_25px_#00FF6A33]
              hover:shadow-[0_0_40px_#00FF6A55]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-bold text-[#00FF6A] mb-3 drop-shadow-[0_0_15px_#00FF6A]">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
