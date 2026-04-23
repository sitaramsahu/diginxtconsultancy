"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.token) {
        localStorage.setItem("token", result.token);

        // 🔥 ROLE CHECK
        if (result.user?.role === "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/dashboard";
        }
      } else {
        alert(result.error || "Login failed");
      }
    } catch (error) {
      alert("Something went wrong");
    }

    setLoading(false);
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
            priority
            className="mx-auto mb-4"
          />
          <h2 className="text-gray-300 text-sm">Invoice Management System</h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-sm mb-6">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-sm"
              >
                👁️
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
            >
              {loading ? "Logging in..." : "Sign In"}
            </button>
          </form>

          {/* Register */}
          <div className="text-center mt-6">
            <Link href="/register" className="text-yellow-500 font-semibold">
              Create Account
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
