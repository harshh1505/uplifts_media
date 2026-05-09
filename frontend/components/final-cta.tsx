'use client';

import React from "react"

import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { EnquiryForm } from '@/components/enquiry-form';
import { toast } from "sonner";
import { motion } from 'framer-motion';
import { supabase } from "@/lib/supabase"

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { error } = await supabase.from('leads').insert({
          email,
          source: 'final_cta_newsletter',
          metadata: { type: 'newsletter_subscription' }
        })
        if (error) throw error
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
        toast.success("Welcome to the growth inner circle! 🚀");
      } catch (error) {
        toast.error("An error occurred.");
      }
    }
  };

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1A3A] via-[#1A2A4A] to-[#0A1A3A] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -bottom-10 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Systematize Your Growth?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Book a free, no-obligation 30-minute Growth Audit. We'll analyze your current setup and provide a custom action plan—no sales pitch, just honest insights.
          </p>
        </motion.div>

        {/* Primary CTA Button */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] hover:shadow-2xl hover:shadow-blue-500/30 text-white font-bold rounded-full px-10 py-7 text-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <span className="flex items-center gap-2">
                  Connect With Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-white text-gray-900 border-none rounded-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center text-[#0A1A3A]">Book Your Growth Audit</DialogTitle>
                <DialogDescription className="text-center text-gray-500">
                  Fill out the form below and we'll get back to you within 24 hours.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <EnquiryForm onSuccess={() => document.querySelector<HTMLElement>('[data-state="open"]')?.click()} />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          className="bg-white/[0.03] backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-white/10 relative overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Subtle glow effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#10B981]/10 rounded-full blur-[80px] group-hover:bg-[#10B981]/20 transition-all duration-700"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-2 bg-[#10B981]/10 rounded-lg">
                  <Mail size={24} className="text-[#10B981]" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Growth Insights Weekly</h3>
              </div>
              <p className="text-blue-100/70 text-lg">
                Join 500+ founders getting high-signal growth engineering tips.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/5 text-white placeholder:text-white/30 border border-white/10 focus:border-[#10B981] focus:bg-white/10 focus:outline-none transition-all duration-300"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#10B981] hover:bg-[#10B981]/90 text-white font-bold rounded-2xl px-8 py-7 transition-all duration-300 shadow-lg shadow-[#10B981]/10"
                >
                  {subscribed ? (
                    <motion.span initial={{ scale: 0.8 }} animate={{ scale: 1 }}>Subscribed! ✓</motion.span>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </div>
              <p className="text-xs text-white/40 mt-4 text-center md:text-left">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
