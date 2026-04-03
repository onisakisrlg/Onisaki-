import React from 'react';
import { Section } from '../types';
import { Reveal } from './ui/Reveal';
import { CheckCircle2, Zap, ShieldCheck, Crown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../services/languageService';

interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  highlight?: boolean;
  color: string;
}

const PLANS: PricingPlan[] = [
  {
    id: '1',
    title: 'シンプルデザイン',
    subtitle: 'Simple Design',
    price: '10,000',
    priceSuffix: '円 (固定)',
    description: '創業初期や、まずは名刺代わりのサイトが欲しい方に最適。',
    features: [
      'シンプルで洗練されたデザイン',
      'サーバー代・ドメイン代無料',
      'ドメインいつでも差し替え可能',
      '保守管理費 0円',
      '永久使用可能',
      '最短48時間で納品・公開',
      '創業初期・スタートアップ向け'
    ],
    icon: <Zap className="w-8 h-8 text-oni-cyan" />,
    color: 'oni-cyan'
  },
  {
    id: '2',
    title: 'スタンダードデザイン',
    subtitle: 'Standard Design',
    price: '50,000',
    priceSuffix: '円 (固定)',
    description: 'ブランドイメージを重視し、より高度な機能を求める方に。',
    features: [
      '独自のデザインスタイル適用',
      '高級・高速サーバー採用',
      'SEO最適化（基本設定）',
      'レスポンシブ完全対応',
      'お問い合わせフォーム設置',
      'SNS連携・OGP設定',
      'ブランド力向上に最適'
    ],
    icon: <ShieldCheck className="w-8 h-8 text-oni-magenta" />,
    highlight: true,
    color: 'oni-magenta'
  },
  {
    id: '3',
    title: 'カスタムデザイン',
    subtitle: 'Custom Design',
    price: '200,000',
    priceSuffix: '円〜',
    description: '細部までこだわり抜いた、世界に一つだけの完全オーダーメイド。',
    features: [
      '100% 完全オリジナルデザイン',
      'フルオーダーメイド開発',
      '高度なアニメーション・演出',
      '複雑なシステム連携対応',
      '専属デザイナーによる監修',
      '徹底したパフォーマンス改善',
      '大規模・プロフェッショナル向け'
    ],
    icon: <Crown className="w-8 h-8 text-oni-purple" />,
    color: 'oni-purple'
  }
];

