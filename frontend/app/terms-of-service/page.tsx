'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText, Clock } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const sections = [
  { id: 'agreement', title: '1. Agreement to Terms' },
  { id: 'intellectual-property', title: '2. Intellectual Property' },
  { id: 'user-representations', title: '3. User Representations' },
  { id: 'prohibited-activities', title: '4. Prohibited Activities' },
  { id: 'disclaimer', title: '5. Disclaimer of Warranties' },
  { id: 'limitation-of-liability', title: '6. Limitation of Liability' },
  { id: 'governing-law', title: '7. Governing Law' },
  { id: 'contact', title: '8. Contact Information' }
];

export default function TermsOfServicePage() {
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
            <FileText size={14} />
            LEGAL AGREEMENT
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A1A3A] mb-6 tracking-tight">
            Terms of Service
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
            <section id="agreement" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed mb-4">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Uplifts Media ("we", "our", "us"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
              </p>
              <p className="leading-relaxed">
                By accessing our website and using our services, you acknowledge that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the site and our services, and you must discontinue use immediately.
              </p>
            </section>

            <section id="intellectual-property" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">2. Intellectual Property Rights</h2>
              <p className="leading-relaxed mb-4">
                Unless otherwise indicated, the website and all of its content, including source code, databases, functionality, software, website designs, audio, video, text, photographs, graphics (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us, and are protected by copyright and trademark laws.
              </p>
              <p className="leading-relaxed">
                The Content and Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site, Content, or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </section>

            <section id="user-representations" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">3. User Representations</h2>
              <p className="leading-relaxed mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You are not a minor in the jurisdiction in which you reside.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                <li>Your use of the Site or our services will not violate any applicable law or regulation.</li>
              </ul>
            </section>

            <section id="prohibited-activities" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">4. Prohibited Activities</h2>
              <p className="leading-relaxed mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="leading-relaxed mb-2">As a user of the Site, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                <li>Engage in unauthorized framing of or linking to the Site.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
              </ul>
            </section>

            <section id="disclaimer" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">5. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                THE SITE AND SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT.
              </p>
            </section>

            <section id="limitation-of-liability" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">6. Limitation of Liability</h2>
              <p className="leading-relaxed">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section id="governing-law" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">7. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms of Service and your use of the website and services are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms of Service will be brought exclusively in the courts located in Gurugram, Haryana, India.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">8. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site or services, please contact us at:
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
