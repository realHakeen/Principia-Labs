import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import useScrambleText from '../hooks/useScrambleText';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const titleLine1 = useScrambleText("Accelerating the capital", isHovered);
  const titleLine2 = useScrambleText("Into Crypto", isHovered);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-neutral-900">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 rounded-none text-[10px] font-mono text-neutral-400 mb-8 bg-black">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            SYSTEM STATUS: RESEARCH INTELLIGENCE ONLINE
          </div>
          
          <h1 
            className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-white mix-blend-screen cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="block whitespace-nowrap">{titleLine1}</span>
            <span className="block text-neutral-500 whitespace-nowrap">{titleLine2}</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 border-l border-neutral-800 pl-6 md:pl-10 mt-12">
            <p className="text-lg text-neutral-400 max-w-md leading-relaxed">
              Principia Labs is a crypto-native research institute. We apply first-principles thinking to dissect protocols, incubating the infrastructure of tomorrow.
            </p>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
               <button className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-300 transition-all flex items-center justify-center gap-3 w-full md:w-auto">
                Read The Thesis <ArrowRight size={14} />
              </button>
               <span className="text-[10px] text-neutral-600 font-mono text-center md:text-left">
                 LATEST BLOCK: #18293402
               </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to Decrypt</span>
        <div className="h-10 w-[1px] bg-white"></div>
      </div>
    </section>
  );
};

export default HeroSection;

