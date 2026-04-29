"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  const services = [
    {
      category: "Loan & Finance Services",
      link: "/services/loan-finance",
      icon: "💰",
      description: "Complete support from application to approval",
      items: [
        "Mudra Loan",
        "PMEGP",
        "Personal & Business Loan",
        "Startup Funding",
      ],
    },
    {
      category: "Registration Services",
      link: "/services/business-registration",
      icon: "🏢",
      description: "Fast & affordable service",
      items: [
        "Udyam Registration",
        "GST Registration",
        "Pvt Ltd / LLP Company",
      ],
    },
    {
      category: "Subsidy & Grants",
      link: "/services/subsidy-grants",
      icon: "📊",
      description: "We help you claim benefits",
      items: ["MSME Subsidy", "State Govt Schemes", "Capital Subsidy"],
    },
    {
      category: "Agriculture Services",
      link: "/services/agriculture",
      icon: "🌾",
      description: "Farmer focused support",
      items: [
        "KCC Loan",
        "Fasal Bima (Crop Insurance)",
        "Farmer Welfare Schemes",
      ],
    },
    {
      category: "Health Services",
      link: "/services/health",
      icon: "🏥",
      description: "Treatment financing support",
      items: ["Ayushman Card", "Health Loan", "Health Insurance"],
    },
  ];

  const digitalServices = [
    {
      icon: "📱",
      title: "Digital Marketing",
      items: ["Social Media Marketing", "Facebook/Google Ads"],
    },
    {
      icon: "💻",
      title: "Website Development",
      items: ["Business Website", "E-commerce Website"],
    },
    {
      icon: "🎨",
      title: "Graphic Designing",
      items: ["Poster Design", "Logo Design", "Branding"],
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">
            Complete solutions for all your government and digital needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gray-900 p-8 rounded-lg border border-yellow-400"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400">
                      <Link href={service.link}>{service.category}</Link>
                    </h3>
                    <p className="text-gray-300 text-sm mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-yellow-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/scheme-finder"
                  className="inline-block mt-6 bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition"
                >
                  Learn More
                </Link>
                <Link
                  href="/login"
                  className="inline-block mt-6 bg-black text-yellow-400 border-2 ml-2 border-yellow-400 px-6 py-2 rounded font-semibold hover:bg-yellow-400 hover:text-black transition"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">
            Digital Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalServices.map((service, i) => (
              <div
                key={i}
                className="bg-black p-8 rounded-lg border border-yellow-400"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-yellow-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
