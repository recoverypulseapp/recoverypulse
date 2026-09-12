export default function Success() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-[#00FF6A] mb-6">
        Payment Successful
      </h1>

      <p className="text-gray-300 text-lg max-w-xl text-center">
        Welcome to RecoveryPulse, Prince. Your recovery journey starts now.
      </p>

      <a
        href="/"
        className="mt-10 px-6 py-3 bg-[#00FF6A] text-black rounded-full font-semibold hover:bg-[#00cc55] transition"
      >
        Go to Dashboard
      </a>
    </main>
  );
}
