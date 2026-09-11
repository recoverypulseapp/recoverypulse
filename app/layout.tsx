"use client";

import Link from "next/link";
import "./globals.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import Providers from "./providers";
import { SessionProvider } from "next-auth/react";


export default function RootLayout(
  { children }: { children: React.ReactNode }
) {

  return (
    <html lang="en">
      <body className="bg-black text-white flex">
        <SessionProvider>
          <Providers>

            {/* SIDEBAR */}
            <aside
              className="
                w-64 h-screen p-8
                bg-[#0A0A0A] backdrop-blur-xl
                border-r border-[#00FF6A33]
                shadow-[0_0_40px_rgba(0,255,106,0.25)]
                flex flex-col gap-8
                fixed
              "
            >
              {/* Floating + Rotating + Breathing RP Logo */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div
                  className="
                    absolute inset-0 rounded-full border-4 border-[#00FF6A]
                    animate-[rotateRing_6s_linear_infinite,breatheGlow_4s_ease-in-out_infinite]
                  "
                ></div>

                <h1
                  className="
                    text-4xl font-extrabold text-[#00FF6A]
                    drop-shadow-[0_0_25px_#00FF6A]
                    animate-[float_3s_ease-in-out_infinite]
                    tracking-widest
                    relative
                  "
                >
                  RP
                </h1>
              </div>

              <nav className="flex flex-col gap-4 mt-6">
                {[
                  ["Dashboard", "/dashboard"],
                  ["Injury Log", "/injury-log"],
                  ["Rehab Plan", "/rehab-plan"],
                  ["Progress Timeline", "/progress-timeline"],
                  ["Onboarding", "/onboarding"],
                  ["Profile", "/profile"],
                ].map(([label, href], i) => (
                  <Link
                    key={i}
                    href={href}
                    className="
                      w-full text-left py-3 px-4 rounded-xl
                      bg-[#0D0D0D] border border-[#00FF6A33]
                      text-[#00FF6A] font-semibold
                      shadow-[0_0_15px_rgba(0,255,106,0.25)]
                      hover:bg-[#00FF6A] hover:text-black
                      hover:shadow-[0_0_25px_rgba(0,255,106,0.45)]
                      transition-all duration-300
                    "
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* MAIN CONTENT */}
            <main className="ml-64 w-full">
              <Navbar />
              <PageTransition>{children}</PageTransition>
            </main>

          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
