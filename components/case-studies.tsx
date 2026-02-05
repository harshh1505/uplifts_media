'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    clientName: 'TechFlow',
    clientLogo: 'TF',
    industry: 'SaaS',
    challenge: 'Had traction but no systematic growth strategy',
    results: [
      { label: '+240%', description: 'inbound leads' },
      { label: '+$2.1M', description: 'ARR' },
      { label: '45 days', description: 'to first 100 customers' },
    ],
  },
  {
    id: 2,
    clientName: 'FreshCart',
    clientLogo: 'FC',
    industry: 'E-commerce',
    challenge: 'Struggling with CAC and customer retention',
    results: [
      { label: '+150%', description: 'social revenue' },
      { label: '62%', description: 'CAC reduction' },
      { label: '+3.2x', description: 'LTV/CAC ratio' },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A1A3B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Impact
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1A3A] dark:text-white mb-4 tracking-tight">
            We Deliver Uplifts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real growth, real metrics, real results. See how we've helped startups scale predictably.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-[#0A1A3A] to-[#3B82F6] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 font-bold text-xl">
                    {study.clientLogo}
                  </div>
                  <h3 className="text-3xl font-extrabold mb-1">{study.clientName}</h3>
                  <p className="text-white/70 font-medium">{study.industry}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-10">
                <div className="mb-10">
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase mb-3">THE CHALLENGE</p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{study.challenge}</p>
                </div>

                {/* Results grid */}
                <div className="grid grid-cols-3 gap-6 mb-10 py-8 border-y border-gray-100 dark:border-white/10">
                  {study.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <p className="text-3xl font-black text-[#10B981] mb-1">{result.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">{result.description}</p>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-bold rounded-2xl py-6 transition-all duration-300 group-hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
                >
                  View Full Case Study
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
