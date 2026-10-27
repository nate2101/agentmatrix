'use client';

import React, { useState } from 'react';
import { PRICING_PLANS } from '@/data/agentData';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingProps {
  onOpenDemo: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleSelectPlan = (planName: string) => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#3b82f6', '#8b5cf6', '#10b981'],
      });
    } catch {}
    onOpenDemo(planName);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative border-t border-white/5 bg-[#06080d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            TRANSPARENT VALUE-BASED PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Predictable Plans for Every Stage of Scale
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Replace \$150k+/year operational headcount costs with scalable, deterministic AI agent fleets.
          </p>

          {/* Billing Interval Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                !isAnnual
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-4 py-2 text-xs font-medium flex items-center gap-2 transition-all ${
                isAnnual
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual Billing
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-[#111625] via-[#0d111c] to-[#070a10] border-2 border-blue-500/80 shadow-2xl shadow-blue-500/10 scale-100 lg:-translate-y-2'
                    : 'glass-card border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Highlight Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-blue-500/30">
                      <Sparkles className="h-3 w-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-blue-400 font-mono mt-0.5">{plan.targetAudience}</p>
                    <p className="text-xs text-gray-400 mt-2 min-h-[36px]">{plan.description}</p>
                  </div>

                  {/* Price display */}
                  <div className="my-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">${price}</span>
                      <span className="text-xs text-gray-400">/ month</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">
                      {isAnnual ? 'Billed annually ($' + (price * 12).toLocaleString() + '/yr)' : 'Billed on a flexible monthly cycle'}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block font-semibold">
                      Included Capabilities:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-xs font-bold transition-all active:scale-[0.98] ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500'
                        : 'border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
                    <ShieldCheck className="h-3 w-3 text-emerald-400" />
                    <span>14-day money-back guarantee • Cancel anytime</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
