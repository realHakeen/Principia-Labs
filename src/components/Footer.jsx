import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-20 bg-black text-neutral-600 text-xs font-mono border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-white"></div>
              PRINCIPIA LABS
            </div>
            <p className="max-w-xs mb-6 leading-relaxed">
              Founded on first principles. <br/>
              Building the decentralized future.
            </p>
          </div>
          
          <div>
              <h4 className="text-white mb-4">SITEMAP</h4>
              <ul className="space-y-2">
                  <li><Link to="/research" className="hover:text-white">Research</Link></li>
                  <li><Link to="/" className="hover:text-white">Incubation</Link></li>
                  <li><Link to="/" className="hover:text-white">About Us</Link></li>
              </ul>
          </div>

          <div>
              <h4 className="text-white mb-4">CONNECT</h4>
              <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">Twitter / X</a></li>
                  <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white">Telegram</a></li>
              </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center">
          <span>&copy; 2026 PRINCIPIA LABS. ALL RIGHTS RESERVED.</span>
          <span className="mt-2 md:mt-0">SINGAPORE &bull; NEW YORK &bull; DUBAI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

