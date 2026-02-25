import React from 'react';
import { Section } from '../types';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  link: string;
  keywords: string[];
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: '株式会社天馬',
    category: 'Corporate Website',
    link: 'https://tianma.vercel.app/',
    keywords: ['物流', '貿易', 'グローバル']
  },
  {
    id: '2',
    title: '京辰株式会社',
    category: 'Corporate Website',
    link: 'https://kyoshin.vercel.app/',
    keywords: ['不動産', '投資', 'コンサルティング']
  },
  {
    id: '3',
    title: 'Rainbow Passport 合同会社',
    category: 'Service Website',
    link: 'https://rpginza.com/',
    keywords: ['会員制', 'コンシェルジュ', 'ライフスタイル']
  },
  {
    id: '4',
    title: '建誠株式会社',
    category: 'Corporate Website',
    link: 'https://kensei-jp.vercel.app/',
    keywords: ['内装工事', 'リノベーション', '原状回復']
  }
];

export const Works: React.FC = () => {
  return (
    <section id={Section.WORKS} className="py-16 md:py-24 bg-oni-light-bg dark:bg-oni-bg relative z-10 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-oni-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-oni-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Reveal width="100%">
            <h2 className="flex flex-col items-center justify-center gap-2">
              <span className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white transition-colors duration-500 tracking-wide">
                Selected Works
              </span>
              <span className="text-sm md:text-lg text-oni-purple font-bold tracking-[0.3em] font-sans mt-2 relative">
                <span className="absolute inset-0 blur-md bg-oni-purple/20 rounded-full"></span>
                <span className="relative">制作実績</span>
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Compact List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05} width="100%">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-5 h-32 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl overflow-hidden hover:border-oni-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-300 w-full"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-oni-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col justify-center h-full min-w-0 flex-1 mr-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-oni-cyan transition-colors mb-1 truncate">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-white group-hover:text-oni-cyan transition-colors truncate mb-3">
                    {project.title}
                  </h3>
                  
                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.keywords.map((keyword, i) => (
                      <span key={i} className="text-[9px] px-1.5 py-0.5 rounded border border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 whitespace-nowrap">
                        #{keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-oni-cyan group-hover:text-black transition-all duration-300 transform group-hover:rotate-45 self-start mt-1">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        
        {/* Placeholder for future expansion */}
        <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
               More projects coming soon
            </p>
        </div>

      </div>
    </section>
  );
};
