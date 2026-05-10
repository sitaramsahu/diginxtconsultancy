"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("/api/admin/stats", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        🚀 Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">
            Admin <span className="text-yellow-400">Dashboard</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Manage your entire platform 🚀
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm"
        >
          Logout
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 hover:scale-105 transition">
          <p className="text-gray-400 text-sm">Total Users</p>
          <h2 className="text-3xl font-bold text-yellow-400">
            {stats?.totalUsers || 0}
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 hover:scale-105 transition">
          <p className="text-gray-400 text-sm">Total Invoices</p>
          <h2 className="text-3xl font-bold text-yellow-400">
            {stats?.totalInvoices || 0}
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 hover:scale-105 transition">
          <p className="text-gray-400 text-sm">Total Revenue</p>
          <h2 className="text-3xl font-bold text-yellow-400">
            ₹{Number(stats?.revenue || 0).toLocaleString("en-IN")}
          </h2>
        </div>
      </div>

      {/* ACTION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* USERS */}
        <div
          onClick={() => router.push("/admin/users")}
          className="cursor-pointer bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 p-6 rounded-2xl hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold mb-2">👥 Users Management</h2>
          <p className="text-gray-400 text-sm">
            View, manage and control all users
          </p>
        </div>

        {/* INVOICES */}
        <div
          onClick={() => router.push("/admin/invoices")}
          className="cursor-pointer bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 p-6 rounded-2xl hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold mb-2">🧾 Invoice Control</h2>
          <p className="text-gray-400 text-sm">
            Track all invoices and revenue
          </p>
        </div>

        {/* Applications */}
        <div
          onClick={() => router.push("/admin/applications")}
          className="cursor-pointer bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 p-6 rounded-2xl hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold mb-2">🧾 Applications</h2>
          <p className="text-gray-400 text-sm">
            Track all applications and their status
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <p className="text-center text-gray-500 text-xs mt-10">
        DigiNxt Admin Panel • Powered by Diginxt 🚀
      </p>
    </div>
  );
}
