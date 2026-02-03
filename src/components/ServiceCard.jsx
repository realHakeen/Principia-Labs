import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

// Component: Service Card (Current vs Future)
const ServiceCard = ({ title, description, icon: Icon, status = "active", badge }) => {
  const isLocked = status === "locked";

  return (
    <div className={`group relative p-8 border border-neutral-900 bg-black transition-all duration-500 overflow-hidden ${isLocked ? 'opacity-70' : 'hover:border-white'}`}>

      {/* Background Fill Animation on Hover */}
      <div className={`absolute inset-0 bg-white translate-y-full ${isLocked ? '' : 'group-hover:translate-y-0'} transition-transform duration-500 ease-in-out z-0`} />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-none border border-neutral-800 bg-black ${isLocked ? 'text-neutral-600' : 'text-white group-hover:text-black group-hover:bg-transparent group-hover:border-black'} transition-colors`}>
            <Icon size={24} strokeWidth={1.5} />
          </div>

          {/* Status Indicators */}
          {status === "active" && (
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#DFFF00] uppercase tracking-widest hidden group-hover:block group-hover:text-black transition-all">Online</span>
              <div className="w-2 h-2 rounded-full bg-[#DFFF00] shadow-[0_0_10px_rgba(223,255,0,0.8)] animate-pulse" />
            </div>
          )}
          {status === "locked" && <Lock size={16} className="text-neutral-600" />}
        </div>

        <div>
          <h3 className={`text-xl font-bold mb-3 font-mono uppercase tracking-tight ${isLocked ? 'text-neutral-500' : 'text-white group-hover:text-black'} transition-colors`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed ${isLocked ? 'text-neutral-600' : 'text-neutral-400 group-hover:text-neutral-800'} transition-colors`}>
            {description}
          </p>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-4 flex justify-between items-center">
          <span className={`text-[10px] font-mono uppercase tracking-widest ${isLocked ? 'text-neutral-700' : 'text-neutral-500 group-hover:text-black'}`}>
            {badge || "Module Active"}
          </span>
          {!isLocked && <ArrowRight size={14} className="text-black opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

