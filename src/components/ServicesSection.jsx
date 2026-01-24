import React from 'react';
import { Search, Database, Shield, BarChart3, Coins, Globe } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Operational Matrix" 
          subtitle="Current live modules and future protocol expansions." 
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
          
          {/* 1. RESEARCH (Active) */}
          <ServiceCard 
            title="Market Intelligence" 
            icon={Search}
            status="active"
            badge="Core Module"
            description="Fundamental analysis, weekly market maps, and protocol audits. We provide the signal in the noise for institutional allocators." 
          />

          {/* 2. INCUBATION (Active) */}
          <ServiceCard 
            title="Venture Incubation" 
            icon={Database}
            status="active"
            badge="High Priority"
            description="Early-stage advisory for high-potential protocols. We assist with whitepaper design, technical architecture, and fundraising strategy." 
          />

          {/* 6. CONSULTING / LISTING (Active) */}
          <ServiceCard 
            title="Exchange Solutions" 
            icon={Globe}
            status="active"
            badge="Strategic Unit"
            description="End-to-end listing advisory and strategic consulting for Web2 enterprises entering the Web3 ecosystem." 
          />

          {/* 4. RATING (Future) */}
          <ServiceCard 
            title="Credit Rating" 
            icon={BarChart3}
            status="locked"
            badge="Phase II"
            description="Institutional-grade risk assessment frameworks for DeFi protocols and emerging digital assets." 
          />

          {/* 5. MM / LIQUIDITY (Future) */}
          <ServiceCard 
            title="Liquidity Labs" 
            icon={Coins}
            status="locked"
            badge="Phase III"
            description="Algorithmic market making and deep liquidity provision to stabilize markets and ensure efficient price discovery." 
          />

          {/* 3. CURATOR (Future) */}
          <ServiceCard 
            title="Curator DAO" 
            icon={Shield}
            status="locked"
            badge="Phase II"
            description="A decentralized collective for vetting and listing high-quality assets, setting the standard for industry transparency." 
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
