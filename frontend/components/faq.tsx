'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const faqs = [
  {
    question: 'Is this a full-service agency?',
    answer:
      'Yes and no. We\'re a specialized growth agency focused on the channels that drive real revenue for startups: paid ads, SEO, social, and e-commerce. We don\'t do creative design or brand development, but we partner with trusted studios if needed.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer:
      'Absolutely. We\'ve worked with bootstrapped founders and pre-seed startups. Our flexible engagement models and founder-friendly pricing make us accessible at any stage. The key is you have product-market fit and are ready to scale.',
  },
  {
    question: "What's your pricing model?",
    answer:
      'We offer performance-based retainers and project-based pricing. Most engagements start at $3K-$8K/month depending on scope. We\'re transparent about costs and align our success with yours through clear KPIs.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We focus on metrics that matter: CAC (Customer Acquisition Cost), LTV (Lifetime Value), MRR (Monthly Recurring Revenue) growth, and ROI. Weekly performance dashboards and monthly strategy reviews keep us aligned with your business goals.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0A1A3B]/50 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1A3A] dark:text-white mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Let's clear up any doubts about how we work.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-[#3B82F6] group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-left text-[#0A1A3A] dark:text-gray-200 group-hover:text-[#3B82F6] transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-[#3B82F6] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 py-4 bg-gradient-to-r from-blue-50/50 to-green-50/50 dark:from-blue-900/10 dark:to-green-900/10 border-t border-gray-200 dark:border-white/10">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions? We'd love to chat.
          </p>
          <a
            href="https://wa.me/919288267345?text=What%20are%20the%20steps%20to%20book%20a%20consultation%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#3B82F6] font-semibold hover:text-[#3B82F6]/80 transition-colors group"
          >
            Book a free consultation <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
