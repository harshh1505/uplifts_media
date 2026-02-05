'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { motion, AnimatePresence } from 'framer-motion';

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
        ? 'bg-white/95 dark:bg-[#0A1A3B]/95 backdrop-blur shadow-md border-b border-gray-200 dark:border-gray-800'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0A1A3A] to-[#3B82F6] dark:from-[#3B82F6] dark:to-[#10B981] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">UM</span>
          </div>
          <span className="font-bold text-lg text-[#0A1A3A] dark:text-white hidden sm:inline">
            Uplifts Media
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] text-sm font-medium transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] text-sm font-medium transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] text-sm font-medium transition-colors">
            About
          </Link>
          <Link href="/case-studies" className="text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] text-sm font-medium transition-colors">
            Case Studies
          </Link>
          <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] text-sm font-medium transition-colors">
            Blog
          </Link>
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button
            asChild
            className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold rounded-full px-6 hover:shadow-lg transition dark:bg-white dark:text-[#0A1A3A] dark:hover:bg-white/90"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#0A1A3A] dark:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-[#0A1A3B] border-b border-gray-200 dark:border-gray-800 px-4 py-4 space-y-4 overflow-hidden"
          >
            <Link href="/" onClick={closeMobileMenu} className="block font-medium text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] transition-colors">
              Home
            </Link>

            <Link href="/services" onClick={closeMobileMenu} className="block font-medium text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] transition-colors">
              Services
            </Link>

            <Link href="/about" onClick={closeMobileMenu} className="block font-medium text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] transition-colors">
              About
            </Link>

            <Link href="/case-studies" onClick={closeMobileMenu} className="block font-medium text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] transition-colors">
              Case Studies
            </Link>

            <Link href="/#testimonials" onClick={closeMobileMenu} className="block font-medium text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] transition-colors">
              Testimonials
            </Link>

            <Link href="/blog" onClick={closeMobileMenu} className="block font-medium text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] transition-colors">
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
