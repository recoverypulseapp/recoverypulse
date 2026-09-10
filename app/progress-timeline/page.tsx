export default function ProgressTimeline() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_25px_#00FF6A]">
          Progress Timeline
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          Visualize your recovery journey and track improvements over time.
        </p>
      </div>

      {/* CHART CONTAINER */}
      <div
        className="
          p-10 rounded-2xl bg-black/40 backdrop-blur-xl
          border border-[#00FF6A55]
          shadow-[0_0_35px_#00FF6A33]
          mb-20
        "
      >
        <h2 className="text-3xl font-bold text-[#00FF6A] drop-shadow-[0_0_15px_#00FF6A] mb-6">
          Recovery Curve
        </h2>

        {/* FAKE GRAPH (STATIC FOR NOW) */}
        <div className="relative h-64 w-full">
          <div className="absolute inset-0 border border-[#00FF6A33] rounded-xl"></div>

          <svg className="absolute inset-0 w-full h-full">
            <polyline
              fill="none"
              stroke="#00FF6A"
              strokeWidth="4"
              strokeLinecap="round"
              className="drop-shadow-[0_0_10px_#00FF6A]"
              points="
                0,180
                80,160
                160,140
                240,120
                320,100
                400,80
                480,60
                560,50
              "
            />
          </svg>
        </div>

        <p className="text-gray-400 mt-6">
          Your recovery curve shows consistent improvement in mobility, pain reduction,
          and confidence over the past weeks.
        </p>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {[
          ["Pain Trend", "Pain levels have decreased steadily over the last 14 days."],
          ["Mobility Trend", "Mobility has increased by 18% since last week."],
          ["Confidence Trend", "Confidence has risen as pain decreases and stability improves."],
        ].map(([title, desc], i) => (
          <div
            key={i}
            className="
              p-10 rounded-2xl bg-black/40 backdrop-blur-xl
              border border-[#00FF6A55]
              shadow-[0_0_35px_#00FF6A33]
              hover:shadow-[0_0_50px_#00FF6A55]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-bold text-[#00FF6A] drop-shadow-[0_0_15px_#00FF6A] mb-3">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}
