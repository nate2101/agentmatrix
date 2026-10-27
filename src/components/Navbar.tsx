'use client';

import React from 'react';
import { Cpu, Terminal, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentTab: 'landing' | 'console';
  setCurrentTab: (tab: 'landing' | 'console') => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onOpenDemo }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#06080d]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCurrentTab('landing')}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#090d16]">
                <Cpu className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">Agent<span className="text-blue-400">Matrix</span></span>
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-400 border border-blue-500/20">
                  ENTERPRISE AI
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-mono hidden sm:block">Autonomous B2B Workforce</p>
            </div>
          </button>
        </div>

        {/* Navigation Mode Pill */}
        <div className="flex items-center gap-1 rounded-full bg-white/5 p-1 border border-white/10">
          <button
            onClick={() => setCurrentTab('landing')}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              currentTab === 'landing'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Venture Overview
          </button>
          <button
            onClick={() => setCurrentTab('console')}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              currentTab === 'console'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            Live App Console
            <span className="ml-1 flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </button>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            SOC 2 Verified
          </button>
          
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/50 transition-all duration-200"
          >
            Book Demo
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
