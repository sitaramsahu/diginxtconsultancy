"use client";
import { useState } from "react";

export default function CreateInvoice() {
  const [data, setData] = useState({
    customerName: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    const token = localStorage.getItem("token");

    await fetch("/api/invoice/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    alert("Invoice Created");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#0c0c0c] border border-yellow-500/20 rounded-2xl p-8 shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Create <span className="text-yellow-400">Invoice</span>
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Generate invoices quickly & easily
        </p>

        {/* Form */}
        <div className="space-y-4">
          {/* Customer Name */}
          <div>
            <label className="text-sm text-gray-300">Customer Name</label>
            <input
              type="text"
              value={data.customerName}
              onChange={(e) =>
                setData({ ...data, customerName: e.target.value })
              }
              placeholder="Enter customer name"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 focus:outline-none"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="text-sm text-gray-300">Amount (₹)</label>
            <input
              type="number"
              value={data.amount}
              onChange={(e) => setData({ ...data, amount: e.target.value })}
              placeholder="Enter amount"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleCreate}
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            {loading ? "Creating..." : "Create Invoice"}
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Secure & fast invoice generation 🚀
        </p>
        {/* go back button */}
        <button
          onClick={() => window.history.back()}
          className="w-full mt-4 bg-gray-700 text-white font-semibold py-2 rounded-lg hover:bg-gray-600 transition"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}
