'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AgentSimulator } from '@/components/AgentSimulator';
import { ConsoleDashboard } from '@/components/ConsoleDashboard';
import { RoiCalculator } from '@/components/RoiCalculator';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import { Pricing } from '@/components/Pricing';
import { EnterpriseTrust } from '@/components/EnterpriseTrust';
import { Testimonials } from '@/components/Testimonials';
import { DemoModal } from '@/components/DemoModal';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [currentTab, setCurrentTab] = useState<'landing' | 'console'>('landing');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<string | undefined>(undefined);

  const handleOpenDemo = (planName?: string) => {
    setSelectedPlanForDemo(planName);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
    setSelectedPlanForDemo(undefined);
  };

  const handleScrollToSimulator = () => {
    setCurrentTab('landing');
    setTimeout(() => {
      const el = document.getElementById('simulator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#06080d] text-[#f3f4f6] selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenDemo={() => handleOpenDemo()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'landing' ? (
          <>
            {/* Hero Section */}
            <Hero
              onOpenSimulator={handleScrollToSimulator}
              onOpenConsole={() => setCurrentTab('console')}
              onOpenDemo={() => handleOpenDemo()}
            />

            {/* Live Interactive Agent Simulator */}
            <AgentSimulator />

            {/* Architecture Moat & Features */}
            <FeatureShowcase />

            {/* Interactive ROI Calculator */}
            <RoiCalculator onOpenDemo={() => handleOpenDemo()} />

            {/* Enterprise Trust & Badges */}
            <EnterpriseTrust />

            {/* Testimonials from Tech Leaders */}
            <Testimonials />

            {/* Pricing Tiers & Billing */}
            <Pricing onOpenDemo={handleOpenDemo} />
          </>
        ) : (
          /* Live App / Fleet Management Console */
          <ConsoleDashboard />
        )}
      </main>

      {/* Enterprise Lead Capture & Trial Onboarding Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        defaultPlan={selectedPlanForDemo}
      />

      {/* Global Footer */}
      <Footer
        onOpenDemo={() => handleOpenDemo()}
        onOpenConsole={() => setCurrentTab('console')}
      />
    </div>
  );
}
