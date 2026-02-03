'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

export function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animate the chart lines
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length);
      path.style.animation = `dash 2s ease-in-out ${index * 0.2}s forwards infinite`;
    });
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-green-100/30 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm font-semibold">
                <TrendingUp size={16} />
                Scaling Startups & Scale-ups
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight text-[#0A1A3A]">
              We Don't Just Do Marketing. We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">Growth Engines.</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Uplifts Media is your outsourced growth team. We handle everything from social presence to PPC, SEO, and e-commerce—so you can focus on scaling your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/30 group"
              >
                <Link href="#cta" className="flex items-center gap-2">
                  Book a Free Growth Audit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-[#0A1A3A] text-[#0A1A3A] hover:bg-[#0A1A3A]/5 font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 bg-transparent"
              >
                <Link href="#case-studies">See Our Case Studies</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-[#0A1A3A]">50+</p>
                <p>Successful Projects</p>
              </div>
              <div>
                <p className="font-semibold text-[#0A1A3A]">$50M+</p>
                <p>Generated in Revenue</p>
              </div>
              <div>
                <p className="font-semibold text-[#0A1A3A]">98%</p>
                <p>Client Retention</p>
              </div>
            </div>
          </div>

          {/* Right - Growth Chart Animation */}
          <div className="flex justify-center items-center">
            <svg
              ref={svgRef}
              viewBox="0 0 400 300"
              className="w-full max-w-md h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid background */}
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="30" y1="50" x2="30" y2="250" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="30" y1="250" x2="370" y2="250" stroke="#E5E7EB" strokeWidth="2" />

              {/* Grid ticks */}
              {[50, 100, 150, 200, 250].map((y) => (
                <line key={y} x1="25" y1={y} x2="30" y2={y} stroke="#D1D5DB" strokeWidth="1" />
              ))}

              {/* Y-axis labels */}
              <text x="15" y="55" fontSize="10" fill="#9CA3AF" textAnchor="end">
                100%
              </text>
              <text x="15" y="155" fontSize="10" fill="#9CA3AF" textAnchor="end">
                50%
              </text>
              <text x="15" y="255" fontSize="10" fill="#9CA3AF" textAnchor="end">
                0%
              </text>

              {/* Main growth line */}
              <path
                d="M 50 200 L 80 180 L 110 160 L 140 140 L 170 110 L 200 90 L 230 70 L 260 60 L 290 55 L 320 50 L 350 45"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Area under curve */}
              <path
                d="M 50 200 L 80 180 L 110 160 L 140 140 L 170 110 L 200 90 L 230 70 L 260 60 L 290 55 L 320 50 L 350 45 L 350 250 L 50 250 Z"
                fill="url(#areaGradient)"
              />

              {/* Data points */}
              {[
                { x: 50, y: 200 },
                { x: 140, y: 140 },
                { x: 230, y: 70 },
                { x: 320, y: 50 },
                { x: 350, y: 45 },
              ].map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="#10B981"
                  stroke="#fff"
                  strokeWidth="2"
                />
              ))}

              {/* Top label */}
              <text x="350" y="30" fontSize="12" fill="#10B981" fontWeight="bold" textAnchor="middle">
                +240% Growth
              </text>
              <line x1="350" y1="35" x2="350" y2="42" stroke="#10B981" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
