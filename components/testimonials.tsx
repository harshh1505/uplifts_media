'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Founder @ TechFlow",
        content: "Uplifts Media completely transformed our customer acquisition strategy. We saw a 40% decrease in CAC within the first 60 days of working with them.",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "James Wilson",
        role: "Marketing Director @ Pulse",
        content: "The most data-driven agency we've ever partnered with. Their weekly reports are incredibly detailed and their execution is flawless.",
        avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
        name: "Elena Rodriguez",
        role: "CEO @ NovaStyle",
        content: "Our e-commerce revenue doubled in just one quarter. The Uplifts method isn't just a marketing plan, it's a growth machine.",
        avatar: "https://i.pravatar.cc/150?u=elena"
    },
    {
        name: "Michael Chang",
        role: "COO @ GreenLabs",
        content: "They function as an extension of our own team. The level of commitment and transparency is something you rarely find in agencies.",
        avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
        name: "Sophia Miller",
        role: "Head of Growth @ Finly",
        content: "From SEO to Paid Social, they mastered every channel we threw at them. Highly recommended for any startup looking to scale fast.",
        avatar: "https://i.pravatar.cc/150?u=sophia"
    },
    {
        name: "David Park",
        role: "Founder @ CloudX",
        content: "Reliable, professional, and results-oriented. They helped us identify growth levers we didn't even know existed.",
        avatar: "https://i.pravatar.cc/150?u=david"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-gray-50 dark:bg-[#0A1A3B]/50 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-extrabold text-[#0A1A3A] dark:text-white mb-6"
                    >
                        Don't Just Take Our Word For It
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Hear from the founders and marketing leaders who have scaled their businesses with the Uplifts Method.
                    </motion.p>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden">
                {/* First row of marquee */}
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex whitespace-nowrap py-4"
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="inline-block w-[400px] mx-4 bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <div className="relative mb-6">
                                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/10 dark:text-blue-400/10" />
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-normal relative z-10 italic">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-blue-100 dark:border-white/10"
                                />
                                <div>
                                    <h4 className="font-bold text-[#0A1A3A] dark:text-white text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Second row of marquee drifting opposite way */}
            <div className="relative flex overflow-x-hidden mt-8">
                <motion.div
                    animate={{ x: [-1920, 0] }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex whitespace-nowrap py-4"
                >
                    {[...testimonials, ...testimonials].reverse().map((testimonial, index) => (
                        <div
                            key={index}
                            className="inline-block w-[400px] mx-4 bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <div className="relative mb-6">
                                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/10 dark:text-blue-400/10" />
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-normal relative z-10 italic">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-blue-100 dark:border-white/10"
                                />
                                <div>
                                    <h4 className="font-bold text-[#0A1A3A] dark:text-white text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
