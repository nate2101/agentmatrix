'use client';

import React from 'react';
import { Cpu, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenConsole: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenConsole }) => {
  return (
    <footer className="border-t border-white/10 bg-[#04060a] text-gray-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Cpu className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Agent<span className="text-blue-400">Matrix</span></span>
            </div>
            
            <p className="text-xs text-gray-300 max-w-sm leading-relaxed">
              The autonomous enterprise AI workforce. Enabling the next generation of 20-something unicorn founders to replace back-office toil with deterministic, self-healing agent fleets.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/nate2101/agentmatrix"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>nate2101 / agentmatrix</span>
              </a>

              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Vercel Edge Ready
              </span>
            </div>
          </div>

          {/* Product Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#simulator" className="hover:text-white transition-colors">Agent Simulator</a></li>
              <li><button onClick={onOpenConsole} className="hover:text-white transition-colors text-left">Fleet Console (App)</button></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Architecture Moat</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Enterprise Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">Enterprise</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Book Executive Demo</button></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">SOC 2 Type II Report</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Zero Retention Policy</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Private VPC Gateway</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">SLA &amp; Security Whitepaper</span></li>
            </ul>
          </div>

          {/* Ecosystem Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">Ecosystem</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors flex items-center gap-1">Stripe Sync <ExternalLink className="h-2.5 w-2.5 opacity-60" /></span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors flex items-center gap-1">Salesforce Connector <ExternalLink className="h-2.5 w-2.5 opacity-60" /></span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors flex items-center gap-1">GitHub Sentinel <ExternalLink className="h-2.5 w-2.5 opacity-60" /></span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors flex items-center gap-1">Slack Dispatcher <ExternalLink className="h-2.5 w-2.5 opacity-60" /></span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors flex items-center gap-1">REST &amp; Webhook API <ExternalLink className="h-2.5 w-2.5 opacity-60" /></span></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-300">
          <div className="flex items-center gap-2">
            <span>© 2026 AgentMatrix Inc. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" /> SOC 2 Type II Certified
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-300">
            <span>Built by a founder in their 20s with boundless ambition</span>
            <Heart className="h-3 w-3 text-red-500 fill-current inline mx-0.5" />
          </div>
        </div>

      </div>
    </footer>
  );
};
