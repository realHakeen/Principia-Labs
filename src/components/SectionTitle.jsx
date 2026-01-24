import React, { useState } from 'react';
import useScrambleText from '../hooks/useScrambleText';

// Component: Section Header with Scramble Effect
const SectionTitle = ({ title, subtitle }) => {
  const [hovered, setHovered] = useState(false);
  const scrambledTitle = useScrambleText(title, hovered);

  return (
    <div 
      className="mb-16 border-l-2 border-white pl-6 group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4 font-mono text-white">
        {/* On mobile, just show title. On desktop, show scrambled version on hover */}
        <span className="md:hidden">{title}</span>
        <span className="hidden md:inline">{hovered ? scrambledTitle : title}</span>
      </h2>
      <p className="text-neutral-400 max-w-xl text-lg font-light">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;

