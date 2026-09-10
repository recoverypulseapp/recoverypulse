"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        w-full px-10 py-6
        bg-black/40 backdrop-blur-xl
        border-b border-[#00FF6A33]
        shadow-[0_0_25px_#00FF6A22]
        flex items-center justify-between
        sticky top-0 z-50
      "
    >
      <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_#00FF6A]">
        RecoveryPulse
      </h2>

      <div className="relative flex items-center gap-4">
        <button
          className="
            w-10 h-10 rounded-full
            bg-[#00FF6A22]
            border border-[#00FF6A55]
            shadow-[0_0_15px_#00FF6A55]
            flex items-center justify-center
            hover:border-[#00FF6A]
            transition
          "
          onClick={() => setOpen(!open)}
        >
          <span className="text-[#00FF6A] font-bold">
            {session?.user?.name?.[0] || "U"}
          </span>
        </button>

        {open && (
          <div
            className="
              absolute right-0 top-12
              bg-black/60 backdrop-blur-xl
              border border-[#00FF6A33]
              shadow-[0_0_25px_#00FF6A22]
              rounded-xl p-4 w-40
              flex flex-col gap-3
            "
          >
            <div className="text-gray-300 text-sm">
              {session?.user?.name || "User"}
            </div>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="
                text-left text-gray-300
                hover:text-[#00FF6A]
                transition font-semibold
              "
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
