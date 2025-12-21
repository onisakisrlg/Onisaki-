import React from 'react';
import { Link } from 'react-router-dom';
import { Section, ServiceItem } from '../types';
import { Reveal } from './ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { WebDevAnim, EcAnim, UiUxAnim, GameAnim, DxAnim, MobileAnim } from './ServiceAnimations';

const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'WEB開発',
    subtitle: 'Web Development',
    description: 'Scalable, high-performance web applications using modern frameworks like React and Next.js.',
    icon: <WebDevAnim />
  },
  {
    id: '2',
    title: 'EC構築',
    subtitle: 'E-Commerce',
    description: 'Custom EC solutions that drive sales. From Shopify customization to full-stack builds.',
    icon: <EcAnim />
  },
  {
    id: '3',
    title: 'UIデザイン',
    subtitle: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that elevate your brand identity.',
    icon: <UiUxAnim />
  },
  {
    id: '4',
    title: 'ゲーム開発',
    subtitle: 'Game Development',
    description: 'Immersive interactive experiences and web-based games built with Unity and modern webGL tech.',
    icon: <GameAnim />
  },
  {
    id: '5',
    title: '業務DX支援',
    subtitle: 'System Optimization',
    description: 'Modernizing legacy systems and optimizing existing business workflows for maximum efficiency.',
    icon: <DxAnim />
  },
  {
    id: '6',
    title: 'アプリ開発',
    subtitle: 'Mobile Application',
    description: 'Native and cross-platform mobile apps (iOS/Android) designed for seamless user engagement.',
    icon: <MobileAnim />
  }
];

export const Collection: React.FC = () => {
  return (
    <section id={Section.SERVICES} className="py-16 md:py-24 bg-oni-light-bg/90 dark:bg-oni-bg/90 backdrop-blur-sm border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <Reveal direction="down">
            {/* Bilingual Header */}
            <h2 className="flex flex-col items-center justify-center gap-2">
              <span className="text-3xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white transition-colors duration-500 tracking-wide">
                Our Services
              </span>
              <span className="text-lg md:text-2xl text-oni-cyan font-bold tracking-[0.3em] font-sans mt-2 relative">
                <span className="absolute inset-0 blur-md bg-oni-cyan/20 rounded-full"></span>
                <span className="relative">事業内容</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} direction="down">
             <div className="w-16 h-1 bg-gradient-to-r from-oni-cyan to-oni-magenta mx-auto rounded-full my-4"></div>
             <p className="text-gray-500 dark:text-gray-400 font-sans tracking-widest text-[10px] md:text-xs uppercase font-bold">Comprehensive Digital Solutions</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            
            const CardContent = (
              <div className="group relative bg-white/80 dark:bg-oni-card/80 p-6 md:p-10 h-full border border-black/5 dark:border-white/5 transition-all duration-500 backdrop-blur-md flex flex-col justify-between overflow-hidden rounded-xl shadow-lg dark:shadow-none hover:-translate-y-2 cursor-pointer">
                
                {/* 
                   =======================
                   HOVER-ONLY CONTINUOUS LOOP
                   =======================
                */}
                
                {/* === LAYER 1: OUTER (CYAN) === */}
                <div className="absolute inset-0 z-0 pointer-events-none rounded-xl overflow-hidden">
                    <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-oni-cyan -translate-x-full group-hover:animate-snake-h-pos" />
                    <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent to-oni-cyan -translate-y-full group-hover:animate-snake-v-pos" style={{ animationDelay: '0.5s' }} />
                    <span className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-transparent to-oni-cyan translate-x-full group-hover:animate-snake-h-neg" style={{ animationDelay: '1s' }} />
                    <span className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-t from-transparent to-oni-cyan translate-y-full group-hover:animate-snake-v-neg" style={{ animationDelay: '1.5s' }} />
                </div>

                {/* === LAYER 2: INNER (MAGENTA) === */}
                <div className="absolute inset-[6px] z-0 pointer-events-none rounded-md overflow-hidden"> 
                    <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-oni-magenta translate-x-full group-hover:animate-snake-h-neg" />
                    <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-oni-magenta -translate-y-full group-hover:animate-snake-v-pos" style={{ animationDelay: '0.5s' }} />
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-oni-magenta -translate-x-full group-hover:animate-snake-h-pos" style={{ animationDelay: '1s' }} />
                    <span className="absolute bottom-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-oni-magenta translate-y-full group-hover:animate-snake-v-neg" style={{ animationDelay: '1.5s' }} />
                </div>


                {/* Neon Glow Blob */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-oni-cyan/10 dark:bg-oni-cyan/20 rounded-full blur-[50px] group-hover:bg-oni-magenta/20 transition-colors duration-500"></div>

                <div>
                  {/* Animated Icon: Smaller on mobile (w-16) to save space */}
                  <div className="relative z-10 mb-6 md:mb-8 inline-block">
                    <div className="w-16 h-16 md:w-24 md:h-24 p-2 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                       {/* Subtle floor glow */}
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 md:w-16 h-3 md:h-4 bg-oni-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-oni-cyan transition-colors">{service.title}</h3>
                    <h4 className="text-[10px] md:text-xs text-oni-purple uppercase tracking-widest mb-4 md:mb-6 font-bold">{service.subtitle}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 md:mb-8">{service.description}</p>
                  </div>
                </div>
                 
                <div className="relative z-10 flex items-center gap-2 text-gray-800 dark:text-white text-[10px] md:text-xs font-bold tracking-widest uppercase group-hover:text-oni-magenta transition-colors mt-auto">
                   <span>View Interactive Demo</span>
                   <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );

            // Determine link destination based on Service ID
            let linkTo = "";
            switch(service.id) {
              case '1': linkTo = "/web-demo"; break;
              case '2': linkTo = "/ec-demo"; break;
              case '3': linkTo = "/ui-demo"; break;
              case '4': linkTo = "/game-demo"; break;
              case '5': linkTo = "/dx-demo"; break;
              case '6': linkTo = "/mobile-demo"; break;
              default: linkTo = "/";
            }

            return (
              <Reveal key={service.id} delay={index * 0.1}>
                 <Link to={linkTo} className="block h-full">
                   {CardContent}
                 </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};