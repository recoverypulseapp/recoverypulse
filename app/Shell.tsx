"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import Providers from "./providers";
import { SessionProvider } from "next-auth/react";

export default function Shell({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const hideSidebar =
    pathname?.toLowerCase().includes("login") ||
    pathname?.toLowerCase().includes("signin") ||
    pathname === "/";

  const hideNavbar = hideSidebar;

  // ⭐ Auto-collapse sidebar on scroll
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 50) {
        setOpen(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ Swipe-to-open sidebar
  useEffect(() => {
    let touchStartX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const touchX = e.touches[0].clientX;

      if (touchStartX < 20 && touchX > 80) {
        setOpen(true);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="flex bg-black min-h-screen w-full">
      <SessionProvider>
        <Providers>

          {/* MOBILE NAVBAR */}
          {!hideNavbar && (
            <div className="md:hidden flex items-center justify-between p-4 bg-black border-b border-[#00FF6A33] fixed top-0 left-0 right-0 z-40">
              <button
                onClick={() => setOpen(true)}
                className="text-[#00FF6A] text-3xl font-bold"
              >
                ☰
              </button>
              <h1 className="text-[#00FF6A] font-bold text-xl">
                RecoveryPulse
              </h1>
            </div>
          )}

          {/* ⭐ Tap-to-close overlay */}
          {open && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
          )}

          {/* ⭐ Slide-in Sidebar */}
          {!hideSidebar && (
            <aside
              className={`
                fixed top-0 left-0 h-full w-64 
                bg-[#0A0A0A] border-r border-[#00FF6A33] 
                shadow-[0_0_40px_rgba(0,255,106,0.25)] 
                p-8 z-50 transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}
              `}
            >
              <div className="flex flex-col gap-8">

                {/* Logo */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#00FF6A] flex items-center justify-center text-black font-bold text-xl">
                    RP
                  </div>
                  <h2 className="text-white text-xl font-semibold">
                    RecoveryPulse
                  </h2>
                </div>

                {/* Menu */}
                <nav className="flex flex-col gap-4 text-gray-300 text-lg">
                  <a href="/dashboard" className="hover:text-[#00FF6A] transition">Dashboard</a>
                  <a href="/injury-log" className="hover:text-[#00FF6A] transition">Injury Log</a>
                  <a href="/rehab-plan" className="hover:text-[#00FF6A] transition">Rehab Plan</a>
                  <a href="/progress-timeline" className="hover:text-[#00FF6A] transition">Progress Timeline</a>
                  <a href="/onboarding" className="hover:text-[#00FF6A] transition">Onboarding</a>
                  <a href="/profile" className="hover:text-[#00FF6A] transition">Profile</a>
                </nav>

              </div>
            </aside>
          )}

          {/* MAIN CONTENT */}
          <main className={hideSidebar ? "w-full" : "md:ml-64 w-full"}>
            <div className="pt-16 md:pt-0 px-4 sm:px-8 md:px-16 lg:px-24">
              {!hideNavbar && <Navbar />}
              <PageTransition>{children}</PageTransition>
            </div>
          </main>

        </Providers>
      </SessionProvider>
    </div>
  );
}
