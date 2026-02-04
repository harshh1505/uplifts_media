'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur shadow-md border-b border-gray-200'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0A1A3A] to-[#3B82F6] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">UM</span>
          </div>
          <span className="font-bold text-lg text-[#0A1A3A] hidden sm:inline">
            Uplifts Media
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-[#3B82F6] text-sm font-medium">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-[#3B82F6] text-sm font-medium">
            Services
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#3B82F6] text-sm font-medium">
            About
          </Link>
          <Link href="#case-studies" className="text-gray-700 hover:text-[#3B82F6] text-sm font-medium">
            Case Studies
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-[#3B82F6] text-sm font-medium">
            Blog
          </Link>
        </div>

        {/* Desktop CTA → Contact page */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold rounded-full px-6 hover:shadow-lg transition"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#0A1A3A]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-4">
          <Link href="/" onClick={closeMobileMenu} className="block font-medium text-gray-700">
            Home
          </Link>

          <Link href="/services" onClick={closeMobileMenu} className="block font-medium text-gray-700">
            Services
          </Link>

          <Link href="/about" onClick={closeMobileMenu} className="block font-medium text-gray-700">
            About
          </Link>

          <Link href="#case-studies" onClick={closeMobileMenu} className="block font-medium text-gray-700">
            Case Studies
          </Link>

          <Link href="/blog" onClick={closeMobileMenu} className="block font-medium text-gray-700">
            Blog
          </Link>

          {/* Mobile CTA → Contact page */}
          <Button
            asChild
            className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold rounded-full"
          >
            <Link href="/contact" onClick={closeMobileMenu}>
              Get in Touch
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
