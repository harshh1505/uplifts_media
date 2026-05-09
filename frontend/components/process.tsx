'use client';

import { CheckCircle, Lightbulb, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: CheckCircle,
    title: 'Audit & Align',
    description: 'We perform a deep dive into your business, competitive landscape, and current performance metrics to identify gaps.',
    color: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/20'
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy & Roadmap',
    description: 'Crafting a custom 90-day growth plan tailored to your specific stage, goals, and market dynamics.',
    color: 'from-purple-500 to-purple-600',
    shadow: 'shadow-purple-500/20'
  },
  {
    number: '03',
    icon: Zap,
    title: 'Execute & Optimize',
    description: 'Rapid implementation across all channels with continuous A/B testing and algorithmic refinement.',
    color: 'from-emerald-500 to-emerald-600',
    shadow: 'shadow-emerald-500/20'
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Scale & Analyze',
    description: 'Weekly performance reviews and monthly deep-dive strategic sessions to systematically scale what works.',
    color: 'from-amber-500 to-amber-600',
    shadow: 'shadow-amber-500/20'
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A1A3B] relative overflow-hidden transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Methodology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-[#0A1A3A] dark:text-white mb-6 tracking-tight leading-tight"
          >
            The Uplifts Method: <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Predictable, Scalable Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We don't guess. We use a data-driven framework refined across dozens of high-growth ventures.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:bg-white/[0.08] transition-all duration-300"
              >
                {/* Step Number Background */}
                <div className="absolute top-4 right-8 text-4xl font-black text-gray-50 dark:text-white/5 transition-colors group-hover:text-blue-500/10 dark:group-hover:text-blue-400/10 select-none">
                  {step.number}
                </div>

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} ${step.shadow} flex items-center justify-center mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                  <Icon className="text-white w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-[#0A1A3A] dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">
                  Detailed Strategy <ArrowRight className="ml-2 w-4 h-4" />
                </div>

                {/* Desktop Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10 dark:to-transparent z-0" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Connector info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center text-sm text-gray-500 dark:text-gray-500 font-medium lg:hidden"
        >
          Scroll to see our full journey →
        </motion.div>

        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-4 bg-gray-50 dark:bg-white/5 px-8 py-4 rounded-full border border-gray-100 dark:border-white/10">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-[#0A1A3B] bg-gray-200 dark:bg-gray-700 overflow-hidden`}>
                  <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Trusted by 50+ high-growth companies worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
