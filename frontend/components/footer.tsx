'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { toast } from "sonner";
import { supabase } from "@/lib/supabase"

import Image from 'next/image';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61552494301623', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/Upifts.media/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/uplitsmedia/', label: 'LinkedIn' },
];

const quickLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/#process' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1A3A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-official.png"
                alt="Uplifts Media Logo"
                width={32}
                height={32}
                className="rounded-lg object-contain bg-white p-0.5"
              />
              <span className="font-bold text-lg">Uplifts Media</span>
            </div>
            <p className="text-gray-400">Growth Engineering for Modern Businesses</p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#3B82F6] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#10B981] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=info@upliftsmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#10B981] transition-colors"
                >
                  info@upliftsmedia.com
                </a>
              </li>
              <li>
                <a href="tel:+919288267345" className="hover:text-[#10B981] transition-colors">
                  +91 9288267345
                </a>
              </li>
              <li>Gurugram, Haryana India</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest growth strategies delivered to your inbox.
            </p>
            <form className="relative group" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const input = form.elements.namedItem('email') as HTMLInputElement;
              const email = input.value;

              if (email) {
                try {
                  const { error } = await supabase.from('leads').insert({
                    email,
                    source: 'footer_newsletter',
                    metadata: { type: 'newsletter_subscription' }
                  })
                  if (error) throw error
                  toast.success("Welcome to the growth inner circle! 🚀");
                  form.reset();
                } catch (error) {
                  toast.error("An error occurred.");
                }
              }
            }}>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  className="w-full pl-4 pr-12 py-3 rounded-xl bg-white/5 text-white placeholder:text-gray-500 border border-white/10 focus:border-[#3B82F6] focus:bg-white/10 focus:outline-none transition-all duration-300"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1.5 bottom-1.5 px-3 bg-[#3B82F6] hover:bg-[#10B981] rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  aria-label="Subscribe"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 mt-2 px-1">
                Zero spam. Only high-signal growth engineering.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2026 Uplifts Media. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#10B981] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#10B981] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#10B981] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
