'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1A3A] mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Let's clear up any doubts about how we work.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-[#3B82F6] group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-left text-[#0A1A3A] group-hover:text-[#3B82F6] transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-[#3B82F6] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gradient-to-r from-blue-50/50 to-green-50/50 border-t border-gray-200 animate-in fade-in duration-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We'd love to chat.
          </p>
          <a
            href="#cta"
            className="inline-block text-[#3B82F6] font-semibold hover:text-[#3B82F6]/80 transition-colors"
          >
            Book a free consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
