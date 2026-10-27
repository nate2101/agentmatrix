'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote:
        'AgentMatrix allowed our 18-person core team to operate with the execution speed and operational capacity of an 80-person company. Atlas-Ledger automated our entire multi-entity reconciliation.',
      author: 'Marcus Vance',
      role: 'VP of Engineering & Ops',
      company: 'Vertex Cloud (Series B)',
      highlight: 'Saved 32 hours/week',
      avatarBg: 'from-blue-500 to-indigo-600',
    },
    {
      quote:
        'The deterministic AST verification is what convinced our Chief Information Security Officer. We passed our SOC 2 Type II audit in 3 weeks because Aegis-Guard cryptographically logged every tool call.',
      author: 'Elena Rostova',
      role: 'Chief Technology Officer',
      company: 'FinEdge Global',
      highlight: 'Zero SOC 2 audit regressions',
      avatarBg: 'from-purple-500 to-pink-600',
    },
    {
      quote:
        'We grew our ARR from $1.4M to $8.8M without hiring a single back-office coordinator. The Apollo-SDR agent enriches and qualifies leads faster than any manual team could ever dream of.',
      author: 'David Kim',
      role: 'Co-Founder & CEO',
      company: 'HyperScale AI',
      highlight: '6.2x ARR Growth with zero headcount bloat',
      avatarBg: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 relative border-t border-white/5 bg-[#06080d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 border border-violet-500/20 mb-3">
            <Star className="h-3.5 w-3.5 fill-current" />
            ENTERPRISE VALIDATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by the Next Generation of Tech Unicorns
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Hear how modern engineering and operations leaders run lean, high-margin software organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-gray-400 opacity-40" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-tr ${rev.avatarBg} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
                    {rev.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.author}</h4>
                    <p className="text-[11px] text-gray-400">{rev.role} • <span className="text-blue-400">{rev.company}</span></p>
                  </div>
                </div>

                <div className="mt-3 inline-block rounded-md bg-white/5 px-2.5 py-1 text-[10px] font-mono font-medium text-emerald-400 border border-white/5">
                  ★ {rev.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
