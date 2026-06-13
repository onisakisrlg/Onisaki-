import React from 'react';
import { Section } from '../types';
import { Reveal } from './ui/Reveal';
import { CipherText } from './ui/CipherText';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../services/languageService';

export const Concierge: React.FC = () => {
  const { t, language } = useLanguage();
  const currentLang = language === 'en' || language === 'zh-CN' || language === 'zh-TW' ? language : 'ja';

  return (
    <section id={Section.CONTACT} className="py-24 bg-oni-bg relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-oni-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-oni-magenta/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <Reveal width="100%">
            <h2 className="flex flex-col items-center justify-center gap-2">
              <span className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide">
                {t('contact.title')}
              </span>
              <span className="text-lg md:text-xl text-oni-cyan font-bold tracking-[0.3em] font-sans mt-2 relative">
                <span className="absolute inset-0 blur-md bg-oni-cyan/20 rounded-full"></span>
                <span className="relative">{t('contact.subtitle')}</span>
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-oni-cyan to-oni-purple mx-auto rounded-full mt-8"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Contact Info */}
          <Reveal width="100%" delay={0.1} className="h-full">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 h-full hover:border-oni-cyan/30 transition-colors duration-500 flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-oni-cyan rounded-full"></span>
                {t('contact.info')}
              </h3>
              
              <div className="space-y-8 flex-1">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-oni-cyan group-hover:bg-oni-cyan group-hover:text-black transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('contact.address')}</h4>
                    <p className="text-gray-300 leading-relaxed">
                      〒104-0061<br />
                      東京都中央区銀座１-２２-１１<br />
                      銀座大竹ビジデンス２Ｆ
                    </p>
                    <a 
                      href="https://maps.google.com/?q=東京都中央区銀座１-２２-１１" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs text-oni-cyan border-b border-oni-cyan/30 pb-0.5 hover:border-oni-cyan transition-colors"
                    >
                      Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-oni-purple group-hover:bg-oni-purple group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('contact.phone')}</h4>
                    <div className="text-gray-300 font-mono text-lg flex items-center gap-1">
                      <CipherText text="050" />-<CipherText text="6864" />-<CipherText text="0984" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{t('contact.hours')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-oni-magenta group-hover:bg-oni-magenta group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('contact.email')}</h4>
                    <div className="text-gray-300 font-mono text-lg flex items-center gap-1">
                      <CipherText text="support" />@<CipherText text="onisaki.com" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{t('contact.response')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-[#07C160] group-hover:bg-[#07C160] group-hover:text-white transition-all duration-300">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('contact.wechat')}</h4>
                    <div className="text-gray-300 font-mono text-lg flex items-center gap-1">
                      <CipherText text="onisakicom" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-[#00C300] group-hover:bg-[#00C300] group-hover:text-white transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="currentColor">
                      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.539 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.844 2.572-5.992zm-18.988 2.595h-2.392c-.266 0-.482-.216-.482-.482v-4.83c0-.266.216-.482.482-.482h2.392c.266 0 .482.216.482.482v4.83c0 .266-.216.482-.482.482zm7.143-4.83c0-.266-.216-.482-.482-.482h-3.328c-.266 0-.482.216-.482.482v4.83c0 .266.216.482.482.482h3.328c.266 0 .482-.216.482-.482v-4.83zm3.766 4.83c0 .266.216.482.482.482h2.392c.266 0 .482-.216.482-.482v-4.83c0-.266-.216-.482-.482-.482h-2.392c-.266 0-.482.216-.482.482v4.83zm-10.91 0c0 .266.216.482.482.482h2.392c.266 0 .482-.216.482-.482v-1.428h-1.91v-1.97h1.91v-1.428h-2.392c-.266 0-.482.216-.482.482v4.344z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">LINE</h4>
                    <div className="text-gray-300 font-mono text-lg flex items-center gap-1">
                      <a href="https://lin.ee/T8qLivX" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C300] transition-colors border-b border-transparent hover:border-[#00C300] pb-0.5 mt-1 text-sm font-sans">
                        LINE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Message / Note */}
          <Reveal width="100%" delay={0.2} className="h-full">
            <div className="bg-gradient-to-br from-oni-card to-black border border-white/10 rounded-2xl p-8 md:p-10 h-full flex flex-col justify-center relative overflow-hidden group">
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-oni-purple/20 rounded-full blur-[60px] group-hover:bg-oni-purple/30 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">
                  {t('contact.new_projects')}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t('contact.new_projects_desc') }} />
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:support@onisaki.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold tracking-widest uppercase rounded-full hover:bg-oni-cyan transition-colors duration-300 w-full sm:w-auto"
                  >
                    <Mail size={18} />
                    {t('contact.send_email')}
                  </a>
                  
                  <a 
                    href="https://lin.ee/T8qLivX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00C300] text-white font-bold tracking-widest uppercase rounded-full hover:bg-[#00B300] hover:shadow-[0_0_20px_rgba(0,195,0,0.4)] transition-all duration-300 w-full sm:w-auto"
                  >
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.539 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.844 2.572-5.992zm-18.988 2.595h-2.392c-.266 0-.482-.216-.482-.482v-4.83c0-.266.216-.482.482-.482h2.392c.266 0 .482.216.482.482v4.83c0 .266-.216.482-.482.482h3.328c.266 0 .482-.216.482-.482v-4.83zm3.766 4.83c0 .266.216.482.482.482h2.392c.266 0 .482-.216.482-.482v-4.83c0-.266-.216-.482-.482-.482h-2.392c-.266 0-.482.216-.482.482v4.83zm-10.91 0c0 .266.216.482.482.482h2.392c.266 0 .482-.216.482-.482v-1.428h-1.91v-1.97h1.91v-1.428h-2.392c-.266 0-.482.216-.482.482v4.344z"/>
                    </svg>
                    LINE
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
