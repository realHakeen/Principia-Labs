import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import TerminalModal from './TerminalModal';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll listener for Navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled || isMobileMenuOpen ? 'bg-black/90 backdrop-blur-md border-neutral-800 py-4' : 'bg-transparent border-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <Link to="/" onClick={closeMobileMenu} className="font-mono text-xl tracking-tight flex items-center gap-3 group cursor-pointer select-none">
          {/* Logo Icon */}
          <Logo className="w-1 h-1" />
          <span className="font-bold">PRINCIPIA LABS</span>
        </Link>
        
        {/* Desktop Menu */}
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
        
        {/* Desktop: Listscope + Connect */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://listscope.principialabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-neutral-700 px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Listscope
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 border border-neutral-700 px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            <Terminal size={12} />
            Connect
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 focus:outline-none relative z-[70]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-200 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <button
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
          className="absolute inset-0 w-full h-full bg-black/40"
        />

        <div className="container mx-auto px-6 relative">
          <div className="absolute right-0 mt-2 w-64 border border-neutral-800 bg-black/95 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col gap-5 p-5 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <Link to="/" onClick={closeMobileMenu} className="hover:text-white transition-colors">Manifesto</Link>
              <Link to="/research" onClick={closeMobileMenu} className="hover:text-white transition-colors">Research</Link>
              <Link to="/" onClick={closeMobileMenu} className="hover:text-white transition-colors">Ecosystem</Link>
              <Link to="/" onClick={closeMobileMenu} className="hover:text-white transition-colors">Careers</Link>
              <a
                href="https://listscope.principialabs.io"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="hover:text-white transition-colors"
              >
                Listscope
              </a>
              <button
                onClick={openModal}
                className="flex items-center justify-center gap-2 border border-neutral-700 px-4 py-2 mt-1 text-white hover:bg-white hover:text-black transition-colors"
              >
                <Terminal size={14} />
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      <TerminalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
