'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

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

const testimonials = [
  {
    quote: "Uplifts Media completely transformed how we approach growth. Within 3 months, we went from scattered efforts to a cohesive system that actually scales.",
    author: 'Priya Singh',
    company: 'TechFlow',
    role: 'Founder & CEO',
  },
  {
    quote: "The team understood our vision from day one and executed with precision. Their strategic guidance has been invaluable as we scale.",
    author: 'Marcus Chen',
    company: 'FreshCart',
    role: 'Founder',
  },
  {
    quote: "Best decision we made for growth. They brought clarity, structure, and results. Highly recommended for any early-stage founder.",
    author: 'Sophia Patel',
    company: 'NextGen Analytics',
    role: 'Co-founder',
  },
];

export function CaseStudies() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Case Studies */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1A3A] mb-4">
              We Deliver Uplifts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real growth, real metrics, real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0A1A3A] to-[#3B82F6] p-8 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4 font-bold text-lg">
                        {study.clientLogo}
                      </div>
                      <h3 className="text-2xl font-bold">{study.clientName}</h3>
                      <p className="text-white/80 text-sm">{study.industry}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 font-semibold mb-2">CHALLENGE</p>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>

                  {/* Results grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-200">
                    {study.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <p className="text-2xl font-bold text-[#10B981] mb-1">{result.label}</p>
                        <p className="text-xs text-gray-600">{result.description}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      View Study
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-white rounded-2xl border border-gray-200 p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#3B82F6] to-[#10B981] opacity-5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-[#0A1A3A] mb-8">What Founders Say</h3>

            {/* Testimonial */}
            <div className="mb-8 min-h-32">
              <p className="text-2xl text-gray-700 mb-6 italic">"{testimonials[activeTestimonial].quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeTestimonial].author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#0A1A3A]">{testimonials[activeTestimonial].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}</p>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-2 pt-8 border-t border-gray-200">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-[#3B82F6] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
