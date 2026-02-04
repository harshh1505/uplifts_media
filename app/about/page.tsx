'use client';

import { motion, Variants } from 'framer-motion';
import { Target, Rocket, BarChart2, ShieldCheck, Zap, Lightbulb, Users as UsersIcon } from 'lucide-react';
import Link from 'next/link';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function AboutPage() {
  return (
    <div className="bg-white px-6 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl opacity-50 pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-green-100/40 rounded-full blur-3xl opacity-40 pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto text-center mb-28 pt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <span className="inline-block px-4 py-2 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm font-bold mb-6">
          OUR STORY
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-[#0A1A3A] mb-8 tracking-tight">
          We Don’t Just Build Brands.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">We Engineer Growth.</span>
        </h1>

        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          Uplifts Media is a growth-focused digital studio helping startups,
          creators, and businesses turn ideas into scalable systems.
          From high-converting websites to performance marketing,
          everything we build is designed for one thing — <span className="text-[#0A1A3A] font-bold underline decoration-[#10B981] decoration-4">results.</span>
        </p>
      </motion.section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 text-[#10B981]">
            <UsersIcon size={20} />
            <span className="font-bold tracking-wider text-xs uppercase">The Team</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0A1A3A] mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            We are engineers, designers, and marketers who believe growth is not
            luck — it’s <span className="text-[#0A1A3A] font-semibold">architecture</span>. Every funnel, every landing page, every ad,
            and every line of code should move your business forward.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Instead of “just making websites”, we craft digital ecosystems that
            attract, convert, and retain customers. That’s why our clients don’t
            just launch — they scale.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-3xl blur-2xl opacity-10 -m-4"></div>
          <div className="relative bg-white border border-gray-100 rounded-3xl p-12 text-left shadow-xl shadow-blue-500/5">
            <h3 className="font-bold mb-8 text-2xl text-[#0A1A3A]">What makes us different?</h3>
            <ul className="space-y-6">
              {[
                { icon: Target, text: "Strategy before design", color: "#3B82F6" },
                { icon: Zap, text: "Performance-first development", color: "#10B981" },
                { icon: BarChart2, text: "Data-driven marketing decisions", color: "#EC4899" },
                { icon: ShieldCheck, text: "Startup speed with agency quality", color: "#8B5CF6" }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4 text-gray-700 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50 text-gray-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Mission */}
      <motion.section
        className="relative bg-[#0A1A3A] text-white rounded-[2.5rem] py-24 px-8 mb-32 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-[120px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <Lightbulb className="text-[#3B82F6]" size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>

          <p className="text-gray-300 leading-relaxed text-xl md:text-2xl font-light italic">
            "To empower businesses with technology and marketing systems that
            generate predictable growth. <span className="text-white font-normal">We aim to remove guesswork</span> and replace it
            with strategy, creativity, and measurable outcomes."
          </p>
        </div>
      </motion.section>

      {/* Services Philosophy */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-[#0A1A3A] mb-4">
            How We Help You Grow
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our methodology is simple but effective: We build the foundation, launch with precision, and scale with data.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Build",
              icon: Zap,
              desc: "Lightning-fast websites and digital products built with modern tech stacks that convert visitors into customers.",
              color: "#3B82F6"
            },
            {
              title: "Launch",
              icon: Rocket,
              desc: "Performance marketing campaigns, funnels, and automation systems that bring qualified traffic consistently.",
              color: "#10B981"
            },
            {
              title: "Scale",
              icon: BarChart2,
              desc: "Analytics, optimization, and growth experiments to maximize ROI and scale what works.",
              color: "#EC4899"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon size={28} style={{ color: item.color }} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A1A3A]">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Closing CTA */}
      <motion.section
        className="text-center pb-32"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto p-12 rounded-[3rem] bg-gray-50 border border-gray-100 shadow-inner">
          <h2 className="text-4xl font-bold text-[#0A1A3A] mb-6">
            Ready to grow with us?
          </h2>

          <p className="text-gray-600 mb-10 text-lg">
            Let’s build something that actually moves your business forward.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all"
          >
            Start a Conversation
            <Rocket size={20} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

