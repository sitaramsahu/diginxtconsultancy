'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  const team = [
    { icon: '💼', title: 'Expert Consultants', description: 'Years of experience in government schemes' },
    { icon: '🤖', title: 'AI Technology', description: 'Advanced AI for scheme recommendation' },
    { icon: '🎯', title: 'Dedicated Support', description: '24/7 customer support and guidance' },
    { icon: '✅', title: 'Verified Services', description: 'All services verified and updated' }
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DigiNxt</h1>
          <p className="text-xl text-gray-300">India&apos;s #1 AI-Powered Platform for Government Schemes</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">🎯 Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                DigiNxt Consultancy Pvt Ltd एक AI-driven platform है जो MSMEs, startups और individuals को government schemes और digital services provide करता है।
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>Humara mission:</strong> Sabko सही financial और digital support देना।
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">🚀 Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                India का #1 scheme discovery platform बनना।
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                हम हर entrepreneur, किसान, और व्यक्ति को सही government support तक पहुंचने में मदद करना चाहते हैं।
              </p>
            </div>
          </div>

          {/* Taglines */}
          <div className="bg-yellow-400 text-black p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Our Taglines</h3>
            <p className="text-lg mb-3">
              "Bridge to Government Schemes & Digital Growth"
            </p>
            <p className="font-semibold text-lg">
              AI Powered | Fast | Reliable
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose DigiNxt?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((item, i) => (
              <div key={i} className="bg-black p-6 rounded-lg border border-yellow-400">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-yellow-400">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <p className="text-gray-300">Government Services</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-gray-300">Approved Applications</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-gray-300">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Complete Service Portfolio</h2>
          
          <div className="space-y-4">
            <div className="bg-black p-6 rounded-lg border border-yellow-400">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">💰 Loan & Finance</h3>
              <p className="text-gray-300">Mudra, PMEGP, Business Loan, Startup Funding</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-yellow-400">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">🏢 Registration & Compliance</h3>
              <p className="text-gray-300">Udyam, GST, Company Registration</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-yellow-400">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">📊 Subsidy & Grants</h3>
              <p className="text-gray-300">MSME Subsidy, State Govt Schemes</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-yellow-400">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">🌾 Agriculture Services</h3>
              <p className="text-gray-300">KCC Loan, Crop Insurance, Farmer Schemes</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-yellow-400">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">🏥 Health Services</h3>
              <p className="text-gray-300">Ayushman Card, Health Loan, Insurance</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-yellow-400">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">💻 Digital Services</h3>
              <p className="text-gray-300">Website Development, Digital Marketing, Branding</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8">Let DigiNxt help you access the right government schemes and digital services</p>
          <Link href="/scheme-finder" className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
