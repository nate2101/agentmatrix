'use client';

import React, { useState } from 'react';
import { 
  Plus, 
  Play, 
  Pause, 
  Terminal, 
  Copy, 
  Check, 
  Sliders, 
  Activity, 
  ArrowUpRight,
  RefreshCw,
  Cpu,
  Layers
} from 'lucide-react';
import { INITIAL_ACTIVITY_LOGS, LiveActivityItem } from '@/data/agentData';
import confetti from 'canvas-confetti';

interface ManagedAgent {
  id: string;
  name: string;
  role: string;
  status: 'ACTIVE' | 'PAUSED';
  autonomy: number; // 0 to 100
  tasksCompleted: number;
  lastExecution: string;
}

export const ConsoleDashboard: React.FC = () => {
  const [agents, setAgents] = useState<ManagedAgent[]>([
    {
      id: 'ag-1',
      name: 'Atlas-Ledger',
      role: 'Financial Controller & Reconciliation',
      status: 'ACTIVE',
      autonomy: 95,
      tasksCompleted: 1420,
      lastExecution: 'Just now',
    },
    {
      id: 'ag-2',
      name: 'Apollo-SDR',
      role: 'Inbound Qualification & Research',
      status: 'ACTIVE',
      autonomy: 85,
      tasksCompleted: 890,
      lastExecution: '3m ago',
    },
    {
      id: 'ag-3',
      name: 'Aegis-Guard',
      role: 'DevSecOps & PR Security Sentinel',
      status: 'ACTIVE',
      autonomy: 100,
      tasksCompleted: 2314,
      lastExecution: '12m ago',
    },
    {
      id: 'ag-4',
      name: 'Helios-Care',
      role: 'Tier-1 Customer Success & Resolution',
      status: 'ACTIVE',
      autonomy: 90,
      tasksCompleted: 4180,
      lastExecution: '25s ago',
    },
  ]);

  const [logs, setLogs] = useState<LiveActivityItem[]>(INITIAL_ACTIVITY_LOGS);
  const [apiKeyCopied, setApiKeyCopied] = useState(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [newAgentName, setNewAgentName] = useState('');
  const [newAgentRole, setNewAgentRole] = useState('');

  const toggleAgentStatus = (id: string) => {
    setAgents(prev =>
      prev.map(agent =>
        agent.id === id
          ? { ...agent, status: agent.status === 'ACTIVE' ? 'PAUSED' : 'ACTIVE' }
          : agent
      )
    );
  };

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText('am_live_sec_89f02c9183b04c81a9320e8d1209b');
    setApiKeyCopied(true);
    setTimeout(() => setApiKeyCopied(false), 2000);
  };

  const handleCreateAgent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAgentName.trim()) return;

    const newAgent: ManagedAgent = {
      id: `ag-${Date.now()}`,
      name: newAgentName,
      role: newAgentRole || 'General Operational Specialist',
      status: 'ACTIVE',
      autonomy: 90,
      tasksCompleted: 0,
      lastExecution: 'Initialized',
    };

    setAgents([newAgent, ...agents]);
    setIsDeployModalOpen(false);
    setNewAgentName('');
    setNewAgentRole('');

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#6366f1'],
      });
    } catch {}
  };

  const simulateNewAction = () => {
    const randomAgents = ['Atlas-Ledger', 'Apollo-SDR', 'Aegis-Guard', 'Helios-Care'];
    const chosen = randomAgents[Math.floor(Math.random() * randomAgents.length)];
    const newItem: LiveActivityItem = {
      id: `act-${Date.now()}`,
      timestamp: 'Just now',
      agent: chosen,
      event: `Verified event execution batch on cluster node #${Math.floor(Math.random() * 8) + 1}`,
      duration: `${Math.floor(Math.random() * 300) + 120}ms`,
      cost: `$0.00${Math.floor(Math.random() * 5) + 2}`,
      status: 'VERIFIED',
    };
    setLogs([newItem, ...logs.slice(0, 5)]);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Banner / Live Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Enterprise Fleet Orchestrator
            </h1>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Cluster Active
            </span>
          </div>
          <p className="text-xs text-gray-300 mt-1">
            Tenant: <span className="font-mono text-white">Acme-Enterprise-US-East</span> • Cluster ID: <span className="font-mono text-blue-400">cl-prod-992</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={simulateNewAction}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Trigger Test Webhook
          </button>
          
          <button
            onClick={() => setIsDeployModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all"
          >
            <Plus className="h-4 w-4" />
            Provision Agent
          </button>
        </div>
      </div>

      {/* KPI Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <div className="glass-card rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-between text-gray-400 text-xs mb-2">
            <span>ACTIVE WORKFORCE</span>
            <Cpu className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">
            {agents.filter(a => a.status === 'ACTIVE').length} <span className="text-xs font-normal text-gray-400">/ {agents.length} fleet</span>
          </div>
          <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
            <span>● 100% cluster availability</span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-between text-gray-400 text-xs mb-2">
            <span>24H ACTION THROUGHPUT</span>
            <Activity className="h-4 w-4 text-indigo-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">8,804</div>
          <div className="text-[11px] text-gray-400 mt-2">
            <span>Avg dispatch latency: <strong>214ms</strong></span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-between text-gray-400 text-xs mb-2">
            <span>DETERMINISTIC SUCCESS</span>
            <Layers className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-emerald-400">99.98%</div>
          <div className="text-[11px] text-gray-400 mt-2">
            <span>Zero AST validation regressions</span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-between text-gray-400 text-xs mb-2">
            <span>ESTIMATED VALUE SAVED</span>
            <span className="text-xs font-bold text-blue-400">$21,480 /mo</span>
          </div>
          <div className="text-3xl font-extrabold text-white">$257.7K</div>
          <div className="text-[11px] text-gray-400 mt-2">
            <span>Calculated against \$65/hr ops baseline</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Agent Fleet on Left, Live Telemetry on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Fleet Management */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="h-4 w-4 text-blue-400" />
              Active Autonomous Agents
            </h2>
            <span className="text-xs text-gray-400">Managed via Matrix Runtime</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agents.map((agent) => (
              <div 
                key={agent.id}
                className="glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between gap-4 hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">{agent.name}</span>
                    <button
                      onClick={() => toggleAgentStatus(agent.id)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold transition-all ${
                        agent.status === 'ACTIVE'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20'
                          : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 hover:bg-yellow-500/20'
                      }`}
                    >
                      {agent.status === 'ACTIVE' ? (
                        <>
                          <Play className="h-2.5 w-2.5 fill-current" /> ACTIVE
                        </>
                      ) : (
                        <>
                          <Pause className="h-2.5 w-2.5 fill-current" /> PAUSED
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-300">{agent.role}</p>
                </div>

                {/* Autonomy Level Slider */}
                <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-gray-400 flex items-center gap-1">
                      <Sliders className="h-3 w-3" /> Autonomy Level
                    </span>
                    <span className="font-mono font-bold text-blue-400">{agent.autonomy}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all"
                      style={{ width: `${agent.autonomy}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-400 border-t border-white/5 pt-3">
                  <span>Tasks: <strong className="text-white">{agent.tasksCompleted.toLocaleString()}</strong></span>
                  <span>Last run: <strong className="text-gray-300">{agent.lastExecution}</strong></span>
                </div>
              </div>
            ))}
          </div>

          {/* API Keys & Webhook Integration Box */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 mt-2">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-indigo-400" />
              API Key & Webhook Dispatch Gateway
            </h3>
            <p className="text-xs text-gray-300 mb-4">
              Connect your billing, CRM, or GitHub webhooks to trigger agents programmatically.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex-1 bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs text-gray-300 truncate">
                am_live_sec_89f02c9183b04c81a9320e8d1209b
              </div>
              <button
                onClick={handleCopyApiKey}
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
              >
                {apiKeyCopied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy Key
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Real-time Telemetry Log */}
        <div className="lg:col-span-4 rounded-2xl bg-[#030508] border border-white/15 p-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Live Activity Stream</span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono">Real-time</span>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {logs.map((log) => (
              <div 
                key={log.id}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all font-mono text-[11px]"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-blue-400 font-semibold">{log.agent}</span>
                  <span className="text-[10px] text-gray-400">{log.timestamp}</span>
                </div>
                <p className="text-gray-300 text-xs mb-2 font-sans">{log.event}</p>
                <div className="flex items-center justify-between text-[10px] text-gray-400 border-t border-white/5 pt-1.5">
                  <span>Latency: <strong className="text-gray-300">{log.duration}</strong></span>
                  <span className="text-emerald-400 font-semibold">{log.cost}</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold">
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-center">
            <a 
              href="#pricing"
              className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-medium"
            >
              Upgrade plan for unlimited history logs <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Modal for Provisioning New Agent */}
      {isDeployModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl glass-card border border-white/20 p-6 shadow-2xl bg-[#090d16]">
            <h3 className="text-lg font-bold text-white mb-1">Provision New Autonomous Agent</h3>
            <p className="text-xs text-gray-300 mb-5">
              Define the role and dispatch criteria for your next enterprise background agent.
            </p>

            <form onSubmit={handleCreateAgent} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Agent Codename</label>
                <input
                  type="text"
                  required
                  value={newAgentName}
                  onChange={(e) => setNewAgentName(e.target.value)}
                  placeholder="e.g. Orion-SaaS-Tax, Hermes-Recruiter"
                  className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Primary Operational Mission</label>
                <textarea
                  rows={3}
                  value={newAgentRole}
                  onChange={(e) => setNewAgentRole(e.target.value)}
                  placeholder="e.g. Ingest daily Zendesk tickets, extract high-churn churn threats, and trigger automated retention offers."
                  className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsDeployModalOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-2 text-xs font-medium text-gray-300 hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all"
                >
                  Launch into Fleet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
