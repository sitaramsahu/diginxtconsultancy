'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const services = [
    {
      icon: '💰',
      title: 'Loan & Finance',
      description: 'Mudra Loan, PMEGP, Business Loan, Startup Funding',
      link: '/services'
    },
    {
      icon: '🏢',
      title: 'Registration & Compliance',
      description: 'Udyam, GST, Company Registration',
      link: '/services'
    },
    {
      icon: '📊',
      title: 'Subsidy & Grants',
      description: 'MSME Subsidy, Govt Grants, Capital Subsidy',
      link: '/services'
    },
    {
      icon: '🌾',
      title: 'Agriculture Services',
      description: 'Kisan Credit Card, Crop Insurance, Farmer Schemes',
      link: '/services'
    },
    {
      icon: '🏥',
      title: 'Health Services',
      description: 'Ayushman Card, Health Loan, Insurance',
      link: '/services'
    },
    {
      icon: '💻',
      title: 'Digital Services',
      description: 'Website Development, Digital Marketing, Branding',
      link: '/services'
    }
  ];

  const highlights = [
    { stat: '100+', label: 'Government Services' },
    { stat: 'AI Powered', label: 'Recommendations' },
    { stat: 'End-to-End', label: 'Support' }
  ];

  const whyChoose = [
    { icon: '🤖', text: 'AI-based recommendation' },
    { icon: '⚡', text: 'Fast processing' },
    { icon: '👨‍💼', text: 'Trusted experts' },
    { icon: '🎯', text: 'All services in one place' }
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            India&apos;s <span className="text-yellow-400">#1 AI-Powered</span> Platform for Government Schemes & Digital Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            DigiNxt आपको सही government scheme, loan, subsidy और digital services एक ही platform पर provide करता है — fast, easy और भरोसेमंद।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/scheme-finder" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
              Check Eligibility (Free)
            </Link>
            <Link href="/services" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition">
              Explore Services
            </Link>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((h, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border border-yellow-400">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">{h.stat}</div>
                <div className="text-gray-300">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Core Services</h2>
          <p className="text-gray-300 text-center mb-12">Complete solutions for all your government and digital needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link key={i} href={service.link}>
                <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400 hover:border-white hover:shadow-lg transition h-full cursor-pointer">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose DigiNxt?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-black rounded-lg border border-yellow-400">
                <span className="text-4xl">{item.icon}</span>
                <span className="text-xl font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let AI help you find the perfect government scheme and digital services for your needs
          </p>
          <Link href="/scheme-finder" className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
            Apply Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
