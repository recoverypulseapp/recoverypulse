export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0f4f1] to-white text-gray-800 flex flex-col items-center px-6">

      {/* Hero Section */}
      <section className="max-w-4xl text-center py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1f3b2d]">
          Recover Stronger. Return Confident.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Physio‑guided injury rehab and wellness tracking for footballers.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#2e5f47] text-white rounded-full hover:bg-[#244c38] transition">
          Start Your Recovery
        </button>
      </section>

      {/* Injury Tracking Section */}
      <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <div className="p-6 bg-white shadow-sm rounded-xl border border-gray-100">
          <h3 className="text-xl font-semibold text-[#1f3b2d]">Log Your Injury</h3>
          <p className="mt-2 text-gray-600">
            Track pain, mobility, swelling, and load tolerance with daily check‑ins.
          </p>
        </div>

        <div className="p-6 bg-white shadow-sm rounded-xl border border-gray-100">
          <h3 className="text-xl font-semibold text-[#1f3b2d]">Follow Your Rehab Plan</h3>
          <p className="mt-2 text-gray-600">
            Physio‑approved exercises with progression steps to guide your recovery.
          </p>
        </div>

        <div className="p-6 bg-white shadow-sm rounded-xl border border-gray-100">
          <h3 className="text-xl font-semibold text-[#1f3b2d]">Monitor Your Progress</h3>
          <p className="mt-2 text-gray-600">
            Visualize your recovery timeline and readiness score as you improve.
          </p>
        </div>
      </section>

      {/* Mental Wellness Section */}
      <section className="max-w-3xl text-center py-12">
        <h2 className="text-3xl font-semibold text-[#1f3b2d]">Stay Mentally Strong</h2>
        <p className="mt-3 text-gray-600">
          Football injuries affect confidence and mindset. Track motivation, focus, and mental resilience throughout your recovery.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} RecoveryPulse. All rights reserved.
      </footer>
    </main>
  );
}
