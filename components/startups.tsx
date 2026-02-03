import { Check } from 'lucide-react';

const benefits = [
  'Founder-friendly retainers (no lock-ins)',
  'Fast-paced, agile execution',
  'Metrics that matter: CAC, LTV, MRR growth',
  'Weekly sprints, monthly reviews',
  'Direct founder access to leadership',
  'Flexible engagement models',
];

export function StartupsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1A3A] mb-4">
            Built for Startups & Scale-ups
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We understand your unique needs at every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <Check size={16} className="text-white" />
                </div>
                <p className="text-lg text-gray-700 group-hover:text-[#0A1A3A] transition-colors">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Right Column - Growth Visualization */}
          <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-end justify-start overflow-hidden border border-gray-200">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl" />
            </div>

            {/* Growth bars - animated */}
            <svg viewBox="0 0 300 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Grid */}
              <line x1="30" y1="10" x2="30" y2="200" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="30" y1="200" x2="280" y2="200" stroke="#E5E7EB" strokeWidth="1" />

              {/* Y-axis labels */}
              <text x="20" y="15" fontSize="10" fill="#9CA3AF">
                100%
              </text>
              <text x="15" y="105" fontSize="10" fill="#9CA3AF">
                50%
              </text>
              <text x="20" y="205" fontSize="10" fill="#9CA3AF">
                0%
              </text>

              {/* Growth bars with gradient */}
              <defs>
                <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#0A1A3A" />
                </linearGradient>
                <linearGradient id="barGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>

              {/* Month 1 */}
              <rect x="50" y="160" width="35" height="40" fill="url(#barGradient1)" rx="4" className="animate-pulse" />
              <text x="67" y="215" fontSize="10" fill="#6B7280" textAnchor="middle">
                M1
              </text>

              {/* Month 3 */}
              <rect x="120" y="100" width="35" height="100" fill="url(#barGradient1)" rx="4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
              <text x="137" y="215" fontSize="10" fill="#6B7280" textAnchor="middle">
                M3
              </text>

              {/* Month 6 */}
              <rect x="190" y="30" width="35" height="170" fill="url(#barGradient2)" rx="4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
              <text x="207" y="215" fontSize="10" fill="#6B7280" textAnchor="middle">
                M6
              </text>

              {/* Trend line */}
              <polyline points="67,160 137,100 207,30" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4" />
            </svg>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3B82F6] to-[#10B981] opacity-10 rounded-bl-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
