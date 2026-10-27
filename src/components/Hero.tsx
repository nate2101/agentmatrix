'use client';

import React from 'react';
import { ArrowRight, Play, CheckCircle2, Zap, Shield, TrendingUp, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenSimulator: () => void;
  onOpenConsole: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSimulator, onOpenConsole, onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-600/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Launch Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-md mb-8 hover:bg-blue-500/20 transition-all cursor-pointer" onClick={onOpenSimulator}>
          <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Announcing AgentMatrix Fleet Engine v3.4 — Deterministic Sub-second Execution</span>
          <ArrowRight className="h-3.5 w-3.5 text-blue-400" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl max-w-5xl mx-auto leading-[1.12]">
          Hire Autonomous AI Agents. <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
            Scale Operations to Billions.
          </span>
        </h1>

        {/* Hero Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
          AgentMatrix replaces repetitive 40-hour operational toil with verifiable, autonomous AI agent fleets. 
          From multi-currency financial reconciliation to inbound sales enrichment and zero-day security auditing—without adding headcount.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenSimulator}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Play className="h-4 w-4 fill-white" />
            Launch Live Agent Simulator
          </button>
          
          <button
            onClick={onOpenConsole}
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 active:scale-[0.98] transition-all"
          >
            Open Fleet Console (App)
            <ArrowRight className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        {/* Trust Points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Zero Data Retention for Training</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Human-in-the-Loop Safe Guardrails</span>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6 max-w-4xl mx-auto text-left">
          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10">
            <div className="flex items-center justify-between text-blue-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Opex Saved</span>
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">$4.85M+</div>
            <p className="text-[11px] text-gray-400 mt-1">Across 420+ fast-growing enterprises</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10">
            <div className="flex items-center justify-between text-indigo-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Actions Run</span>
              <Zap className="h-4 w-4" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">18.4M</div>
            <p className="text-[11px] text-gray-400 mt-1">Autonomous verified executions</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10">
            <div className="flex items-center justify-between text-emerald-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Accuracy</span>
              <Shield className="h-4 w-4" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">99.98%</div>
            <p className="text-[11px] text-gray-400 mt-1">Deterministic AST & cryptographic checks</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10">
            <div className="flex items-center justify-between text-violet-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Latency</span>
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">340ms</div>
            <p className="text-[11px] text-gray-400 mt-1">Edge response and task resolution</p>
          </div>
        </div>

        {/* Integration Ecosystem strip */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
            Native Two-Way Connectors for Modern Enterprise Stacks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-gray-400 text-sm font-semibold">
            <span className="hover:text-white transition-colors">Stripe</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-white transition-colors">QuickBooks</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-white transition-colors">Salesforce</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-white transition-colors">GitHub</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-white transition-colors">Slack</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-white transition-colors">HubSpot</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-white transition-colors">Snowflake</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-white transition-colors">Zendesk</span>
          </div>
        </div>

      </div>
    </section>
  );
};
