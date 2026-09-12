"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setMessage(data.error || "Registration failed");
        return;
      }

      setMessage("Account created successfully!");
    } catch (err) {
      setLoading(false);
      setMessage("Something went wrong. Try again.");
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-12">
      <div className="
        w-full max-w-md 
        bg-neutral-900 
        border border-neutral-800 
        rounded-2xl 
        p-8 sm:p-10 
        shadow-[0_0_40px_rgba(0,255,106,0.15)] 
        backdrop-blur-xl
      ">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#00FF6A] flex items-center justify-center text-black font-bold text-2xl">
            RP
          </div>

          <h1 className="text-white text-3xl font-semibold mt-4 text-center">
            Create Account
          </h1>

          <p className="text-gray-400 text-sm mt-1 text-center max-w-xs">
            Start your recovery journey today
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={handleRegister}>
          {message && (
            <p
              className={`text-sm p-2 rounded text-center ${
                message.includes("success")
                  ? "text-[#00FF6A] bg-[#00FF6A22]"
                  : "text-red-500 bg-red-500/10"
              }`}
            >
              {message}
            </p>
          )}

          <div className="flex flex-col">
            <label className="text-gray-300 text-sm">Name</label>
            <input
              type="text"
              className="
                w-full mt-2 px-4 py-3 
                bg-neutral-800 
                border border-neutral-700 
                rounded-xl 
                text-white 
                placeholder-gray-400 
                focus:border-[#00FF6A] 
                outline-none 
                transition
              "
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              className="
                w-full mt-2 px-4 py-3 
                bg-neutral-800 
                border border-neutral-700 
                rounded-xl 
                text-white 
                placeholder-gray-400 
                focus:border-[#00FF6A] 
                outline-none 
                transition
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              className="
                w-full mt-2 px-4 py-3 
                bg-neutral-800 
                border border-neutral-700 
                rounded-xl 
                text-white 
                placeholder-gray-400 
                focus:border-[#00FF6A] 
                outline-none 
                transition
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full mt-2 py-3 
              bg-[#00FF6A] 
              text-black 
              font-semibold 
              rounded-xl 
              hover:bg-[#00cc55] 
              transition 
              disabled:opacity-50 
              disabled:cursor-not-allowed
              shadow-[0_0_20px_rgba(0,255,106,0.4)]
            "
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-[#00FF6A] hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
