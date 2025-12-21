import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Mail, FileText, CheckCircle, CreditCard, Code, Rocket } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';

export const ProcessPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Inquiry",
      jpTitle: "お問い合わせ",
      desc: "まずはメールまたはフォームよりご連絡ください。作りたいもののイメージ、予算感、納期など、現時点での構想をお聞かせください。",
      icon: <Mail className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Hearing & Strategy",
      jpTitle: "ヒアリング・要件定義",
      desc: "担当者が詳細をヒアリングし、プロジェクトの方向性を決定します。機能要件やデザインの好みをすり合わせ、最適な技術選定を行います。",
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Quotation",
      jpTitle: "お見積もり・ご提案",
      desc: "ヒアリング内容に基づき、詳細な御見積書と開発スケジュールをご提出します。この段階で工数と費用の透明性を確保します。",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Contract & Payment",
      jpTitle: "ご契約・お支払い",
      desc: "内容にご納得いただけましたら、契約締結となります。原則として着手金（または全額）のご入金確認後に開発フェーズへ移行します。",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Development",
      jpTitle: "開発・デザイン制作",
      desc: "プロトタイプの作成、デザイン、コーディングを行います。進捗は適宜ご報告し、認識のズレがないよう進めていきます。",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Launch",
      jpTitle: "納品・公開",
      desc: "最終テストを経て、本番環境へデプロイ（公開）いたします。納品後の保守運用についてもご相談可能です。",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="mb-12 md:mb-20">
            <Link to="/" state={{ targetSection: 'contact' }} className="inline-flex items-center gap-2 text-oni-cyan hover:text-white transition-colors text-sm font-bold tracking-widest mb-8 group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              BACK TO CONTACT
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Development Flow
            </h1>
            <h2 className="text-lg md:text-xl text-oni-purple font-sans font-bold tracking-[0.2em] mb-4">
              ご依頼から納品までの流れ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-oni-cyan to-oni-magenta rounded-full"></div>
            
            <p className="mt-8 text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
              Onisakiでは、透明性の高いクリアな開発プロセスを採用しています。<br/>
              お客様のビジョンを最短距離で具現化するためのステップをご確認ください。
            </p>
          </div>
        </Reveal>

        {/* Process Timeline */}
        <div className="relative mb-32">
          {/* Vertical Line - Background Layer */}
          <div className="absolute left-[1.5rem] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-oni-cyan via-oni-purple to-oni-magenta opacity-30 md:-translate-x-1/2 z-0"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={step.id} width="100%" direction={isEven ? 'right' : 'left'}>
                  {/* Container increased spacing to avoid overlap */}
                  <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Step Content Side */}
                    <div className="pl-16 md:pl-0 md:w-1/2 box-border md:px-4"> 
                      <div className={`text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <div className={`inline-block px-3 py-1 mb-3 rounded border border-oni-cyan/30 text-oni-cyan text-xs font-bold tracking-widest bg-oni-cyan/5 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                          STEP 0{step.id}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {step.title}
                        </h3>
                        <h4 className="text-sm font-bold text-oni-purple mb-4">
                          {step.jpTitle}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                        
                        {/* Step 4 Specific Hint */}
                        {step.id === 4 && (
                           <div className={`mt-4 text-xs text-oni-cyan/80 font-bold ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                             ※ 銀行振込 / Stripe (カード) 対応
                           </div>
                        )}
                      </div>
                    </div>

                    {/* Center Node (Icon) - Z-Index raised to sit on top of line */}
                    <div className="absolute left-[1.5rem] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-oni-bg border-2 border-oni-cyan z-20 shadow-[0_0_15px_rgba(0,240,255,0.5)] group hover:scale-110 transition-transform duration-300 cursor-default">
                       <div className="text-oni-cyan group-hover:text-white transition-colors duration-300">
                         {step.icon}
                       </div>
                    </div>

                    {/* Empty Space for the other side to balance flex */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Payment Methods Section */}
        <Reveal width="100%">
          <div className="border-t border-black/5 dark:border-white/5 pt-16">
            <div className="text-center mb-12">
               <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">Payment Options</h3>
               <p className="text-oni-cyan font-bold tracking-widest text-sm">対応決済・提携銀行</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              {/* Rakuten Bank */}
              <TiltCard className="h-full">
                <div className="h-full bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-6 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center gap-4 group hover:border-oni-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl mb-2">R</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">楽天銀行</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Rakuten Bank</p>
                  </div>
                  <div className="text-[10px] text-gray-400 px-4 py-1 border border-gray-700 rounded-full">
                    銀行振込
                  </div>
                </div>
              </TiltCard>

              {/* SMBC */}
              <TiltCard className="h-full">
                <div className="h-full bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-6 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center gap-4 group hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-all">
                  <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-xl mb-2">S</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">三井住友銀行</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">SMBC</p>
                  </div>
                  <div className="text-[10px] text-gray-400 px-4 py-1 border border-gray-700 rounded-full">
                    銀行振込
                  </div>
                </div>
              </TiltCard>

              {/* Stripe */}
              <TiltCard className="h-full">
                <div className="h-full bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-6 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center gap-4 group hover:border-oni-purple/50 hover:shadow-[0_0_20px_rgba(189,0,255,0.2)] transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#635BFF] flex items-center justify-center text-white font-bold text-lg mb-2 italic">S</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Stripe</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Credit Card / Others</p>
                  </div>
                  <div className="text-[10px] text-gray-400 px-4 py-1 border border-gray-700 rounded-full">
                    オンライン決済
                  </div>
                </div>
              </TiltCard>

            </div>
            
            {/* Fee Disclaimer */}
            <div className="max-w-3xl mx-auto mt-8 p-4 rounded-lg bg-black/20 border border-white/5 text-center">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-oni-magenta font-bold">※ 手数料について</span><br/>
                銀行振込手数料、およびStripe（クレジットカード等）をご利用の際の決済手数料は、<br className="hidden md:block"/>
                大変恐縮ですがお客様のご負担となります。予めご了承ください。
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};