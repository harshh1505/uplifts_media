'use client';

import Link from 'next/link';
import {
  Store,
  BarChart3,
  Users,
  Camera,
  Handshake,
  UserPlus,
  Star,
  MessageCircle,
} from 'lucide-react';

import { motion, Variants } from 'framer-motion';



/* ================= ANIMATION CONFIG ================= */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};



/* ================= SERVICES DATA ================= */

const services = [
  {
    icon: Store,
    title: 'Amazon & Flipkart Marketplace Mastery',
    description: 'End-to-end marketplace growth & account management',
    details: [
      'FBA inventory planning',
      'Buy Box optimization',
      'Premium A+ content',
      'Full account management',
    ],
    color: '#0A1A3A',
  },
  {
    icon: BarChart3,
    title: 'Performance Digital Marketing (PPC & SEO)',
    description: 'High-intent traffic that converts into revenue',
    details: [
      'Google Ads & PPC scaling',
      'Amazon/Flipkart Advertising',
      'SEO strategy',
      'Generative Search Optimization (GSO)',
    ],
    color: '#3B82F6',
  },
  {
    icon: Users,
    title: 'Social Media Strategy & Management',
    description: 'Build communities, not just followers',
    details: [
      'Instagram & Facebook growth',
      'LinkedIn & X strategy',
      'YouTube content',
      'Viral creatives',
    ],
    color: '#10B981',
  },
  {
    icon: Camera,
    title: 'Conversion-Led Product Photography',
    description: 'Visuals that boost clicks & conversions',
    details: [
      'Studio photography',
      'Lifestyle shoots',
      'USP highlighting',
      'Ad creatives',
    ],
    color: '#EC4899',
  },
  {
    icon: Handshake,
    title: 'Performance-Based Affiliate Marketing',
    description: 'Pay only for successful conversions',
    details: [
      'Creator networks',
      'Commission scaling',
      'Partner sales',
      'ROI-first model',
    ],
    color: '#F59E0B',
  },
  {
    icon: UserPlus,
    title: 'High-Quality Lead Generation',
    description: 'Qualified prospects, not random traffic',
    details: [
      'Landing page funnels',
      'Targeted ads',
      'High-intent capture',
      'B2B & B2C leads',
    ],
    color: '#6366F1',
  },
  {
    icon: Star,
    title: 'Reputation & Review Management',
    description: 'Trust that drives conversions',
    details: [
      'Review acquisition',
      'Feedback handling',
      'Credibility boost',
      'Ranking improvement',
    ],
    color: '#EF4444',
  },
  {
    icon: MessageCircle,
    title: 'Retention & WhatsApp Automation',
    description: 'Turn buyers into loyal customers',
    details: [
      'Post-purchase flows',
      'WhatsApp automation',
      'Email sequences',
      'LTV growth',
    ],
    color: '#14B8A6',
  },
];



/* ================= COMPONENT ================= */

export function Services() {
  return (
    <section id="services" className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center pt-12 pb-20 px-6"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#0A1A3A] mb-6">
          Scale Faster.
          <br />
          <span className="text-[#3B82F6]">Sell Smarter.</span>
        </h2>

        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
          Complete growth systems for brands that want predictable revenue —
          not random marketing experiments.
        </p>
      </motion.div>



      {/* ================= SERVICES GRID ================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 pb-32"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm hover:shadow-2xl transition"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <Icon size={28} style={{ color: service.color }} />
                </div>

                <h3 className="text-xl font-semibold text-[#0A1A3A] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-600">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex gap-2">
                      <span
                        className="w-2 h-2 mt-2 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

        </div>
      </motion.div>



      {/* ================= CTA ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center pb-32"
      >
        <Link
          href="/contact"
          className="inline-block bg-[#3B82F6] text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition"
        >
          Claim Your Free Growth Audit →
        </Link>
      </motion.div>

    </section>
  );
}
