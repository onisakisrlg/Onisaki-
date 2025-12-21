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
    <section id={Section.HERO} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-transparent perspective-1000">
      
      {/* =======================
          GIANT BACKGROUND REACTOR
          ======================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] pointer-events-none z-0 opacity-30 dark:opacity-30 blur-sm mix-blend-multiply dark:mix-blend-normal">
         {/* Outer Giant Ring (Cyan) - Slow spin */}
         <div className="absolute w-full h-full rounded-full border-[2px] border-t-oni-cyan border-r-oni-cyan/50 border-b-transparent border-l-transparent animate-[spin_60s_linear_infinite]"></div>
         <div className="absolute w-[95%] h-[95%] top-[2.5%] left-[2.5%] rounded-full border border-dashed border-oni-cyan/30 animate-[spin_40s_linear_infinite_reverse]"></div>

         {/* Middle Ring (Magenta) - Medium spin */}
         <div className="absolute top-[15%] left-[15%] w-[70%] h-[70%] rounded-full border-[3px] border-t-transparent border-r-transparent border-b-oni-magenta border-l-oni-magenta animate-[spin_30s_linear_infinite_reverse]"></div>
         
         {/* Inner Ring (Purple) - Fast spin */}
         <div className="absolute top-[35%] left-[35%] w-[30%] h-[30%] rounded-full border-[4px] border-t-oni-purple border-r-transparent border-b-oni-purple border-l-transparent animate-[spin_15s_linear_infinite]"></div>
         
         {/* Core Pulse */}
         <div className="absolute top-[45%] left-[45%] w-[10%] h-[10%] bg-oni-cyan rounded-full filter blur-[50px] animate-pulse"></div>
      </div>


      {/* Vignette Overlay for focus (Adaptive) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f3f4f6_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#0b0c15_90%)] pointer-events-none transition-all duration-500"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 overflow-hidden flex justify-center">
          <div className="border border-black/10 dark:border-white/10 px-6 py-2 rounded-full backdrop-blur-md animate-[slideUp_1s_ease-out_forwards] opacity-0 bg-white/50 dark:bg-white/5 shadow-[0_0_15px_rgba(0,240,255,0.2)]" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-oni-cyan tracking-[0.2em] text-xs md:text-sm font-sans uppercase font-semibold">
               {/* Added hover={true} so it scrambles on mouseover */}
               <CipherText text="Innovative Digital Agency" hover={true} delay={1200} />
            </h2>
          </div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white font-bold mb-8 tracking-wider leading-tight animate-[fadeIn_1.5s_ease-out_forwards] opacity-0 transition-colors duration-500" style={{ animationDelay: '0.5s' }}>
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
        <div className="mb-12 min-h-[40px] flex justify-center">
          <CyberServices />
        </div>

        <button 
          onClick={() => scrollToSection(Section.SERVICES)}
          className="group relative px-10 py-4 border border-oni-cyan/50 text-gray-900 dark:text-white font-sans tracking-widest text-xs uppercase overflow-hidden transition-all duration-300 hover:border-oni-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] opacity-0 animate-[fadeIn_1s_ease-out_forwards] rounded-sm"
          style={{ animationDelay: '1.5s' }}
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-300 font-bold">Start Project</span>
          <div className="absolute inset-0 bg-oni-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection(Section.VISION)}>
        <ChevronDown className="text-oni-cyan/70 hover:text-oni-magenta transition-colors" size={32} />
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
