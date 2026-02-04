import { Target, Megaphone, Rocket, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Growth Strategy & Planning',
    description: 'Messaging, positioning, roadmap',
    details: [
      'Brand positioning',
      'Market research',
      '90-day growth roadmap',
      'Competitive analysis',
    ],
    color: '#0A1A3A',
  },
  {
    icon: Megaphone,
    title: 'Digital Presence & Social',
    description: 'Social media management, community, content',
    details: [
      'Social media management',
      'Content creation',
      'Community building',
      'Influencer partnerships',
    ],
    color: '#3B82F6',
  },
  {
    icon: Rocket,
    title: 'Performance Marketing',
    description: 'Paid ads (Meta, Google, LinkedIn), PPC, retargeting',
    details: [
      'Meta ads management',
      'Google Ads campaigns',
      'LinkedIn B2B advertising',
      'Retargeting strategies',
    ],
    color: '#10B981',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    description: 'SEO, e-commerce, CRO',
    details: [
      'Technical SEO',
      'E-commerce optimization',
      'Conversion rate optimization',
      'Analytics tracking',
    ],
    color: '#EC4899',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A3A] mb-4">
            From Foundation to Rocket Fuel 🚀
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to plan, launch and scale your business growth — all under one roof.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <Icon size={26} style={{ color: service.color }} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#0A1A3A] mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
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
    </section>
  );
}
