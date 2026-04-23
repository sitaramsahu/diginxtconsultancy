"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function InvoiceDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch(`/api/invoice/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setInvoice(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, router]);

  // 🔄 Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="animate-pulse text-gray-400">
          Fetching invoice details...
        </div>
      </div>
    );
  }

  // ❌ Error State
  if (!invoice || invoice.error) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-red-400">
        <p className="text-xl mb-2">Invoice not found ❌</p>
        <button
          onClick={() => router.push("/dashboard")}
          className="text-yellow-400 hover:underline"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-8">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <button
          onClick={() => router.back()}
          className="text-yellow-400 hover:underline"
        >
          ← Back
        </button>

        <div className="flex gap-3">
          <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
            Download PDF
          </button>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Mark Paid
          </button>
        </div>
      </div>

      {/* Invoice Card */}
      <div className="bg-[#0c0c0c] border border-yellow-500/20 rounded-2xl p-6 md:p-10 shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Invoice{" "}
              <span className="text-yellow-400">
                #{invoice.invoiceNumber || "N/A"}
              </span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Created on {new Date(invoice.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Status Badge */}
          <div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                invoice.status === "paid"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {invoice.status}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer */}
          <div className="bg-black p-4 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm mb-1">Customer</p>
            <h2 className="text-lg font-semibold">{invoice.customerName}</h2>
          </div>

          {/* Amount */}
          <div className="bg-black p-4 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm mb-1">Total Amount</p>
            <h2 className="text-2xl font-bold text-yellow-400">
              ₹{invoice.finalAmount}
            </h2>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          Secure invoice powered by DigiNxt 🚀
        </div>
      </div>
    </div>
  );
}
