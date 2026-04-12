'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-400 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">DigiNxt</h3>
            <p className="text-sm text-gray-300">
              India&apos;s #1 AI-Powered Platform for Government Schemes & Digital Services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-yellow-400 transition">Loan & Finance</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Registration</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Digital Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 <a href="tel:9693768039" className="hover:text-yellow-400 transition">9693768039</a></li>
              <li>📧 <a href="mailto:info@diginxtconsultancy.com" className="hover:text-yellow-400 transition">info@diginxtconsultancy.com</a></li>
              <li>🌐 <a href="#" className="hover:text-yellow-400 transition">diginxtconsultancy.com</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300 mb-4">
            <Link href="#" className="hover:text-yellow-400 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-400 transition">Terms & Conditions</Link>
            <div className="text-right md:text-right">© 2024 DigiNxt Consultancy Pvt Ltd</div>
          </div>
          <p className="text-center text-yellow-400 font-semibold">
            Bridge to Government Schemes & Digital Growth | AI Powered | Fast | Reliable
          </p>
        </div>
      </div>
    </footer>
  );
}
