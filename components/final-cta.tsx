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

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setSubscribed(true);
          setEmail('');
          setTimeout(() => setSubscribed(false), 3000);
          toast.success("Subscribed successfully!");
        } else {
          toast.error("Failed to subscribe.");
        }
      } catch (error) {
        toast.error("An error occurred.");
      }
    }
  };

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1A3A] via-[#1A2A4A] to-[#0A1A3A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute -bottom-10 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Systematize Your Growth?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Book a free, no-obligation 30-minute Growth Audit. We'll analyze your current setup and provide a custom action plan—no sales pitch, just honest insights.
          </p>
        </div>

        {/* Primary CTA Button */}
        <div className="flex justify-center mb-12">
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
        </div>

        {/* Newsletter signup */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Mail size={20} className="text-[#10B981]" />
            <h3 className="text-xl font-semibold text-white">Get Growth Insights Weekly</h3>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full bg-white/20 text-white placeholder:text-white/50 border border-white/30 focus:border-[#10B981] focus:outline-none transition-colors"
              required
            />
            <Button
              type="submit"
              className="bg-[#10B981] hover:bg-[#10B981]/90 text-white font-semibold rounded-full px-8 py-3 whitespace-nowrap transition-all"
            >
              {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
            </Button>
          </form>

          <p className="text-sm text-white/70 mt-4">
            Unsubscribe anytime. We respect your inbox. No spam, just real growth strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
