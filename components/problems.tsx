'use client';

import { Zap, AlertCircle, BarChart3 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const problems = [
  {
    icon: AlertCircle,
    title: 'Your marketing feels scattered across platforms',
    color: '#3B82F6',
  },
  {
    icon: Zap,
    title: "You're wearing too many hats, diluting your focus",
    color: '#0A1A3A',
  },
  {
    icon: BarChart3,
    title: 'You need predictable growth, not random spikes',
    color: '#10B981',
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Problems() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1A3A] mb-6">
            Founders Should Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">Not Manage Marketing Chaos.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We understand the struggles early-stage teams face when trying to scale.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#3B82F6] transition-all duration-300 hover:shadow-lg group"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${problem.color}20` }}
                >
                  <Icon size={24} style={{ color: problem.color }} />
                </div>
                <h3 className="text-xl font-semibold text-[#0A1A3A] mb-3">{problem.title}</h3>
                <p className="text-gray-600 text-sm">
                  We've seen this hold back hundreds of founders. Let's fix it together.
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-lg font-semibold text-[#0A1A3A]">
            We consolidate, strategize, and execute. <span className="text-[#10B981]">So you scale.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
