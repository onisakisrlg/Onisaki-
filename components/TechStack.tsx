import React from 'react';
import { Reveal } from './ui/Reveal';
import { CipherText } from './ui/CipherText';

// Define rich gradients for each technology
// Mixing brand colors with Onisaki's Neon Palette (Cyan/Magenta/Purple) for consistency
const TECH_GRADIENTS: Record<string, string> = {
  "React": "from-[#61DAFB] via-cyan-400 to-blue-600",
  "Next.js": "from-white via-gray-200 to-gray-500", 
  "TypeScript": "from-[#3178C6] via-blue-400 to-indigo-600",
  "Flutter": "from-[#02569B] via-blue-400 to-cyan-300",
  "Figma": "from-[#F24E1E] via-[#A259FF] to-[#1ABCFE]", // Figma's rainbow brand colors
  "Unity": "from-white via-gray-300 to-gray-500",
  "Python": "from-[#306998] via-[#FFD43B] to-[#FFE873]", // Blue to Yellow
  "AWS": "from-[#FF9900] via-orange-400 to-yellow-300",
  "Docker": "from-[#2496ED] via-cyan-500 to-blue-600",
  "Go": "from-[#00ADD8] via-cyan-400 to-teal-400"
};

// Default metallic gradient for non-hovered state
const DEFAULT_GRADIENT = "from-gray-400 via-gray-200 to-gray-500 dark:from-gray-500 dark:via-gray-300 dark:to-gray-600";

const ROW_1 = ["React", "Next.js", "TypeScript", "Flutter", "Figma", "Unity"];
const ROW_2 = ["Python", "AWS", "Docker", "Go", "Next.js", "TypeScript"]; 

const TechItem: React.FC<{ name: string; index: number }> = ({ name, index }) => {
  const activeGradient = TECH_GRADIENTS[name] || "from-oni-cyan via-oni-purple to-oni-magenta";
  
  return (
    <div className="group relative mx-8 md:mx-12 flex items-center justify-center cursor-pointer select-none py-4">
      {/* 
         Text Container
         Using font-serif (Cinzel) for that premium "engraved" look.
         Solid fill (no more outline).
      */}
      <div 
        className="relative text-3xl md:text-5xl font-black font-serif tracking-wide transition-transform duration-300 group-hover:scale-110"
      >
        {/* 
           We use a wrapper for the gradient text because CipherText renders spans.
           The gradient class is applied conditionally via CSS/style injection for hover effects.
        */}
        <div className={`bg-clip-text text-transparent bg-gradient-to-br ${DEFAULT_GRADIENT} group-hover:${activeGradient} transition-all duration-500`}>
           <CipherText 
             text={name} 
             hover={true} 
             delay={index * 200} // Staggered scramble effect on load
             className="drop-shadow-sm group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
           />
        </div>
      </div>
      
      {/* Glow Underlay (Visible on Hover) */}
      <div className={`absolute inset-0 bg-gradient-to-r ${activeGradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full scale-150 z-[-1]`}></div>
    </div>
  );
};

export const TechStack: React.FC = () => {
  return (
    <section className="py-24 bg-oni-light-bg dark:bg-oni-bg border-t border-black/5 dark:border-white/5 overflow-hidden relative">
       {/* Background Matrix Effect - Slightly darker for contrast */}
       <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
       
       {/* Vignette for depth */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>

       <div className="container mx-auto px-6 mb-16 text-center relative z-10">
          <Reveal>
             <h3 className="text-oni-cyan font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 flex items-center justify-center gap-2">
               <span className="w-8 h-[1px] bg-oni-magenta"></span>
               Powering The Future
               <span className="w-8 h-[1px] bg-oni-magenta"></span>
             </h3>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
               Tech Stack
             </h2>
          </Reveal>
       </div>

       {/* 
          Marquee Rows
          Increased py-10 (vertical padding) to prevent hover scaling from getting cut off 
       */}
       
       {/* Row 1: Left to Right */}
       <div className="relative flex overflow-x-hidden mb-8 group/track py-10">
          {/* Faint rail line behind text */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-oni-cyan/20 to-transparent"></div>
          
          <div className="flex animate-marquee whitespace-nowrap group-hover/track:pause items-center">
             {[...ROW_1, ...ROW_1, ...ROW_1].map((tech, i) => (
                <TechItem key={`${tech}-${i}-1`} name={tech} index={i} />
             ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap group-hover/track:pause items-center py-10">
             {[...ROW_1, ...ROW_1, ...ROW_1].map((tech, i) => (
                <TechItem key={`${tech}-${i}-1-dup`} name={tech} index={i + 5} />
             ))}
          </div>
       </div>

       {/* Row 2: Right to Left */}
       <div className="relative flex overflow-x-hidden group/track py-10">
          {/* Faint rail line behind text */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-oni-purple/20 to-transparent"></div>

          <div className="flex animate-marquee-reverse whitespace-nowrap group-hover/track:pause items-center">
             {[...ROW_2, ...ROW_2, ...ROW_2].map((tech, i) => (
                <TechItem key={`${tech}-${i}-2`} name={tech} index={i + 2} />
             ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2-reverse whitespace-nowrap group-hover/track:pause items-center py-10">
             {[...ROW_2, ...ROW_2, ...ROW_2].map((tech, i) => (
                <TechItem key={`${tech}-${i}-2-dup`} name={tech} index={i + 7} />
             ))}
          </div>
       </div>

       {/* Styles for Marquee Animation */}
       <style>{`
         .animate-marquee {
           animation: marquee 50s linear infinite;
         }
         .animate-marquee2 {
           animation: marquee2 50s linear infinite;
         }
         .animate-marquee-reverse {
           animation: marquee-rev 50s linear infinite;
         }
         .animate-marquee2-reverse {
           animation: marquee2-rev 50s linear infinite;
         }

         /* Pause on hover */
         .group\\/track:hover .animate-marquee,
         .group\\/track:hover .animate-marquee2,
         .group\\/track:hover .animate-marquee-reverse,
         .group\\/track:hover .animate-marquee2-reverse {
           animation-play-state: paused;
         }

         @keyframes marquee {
           0% { transform: translateX(0%); }
           100% { transform: translateX(-100%); }
         }
         @keyframes marquee2 {
           0% { transform: translateX(100%); }
           100% { transform: translateX(0%); }
         }
         
         @keyframes marquee-rev {
           0% { transform: translateX(-100%); }
           100% { transform: translateX(0%); }
         }
         @keyframes marquee2-rev {
           0% { transform: translateX(0%); }
           100% { transform: translateX(100%); }
         }
       `}</style>
    </section>
  );
};
