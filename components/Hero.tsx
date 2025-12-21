import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from '../types';
import { CipherText } from './ui/CipherText';
import { CyberServices } from './ui/CyberServices';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={Section.HERO} className="relative w-full min-h-[100dvh] overflow-x-hidden flex items-center justify-center bg-transparent perspective-1000 pt-16 md:pt-0">
      
      {/* Vignette Overlay for focus (Adaptive) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f3f4f6_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#0b0c15_90%)] pointer-events-none transition-all duration-500"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        <div className="mb-6 overflow-hidden flex justify-center">
          <div className="border border-black/10 dark:border-white/10 px-4 py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-md animate-[slideUp_1s_ease-out_forwards] opacity-0 bg-white/50 dark:bg-white/5 shadow-[0_0_15px_rgba(0,240,255,0.2)]" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-oni-cyan tracking-[0.2em] text-[10px] md:text-sm font-sans uppercase font-semibold">
               {/* Added hover={true} so it scrambles on mouseover */}
               <CipherText text="Innovative Digital Agency" hover={true} delay={1200} />
            </h2>
          </div>
        </div>
        
        <h1 className="font-serif text-3xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white font-bold mb-6 md:mb-8 tracking-wider leading-tight animate-[fadeIn_1.5s_ease-out_forwards] opacity-0 transition-colors duration-500" style={{ animationDelay: '0.5s' }}>
          <span className="block mb-2 md:mb-4 cursor-pointer">
            {/* Updated text, added hover={true} */}
            <CipherText text="ONISAKI株式会社" hover={true} delay={1500} />
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-oni-cyan via-oni-purple to-oni-magenta cursor-pointer">
             {/* Added hover={true} */}
             <CipherText text="CREATIVE LAB" hover={true} delay={2000} />
          </span>
        </h1>

        {/* Replaced static paragraph with CyberServices */}
        <div className="mb-8 md:mb-12 min-h-[40px] flex justify-center w-full">
          <CyberServices />
        </div>

        <button 
          onClick={() => scrollToSection(Section.SERVICES)}
          className="group relative px-8 py-3 md:px-10 md:py-4 border border-oni-cyan/50 text-gray-900 dark:text-white font-sans tracking-widest text-[10px] md:text-xs uppercase overflow-hidden transition-all duration-300 hover:border-oni-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] opacity-0 animate-[fadeIn_1s_ease-out_forwards] rounded-sm"
          style={{ animationDelay: '1.5s' }}
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-300 font-bold">Start Project</span>
          <div className="absolute inset-0 bg-oni-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection(Section.VISION)}>
        <ChevronDown className="text-oni-cyan/70 hover:text-oni-magenta transition-colors w-6 h-6 md:w-8 md:h-8" />
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};