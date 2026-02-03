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
    description: 'SEO, e-commerce, quick commerce, CRO',
    details: [
      'Technical SEO',
      'E-commerce optimization',
      'Conversion rate optimization',
      'Quick commerce setup',
    ],
    color: '#EC4899',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1A3A] mb-4">
            From Foundation to Rocket Fuel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our core service pillars cover everything you need to scale predictably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-gray-200 hover:border-transparent overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Gradient background on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: service.color }}
                />

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <Icon size={24} style={{ color: service.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#0A1A3A] mb-2 line-clamp-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 flex-grow">{service.description}</p>

                  {/* Details list */}
                  <div className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div
                  className="h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: service.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
