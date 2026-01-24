import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import TerminalModal from './TerminalModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll listener for Navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/90 backdrop-blur-md border-neutral-800 py-4' : 'bg-transparent border-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-mono text-xl tracking-tight flex items-center gap-3 group cursor-pointer select-none">
          {/* Logo Icon */}
          <div className="relative w-5 h-5 border border-white flex items-center justify-center overflow-hidden">
              <div className="w-full h-[1px] bg-white rotate-45 group-hover:rotate-180 transition-transform duration-500"></div>
          </div>
          <span className="font-bold">PRINCIPIA LABS</span>
        </Link>
        
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-neutral-500">
          <Link to="/" className="hover:text-white transition-colors relative group">
            <span className="relative z-10">Manifesto</span>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/research" className="hover:text-white transition-colors relative group">
            <span className="relative z-10">Research</span>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/" className="hover:text-white transition-colors relative group">
            <span className="relative z-10">Ecosystem</span>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/" className="hover:text-white transition-colors relative group">
            <span className="relative z-10">Careers</span>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="hidden md:flex items-center gap-2 border border-neutral-700 px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          <Terminal size={12} />
          Connect
        </button>
      </div>

      <TerminalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;

