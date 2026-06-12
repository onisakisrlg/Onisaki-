import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './ui/Logo';
import { useLanguage } from '../services/languageService';
import { Copy, Check } from 'lucide-react';

interface CopyableValueProps {
  value: string;
  className?: string;
}

const tooltipTranslations = {
  ja: {
    copy: "クリックしてコピー",
    copied: "コピーしました！",
    desc: "ご希望の銀行口座へお振込みをお願いいたします。各項目をクリックするとコピーできます。"
  },
  en: {
    copy: "Click to copy",
    copied: "Copied!",
    desc: "Please transfer payment to your preferred bank account below. Click on any item to copy."
  },
  'zh-CN': {
    copy: "点击复制",
    copied: "已复制！",
    desc: "请将款项汇入您偏好的银行账户。点击各项目即可复制。"
  },
  'zh-TW': {
    copy: "點擊複製",
    copied: "已複製！",
    desc: "請將款項匯入您偏好的銀行帳戶。點擊各項目即可複製。"
  }
};

const CopyableValue: React.FC<CopyableValueProps> = ({ value, className = "" }) => {
  const { language } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  const currentLang = language === 'en' || language === 'zh-CN' || language === 'zh-TW' ? language : 'ja';
  const texts = tooltipTranslations[currentLang];

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <span
      onClick={handleCopy}
      className={`group/copy relative inline-flex items-center gap-1.5 cursor-pointer transition-all duration-200 select-none pb-0.5 ${className}`}
    >
      <span>{value}</span>
      
      {/* Tooltip on hover */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] text-white bg-slate-950/95 dark:bg-slate-900/95 border border-white/10 rounded-md opacity-0 pointer-events-none group-hover/copy:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 shadow-lg font-sans font-normal normal-case">
        {copied ? texts.copied : texts.copy}
      </span>

      {/* Copy icon appearing on hover only */}
      <span className="opacity-0 group-hover/copy:opacity-100 transition-opacity duration-200 inline-flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
        {copied ? (
          <Check className="w-3 h-3 text-emerald-500 scale-110 transition-transform duration-200" />
        ) : (
          <Copy className="w-3 h-3 transition-transform duration-200" />
        )}
      </span>
    </span>
  );
};

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentLang = language === 'en' || language === 'zh-CN' || language === 'zh-TW' ? language : 'ja';
  const descText = tooltipTranslations[currentLang].desc;

  return (
    <footer className="bg-oni-light-bg dark:bg-black py-10 md:py-12 border-t border-black/5 dark:border-white/5 relative z-20 text-center md:text-left transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Bank Accounts Section (お振込先口座 - Positioned below Contact Us and above Footer menus) */}
        <div className="pb-12 mb-12 border-b border-b-black/5 dark:border-b-white/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oni-cyan animate-pulse"></span>
                お振込先口座 (Bank Accounts)
              </h4>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1 text-center md:text-left">
                {descText}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Bank 1: 楽天銀行 (Rakuten Bank - Red Theme) */}
            <div className="group relative p-6 rounded-xl border border-black/5 dark:border-white/5 bg-white/[0.01] dark:bg-black/[0.2] hover:border-red-500/30 dark:hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50 group-hover:bg-red-500 transition-colors duration-300"></div>
              <div className="flex items-center justify-between mb-4 pl-2">
                <span className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  楽天銀行
                </span>
                <CopyableValue value="0036" className="text-[10px] bg-red-500/10 text-red-500 border border-red-500/20 px-2.5 py-0.5 rounded font-mono" />
              </div>
              <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400 pl-2">
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>金融機関名:</span>
                  <CopyableValue value="楽天銀行" className="font-semibold text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>金融機関コード:</span>
                  <CopyableValue value="0036" className="font-semibold font-mono text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>支店名:</span>
                  <CopyableValue value="第三営業支店" className="font-semibold text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>支店コード:</span>
                  <CopyableValue value="253" className="font-semibold font-mono text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>預金種別:</span>
                  <CopyableValue value="普通預金" className="font-semibold text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>口座番号:</span>
                  <CopyableValue 
                    value="7662398" 
                    className="font-bold text-red-600 dark:text-red-400 font-mono text-sm leading-none bg-red-500/5 px-1.5 py-0.5 rounded border border-red-500/10 group-hover:bg-red-500/10 transition-colors" 
                  />
                </div>
                <div className="flex justify-between pt-0.5 items-center">
                  <span>口座名義 (カナ):</span>
                  <CopyableValue value="オニサキ（カ" className="font-semibold text-gray-900 dark:text-white font-mono" />
                </div>
              </div>
            </div>

            {/* Bank 2: 三井住友銀行 (SMBC - Green Theme) */}
            <div className="group relative p-6 rounded-xl border border-black/5 dark:border-white/5 bg-white/[0.01] dark:bg-black/[0.2] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors duration-300"></div>
              <div className="flex items-center justify-between mb-4 pl-2">
                <span className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  三井住友銀行
                </span>
                <CopyableValue value="0009" className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2.5 py-0.5 rounded font-mono" />
              </div>
              <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400 pl-2">
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>金融機関名:</span>
                  <CopyableValue value="三井住友銀行" className="font-semibold text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>金融機関コード:</span>
                  <CopyableValue value="0009" className="font-semibold font-mono text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>支店名:</span>
                  <CopyableValue value="トランクＮＯＲＴＨ支店" className="font-semibold text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>支店コード:</span>
                  <CopyableValue value="403" className="font-semibold font-mono text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>預金種別:</span>
                  <CopyableValue value="普通預金" className="font-semibold text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>口座番号:</span>
                  <CopyableValue 
                    value="0158912" 
                    className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm leading-none bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10 group-hover:bg-emerald-500/10 transition-colors" 
                  />
                </div>
                <div className="flex justify-between pt-0.5 items-center">
                  <span>口座名義 (カナ):</span>
                  <CopyableValue value="オニサキ（カ" className="font-semibold text-gray-900 dark:text-white font-mono" />
                </div>
              </div>
            </div>

            {/* Bank 3: PayPay銀行 (PayPay Bank - Amber/Orange Theme) */}
            <div className="group relative p-6 rounded-xl border border-black/5 dark:border-white/5 bg-white/[0.01] dark:bg-black/[0.2] hover:border-amber-500/30 dark:hover:border-amber-500/20 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50 group-hover:bg-amber-500 transition-colors duration-300"></div>
              <div className="flex items-center justify-between mb-4 pl-2">
                <span className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  PayPay銀行
                </span>
                <CopyableValue value="0033" className="text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2.5 py-0.5 rounded font-mono" />
              </div>
              <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400 pl-2">
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>金融機関名:</span>
                  <CopyableValue value="PayPay銀行" className="font-semibold text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>金融機関コード:</span>
                  <CopyableValue value="0033" className="font-semibold font-mono text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>支店名:</span>
                  <CopyableValue value="ビジネス営業部" className="font-semibold text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>支店コード:</span>
                  <CopyableValue value="005" className="font-semibold font-mono text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>預金種別:</span>
                  <CopyableValue value="普通預金" className="font-semibold text-gray-800 dark:text-gray-200" />
                </div>
                <div className="flex justify-between border-b border-black/[0.03] dark:border-white/[0.03] pb-1.5 items-center">
                  <span>口座番号:</span>
                  <CopyableValue 
                    value="1887352" 
                    className="font-bold text-amber-600 dark:text-amber-400 font-mono text-sm leading-none bg-amber-500/5 px-1.5 py-0.5 rounded border border-amber-500/10 group-hover:bg-amber-500/10 transition-colors" 
                  />
                </div>
                <div className="flex justify-between pt-0.5 items-center">
                  <span>口座名義 (カナ):</span>
                  <CopyableValue value="オニサキ（カ" className="font-semibold text-gray-900 dark:text-white font-mono" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
           <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
              <div className="mb-6 scale-90 origin-center md:origin-left">
                <Logo className="w-12 h-12" />
              </div>
              <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                {t('footer.tagline')}
              </p>
           </div>
           
           <div className="col-span-1">
             <h4 className="text-gray-900 dark:text-white font-bold mb-4 text-sm uppercase tracking-wider">{t('footer.services')}</h4>
             <ul className="text-gray-500 dark:text-gray-500 text-xs space-y-2">
               <li>
                 <Link to="/web-demo" className="hover:text-oni-cyan transition-colors">
                   {t('services.web.title')}
                 </Link>
               </li>
               <li>
                 <Link to="/ec-demo" className="hover:text-oni-cyan transition-colors">
                   {t('services.ec.title')}
                 </Link>
               </li>
               <li>
                 <Link to="/ui-demo" className="hover:text-oni-cyan transition-colors">
                   {t('services.ui.title')}
                 </Link>
               </li>
               <li>
                 <Link to="/game-demo" className="hover:text-oni-cyan transition-colors">
                   {t('services.game.title')}
                 </Link>
               </li>
               <li>
                 <Link to="/dx-demo" className="hover:text-oni-cyan transition-colors">
                   {t('services.dx.title')}
                 </Link>
               </li>
               <li>
                 <Link to="/mobile-demo" className="hover:text-oni-cyan transition-colors">
                   {t('services.mobile.title')}
                 </Link>
               </li>
             </ul>
           </div>

           <div className="col-span-1">
             <h4 className="text-gray-900 dark:text-white font-bold mb-4 text-sm uppercase tracking-wider">{t('footer.company')}</h4>
             <ul className="text-gray-500 dark:text-gray-500 text-xs space-y-2">
               <li>
                  <Link to="/process" className="hover:text-oni-cyan transition-colors">
                    {t('footer.process')}
                  </Link>
               </li>
               <li className="hover:text-oni-cyan cursor-pointer transition-colors">{t('footer.careers')}</li>
               <li>
                  <Link to="/legal" className="hover:text-oni-cyan transition-colors">
                    {t('footer.legal')}
                  </Link>
               </li>
               <li>
                  <Link to="/privacy" className="hover:text-oni-cyan transition-colors">
                    {t('footer.privacy')}
                  </Link>
               </li>
             </ul>
           </div>

           <div className="col-span-1">
             <h4 className="text-gray-900 dark:text-white font-bold mb-4 text-sm uppercase tracking-wider">{t('footer.resources')}</h4>
             <ul className="text-gray-500 dark:text-gray-500 text-xs space-y-2">
               <li>
                 <Link to="/legal" className="hover:text-oni-cyan transition-colors">
                   {t('footer.legal')}
                 </Link>
               </li>
               <li>
                 <Link to="/process" className="hover:text-oni-cyan transition-colors">
                   {t('footer.process')}
                 </Link>
               </li>
               <li>
                 <Link to="/privacy" className="hover:text-oni-cyan transition-colors">
                   {t('footer.privacy')}
                 </Link>
               </li>
             </ul>
             
             <h4 className="text-gray-900 dark:text-white font-bold mt-8 mb-4 text-sm uppercase tracking-wider">{t('footer.office')}</h4>
             <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed">
               104-0061<br/>
               東京都中央区銀座１-２２-１１<br/>
               銀座大竹ビジデンス２Ｆ
             </p>
           </div>
        </div>
        
        <div className="border-t border-black/5 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <div className="text-gray-500 dark:text-gray-700 text-[10px]">
            © {new Date().getFullYear()} Onisaki Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
