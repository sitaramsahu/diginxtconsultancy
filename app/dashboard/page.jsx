"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔐 Auth check
    if (!token) {
      router.push("/login");
      return;
    }

    // 📦 Fetch invoices
    fetch("/api/invoice/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setInvoices(data || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [router]);

  // 🔄 Loading UI
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-lg">
        🚀 Loading your dashboard...
      </div>
    );
  }

  // 📊 Calculations
  const totalRevenue = invoices.reduce(
    (sum, inv) => sum + (inv.finalAmount || 0),
    0,
  );

  const latestInvoice = invoices[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Welcome Back 👋 <span className="text-yellow-400">User</span>
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/login");
          }}
          className="bg-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/5 border border-yellow-400/20 rounded-2xl p-5 backdrop-blur-lg">
          <p className="text-gray-400 text-sm">Total Invoices</p>
          <h2 className="text-2xl font-bold">{invoices.length}</h2>
        </div>

        <div className="bg-white/5 border border-yellow-400/20 rounded-2xl p-5 backdrop-blur-lg">
          <p className="text-gray-400 text-sm">Total Revenue</p>
          <h2 className="text-2xl font-bold text-yellow-400">
            ₹{totalRevenue}
          </h2>
        </div>

        <div className="bg-white/5 border border-yellow-400/20 rounded-2xl p-5 backdrop-blur-lg">
          <p className="text-gray-400 text-sm">Latest Invoice</p>
          <h2 className="text-lg font-semibold">
            {latestInvoice?.invoiceNumber || "N/A"}
          </h2>
        </div>
      </div>

      {/* ACTION */}
      <div className="mb-8">
        <button
          onClick={() => router.push("/invoice/create")}
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          + Create Invoice
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {invoices.length === 0 ? (
          <p className="text-gray-400">No invoices found</p>
        ) : (
          invoices.map((inv) => (
            <div
              key={inv._id}
              className="bg-white/5 border border-yellow-400/20 rounded-2xl p-5 backdrop-blur-lg hover:scale-[1.01] transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-lg">
                    {inv.invoiceNumber || "INV"}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {new Date(inv.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-yellow-400 text-xl font-bold">
                    ₹{inv.finalAmount || 0}
                  </p>
                  <button
                    className="text-xs text-blue-400 mt-1 hover:underline"
                    onClick={() => router.push(`/invoice/${inv._id}`)}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
