"use client";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div
          className="
            w-16 h-16 rounded-full
            border-4 border-[#00FF6A55]
            border-t-[#00FF6A]
            animate-spin
            shadow-[0_0_25px_#00FF6A]
          "
        ></div>

        <p className="text-[#00FF6A] text-xl font-semibold tracking-wider drop-shadow-[0_0_10px_#00FF6A]">
          Loading RecoveryPulse...
        </p>
      </div>
    </div>
  );
}
