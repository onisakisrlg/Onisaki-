import React from 'react';
import { Reveal } from './ui/Reveal';
import { MessageSquare, FileText, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Inquiry",
    jpTitle: "お問い合わせ",
    desc: "お気軽にご相談ください",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Planning",
    jpTitle: "ヒアリング・企画",
    desc: "要件定義と設計",
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Development",
    jpTitle: "開発・実装",
    desc: "アジャイル開発",
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Delivery",
    jpTitle: "納品・公開",
    desc: "テストとリリース",
    icon: <Rocket className="w-6 h-6" />
  }
];

export const DeliveryProcess: React.FC = () => {
  return (
    <section className="py-20 bg-oni-light-bg dark:bg-oni-bg border-t border-black/5 dark:border-white/5 transition-colors duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="flex flex-col items-center justify-center gap-2">
              <span className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white transition-colors duration-500 tracking-wide">
                Process
              </span>
              <span className="text-sm md:text-lg text-oni-cyan font-bold tracking-[0.3em] font-sans mt-2 relative">
                <span className="absolute inset-0 blur-md bg-oni-cyan/20 rounded-full"></span>
                <span className="relative">納品までの流れ</span>
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-oni-cyan/20 via-oni-purple/20 to-oni-magenta/20 z-0"></div>

            {steps.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.1} width="100%">
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-oni-card border-2 border-oni-cyan/30 group-hover:border-oni-cyan flex items-center justify-center mb-6 shadow-lg shadow-black/5 dark:shadow-none transition-all duration-300 group-hover:scale-110 bg-opacity-80 backdrop-blur-sm">
                    <div className="text-oni-cyan group-hover:text-oni-purple transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="bg-white/50 dark:bg-white/5 rounded-xl p-4 w-full border border-black/5 dark:border-white/5 hover:border-oni-cyan/30 transition-all duration-300">
                    <div className="text-xs font-bold text-oni-purple mb-1 tracking-widest">STEP 0{step.id}</div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-2">{step.jpTitle}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Reveal width="100%" delay={0.4}>
                <a href="#/process" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500 hover:text-oni-cyan transition-colors border-b border-transparent hover:border-oni-cyan pb-1">
                  VIEW DETAILED PROCESS <Rocket size={12} />
                </a>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
