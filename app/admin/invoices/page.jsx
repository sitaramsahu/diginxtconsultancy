"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminInvoices() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("/api/admin/invoices", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          router.push("/login");
          return;
        }
        setInvoices(data);
      })
      .finally(() => setLoading(false));
  }, [router]);

  const filtered = invoices.filter((inv) =>
    inv.customerName?.toLowerCase().includes(search.toLowerCase()),
  );

  const totalRevenue = invoices.reduce(
    (sum, inv) => sum + Number(inv.amount || 0),
    0,
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">
          Invoice <span className="text-yellow-400">Management</span>
        </h1>

        <input
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-black border border-gray-700 px-4 py-2 rounded-lg text-sm focus:border-yellow-400 outline-none w-full md:w-64"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#0c0c0c] p-5 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400 text-sm">Total Invoices</p>
          <h2 className="text-2xl font-bold text-yellow-400">
            {invoices.length}
          </h2>
        </div>

        <div className="bg-[#0c0c0c] p-5 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400 text-sm">Total Revenue</p>
          <h2 className="text-2xl font-bold text-yellow-400">
            ₹{totalRevenue}
          </h2>
        </div>

        <div className="bg-[#0c0c0c] p-5 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400 text-sm">Paid Invoices</p>
          <h2 className="text-2xl font-bold text-yellow-400">
            {invoices.filter((i) => i.status === "paid").length}
          </h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0c0c0c] border border-yellow-500/20 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold">
            All Invoices{" "}
            <span className="text-yellow-400">({filtered.length})</span>
          </h2>
        </div>

        {loading ? (
          <p className="p-6 text-gray-400">Loading invoices...</p>
        ) : filtered.length === 0 ? (
          <p className="p-6 text-gray-400">No invoices found</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-black border-b border-gray-800 text-gray-400">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4">User ID</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((inv) => (
                <tr
                  key={inv._id}
                  className="border-b border-gray-900 hover:bg-[#111] transition"
                >
                  <td className="p-4 font-medium">{inv.customerName}</td>

                  <td className="p-4 text-yellow-400 font-semibold">
                    ₹{Number(inv.amount || 0)}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        inv.status === "paid"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>

                  <td className="p-4 text-gray-400">
                    {new Date(inv.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-gray-500 text-xs">{inv.userId}</td>

                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => router.push(`/invoice/${inv._id}`)}
                      className="px-3 py-1 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition text-xs"
                    >
                      View
                    </button>

                    <button className="px-3 py-1 border border-red-500 text-red-400 rounded hover:bg-red-500 hover:text-white transition text-xs">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 text-xs mt-6">
        Invoice Admin Panel • DigiNxt 🚀
      </p>
      {/* go back */}
      <button
        onClick={() => window.history.back()}
        className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
      >
        Go Back
      </button>
    </div>
  );
}
