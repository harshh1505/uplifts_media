'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Cookie, Clock } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'what-are-cookies', title: '2. What are Cookies?' },
  { id: 'how-we-use', title: '3. How We Use Cookies' },
  { id: 'types-of-cookies', title: '4. Types of Cookies We Use' },
  { id: 'manage-cookies', title: '5. Managing Cookie Preferences' },
  { id: 'updates', title: '6. Updates to This Policy' },
  { id: 'contact', title: '7. Contact Us' }
];

export default function CookiePolicyPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white px-6 overflow-hidden min-h-screen relative pb-24">
      {/* Decorative Background Blobs */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl opacity-50 pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-green-100/40 rounded-full blur-3xl opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto pt-8">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#3B82F6] transition-colors mb-10 text-sm font-semibold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs font-bold mb-4">
            <Cookie size={14} />
            COOKIE SETTINGS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A1A3A] mb-6 tracking-tight">
            Cookie Policy
          </h1>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock size={16} />
            <span>Last Updated: June 5, 2026</span>
          </div>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold text-[#0A1A3A] mb-4 text-sm tracking-wider uppercase">Table of Contents</h3>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="text-left text-sm text-gray-600 hover:text-[#10B981] font-medium transition-colors w-full block"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content Pane */}
          <div className="lg:col-span-3 prose prose-blue max-w-none text-gray-600 space-y-12">
            <section id="introduction" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">1. Introduction</h2>
              <p className="leading-relaxed mb-4">
                This Cookie Policy explains how Uplifts Media ("we", "our", "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <p className="leading-relaxed">
                In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. In such cases, our <Link href="/privacy-policy" className="text-[#3B82F6] hover:underline font-semibold">Privacy Policy</Link> applies in addition to this Cookie Policy.
              </p>
            </section>

            <section id="what-are-cookies" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">2. What are Cookies?</h2>
              <p className="leading-relaxed mb-4">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="leading-relaxed">
                Cookies set by the website owner (in this case, Uplifts Media) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
            </section>

            <section id="how-we-use" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">3. How We Use Cookies</h2>
              <p className="leading-relaxed">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Channels. Third parties serve cookies through our Website for analytics, performance, and marketing purposes.
              </p>
            </section>

            <section id="types-of-cookies" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">4. Types of Cookies We Use</h2>
              <p className="leading-relaxed mb-6">
                The specific types of first and third-party cookies served through our Website and the purposes they perform are detailed below:
              </p>

              <div className="overflow-x-auto border border-gray-100 rounded-2xl shadow-sm mb-6">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50 text-[#0A1A3A] font-semibold">
                    <tr>
                      <th className="px-6 py-4 text-left">Cookie Type</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      <th className="px-6 py-4 text-left">Examples / Providers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-[#0A1A3A]">Essential Cookies</td>
                      <td className="px-6 py-4">These cookies are strictly necessary to provide you with services available through our Website and to use some of its features.</td>
                      <td className="px-6 py-4">Supabase Session, Next.js Router Cache</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-[#0A1A3A]">Analytics & Performance</td>
                      <td className="px-6 py-4">These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our campaigns are.</td>
                      <td className="px-6 py-4">Google Analytics, Vercel Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-[#0A1A3A]">Advertising & Targeting</td>
                      <td className="px-6 py-4">These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing.</td>
                      <td className="px-6 py-4">Meta Pixel, Google Ads Tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="manage-cookies" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">5. Managing Cookie Preferences</h2>
              <p className="leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
              </p>
              <p className="leading-relaxed">
                As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
              </p>
            </section>

            <section id="updates" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">6. Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">7. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about our use of cookies or other technologies, please email us at:
              </p>
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
                <p className="font-semibold text-[#0A1A3A] mb-1">Uplifts Media</p>
                <p className="text-sm text-gray-500 mb-2">Gurugram, Haryana India</p>
                <p className="text-sm">
                  Email: <a href="mailto:info@upliftsmedia.com" className="text-[#3B82F6] hover:underline font-semibold">info@upliftsmedia.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
