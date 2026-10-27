'use client';

import React, { useState, useEffect } from 'react';
import { AGENT_ARCHETYPES, AgentArchetype } from '@/data/agentData';
import { 
  CreditCard, 
  Target, 
  ShieldCheck, 
  Headphones, 
  Play, 
  RotateCcw, 
  CheckCircle, 
  Terminal, 
  Sparkles, 
  Clock, 
  DollarSign, 
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const AgentSimulator: React.FC = () => {
  const [selectedAgentId, setSelectedAgentId] = useState<string>(AGENT_ARCHETYPES[0].id);
  const [customPrompt, setCustomPrompt] = useState<string>(AGENT_ARCHETYPES[0].sampleInput);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentAgent: AgentArchetype = AGENT_ARCHETYPES.find(a => a.id === selectedAgentId) || AGENT_ARCHETYPES[0];

  const handleSelectAgent = (agent: AgentArchetype) => {
    setSelectedAgentId(agent.id);
    setCustomPrompt(agent.sampleInput);
    setIsRunning(false);
    setActiveStepIndex(-1);
    setIsCompleted(false);
  };

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStepIndex(0);
    setIsCompleted(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && activeStepIndex >= 0 && activeStepIndex < currentAgent.executionSteps.length) {
      const stepDuration = currentAgent.executionSteps[activeStepIndex].durationMs * 2.2;
      timer = setTimeout(() => {
        if (activeStepIndex + 1 < currentAgent.executionSteps.length) {
          setActiveStepIndex(prev => prev + 1);
        } else {
          setIsRunning(false);
          setIsCompleted(true);
          // Trigger celebratory confetti
          try {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#3b82f6', '#8b5cf6', '#10b981'],
            });
          } catch {
            // Ignore if in test env
          }
        }
      }, stepDuration);
    }
    return () => clearTimeout(timer);
  }, [isRunning, activeStepIndex, currentAgent]);

  const getAgentIcon = (name: string) => {
    switch (name) {
      case 'CreditCard': return <CreditCard className="h-5 w-5 text-emerald-400" />;
      case 'Target': return <Target className="h-5 w-5 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="h-5 w-5 text-blue-400" />;
      case 'Headphones': return <Headphones className="h-5 w-5 text-purple-400" />;
      default: return <Sparkles className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="simulator" className="py-16 md:py-24 relative border-t border-white/5 bg-[#080b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20 mb-3">
            <Terminal className="h-3.5 w-3.5" />
            INTERACTIVE RUNTIME BENCHMARK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test Drive Autonomous Execution
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Select an operational archetype below and trigger a live simulated execution pass. Observe sub-second tool dispatching, verification hashes, and audit log generation.
          </p>
        </div>

        {/* Agent Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {AGENT_ARCHETYPES.map((agent) => {
            const isSelected = agent.id === selectedAgentId;
            return (
              <button
                key={agent.id}
                onClick={() => handleSelectAgent(agent)}
                className={`flex flex-col text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'border-blue-500/60 bg-blue-950/20 shadow-lg shadow-blue-500/10'
                    : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                    {getAgentIcon(agent.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                    {agent.category}
                  </span>
                </div>
                <span className="text-sm font-bold text-white">{agent.name}</span>
                <span className="text-xs text-gray-300 line-clamp-1 mt-0.5">{agent.role}</span>
              </button>
            );
          })}
        </div>

        {/* Simulator Main Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Input & Agent Profile */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-white/10 flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {currentAgent.name}
                  <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                    {currentAgent.confidenceScore}% Determinism
                  </span>
                </h3>
                <p className="text-xs text-gray-300 mt-1">{currentAgent.role}</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              {currentAgent.description}
            </p>

            {/* Performance Stats Pill */}
            <div className="grid grid-cols-3 gap-2 bg-black/30 p-3 rounded-xl border border-white/5 text-center">
              <div>
                <span className="text-[10px] uppercase text-gray-300 block font-mono">Time Cut</span>
                <span className="text-sm font-bold text-blue-400 flex items-center justify-center gap-1 mt-0.5">
                  <Clock className="h-3 w-3" />
                  {currentAgent.avgTimeReduction}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-gray-300 block font-mono">Cost / Run</span>
                <span className="text-sm font-bold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                  <DollarSign className="h-3 w-3" />
                  {currentAgent.costPerTask}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-gray-300 block font-mono">Steps</span>
                <span className="text-sm font-bold text-violet-400 flex items-center justify-center gap-1 mt-0.5">
                  <Layers className="h-3 w-3" />
                  {currentAgent.executionSteps.length}
                </span>
              </div>
            </div>

            {/* Prompt Trigger Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-300 flex items-center justify-between">
                <span>Task Payload / Trigger Input:</span>
                <span className="text-[10px] font-mono text-gray-400">Webhook JSON / Event</span>
              </label>
              <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                rows={3}
                className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-xs text-gray-200 font-mono focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                placeholder="Enter custom business payload..."
              />
            </div>

            {/* Run & Reset Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-semibold text-white shadow-lg transition-all ${
                  isRunning
                    ? 'bg-blue-600/50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/20 active:scale-[0.98]'
                }`}
              >
                {isRunning ? (
                  <>
                    <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Executing Agent Steps...
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-white" />
                    Trigger Autonomous Run
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  setActiveStepIndex(-1);
                  setIsCompleted(false);
                }}
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right: Live Execution Terminal Feed */}
          <div className="lg:col-span-7 rounded-2xl bg-[#030508] border border-white/15 p-5 shadow-2xl overflow-hidden font-mono text-xs">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-gray-400 text-[11px] ml-2">agentmatrix-kernel-v3.4 ~ task_orchestrator</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] text-emerald-400 font-semibold uppercase">Cluster Online</span>
              </div>
            </div>

            {/* Terminal Content Steps */}
            <div className="space-y-4 min-h-[340px] max-h-[460px] overflow-y-auto pr-2">
              <div className="text-gray-300">
                <span className="text-blue-400">root@matrix-cluster:~$</span> dispatch --agent <span className="text-emerald-300">{currentAgent.name}</span> --guardrails strict --audit-sign
              </div>

              {activeStepIndex === -1 && !isCompleted && (
                <div className="py-12 text-center text-gray-400">
                  <Terminal className="h-8 w-8 mx-auto mb-2 opacity-40 text-blue-400" />
                  <p>Awaiting task payload trigger.</p>
                  <p className="text-[11px] mt-1 text-gray-400">Click &quot;Trigger Autonomous Run&quot; to inspect real-time tool calls.</p>
                </div>
              )}

              {currentAgent.executionSteps.map((step, idx) => {
                const isStepStarted = activeStepIndex >= idx || isCompleted;
                const isCurrentActive = activeStepIndex === idx && isRunning;
                const isStepDone = activeStepIndex > idx || isCompleted;

                if (!isStepStarted) return null;

                return (
                  <div 
                    key={idx} 
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentActive
                        ? 'border-blue-500/70 bg-blue-950/30'
                        : isStepDone
                        ? 'border-white/10 bg-white/[0.02]'
                        : 'border-white/5 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        {isCurrentActive ? (
                          <span className="h-3.5 w-3.5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                        ) : isStepDone ? (
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <span className="h-3.5 w-3.5 rounded-full bg-gray-700" />
                        )}
                        <span className="font-bold text-white text-[11px]">{step.step}</span>
                        <span className="text-gray-400 text-[10px]">[{step.tool}]</span>
                      </div>
                      <span className="text-[10px] text-gray-300">
                        {isStepDone ? `${step.durationMs}ms` : 'evaluating...'}
                      </span>
                    </div>

                    <p className="text-gray-300 text-[11px] pl-5 mb-1.5">{step.action}</p>

                    {isStepDone && (
                      <div className="ml-5 p-2 rounded-lg bg-black/60 border border-white/5 text-emerald-300 text-[11px]">
                        <span className="text-gray-400 select-none">&gt; Output: </span>
                        {step.outputPreview}
                      </div>
                    )}
                  </div>
                );
              })}

              {isCompleted && (
                <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-emerald-300 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-xs">Autonomous Execution Verified & Sealed</div>
                      <div className="text-[10px] text-gray-300 mt-0.5">
                        Audit hash: <span className="font-mono text-emerald-400">0x7f4e91a...b23d</span> • Zero human intervention required.
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400 block">$42.80 Saved</span>
                    <span className="text-[9px] text-gray-300">vs. manual labor</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-300">
              <div className="flex items-center gap-3">
                <span>Memory: <strong className="text-white">64MB isolated sandbox</strong></span>
                <span>Audit: <strong className="text-emerald-400">SOC2 Type II sealed</strong></span>
              </div>
              <div className="text-right">
                <span>Model: <strong className="text-blue-400">Matrix-Reasoning-Edge-v3</strong></span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
