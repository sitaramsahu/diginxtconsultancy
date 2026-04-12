'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SchemeFinder() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    income: '',
    requirement: ''
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const schemes = {
    'startup': {
      title: 'PMEGP - Prime Minister Employment Generation Programme',
      benefits: ['₹25 lakhs to ₹50 lakhs loan', 'Subsidy up to 35%', 'Bank guarantee not required'],
      documents: ['ID Proof', 'Address Proof', 'Educational Certificate', 'Skill Certificate']
    },
    'msme': {
      title: 'Mudra Loan - MSME Support',
      benefits: ['₹10 lakhs to ₹1 crore loan', 'Zero collateral', 'Flexible repayment'],
      documents: ['Aadhaar Card', 'Bank Statement (6 months)', 'Business Plan', 'Ownership Proof']
    },
    'agriculture': {
      title: 'Kisan Credit Card (KCC)',
      benefits: ['₹1 lakh to ₹3 lakhs credit', 'Low interest rate', 'Crop insurance included'],
      documents: ['Land Records', 'ID Proof', 'Bank Account Details', 'Crop Information']
    },
    'health': {
      title: 'Ayushman Bharat - PM-JAY',
      benefits: ['₹5 lakhs health cover', 'Cashless treatment', 'Family coverage'],
      documents: ['Family Member List', 'Address Proof', 'Income Certificate', 'ID Proof']
    },
    'registration': {
      title: 'Udyam Registration',
      benefits: ['One-time registration', 'GST linked', 'Access to govt schemes'],
      documents: ['Aadhaar Number', 'Business Details', 'Business Address', 'Bank Account']
    },
    'digital': {
      title: 'MSME Digital Marketing Grant',
      benefits: ['₹2 lakhs to ₹10 lakhs subsidy', 'Website + Digital Marketing', 'Social media support'],
      documents: ['Business Registration', 'Bank Account', 'Tax Details', 'Business Plan']
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      let recommendedScheme = 'msme'; // default

      if (formData.businessType === 'startup') recommendedScheme = 'startup';
      else if (formData.businessType === 'agriculture') recommendedScheme = 'agriculture';
      else if (formData.requirement === 'health') recommendedScheme = 'health';
      else if (formData.requirement === 'registration') recommendedScheme = 'registration';
      else if (formData.requirement === 'digital') recommendedScheme = 'digital';

      setResult(schemes[recommendedScheme]);
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🤖 AI Scheme Finder</h1>
          <p className="text-xl text-gray-300">Find the best government scheme for your needs</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
            <p className="text-gray-300 mb-6">
              Apni details fill करें और AI से जानिए कौनसी scheme आपके लिए best है।
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-yellow-400 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-yellow-400 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold mb-2">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-yellow-400 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select your business type</option>
                  <option value="startup">Startup</option>
                  <option value="msme">MSME / Small Business</option>
                  <option value="agriculture">Agriculture / Farming</option>
                  <option value="professional">Professional / Freelancer</option>
                </select>
              </div>

              {/* Annual Income */}
              <div>
                <label className="block text-sm font-semibold mb-2">Annual Income</label>
                <select
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-yellow-400 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select income range</option>
                  <option value="0-5">₹0 - ₹5 Lakhs</option>
                  <option value="5-15">₹5 - ₹15 Lakhs</option>
                  <option value="15-30">₹15 - ₹30 Lakhs</option>
                  <option value="30+">₹30 Lakhs+</option>
                </select>
              </div>

              {/* Requirement */}
              <div>
                <label className="block text-sm font-semibold mb-2">What do you need?</label>
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-yellow-400 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select your requirement</option>
                  <option value="loan">Loan / Finance</option>
                  <option value="registration">Business Registration</option>
                  <option value="subsidy">Subsidy / Grants</option>
                  <option value="health">Health Services</option>
                  <option value="digital">Digital Services</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Finding Best Scheme... 🤖' : 'Find My Scheme'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {result && (
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-2xl mx-auto">
            <div className="bg-black p-8 rounded-lg border-2 border-yellow-400">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">✅ Your Best Match</h2>
              
              <h3 className="text-2xl font-bold mb-6">{result.title}</h3>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-yellow-400">💰 Key Benefits</h4>
                <ul className="space-y-3">
                  {result.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-yellow-400 font-bold mt-1">→</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-yellow-400">📄 Required Documents</h4>
                <ul className="space-y-3">
                  {result.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-yellow-400">✓</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-yellow-400 text-black p-6 rounded-lg">
                <p className="font-semibold mb-3">Ready to apply for this scheme?</p>
                <a href="tel:9693768039" className="inline-block bg-black text-yellow-400 px-6 py-2 rounded font-bold hover:bg-gray-800 transition">
                  Call Us Now: 9693768039
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-16 px-4 bg-black text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Why Use Our AI Finder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded border border-yellow-400">
              <span className="text-3xl mb-3 block">⚡</span>
              <p className="font-semibold">Instant Results</p>
            </div>
            <div className="bg-gray-900 p-6 rounded border border-yellow-400">
              <span className="text-3xl mb-3 block">🎯</span>
              <p className="font-semibold">Perfect Match</p>
            </div>
            <div className="bg-gray-900 p-6 rounded border border-yellow-400">
              <span className="text-3xl mb-3 block">✅</span>
              <p className="font-semibold">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
