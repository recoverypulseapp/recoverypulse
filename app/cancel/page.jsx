export default function Cancel() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-red-400 mb-6">
        Payment Cancelled
      </h1>

      <p className="text-gray-300 text-lg max-w-xl text-center">
        No worries — you can restart your recovery anytime.
      </p>

      <a
        href="/"
        className="mt-10 px-6 py-3 bg-[#00FF6A] text-black rounded-full font-semibold hover:bg-[#00cc55] transition"
      >
        Try Again
      </a>
    </main>
  );
}
