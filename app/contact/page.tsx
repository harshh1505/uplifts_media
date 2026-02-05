'use client';

import { EnquiryForm } from '@/components/enquiry-form';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="bg-white px-6 pt-12 pb-24 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl opacity-50 pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-green-100/40 rounded-full blur-3xl opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Hero */}
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm font-bold mb-6">
            GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A1A3A] mb-8 tracking-tight">
            Let’s Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">Business 🚀</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Tell us about your goals and we’ll craft a custom growth strategy for you.
            No fluff. Just results.
          </p>
        </motion.section>

        {/* Form */}
        <motion.section
          className="max-w-3xl mx-auto bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-blue-500/5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <EnquiryForm />
        </motion.section>
      </div>
    </div>
  );
}
