export default function Profile() {
  return (
    <section className="max-w-5xl mx-auto py-20">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_25px_#00FF6A]">
          Your Profile
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          Player identity, injury history, and performance readiness.
        </p>
      </div>

      {/* PROFILE CARD */}
      <div
        className="
          p-10 rounded-2xl bg-black/40 backdrop-blur-xl
          border border-[#00FF6A55]
          shadow-[0_0_35px_#00FF6A33]
          mb-20
        "
      >
        {/* AVATAR */}
        <div className="flex flex-col items-center">
          <div
            className="
              w-32 h-32 rounded-full bg-[#00FF6A22]
              border border-[#00FF6A55]
              shadow-[0_0_25px_#00FF6A55]
              mb-6
            "
          ></div>

          <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_15px_#00FF6A]">
            Prince
          </h2>

          <p className="text-gray-400 mt-2">Football Player</p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {[
            ["Recovery Score", "68"],
            ["Mobility", "78/100"],
            ["Confidence", "21"],
          ].map(([label, value], i) => (
            <div
              key={i}
              className="
                p-6 rounded-xl bg-black/40 backdrop-blur-xl
                border border-[#00FF6A33]
                shadow-[0_0_20px_#00FF6A22]
                text-center
              "
            >
              <p className="text-gray-400 text-sm">{label}</p>
              <p className="text-3xl font-bold text-[#00FF6A] drop-shadow-[0_0_10px_#00FF6A] mt-2">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* HISTORY */}
      <div
        className="
          p-10 rounded-2xl bg-black/40 backdrop-blur-xl
          border border-[#00FF6A55]
          shadow-[0_0_35px_#00FF6A33]
          mb-20
        "
      >
        <h2 className="text-3xl font-bold text-[#00FF6A] drop-shadow-[0_0_15px_#00FF6A] mb-6">
          Injury History
        </h2>

        <ul className="space-y-6">
          {[
            ["Ankle Sprain", "Recovered — 2025"],
            ["Hamstring Strain", "Active — 2026"],
          ].map(([injury, status], i) => (
            <li
              key={i}
              className="
                p-6 rounded-xl bg-black/40 backdrop-blur-xl
                border border-[#00FF6A33]
                shadow-[0_0_20px_#00FF6A22]
              "
            >
              <p className="text-white text-xl font-semibold">{injury}</p>
              <p className="text-gray-400 mt-1">{status}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* SETTINGS */}
      <div
        className="
          p-10 rounded-2xl bg-black/40 backdrop-blur-xl
          border border-[#00FF6A55]
          shadow-[0_0_35px_#00FF6A33]
        "
      >
        <h2 className="text-3xl font-bold text-[#00FF6A] drop-shadow-[0_0_15px_#00FF6A] mb-6">
          Settings
        </h2>

        <div className="space-y-6">
          <button
            className="
              w-full py-4 rounded-xl
              bg-[#00FF6A] text-black font-bold
              shadow-[0_0_25px_#00FF6A]
              hover:shadow-[0_0_40px_#00FF6A]
              transition-all duration-300
            "
          >
            Update Profile
          </button>

          <button
            className="
              w-full py-4 rounded-xl
              bg-black/40 text-white font-bold
              border border-[#00FF6A33]
              shadow-[0_0_20px_#00FF6A22]
              hover:border-[#00FF6A]
              hover:shadow-[0_0_35px_#00FF6A55]
              transition-all duration-300
            "
          >
            Change Password
          </button>
        </div>
      </div>

    </section>
  );
}
