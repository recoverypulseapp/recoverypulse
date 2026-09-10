export default function Onboarding() {
  return (
    <section className="max-w-5xl mx-auto py-20">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_25px_#00FF6A]">
          Welcome to RecoveryPulse
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          Let’s personalize your recovery experience.
        </p>
      </div>

      {/* STEP CONTAINER */}
      <div
        className="
          p-10 rounded-2xl bg-black/40 backdrop-blur-xl
          border border-[#00FF6A55]
          shadow-[0_0_35px_#00FF6A33]
          space-y-12
        "
      >

        {/* STEP 1 — Injury Type */}
        <div>
          <h2 className="text-3xl font-bold text-[#00FF6A] drop-shadow-[0_0_15px_#00FF6A] mb-4">
            Step 1: Select Your Injury
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Ankle", "Knee", "Hamstring"].map((injury, i) => (
              <button
                key={i}
                className="
                  p-6 rounded-xl bg-black/40 backdrop-blur-xl
                  border border-[#00FF6A33]
                  shadow-[0_0_20px_#00FF6A22]
                  text-white font-semibold
                  hover:border-[#00FF6A]
                  hover:shadow-[0_0_35px_#00FF6A55]
                  transition-all duration-300
                "
              >
                {injury}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 2 — Severity */}
        <div>
          <h2 className="text-3xl font-bold text-[#00FF6A] drop-shadow-[0_0_15px_#00FF6A] mb-4">
            Step 2: Injury Severity
          </h2>

          <input
            type="range"
            min="1"
            max="10"
            className="w-full accent-[#00FF6A] cursor-pointer"
          />

          <p className="text-gray-400 mt-3">
            Rate your injury severity from 1 (mild) to 10 (severe).
          </p>
        </div>

        {/* STEP 3 — Position */}
        <div>
          <h2 className="text-3xl font-bold text-[#00FF6A] drop-shadow-[0_0_15px_#00FF6A] mb-4">
            Step 3: Playing Position
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Forward", "Midfielder", "Defender"].map((pos, i) => (
              <button
                key={i}
                className="
                  p-6 rounded-xl bg-black/40 backdrop-blur-xl
                  border border-[#00FF6A33]
                  shadow-[0_0_20px_#00FF6A22]
                  text-white font-semibold
                  hover:border-[#00FF6A]
                  hover:shadow-[0_0_35px_#00FF6A55]
                  transition-all duration-300
                "
              >
                {pos}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 4 — Goals */}
        <div>
          <h2 className="text-3xl font-bold text-[#00FF6A] drop-shadow-[0_0_15px_#00FF6A] mb-4">
            Step 4: Your Recovery Goal
          </h2>

          <textarea
            rows={4}
            placeholder="Describe your main recovery goal..."
            className="
              w-full mt-4 p-4 rounded-xl bg-black/40 text-gray-300
              border border-[#00FF6A33]
              shadow-[0_0_20px_#00FF6A22]
              focus:outline-none focus:border-[#00FF6A]
              transition-all duration-300
            "
          />
        </div>

        {/* SUBMIT */}
        <button
          className="
            w-full mt-6 py-4 rounded-xl
            bg-[#00FF6A] text-black font-bold text-lg
            shadow-[0_0_25px_#00FF6A]
            hover:shadow-[0_0_40px_#00FF6A]
            transition-all duration-300
          "
        >
          Finish Setup
        </button>

      </div>
    </section>
  );
}
