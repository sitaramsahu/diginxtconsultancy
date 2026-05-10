"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  const businessServices = [
    {
      icon: "📱",
      title: "Udyam Registration",
      documents: ["Aadhaar", "PAN", "Business Proof"],
    },
    {
      icon: "💻",
      title: "GST Registration",
      documents: ["Project Report", "Bank Statement", "ID Proof"],
    },
    {
      icon: "📊",
      title: "Pvt Ltd / LLP Company",
      documents: ["Project Report", "Bank Statement", "ID Proof"],
    },
    {
      icon: "💼",
      title: "Sole Proprietorship",
      documents: ["Project Report", "Bank Statement", "ID Proof"],
    },
    {
      icon: "💰",
      title: "Partnership Firm",
      documents: ["Project Report", "Bank Statement", "ID Proof"],
    },
    {
      icon: "❓",
      title: "Start-up Registration",
      documents: ["Aadhaar", "PAN", "Business Proof"],
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Business Registration Services
          </h1>
          <p className="text-xl text-gray-300">
            Complete support from application to approval
          </p>
        </div>
      </section>

      {/* Business Services Section */}
      <section className="py-6 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">
            Explore Our Business Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessServices.map((service, i) => (
              <div
                key={i}
                className="bg-black p-8 rounded-lg border border-yellow-400"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">Documents Required:</p>
                <ul className="space-y-3">
                  {service.documents.map((document, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-yellow-400">•</span>
                      {document}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Application Model */}
          {/* <div className="max-w-2xl mx-auto text-center py-20 px-4">
            <Link
              href="/business-registration/apply"
              className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition"
            >
              Fill The Form{" "}
            </Link>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Use our AI-powered scheme finder to discover the best options for
            you
          </p>
          <Link
            href="/scheme-finder"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition"
          >
            Find Your Scheme
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
