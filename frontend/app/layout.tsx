import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

import './globals.css'


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });



/* ================= META ================= */

export const metadata: Metadata = {
  title: 'Uplifts Media | Growth Engineering for Modern Businesses',
  description:
    'Uplifts Media is your outsourced growth team. We handle social, PPC, SEO, and e-commerce to help startups and scale-ups scale predictably.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/logo-official.png' },
    ],
    apple: '/logo-official.png',
  },
}



export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}


/* ================= ROOT LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      {/* ✅ FONT EXACTLY SAME AS BEFORE */}
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* HEADER on every page */}
          <Header />

          {/* PAGE CONTENT */}
          <main className="min-h-screen pt-24">
            {children}
          </main>

          {/* FOOTER on every page */}
          <Footer />

          {/* WhatsApp Floating Button */}
          <WhatsAppButton />

          {/* Extras */}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
