"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Register() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      alert(data.message || "Registered Successfully!");
      window.location.href = "/login";
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={80}
            className="mx-auto mb-4"
          />
          <h2 className="text-gray-300 text-sm">Invoice Management System</h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-600 text-sm mb-6">Register to continue</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="text"
              placeholder="Mobile"
              required
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 py-3 rounded-lg font-bold"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* Login */}
          <div className="text-center mt-6">
            <Link href="/login" className="text-yellow-500 font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
