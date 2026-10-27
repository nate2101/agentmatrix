'use client';

import React from 'react';
import { Shield, Lock, FileCheck, CheckCircle2, Server, Award } from 'lucide-react';

export const EnterpriseTrust: React.FC = () => {
  const credentials = [
    {
      icon: <Award className="h-5 w-5 text-blue-400" />,
      title: 'SOC 2 Type II Certified',
      description: 'Independently audited by top-tier AICPA assessors with continuous automated control telemetry.',
    },
    {
      icon: <Lock className="h-5 w-5 text-emerald-400" />,
      title: 'Zero-Retention Model Policy',
      description: 'Your sensitive financial records, customer PII, and codebases are strictly isolated and never used for training.',
    },
    {
      icon: <FileCheck className="h-5 w-5 text-purple-400" />,
      title: 'HIPAA & GDPR Ready',
      description: 'Signed Business Associate Agreements (BAAs) and comprehensive GDPR data-processing addendums.',
    },
    {
      icon: <Server className="h-5 w-5 text-indigo-400" />,
      title: 'Dedicated Private VPC Option',
      description: 'Deploy the AgentMatrix runtime inside your existing AWS, GCP, or Azure VPC perimeter for complete network isolation.',
    },
  ];

  return (
    <section className="py-16 relative border-t border-white/5 bg-[#080b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20 mb-3">
            <Shield className="h-3.5 w-3.5" />
            ENTERPRISE-GRADE SECURITY &amp; COMPLIANCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Security Designed for the World’s Most Regulated Industries
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            From Series A fintechs to Fortune 500 enterprises, security is built into our core runtime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((cred, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-3">
                {cred.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                {cred.title}
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">{cred.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
