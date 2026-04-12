'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300">We&apos;re here to help you succeed</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            {submitted && (
              <div className="bg-green-900 border border-green-400 text-green-100 p-4 rounded mb-6">
                ✅ Thank you! We&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-yellow-400 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="your@email.com"
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

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-yellow-400 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-black border border-yellow-400 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">📞 Call Us</h3>
              <a href="tel:9693768039" className="text-2xl font-bold text-white hover:text-yellow-400 transition">
                +91 9693768039
              </a>
              <p className="text-gray-300 mt-3">Available 24/7 for your assistance</p>
            </div>

            {/* Email */}
            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">📧 Email Us</h3>
              <a href="mailto:info@diginxtconsultancy.com" className="text-lg font-bold text-white hover:text-yellow-400 transition break-all">
                info@diginxtconsultancy.com
              </a>
              <p className="text-gray-300 mt-3">We respond within 24 hours</p>
            </div>

            {/* Website */}
            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">🌐 Website</h3>
              <a href="#" className="text-lg font-bold text-white hover:text-yellow-400 transition">
                www.diginxtconsultancy.com
              </a>
              <p className="text-gray-300 mt-3">Visit our website for more information</p>
            </div>

            {/* Social Links */}
            <div className="bg-yellow-400 text-black p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <button className="bg-black text-yellow-400 px-4 py-2 rounded font-semibold hover:bg-gray-800 transition">
                  Facebook
                </button>
                <button className="bg-black text-yellow-400 px-4 py-2 rounded font-semibold hover:bg-gray-800 transition">
                  LinkedIn
                </button>
                <button className="bg-black text-yellow-400 px-4 py-2 rounded font-semibold hover:bg-gray-800 transition">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <details className="bg-black p-6 rounded-lg border border-yellow-400 group">
              <summary className="font-semibold text-lg cursor-pointer text-yellow-400">
                How can I check my eligibility for schemes?
              </summary>
              <p className="text-gray-300 mt-4">
                Use our AI Scheme Finder tool. Simply fill in your details and our AI will recommend the best schemes for you instantly.
              </p>
            </details>

            <details className="bg-black p-6 rounded-lg border border-yellow-400">
              <summary className="font-semibold text-lg cursor-pointer text-yellow-400">
                What documents do I need?
              </summary>
              <p className="text-gray-300 mt-4">
                Required documents vary by scheme. After using the Scheme Finder, you&apos;ll get a complete list of documents needed for your specific scheme.
              </p>
            </details>

            <details className="bg-black p-6 rounded-lg border border-yellow-400">
              <summary className="font-semibold text-lg cursor-pointer text-yellow-400">
                How long does the process take?
              </summary>
              <p className="text-gray-300 mt-4">
                On average, the entire process takes 15-30 days depending on the scheme and verification requirements.
              </p>
            </details>

            <details className="bg-black p-6 rounded-lg border border-yellow-400">
              <summary className="font-semibold text-lg cursor-pointer text-yellow-400">
                Is there any fee for using DigiNxt?
              </summary>
              <p className="text-gray-300 mt-4">
                Our scheme finder is completely FREE. We only charge for specific services once you decide to apply.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
