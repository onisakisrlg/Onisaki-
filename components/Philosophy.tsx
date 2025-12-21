import React from 'react';
import { Section } from '../types';
import { Reveal } from './ui/Reveal';
import { VisionAnim } from './VisionAnim';

export const Philosophy: React.FC = () => {
  return (
    <section id={Section.VISION} className="py-16 md:py-32 bg-oni-light-bg/80 dark:bg-oni-bg/80 backdrop-blur-sm relative overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      {/* Decorative Geometric background */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-oni-purple/10 dark:bg-oni-purple/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-oni-cyan/5 dark:bg-oni-cyan/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col xl:flex-row-reverse items-center gap-8 md:gap-16 xl:gap-24">
          
          {/* EXPANDED CONTAINER: Adjusted height for mobile to be more compact */}
          <div className="w-full xl:w-3/5 relative min-h-[350px] md:min-h-[700px] flex items-center justify-center">
             <Reveal direction="left" width="100%">
                <div className="relative w-full h-full min-h-[350px] md:min-h-[700px] mx-auto group flex items-center justify-center">
                  
                  {/* The Massive Reactor Animation */}
                  <VisionAnim />
                  
                  {/* Large Decorative Borders to frame the 'Holodeck' */}
                  <div className="absolute top-0 left-0 w-16 h-16 md:w-32 md:h-32 border-t-2 border-l-2 border-oni-cyan/30 rounded-tl-2xl md:rounded-tl-3xl pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 md:w-32 md:h-32 border-t-2 border-r-2 border-oni-magenta/30 rounded-tr-2xl md:rounded-tr-3xl pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 md:w-32 md:h-32 border-b-2 border-r-2 border-oni-purple/30 rounded-br-2xl md:rounded-br-3xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 md:w-32 md:h-32 border-b-2 border-l-2 border-oni-cyan/30 rounded-bl-2xl md:rounded-bl-3xl pointer-events-none"></div>
                </div>
             </Reveal>
          </div>

          {/* Text Content */}
          <div className="w-full xl:w-2/5 space-y-6 md:space-y-8">
            <Reveal>
              <h3 className="text-oni-cyan tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-2 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-oni-magenta"></span>
                Who is Onisaki?
              </h3>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-6xl font-serif text-gray-900 dark:text-white leading-tight transition-colors duration-500">
                Not a Demon.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-oni-cyan to-oni-purple">Just A Visionary.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-gray-600 dark:text-gray-400 font-sans leading-relaxed text-base md:text-xl transition-colors duration-500">
                The name "Onisaki" isn't about myths; it's about the founder's promise to deliver relentless quality. 
                Based in Ginza, we are a collective of digital artisans building the next generation of web experiences.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="text-gray-600 dark:text-gray-400 font-sans leading-relaxed text-base md:text-xl transition-colors duration-500">
                We reject the boring and the standard. From high-conversion EC sites to breathtaking UI designs, 
                we infuse color, motion, and life into every pixel.
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-8">
                 <div className="px-6 py-2 md:px-8 md:py-3 bg-black/5 dark:bg-white/5 border border-oni-cyan/30 rounded-full text-[10px] md:text-sm text-gray-800 dark:text-white tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-colors duration-500 hover:bg-oni-cyan/10">CREATIVITY</div>
                 <div className="px-6 py-2 md:px-8 md:py-3 bg-black/5 dark:bg-white/5 border border-oni-magenta/30 rounded-full text-[10px] md:text-sm text-gray-800 dark:text-white tracking-wider shadow-[0_0_15px_rgba(255,0,170,0.1)] transition-colors duration-500 hover:bg-oni-magenta/10">TECHNOLOGY</div>
                 <div className="px-6 py-2 md:px-8 md:py-3 bg-black/5 dark:bg-white/5 border border-oni-purple/30 rounded-full text-[10px] md:text-sm text-gray-800 dark:text-white tracking-wider shadow-[0_0_15px_rgba(189,0,255,0.1)] transition-colors duration-500 hover:bg-oni-purple/10">PASSION</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};