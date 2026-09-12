"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-10 shadow-[0_0_40px_rgba(0,255,106,0.15)]">

        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#00FF6A] flex items-center justify-center text-black font-bold text-2xl">
            RP
          </div>
          <h1 className="text-white text-3xl font-semibold mt-4">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Log in to continue your recovery journey
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          {error && (
            <p className="text-red-500 text-sm bg-red-500/10 p-2 rounded">
              {error}
            </p>
          )}

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:border-[#00FF6A] outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:border-[#00FF6A] outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            disabled={loading}
            className="
              w-full mt-4 py-3 bg-[#00FF6A] text-black font-semibold rounded-xl
              hover:bg-[#00cc55] transition disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#00FF6A] hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
