'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, defaultPlan }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [headcount, setHeadcount] = useState('20-100 employees');
  const [department, setDepartment] = useState('Finance & Operations');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#8b5cf6'],
      });
    } catch {}
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    setCompany('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-lg rounded-2xl glass-card border border-white/20 p-6 sm:p-8 shadow-2xl bg-[#090d16] text-left">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                VIP Priority Access
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {defaultPlan ? `Start Trial on ${defaultPlan}` : 'Deploy Your Enterprise Fleet'}
            </h3>
            
            <p className="text-xs text-gray-300 mt-1 mb-6">
              Get immediate sandbox credentials and 14 days of unrestricted access to our autonomous agent orchestrator.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Corporate Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full rounded-xl bg-black/50 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Company Size</label>
                  <select
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                    className="w-full rounded-xl bg-black/50 border border-white/10 px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="1-20 employees">1 - 20 employees</option>
                    <option value="20-100 employees">20 - 100 employees</option>
                    <option value="100-500 employees">100 - 500 employees</option>
                    <option value="500+ enterprise">500+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Primary Department to Automate</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full rounded-xl bg-black/50 border border-white/10 px-3.5 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="Finance & Operations">Financial Reconciliation & Invoicing (Atlas-Ledger)</option>
                  <option value="Sales & SDR Pipeline">Inbound Lead Qualification & CRM (Apollo-SDR)</option>
                  <option value="DevSecOps & Compliance">GitHub PR Security & SOC 2 Checks (Aegis-Guard)</option>
                  <option value="Customer Support">Tier-1 Support & Automated Triage (Helios-Care)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-4 text-xs font-bold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] transition-all"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Provision Fleet &amp; Unlock Sandbox</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-300 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Zero credit card required • Instant access link emailed</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-black text-white">Your Fleet is Being Initialized!</h3>
            
            <p className="text-xs text-gray-300 max-w-sm mx-auto">
              We have generated your dedicated sandbox instance for <strong className="text-white">{company}</strong>. 
              An activation token has been dispatched to <strong className="text-blue-400">{email}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-left space-y-1.5">
              <div className="text-gray-400 text-[10px]">PROVISIONING STATUS:</div>
              <div className="text-emerald-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Cluster: cl-us-east-matrix-884
              </div>
              <div className="text-gray-300 text-[11px]">Primary Agent: {department}</div>
              <div className="text-gray-300 text-[11px]">SLA: 99.99% Guaranteed</div>
            </div>

            <button
              onClick={handleReset}
              className="w-full rounded-xl bg-white/10 hover:bg-white/15 text-white py-2.5 text-xs font-semibold transition-colors"
            >
              Back to Venture Overview
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
