import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';



/* ================= FONTS ================= */

const geist = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });



/* ================= SEO META ================= */

export const metadata: Metadata = {
  title: 'Uplifts Media | Growth Engineering for Modern Businesses',
  description:
    'Uplifts Media is your outsourced growth team. We handle social, PPC, SEO, and e-commerce to help startups and scale-ups scale predictably.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};



/* ================= FIX NEXT 16 VIEWPORT ================= */

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};



/* ================= ROOT LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.className} ${geistMono.className}`}
    >
      <body className="antialiased bg-white text-[#0A1A3A]">

        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="min-h-screen pt-24">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Extras */}
        <Analytics />
        <Toaster />

      </body>
    </html>
  );
}
