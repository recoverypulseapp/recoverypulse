export default function RehabPlan() {
  return (
    <section className="max-w-5xl mx-auto py-20">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_25px_#00FF6A]">
          Rehab Plan
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          Complete today’s physio‑approved exercises and track your recovery progress.
        </p>
      </div>

      {/* EXERCISE LIST */}
      <div className="space-y-12">

        {[
          {
            name: "Single‑Leg Balance",
            sets: "3 sets × 30 sec",
            desc: "Improves ankle stability and neuromuscular control.",
          },
          {
            name: "Glute Bridge",
            sets: "3 sets × 12 reps",
            desc: "Strengthens glutes and reduces knee load.",
          },
          {
            name: "Hamstring Stretch",
            sets: "2 sets × 45 sec",
            desc: "Increases flexibility and reduces tightness.",
          },
        ].map((exercise, i) => (
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
            {/* TITLE */}
            <h2 className="text-3xl font-bold text-[#00FF6A] drop-shadow-[0_0_15px_#00FF6A]">
              {exercise.name}
            </h2>

            {/* SETS */}
            <p className="text-gray-300 mt-2 text-lg font-semibold">
              {exercise.sets}
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mt-4 leading-relaxed">
              {exercise.desc}
            </p>

            {/* COMPLETE BUTTON */}
            <button
              className="
                mt-6 px-6 py-3 rounded-xl
                bg-[#00FF6A] text-black font-bold
                shadow-[0_0_25px_#00FF6A]
                hover:shadow-[0_0_40px_#00FF6A]
                transition-all duration-300
              "
            >
              Mark as Complete
            </button>
          </div>
        ))}

      </div>

    </section>
  );
}