export const Pricing: React.FC = () => {
  const { t } = useLanguage();
  
  const PLANS: PricingPlan[] = [
    {
      id: '1',
      title: t('pricing.plan1.title'),
      subtitle: t('pricing.plan1.sub'),
      price: '10,000',
      priceSuffix: t('pricing.suffix.fixed'),
      description: t('pricing.plan1.desc'),
      features: [
        t('pricing.plan1.f1'),
        t('pricing.plan1.f2'),
        t('pricing.plan1.f3'),
        t('pricing.plan1.f4'),
        t('pricing.plan1.f5'),
        t('pricing.plan1.f6'),
        t('pricing.plan1.f7')
      ],
      icon: <Zap className="w-8 h-8 text-oni-cyan" />,
      color: 'oni-cyan'
    },
    {
      id: '2',
      title: t('pricing.plan2.title'),
      subtitle: t('pricing.plan2.sub'),
      price: '50,000',
      priceSuffix: t('pricing.suffix.fixed'),
      description: t('pricing.plan2.desc'),
      features: [
        t('pricing.plan2.f1'),
        t('pricing.plan2.f2'),
        t('pricing.plan2.f3'),
        t('pricing.plan2.f4'),
        t('pricing.plan2.f5'),
        t('pricing.plan2.f6'),
        t('pricing.plan2.f7')
      ],
      icon: <ShieldCheck className="w-8 h-8 text-oni-magenta" />,
      highlight: true,
      color: 'oni-magenta'
    },
    {
      id: '3',
      title: t('pricing.plan3.title'),
      subtitle: t('pricing.plan3.sub'),
      price: '200,000',
      priceSuffix: t('pricing.suffix.from'),
      description: t('pricing.plan3.desc'),
      features: [
        t('pricing.plan3.f1'),
        t('pricing.plan3.f2'),
        t('pricing.plan3.f3'),
        t('pricing.plan3.f4'),
        t('pricing.plan3.f5'),
        t('pricing.plan3.f6'),
        t('pricing.plan3.f7')
      ],
      icon: <Crown className="w-8 h-8 text-oni-purple" />,
      color: 'oni-purple'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById(Section.CONTACT);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={Section.PRICING} className="py-16 md:py-24 bg-oni-light-bg/50 dark:bg-oni-bg/50 backdrop-blur-sm border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <Reveal direction="down">
            <h2 className="flex flex-col items-center justify-center gap-2">
              <span className="text-3xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white transition-colors duration-500 tracking-wide">
                {t('pricing.title')}
              </span>
              <span className="text-lg md:text-2xl text-oni-magenta font-bold tracking-[0.3em] font-sans mt-2 relative">
                <span className="absolute inset-0 blur-md bg-oni-magenta/20 rounded-full"></span>
                <span className="relative">{t('pricing.subtitle')}</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} direction="down">
             <div className="w-16 h-1 bg-gradient-to-r from-oni-cyan to-oni-magenta mx-auto rounded-full my-4"></div>
             <p className="text-gray-500 dark:text-gray-400 font-sans tracking-widest text-[10px] md:text-xs uppercase font-bold">{t('pricing.desc')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.1} className="h-full" width="100%">
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={scrollToContact}
                className={`group relative h-full bg-white/80 dark:bg-oni-card/80 p-8 md:p-10 border border-black/5 dark:border-white/5 transition-all duration-500 backdrop-blur-md flex flex-col overflow-hidden rounded-2xl shadow-xl dark:shadow-none cursor-pointer ${plan.highlight ? 'ring-2 ring-oni-magenta/30 dark:ring-oni-magenta/50' : ''}`}
              >
                {/* Background Glow */}
                <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full blur-[50px] transition-colors duration-500 ${plan.id === '1' ? 'bg-oni-cyan/10 dark:bg-oni-cyan/20' : plan.id === '2' ? 'bg-oni-magenta/10 dark:bg-oni-magenta/20' : 'bg-oni-purple/10 dark:bg-oni-purple/20'}`}></div>

                {/* Header */}
                <div className="relative z-10 mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6 inline-block p-3 bg-gray-100 dark:bg-white/5 rounded-xl transition-transform duration-500"
                  >
                    {plan.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{plan.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold mb-6">{plan.subtitle}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">{plan.priceSuffix}</span>
                  </div>
                </div>

                <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="relative z-10 space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <motion.li 
                      key={fIndex} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + fIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${plan.id === '1' ? 'text-oni-cyan' : plan.id === '2' ? 'text-oni-magenta' : 'text-oni-purple'}`} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Button-like Footer */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative z-10 w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 font-bold tracking-widest uppercase text-xs transition-all duration-300 border ${plan.highlight ? 'bg-oni-magenta text-white border-oni-magenta shadow-lg shadow-oni-magenta/20' : 'bg-transparent text-gray-900 dark:text-white border-black/10 dark:border-white/10 group-hover:border-oni-cyan group-hover:text-oni-cyan'}`}
                >
                  <span>{t('pricing.contact')}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>

                {/* Animated Borders (Snake effect) */}
                <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-${plan.color} -translate-x-full group-hover:animate-snake-h-pos`} />
                    <span className={`absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-${plan.color} -translate-y-full group-hover:animate-snake-v-pos`} style={{ animationDelay: '0.5s' }} />
                    <span className={`absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent to-${plan.color} translate-x-full group-hover:animate-snake-h-neg`} style={{ animationDelay: '1s' }} />
                    <span className={`absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-${plan.color} translate-y-full group-hover:animate-snake-v-neg`} style={{ animationDelay: '1.5s' }} />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
