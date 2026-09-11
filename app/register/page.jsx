"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Registration failed");
      return;
    }

    setMessage("User registered successfully!");
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="bg-[#0D0D0D] p-8 rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.2)] border border-[#00FF7F]/20 backdrop-blur-xl max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-[#00FF7F] mb-6 text-center drop-shadow-[0_0_10px_rgba(0,255,127,0.6)]">
          Register
        </h2>

        {message && (
          <p className="text-[#00FF7F] mb-4 text-center">{message}</p>
        )}

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg bg-[#1A1A1A] border border-[#00FF7F]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F] transition-all mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-[#1A1A1A] border border-[#00FF7F]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F] transition-all mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-[#1A1A1A] border border-[#00FF7F]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F] transition-all mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-[#00FF7F] text-black font-semibold p-3 rounded-lg hover:bg-[#00e676] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,127,0.5)]"
        >
          Register
        </button>
      </form>
    </div>
  );
}
