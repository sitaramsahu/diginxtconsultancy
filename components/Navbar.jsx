'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="DigiNxt Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-white font-bold hidden sm:inline">DigiNxt</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-white hover:text-yellow-400 transition">Home</Link>
            <Link href="/services" className="text-white hover:text-yellow-400 transition">Services</Link>
            <Link href="/scheme-finder" className="text-white hover:text-yellow-400 transition">AI Scheme Finder</Link>
            <Link href="/about" className="text-white hover:text-yellow-400 transition">About</Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition">Contact</Link>
            <Link href="/services" className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block text-white hover:text-yellow-400 py-2">Home</Link>
            <Link href="/services" className="block text-white hover:text-yellow-400 py-2">Services</Link>
            <Link href="/scheme-finder" className="block text-white hover:text-yellow-400 py-2">AI Scheme Finder</Link>
            <Link href="/about" className="block text-white hover:text-yellow-400 py-2">About</Link>
            <Link href="/contact" className="block text-white hover:text-yellow-400 py-2">Contact</Link>
            <Link href="/services" className="block bg-yellow-400 text-black px-4 py-2 rounded font-semibold mt-2">
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
