import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../types';
import { Reveal } from './ui/Reveal';
import { OfficeAnim, PhoneAnim, MailAnim } from './ServiceAnimations';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const Concierge: React.FC = () => {
  return (
    <section id={Section.CONTACT} className="py-16 md:py-24 bg-oni-light-bg/80 dark:bg-oni-bg/80 backdrop-blur-sm border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <Reveal width="100%">
             {/* Bilingual Header */}
             <h2 className="flex flex-col items-center justify-center gap-2">
              <span className="text-3xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white transition-colors duration-500 tracking-wide">
                Let's Connect
              </span>
              <span className="text-lg md:text-2xl text-oni-cyan font-bold tracking-[0.3em] font-sans mt-2 relative">
                <span className="absolute inset-0 blur-md bg-oni-cyan/20 rounded-full"></span>
                <span className="relative">お問い合わせ</span>
              </span>
            </h2>
             <div className="h-1 w-20 bg-gradient-to-r from-oni-cyan to-oni-magenta mx-auto rounded-full mt-6"></div>
          </Reveal>
        </div>

        {/* New Process Flow Button */}
        <div className="flex justify-center mb-16">
          <Reveal delay={0.1}>
            <Link to="/process" className="group relative inline-flex items-center gap-3 px-8 py-3 bg-black/5 dark:bg-white/5 border border-oni-cyan/30 rounded-full overflow-hidden hover:border-oni-cyan transition-colors duration-300">
               <span className="absolute inset-0 bg-oni-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
               <span className="relative text-sm font-bold tracking-widest text-gray-800 dark:text-white">開発の流れを見る (PROCESS)</span>
               <ArrowRight size={16} className="relative text-oni-cyan group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          
          {/* Office Card */}
          <Reveal delay={0} width="100%">
            <div className="group h-full bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-6 md:p-8 border border-black/5 dark:border-white/5 rounded-2xl flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 shadow-lg dark:shadow-none hover:-translate-y-2">
              
              {/* === BORDER LAYERS === */}
              <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden">
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-oni-cyan -translate-x-full group-hover:animate-snake-h-pos" />
                  <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent to-oni-cyan -translate-y-full group-hover:animate-snake-v-pos" style={{ animationDelay: '0.5s' }} />
                  <span className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-transparent to-oni-cyan translate-x-full group-hover:animate-snake-h-neg" style={{ animationDelay: '1s' }} />
                  <span className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-t from-transparent to-oni-cyan translate-y-full group-hover:animate-snake-v-neg" style={{ animationDelay: '1.5s' }} />
              </div>
              <div className="absolute inset-[6px] z-0 pointer-events-none rounded-xl overflow-hidden"> 
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-oni-magenta translate-x-full group-hover:animate-snake-h-neg" />
                  <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-oni-magenta -translate-y-full group-hover:animate-snake-v-pos" style={{ animationDelay: '0.5s' }} />
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-oni-magenta -translate-x-full group-hover:animate-snake-h-pos" style={{ animationDelay: '1s' }} />
                  <span className="absolute bottom-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-oni-magenta translate-y-full group-hover:animate-snake-v-neg" style={{ animationDelay: '1.5s' }} />
              </div>

              {/* Glow Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-oni-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Icon: Smaller on mobile */}
              <div className="w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-6 relative z-10">
                 <OfficeAnim />
              </div>

              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 dark:text-white mb-2 group-hover:text-oni-cyan transition-colors">Office</h3>
              <p className="text-[10px] md:text-xs text-oni-purple uppercase tracking-widest mb-4 md:mb-6 font-bold">Ginza Headquarters</p>
              
              <div className="text-gray-600 dark:text-gray-300 font-sans text-xs md:text-sm leading-relaxed space-y-1">
                <p>〒104-0061</p>
                <p>東京都中央区銀座１-２２-１１</p>
                <p>銀座大竹ビジデンス２Ｆ</p>
              </div>

              <a 
                href="https://maps.google.com/?q=東京都中央区銀座１-２２-１１" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 md:mt-8 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-oni-cyan transition-colors"
              >
                <span>Open Map</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </Reveal>

          {/* Phone Card */}
          <Reveal delay={0.2} width="100%">
            <div className="group h-full bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-6 md:p-8 border border-black/5 dark:border-white/5 rounded-2xl flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 shadow-lg dark:shadow-none hover:-translate-y-2">
              
              {/* BORDERS HIDDEN FOR BREVITY */}
              <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden">
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-oni-cyan -translate-x-full group-hover:animate-snake-h-pos" />
                  <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent to-oni-cyan -translate-y-full group-hover:animate-snake-v-pos" style={{ animationDelay: '0.5s' }} />
                  <span className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-transparent to-oni-cyan translate-x-full group-hover:animate-snake-h-neg" style={{ animationDelay: '1s' }} />
                  <span className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-t from-transparent to-oni-cyan translate-y-full group-hover:animate-snake-v-neg" style={{ animationDelay: '1.5s' }} />
              </div>
              <div className="absolute inset-[6px] z-0 pointer-events-none rounded-xl overflow-hidden"> 
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-oni-magenta translate-x-full group-hover:animate-snake-h-neg" />
                  <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-oni-magenta -translate-y-full group-hover:animate-snake-v-pos" style={{ animationDelay: '0.5s' }} />
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-oni-magenta -translate-x-full group-hover:animate-snake-h-pos" style={{ animationDelay: '1s' }} />
                  <span className="absolute bottom-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-oni-magenta translate-y-full group-hover:animate-snake-v-neg" style={{ animationDelay: '1.5s' }} />
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-oni-magenta to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-6 relative z-10">
                 <PhoneAnim />
              </div>

              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 dark:text-white mb-2 group-hover:text-oni-magenta transition-colors">Phone</h3>
              <p className="text-[10px] md:text-xs text-oni-purple uppercase tracking-widest mb-4 md:mb-6 font-bold">Direct Line</p>
              
              <div className="text-gray-600 dark:text-gray-300 font-sans text-xs md:text-sm leading-relaxed my-auto flex flex-col items-center justify-center">
                <p className="text-lg md:text-2xl font-bold tracking-wider">050-6864-0984</p>
                <p className="text-[10px] md:text-xs opacity-60 mt-2">Mon-Fri 10:00 - 19:00</p>
              </div>

              <a 
                href="tel:050-6864-0984"
                className="mt-6 md:mt-8 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-oni-magenta transition-colors"
              >
                <span>Call Now</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </Reveal>

          {/* Email Card */}
          <Reveal delay={0.4} width="100%">
            <div className="group h-full bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-6 md:p-8 border border-black/5 dark:border-white/5 rounded-2xl flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 shadow-lg dark:shadow-none hover:-translate-y-2">
               
               {/* BORDERS HIDDEN FOR BREVITY */}
              <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden">
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-oni-cyan -translate-x-full group-hover:animate-snake-h-pos" />
                  <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent to-oni-cyan -translate-y-full group-hover:animate-snake-v-pos" style={{ animationDelay: '0.5s' }} />
                  <span className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-transparent to-oni-cyan translate-x-full group-hover:animate-snake-h-neg" style={{ animationDelay: '1s' }} />
                  <span className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-t from-transparent to-oni-cyan translate-y-full group-hover:animate-snake-v-neg" style={{ animationDelay: '1.5s' }} />
              </div>
              <div className="absolute inset-[6px] z-0 pointer-events-none rounded-xl overflow-hidden"> 
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-oni-magenta translate-x-full group-hover:animate-snake-h-neg" />
                  <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-oni-magenta -translate-y-full group-hover:animate-snake-v-pos" style={{ animationDelay: '0.5s' }} />
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-oni-magenta -translate-x-full group-hover:animate-snake-h-pos" style={{ animationDelay: '1s' }} />
                  <span className="absolute bottom-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-oni-magenta translate-y-full group-hover:animate-snake-v-neg" style={{ animationDelay: '1.5s' }} />
              </div>

               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-oni-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-6 relative z-10">
                 <MailAnim />
              </div>

              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 dark:text-white mb-2 group-hover:text-oni-purple transition-colors">Email</h3>
              <p className="text-[10px] md:text-xs text-oni-purple uppercase tracking-widest mb-4 md:mb-6 font-bold">Project Inquiries</p>
              
              <div className="text-gray-600 dark:text-gray-300 font-sans text-xs md:text-sm leading-relaxed my-auto">
                 <p className="text-base md:text-lg font-bold tracking-wide">support@onisaki.com</p>
                 <p className="text-[10px] md:text-xs opacity-60 mt-2">Response within 24 hours</p>
              </div>

              <a 
                href="mailto:support@onisaki.com"
                className="mt-6 md:mt-8 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-oni-purple transition-colors"
              >
                <span>Send Mail</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};