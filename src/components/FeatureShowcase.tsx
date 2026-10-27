'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Workflow, 
  RefreshCw, 
  KeyRound,
  FileCheck2,
  Share2
} from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-400" />,
      title: 'Deterministic Verification Engine',
      description: 'Unlike stochastic chatbots, AgentMatrix executes through deterministic AST validators and cryptographic verification seals. Zero hallucinated ledgers or erroneous actions.',
    },
    {
      icon: <Workflow className="h-6 w-6 text-indigo-400" />,
      title: 'Multi-Agent Collaborative Swarming',
      description: 'Complex operations require team coordination. Financial agents hand off tax anomalies to legal compliance agents, while SDRs coordinate directly with CRM dispatchers.',
    },
    {
      icon: <Lock className="h-6 w-6 text-emerald-400" />,
      title: 'Zero Data Retention (ZDR)',
      description: 'Your customer databases, financial records, and proprietary codebase are never utilized for model training. Certified isolated ephemeral execution environments.',
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-violet-400" />,
      title: 'Self-Healing API Adaptors',
      description: 'When third-party webhooks change schema or external APIs fail with 5xx status codes, agents automatically re-negotiate payload contracts and recover autonomously.',
    },
    {
      icon: <KeyRound className="h-6 w-6 text-amber-400" />,
      title: 'Granular Human-in-the-Loop Guardrails',
      description: 'Set explicit thresholds (e.g. require human sign-off for wire transfers over $10,000 or production database migrations) with one-click Slack approvals.',
    },
    {
      icon: <FileCheck2 className="h-6 w-6 text-cyan-400" />,
      title: 'Cryptographic SOC 2 Audit Pack',
      description: 'Every autonomous tool execution, decision trace, and data mutation is stamped with SHA-256 hashes, generating instant audit evidence for SOC 2 Type II and ISO 27001.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative border-t border-white/5 bg-[#080b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20 mb-3">
            <Cpu className="h-3.5 w-3.5" />
            ENTERPRISE ARCHITECTURAL MOAT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Mission-Critical Reliability
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Why scale-ups and enterprises trust AgentMatrix with their core business workflows.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="mt-16 rounded-2xl bg-[#04060a] border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Share2 className="h-4 w-4 text-blue-400" />
                Deterministic Execution Pipeline
              </h3>
              <p className="text-xs text-gray-300 mt-0.5">End-to-end task flow from webhook trigger to signed audit seal</p>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md self-start md:self-auto">
              Average Execution: 280ms
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">Stage 1</span>
              <h4 className="text-xs font-bold text-white mt-1 mb-1">Payload Ingestion</h4>
              <p className="text-[11px] text-gray-400">HMAC-validated webhook or scheduled cron event</p>
            </div>
            <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-indigo-400 uppercase font-semibold">Stage 2</span>
              <h4 className="text-xs font-bold text-white mt-1 mb-1">Policy &amp; Guardrails</h4>
              <p className="text-[11px] text-gray-400">Budget limits, human approval checks &amp; sandboxing</p>
            </div>
            <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-violet-400 uppercase font-semibold">Stage 3</span>
              <h4 className="text-xs font-bold text-white mt-1 mb-1">Tool Dispatch</h4>
              <p className="text-[11px] text-gray-400">Deterministic API actions (Stripe, GitHub, Salesforce)</p>
            </div>
            <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">Stage 4</span>
              <h4 className="text-xs font-bold text-white mt-1 mb-1">Cryptographic Seal</h4>
              <p className="text-[11px] text-gray-400">SHA-256 audit entry written to immutable log</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
