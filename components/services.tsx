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
  },
  {
    icon: BarChart3,
    title: 'Performance Digital Marketing (PPC & SEO)',
    description: 'High-intent traffic that converts into revenue',
    details: [
      'Google Ads & PPC scaling',
      'Amazon/Flipkart Advertising',
      'SEO strategy',
      'Generative Search Optimization (GSO)',
    ],
    color: '#3B82F6',
  },
  {
    icon: Users,
    title: 'Social Media Strategy & Management',
    description: 'Build communities, not just followers',
    details: [
      'Instagram & Facebook growth',
      'LinkedIn & X strategy',
      'YouTube content',
      'Viral-first creatives',
    ],
    color: '#10B981',
  },
  {
    icon: Camera,
    title: 'Conversion-Led Product Photography',
    description: 'Visuals designed to increase CTR & sales',
    details: [
      'Studio photography',
      'Lifestyle shoots',
      'USP highlighting',
      'Ad-optimized creatives',
    ],
    color: '#EC4899',
  },
  {
    icon: Handshake,
    title: 'Performance-Based Affiliate Marketing',
    description: 'Pay only for successful conversions',
    details: [
      'Creator & partner networks',
      'Commission-based scaling',
      '24/7 sales channels',
      'Guaranteed ROI model',
    ],
    color: '#F59E0B',
  },
  {
    icon: UserPlus,
    title: 'High-Quality Lead Generation',
    description: 'Qualified prospects, not random traffic',
    details: [
      'Landing page funnels',
      'Targeted ads',
      'High-intent capture',
      'B2B & B2C leads',
    ],
    color: '#6366F1',
  },
  {
    icon: Star,
    title: 'Reputation & Review Management',
    description: 'Trust that drives higher conversions',
    details: [
      'Review acquisition',
      'Feedback handling',
      'Credibility boost',
      'Marketplace ranking growth',
    ],
    color: '#EF4444',
  },
  {
    icon: MessageCircle,
    title: 'Retention & Email/WhatsApp Automation',
    description: 'Turn buyers into loyal customers',
    details: [
      'Post-purchase flows',
      'WhatsApp automation',
      'Email sequences',
      'Customer LTV growth',
    ],
    color: '#14B8A6',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white">

      {/* ================= HERO ================= */}
      <div className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A3A] mb-4">
          Everything You Need to Scale Revenue 🚀
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          From marketplaces and ads to retention and automation —
          we build complete growth systems that drive predictable revenue.
        </p>
      </div>


      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <Icon size={26} style={{ color: service.color }} />
                </div>

                <h3 className="text-lg font-semibold text-[#0A1A3A] mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span
                        className="w-1.5 h-1.5 mt-2 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

        </div>
      </div>


      {/* ================= PROCESS ================= */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="font-semibold text-lg mb-2">Plan</h3>
            <p className="text-gray-600 text-sm">
              Strategy, research, and growth roadmap.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Launch</h3>
            <p className="text-gray-600 text-sm">
              Execute ads, content, funnels & marketplaces.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Scale</h3>
            <p className="text-gray-600 text-sm">
              Optimize, automate & maximize ROI.
            </p>
          </div>

        </div>
      </div>


      {/* ================= CTA ================= */}
      <div className="text-center py-24 px-6">
        <Link
          href="/contact"
          className="bg-[#3B82F6] text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transition"
        >
          Claim Your Free Growth Audit →
        </Link>
      </div>
    </section>
  );
}
