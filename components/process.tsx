'use client';

import { CheckCircle, Lightbulb, Zap, BarChart3 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const steps = [
  {
    number: 1,
    icon: CheckCircle,
    title: 'Audit & Align',
    description: 'Deep dive into your business, competitive landscape, and current performance metrics.',
  },
  {
    number: 2,
    icon: Lightbulb,
    title: 'Strategy & Roadmap',
    description: 'Craft a custom 90-day growth plan tailored to your stage and goals.',
  },
  {
    number: 3,
    icon: Zap,
    title: 'Execute & Optimize',
    description: 'Full implementation across all channels with continuous A/B testing and refinement.',
  },
  {
    number: 4,
    icon: BarChart3,
    title: 'Scale & Analyze',
    description: 'Weekly performance reviews and monthly deep-dive reports to track progress.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent origin-center"
      ></motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1A3A] mb-4">
            The Uplifts Method: Predictable, Scalable Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven 4-step framework we've refined across 50+ successful projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop timeline line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6]/30 via-[#10B981]/30 to-transparent pointer-events-none origin-left"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={stepVariants} className="relative">
                  {/* Step container */}
                  <div className="flex flex-col items-start">
                    {/* Icon circle */}
                    <motion.div
                      className="relative z-10 mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <Icon size={28} className="text-[#3B82F6]" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center text-sm font-bold shadow-md">
                        {step.number}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#0A1A3A] mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector arrow (desktop) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                      className="hidden lg:block absolute top-10 left-20 w-12 h-1 bg-gradient-to-r from-[#3B82F6] to-[#10B981] transform translate-x-full origin-left"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Timeline for mobile */}
        <motion.div
          className="lg:hidden mt-12 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={stepVariants} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-1 h-12 bg-gradient-to-b from-[#3B82F6] to-[#10B981] mt-2 origin-top"
                  />
                )}
              </div>
              <div className="pb-8">
                <h4 className="font-bold text-[#0A1A3A] mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
