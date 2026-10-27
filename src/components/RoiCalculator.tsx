'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [teamSize, setTeamSize] = useState<number>(6);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(16);

  // Math:
  // Total annual manual toil cost
  const totalAnnualHours = teamSize * manualHoursPerWeek * 52;
  const currentAnnualCost = totalAnnualHours * hourlyRate;

  // AgentMatrix cost (Growth Scale plan)
  const agentMatrixCost = 899 * 12; // $10,788/yr

  // Hours automated (approx 88%)
  const hoursSavedAnnual = Math.round(totalAnnualHours * 0.88);
  const grossSavings = Math.round(hoursSavedAnnual * hourlyRate);
  const netSavingsAnnual = Math.max(0, grossSavings - agentMatrixCost);
  const roiPercentage = Math.round((netSavingsAnnual / agentMatrixCost) * 100);

  return (
    <section id="roi-calculator" className="py-16 md:py-24 relative border-t border-white/5 bg-[#06080d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20 mb-3">
            <Calculator className="h-3.5 w-3.5" />
            MEASURABLE BUSINESS IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Annual Operational ROI
          </h2>
          <p className="mt-3 text-base text-gray-300">
            See the exact financial and time savings unlocked by deploying autonomous agents instead of expanding manual back-office headcount.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Sliders Input Form */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            
            {/* Slider 1: Team Size */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-gray-300">
                  Operations &amp; Back-Office Staff
                </label>
                <span className="text-sm font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-md font-mono">
                  {teamSize} people
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>1 founder</span>
                <span>25 staff</span>
                <span>50+ enterprise</span>
              </div>
            </div>

            {/* Slider 2: Hourly Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-gray-300">
                  Blended Hourly Cost (Salary + Benefits)
                </label>
                <span className="text-sm font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-md font-mono">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="180"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>$30/hr</span>
                <span>$100/hr</span>
                <span>$180/hr</span>
              </div>
            </div>

            {/* Slider 3: Manual Hours */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-gray-300">
                  Weekly Hours Spent on Repetitive Tasks
                </label>
                <span className="text-sm font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-md font-mono">
                  {manualHoursPerWeek} hrs / week
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                value={manualHoursPerWeek}
                onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>5 hrs (light)</span>
                <span>20 hrs (standard)</span>
                <span>35 hrs (heavy toil)</span>
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-indigo-950/20 to-[#0d111a] p-6 sm:p-8 border border-blue-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <TrendingUp className="h-48 w-48 text-blue-400" />
            </div>

            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
                  Net Annual Savings
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-center">
                  ${netSavingsAnnual.toLocaleString()}
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  Replaces manual busywork with sub-second deterministic agent flows.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-black/40 rounded-xl p-3.5 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                    <Clock className="h-3.5 w-3.5 text-blue-400" />
                    <span>Annual Time Saved</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {hoursSavedAnnual.toLocaleString()} <span className="text-xs text-gray-400">hours</span>
                  </div>
                </div>

                <div className="bg-black/40 rounded-xl p-3.5 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                    <DollarSign className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Estimated ROI</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    +{roiPercentage}%
                  </div>
                </div>
              </div>

              {/* Before vs After comparison bar */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Manual Headcount Expense:</span>
                  <span className="text-red-400 line-through font-mono">${currentAnnualCost.toLocaleString()} /yr</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-white">
                  <span>AgentMatrix Platform Cost:</span>
                  <span className="text-emerald-400 font-mono">${agentMatrixCost.toLocaleString()} /yr</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenDemo}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 px-4 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] transition-all"
              >
                <span>Unlock These Savings for Your Company</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
