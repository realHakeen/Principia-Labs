import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-24 md:py-32 border-b border-neutral-900 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Our Method</h3>
            <p className="text-3xl font-medium leading-tight">
              We don't chase hype. We engineer value.
            </p>
          </div>
          <div className="md:col-span-8 font-mono text-sm leading-loose text-neutral-400 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div>
                <strong className="text-white block mb-2">[01] RESEARCH DRIVEN</strong>
                Markets are chaotic; data is truth. Our approach begins with deep-dive technical analysis and on-chain forensics before any capital is deployed.
             </div>
             <div>
                <strong className="text-white block mb-2">[02] ECOSYSTEM ARCHITECTS</strong>
                Moving beyond passive investment, we drive liquidity, shape market dynamics, and consult on token governance frameworks.
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

