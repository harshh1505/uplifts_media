'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, Clock } from 'lucide-react';

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
  { id: 'info-collect', title: '2. Information We Collect' },
  { id: 'info-use', title: '3. How We Use Information' },
  { id: 'info-share', title: '4. Information Sharing' },
  { id: 'security', title: '5. Data Security' },
  { id: 'rights', title: '6. Your Legal Rights' },
  { id: 'cookies', title: '7. Cookies and Tracking' },
  { id: 'contact', title: '8. Contact Details' }
];

export default function PrivacyPolicyPage() {
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
            <Shield size={14} />
            LEGAL INFORMATION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A1A3A] mb-6 tracking-tight">
            Privacy Policy
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
                Welcome to Uplifts Media ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:info@upliftsmedia.com" className="text-[#3B82F6] hover:underline font-semibold">info@upliftsmedia.com</a>.
              </p>
              <p className="leading-relaxed">
                When you visit our website, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
              </p>
            </section>

            <section id="info-collect" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services, when subscribing to newsletter alerts, or otherwise contacting us.
              </p>
              <h3 className="font-semibold text-lg text-[#0A1A3A] mt-4 mb-2">Personal Data Provided by You</h3>
              <p className="leading-relaxed mb-4">
                This includes names, email addresses, phone numbers, contact preferences, company names, and any details shared through contact forms or project inquiry sheets.
              </p>
              <h3 className="font-semibold text-lg text-[#0A1A3A] mt-4 mb-2">Automatically Collected Information</h3>
              <p className="leading-relaxed">
                We automatically collect certain information when you visit, use, or navigate the website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our website.
              </p>
            </section>

            <section id="info-use" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use personal information collected via our website for a variety of business purposes described below:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>To deliver and facilitate services:</strong> We may use your information to provide you with the services requested.</li>
                <li><strong>To respond to inquiries:</strong> We use details to respond to user messages, resolve issues, and send relevant updates.</li>
                <li><strong>To send marketing communications:</strong> We may use email contacts for newsletters and promo updates if you opted in. You can opt out at any time.</li>
                <li><strong>To protect our Services:</strong> We may use your information as part of our efforts to keep our website safe and secure (for example, for fraud monitoring and prevention).</li>
              </ul>
            </section>

            <section id="info-share" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">4. Information Sharing</h2>
              <p className="leading-relaxed mb-4">
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
              </p>
              <p className="leading-relaxed">
                Specifically, we do not sell or lease your personal information to third parties. We may process or share data with service providers (like web hosting, analytics, and CRM platforms) who perform services for us or on our behalf and require access to such information to do that work.
              </p>
            </section>

            <section id="security" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk. You should only access the services within a secure environment.
              </p>
            </section>

            <section id="rights" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">6. Your Legal Rights</h2>
              <p className="leading-relaxed mb-4">
                Depending on your location, you may have certain rights under applicable data protection laws. These may include the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access and obtain a copy of your personal information.</li>
                <li>Request rectification (correction) or erasure (deletion) of your personal information.</li>
                <li>Restrict or object to the processing of your personal information.</li>
                <li>Withdraw consent at any time where we rely on consent to process your information.</li>
              </ul>
            </section>

            <section id="cookies" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">7. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <Link href="/cookie-policy" className="text-[#3B82F6] hover:underline font-semibold">Cookie Policy</Link>.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4">8. Contact Details</h2>
              <p className="leading-relaxed mb-4">
                If you have questions or comments about this policy, you may email us at:
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
