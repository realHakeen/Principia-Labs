import React from 'react';
import ResearchLogs from '../components/ResearchLogs';
import ParticleBackground from '../components/ParticleBackground';

const Research = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <ParticleBackground />
      {/* Add some top padding because of fixed navbar */}
      <div className="container mx-auto px-6 py-12 border-b border-neutral-900 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4 font-mono text-white">
            Research Archive
          </h1>
          <p className="text-neutral-400 max-w-xl text-lg font-light">
            Deep dives into protocol architecture, market structure, and on-chain forensics.
          </p>
      </div>
      <div className="relative z-10">
        <ResearchLogs />
      </div>
    </div>
  );
};

export default Research;
