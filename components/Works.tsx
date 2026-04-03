import React from 'react';
import { Section } from '../types';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../services/languageService';

interface Project {
  id: string;
  title: string;
  category: string;
  link: string;
  keywords: string[];
  theme: 'blue' | 'indigo' | 'rose' | 'amber' | 'violet' | 'emerald';
}

const THEME_STYLES = {
  blue: {
    card: 'bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-900/20 dark:to-slate-900/50 border-cyan-100 dark:border-cyan-500/20',
    hover: 'hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
    icon: 'group-hover:bg-cyan-400 group-hover:text-black',
    titleHover: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
  },
  indigo: {
    card: 'bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-slate-900/50 border-indigo-100 dark:border-indigo-500/20',
    hover: 'hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)]',
    icon: 'group-hover:bg-indigo-400 group-hover:text-white',
    titleHover: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
  },
  rose: {
    card: 'bg-gradient-to-br from-rose-50 to-white dark:from-rose-900/20 dark:to-slate-900/50 border-rose-100 dark:border-rose-500/20',
    hover: 'hover:border-rose-400/50 hover:shadow-[0_0_20px_rgba(251,113,133,0.15)]',
    icon: 'group-hover:bg-rose-400 group-hover:text-white',
    titleHover: 'group-hover:text-rose-600 dark:group-hover:text-rose-400'
  },
  amber: {
    card: 'bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-slate-900/50 border-amber-100 dark:border-amber-500/20',
    hover: 'hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]',
    icon: 'group-hover:bg-amber-400 group-hover:text-black',
    titleHover: 'group-hover:text-amber-600 dark:group-hover:text-amber-400'
  },
  violet: {
    card: 'bg-gradient-to-br from-violet-50 to-white dark:from-violet-900/20 dark:to-slate-900/50 border-violet-100 dark:border-violet-500/20',
    hover: 'hover:border-violet-400/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]',
    icon: 'group-hover:bg-violet-400 group-hover:text-white',
    titleHover: 'group-hover:text-violet-600 dark:group-hover:text-violet-400'
  },
  emerald: {
    card: 'bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-slate-900/50 border-emerald-100 dark:border-emerald-500/20',
    hover: 'hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]',
    icon: 'group-hover:bg-emerald-400 group-hover:text-black',
    titleHover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
  }
};

const PROJECTS: Project[] = [
  {
    id: '1',
    title: '株式会社天馬',
    category: 'Corporate Website',
    link: 'https://tianma.vercel.app/',
    keywords: ['物流', '貿易', 'グローバル'],
    theme: 'blue'
  },
  {
    id: '2',
    title: '京辰株式会社',
    category: 'Corporate Website',
    link: 'https://kyoshin.vercel.app/',
    keywords: ['不動産', '投資', 'コンサルティング'],
    theme: 'indigo'
  },
  {
    id: '3',
    title: 'Rainbow Passport 合同会社',
    category: 'Service Website',
    link: 'https://rpginza.com/',
    keywords: ['会員制', 'コンシェルジュ'],
    theme: 'rose'
  },
  {
    id: '4',
    title: '建誠株式会社',
    category: 'Corporate Website',
    link: 'https://kensei-jp.vercel.app/',
    keywords: ['内装工事', 'リノベーション', '原状回復'],
    theme: 'amber'
  },
  {
    id: '5',
    title: 'Orinova株式会社',
    category: 'Corporate Website',
    link: 'https://orinova.jp/',
    keywords: ['Web開発', 'UI/UXデザイン', 'DX支援'],
    theme: 'violet'
  },
  {
    id: '6',
    title: '合同会社琴商事',
    category: 'Corporate Website',
    link: 'https://kinshoji.vercel.app/',
    keywords: ['貿易', '卸売', 'グローバル'],
    theme: 'emerald'
  },
  {
    id: '7',
    title: 'TF合同会社',
    category: 'E-commerce Website',
    link: 'https://tfgoods.jp/',
    keywords: ['グッズ制作', 'オリジナル商品', 'ECサイト'],
    theme: 'violet'
  }
];

const KEYWORD_COLORS = [
  'text-oni-cyan border-oni-cyan/30 bg-oni-cyan/5',
  'text-oni-purple border-oni-purple/30 bg-oni-purple/5',
  'text-oni-magenta border-oni-magenta/30 bg-oni-magenta/5'
];

export const Works: React.FC = () => {
  const { t } = useLanguage();

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
                {t('works.title')}
              </span>
              <span className="text-sm md:text-lg text-oni-purple font-bold tracking-[0.3em] font-sans mt-2 relative">
                <span className="absolute inset-0 blur-md bg-oni-purple/20 rounded-full"></span>
                <span className="relative">{t('works.subtitle')}</span>
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Compact List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => {
            const theme = THEME_STYLES[project.theme];
            
            return (
              <Reveal key={project.id} delay={index * 0.05} width="100%">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group relative flex items-center justify-between p-5 min-h-[9rem] rounded-xl overflow-hidden transition-all duration-300 w-full border ${theme.card} ${theme.hover}`}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex flex-col justify-center h-full min-w-0 flex-1 mr-4">
                    {/* Keywords */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.keywords.map((keyword, i) => (
                        <span key={i} className={`text-xs font-bold px-2 py-1 rounded border ${KEYWORD_COLORS[i % KEYWORD_COLORS.length]} whitespace-nowrap`}>
                          #{keyword}
                        </span>
                      ))}
                    </div>

                    <h3 className={`text-lg font-bold font-serif text-gray-900 dark:text-white transition-colors leading-tight ${theme.titleHover}`}>
                      {project.title}
                    </h3>
                  </div>

                  <div className={`relative z-10 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 transition-all duration-300 transform group-hover:rotate-45 self-start mt-1 ${theme.icon}`}>
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              </Reveal>
            );
          })}
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
