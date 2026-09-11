export default function InjuryLog() {
  return (
    <section className="max-w-5xl mx-auto py-20">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_25px_#00FF6A]">
          Injury Log
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          Track today’s pain, swelling, mobility, confidence, and recovery notes.
        </p>
      </div>

      {/* FORM CONTAINER */}
      <div
        className="
          p-10 rounded-2xl bg-black/40 backdrop-blur-xl
          border border-[#00FF6A55]
          shadow-[0_0_35px_#00FF6A33]
        "
      >

        {/* PAIN LEVEL */}
        <div className="mb-10">
          <label className="text-[#00FF6A] text-xl font-bold drop-shadow-[0_0_10px_#00FF6A]">
            Pain Level (0–10)
          </label>
          <input
            type="range"
            min="0"
            max="10"
            className="
              w-full mt-4 accent-[#00FF6A]
              cursor-pointer
            "
          />
        </div>

        {/* SWELLING */}
        <div className="mb-10">
          <label className="text-[#00FF6A] text-xl font-bold drop-shadow-[0_0_10px_#00FF6A]">
            Swelling Level (0–10)
          </label>
          <input
            type="range"
            min="0"
            max="10"
            className="
              w-full mt-4 accent-[#00FF6A]
              cursor-pointer
            "
          />
        </div>

        {/* MOBILITY */}
        <div className="mb-10">
          <label className="text-[#00FF6A] text-xl font-bold drop-shadow-[0_0_10px_#00FF6A]">
            Mobility (0–100)
          </label>
          <input
            type="range"
            min="0"
            max="100"
            className="
              w-full mt-4 accent-[#00FF6A]
              cursor-pointer
            "
          />
        </div>

        {/* CONFIDENCE */}
        <div className="mb-10">
          <label className="text-[#00FF6A] text-xl font-bold drop-shadow-[0_0_10px_#00FF6A]">
            Confidence (0–100)
          </label>
          <input
            type="range"
            min="0"
            max="100"
            className="
              w-full mt-4 accent-[#00FF6A]
              cursor-pointer
            "
          />
        </div>

        {/* NOTES */}
        <div className="mb-10">
          <label className="text-[#00FF6A] text-xl font-bold drop-shadow-[0_0_10px_#00FF6A]">
            Notes
          </label>
          <textarea
            rows={5}
            placeholder="Describe how your injury feels today..."
            className="
              w-full mt-4 p-4 rounded-xl bg-black/40 text-gray-300
              border border-[#00FF6A33]
              shadow-[0_0_20px_#00FF6A22]
              focus:outline-none focus:border-[#00FF6A]
              transition-all duration-300
            "
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          className="
            w-full mt-6 py-4 rounded-xl
            bg-[#00FF6A] text-black font-bold text-lg
            shadow-[0_0_25px_#00FF6A]
            hover:shadow-[0_0_40px_#00FF6A]
            transition-all duration-300
          "
        >
          Save Today’s Log
        </button>

      </div>
    </section>
  );
}
