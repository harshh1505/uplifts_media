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
import { motion } from 'framer-motion';

const services = [
  {
    icon: Store,
    title: 'Amazon & Flipkart Marketplace Mastery',
    description: 'End-to-end marketplace growth & account management',
    details: [
      'FBA inventory planning',
      'Buy Box optimization',
      'Premium A+ content design',
      'Full account management',
    ],
    color: '#0A1A3A',
    gradient: 'from-blue-950 to-blue-900',
  },
  {
    icon: BarChart3,
    title: 'Performance Digital Marketing',
    description: 'High-intent traffic that converts into revenue',
    details: [
      'Google Ads & PPC scaling',
      'Amazon/Flipkart Advertising',
      'SEO strategy',
      'Generative Search Optimization',
    ],
    color: '#3B82F6',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Social Media Strategy',
    description: 'Build communities, not just followers',
    details: [
      'Instagram & Facebook growth',
      'LinkedIn & X strategy',
      'YouTube content',
      'Viral-first creatives',
    ],
    color: '#10B981',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Camera,
    title: 'Product Photography',
    description: 'Visuals designed to increase CTR & sales',
    details: [
      'Studio photography',
      'Lifestyle shoots',
      'USP highlighting',
      'Ad-optimized creatives',
    ],
    color: '#EC4899',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    icon: Handshake,
    title: 'Affiliate Marketing',
    description: 'Pay only for successful conversions',
    details: [
      'Creator & partner networks',
      'Commission-based scaling',
      '24/7 sales channels',
      'Guaranteed ROI model',
    ],
    color: '#F59E0B',
    gradient: 'from-amber-500 to-amber-600',
  },
  {
    icon: UserPlus,
    title: 'Lead Generation',
    description: 'Qualified prospects, not random traffic',
    details: [
      'Landing page funnels',
      'Targeted ads',
      'High-intent capture',
      'B2B & B2C leads',
    ],
    color: '#6366F1',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Star,
    title: 'Reputation Management',
    description: 'Trust that drives higher conversions',
    details: [
      'Review acquisition',
      'Feedback handling',
      'Credibility boost',
      'Marketplace ranking growth',
    ],
    color: '#EF4444',
    gradient: 'from-red-500 to-red-600',
  },
  {
    icon: MessageCircle,
    title: 'Retention Automation',
    description: 'Turn buyers into loyal customers',
    details: [
      'Post-purchase flows',
      'WhatsApp automation',
      'Email sequences',
      'Customer LTV growth',
    ],
    color: '#14B8A6',
    gradient: 'from-teal-500 to-teal-600',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center py-28 px-6"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Everything You Need to
          <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mt-2">
            Scale Revenue 🚀
          </span>
        </h2>

        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
          From marketplaces and ads to retention and automation — we build complete growth systems that drive predictable revenue.
        </p>
      </motion.div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-transparent h-full">
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-xl rounded-xl`} />
                        <div 
                          className="relative w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <Icon size={30} style={{ color: service.color }} />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-7 text-base leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="text-gray-700 text-sm flex items-start gap-3 group/item"
                        >
                          <span 
                            className="w-2 h-2 mt-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover/item:scale-125"
                            style={{ backgroundColor: service.color }}
                          />
                          <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect Ring */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gray-100 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-32 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-center text-4xl font-bold text-gray-900 mb-16">
            Our <span className="text-blue-600">3-Step</span> Growth Process
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Plan', 'Launch', 'Scale'].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl font-bold mb-6 mx-auto">
                    {index + 1}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {step}
                  </h4>
                  
                  <p className="text-gray-600 text-center text-lg leading-relaxed">
                    {index === 0 && 'Strategy, research, and data-driven growth roadmap.'}
                    {index === 1 && 'Execute ads, content, funnels & marketplace integration.'}
                    {index === 2 && 'Optimize, automate & maximize ROI through analytics.'}
                  </p>
                  
                  {/* Animated Arrow for middle step */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-8 border-t-2 border-r-2 border-blue-300 transform rotate-45 animate-pulse" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= CTA ================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center py-32 px-6 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h3>
          
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
            Get a free, comprehensive audit of your current growth strategy with actionable insights.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-5 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
            >
              Claim Your Free Growth Audit
              <span className="text-xl animate-pulse">→</span>
            </Link>
          </motion.div>
          
          <p className="text-gray-500 text-sm mt-6">
            No credit card required • 30-minute consultation • Custom action plan
          </p>
        </div>
      </motion.div>
    </section>
  );
}
