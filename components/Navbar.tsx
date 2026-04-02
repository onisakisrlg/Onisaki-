import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages, Check } from 'lucide-react';
import { Section } from '../types';
import { Logo } from './ui/Logo';
import { useLanguage, Language } from '../services/languageService';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu or language menu is open
  useEffect(() => {
    if (isMobileMenuOpen || isLangMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY) {
        const scrollPos = parseInt(scrollY, 10) * -1;
        window.scrollTo(0, scrollPos);
      }
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isLangMenuOpen]);

  // Close one menu when the other opens
  useEffect(() => {
    if (isMobileMenuOpen && isLangMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isLangMenuOpen]);

  // Updated classes to support light/dark mode opacity and colors
  // On mobile, we keep it solid/blurred to prevent visibility issues and bugs
  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled || isMobileMenuOpen || isLangMenuOpen
      ? 'bg-oni-light-bg/90 dark:bg-oni-bg/90 backdrop-blur-md py-3 border-b border-black/5 dark:border-white/5 shadow-lg' 
      : 'bg-oni-light-bg/90 dark:bg-oni-bg/90 backdrop-blur-md py-3 border-b border-black/5 dark:border-white/5 md:bg-transparent md:py-6 md:border-none'
  }`;

  const linkClasses = (section: Section) => `
    uppercase tracking-[0.2em] text-xs font-bold hover:text-oni-cyan transition-colors cursor-pointer flex flex-col items-center group
    ${activeSection === section ? 'text-oni-cyan' : 'text-gray-800 dark:text-white'}
  `;

  const languages: { code: Language; label: string }[] = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'zh-TW', label: '繁體中文' }
  ];

  return (
    <>
      <nav className={navClasses}>
        {/* 
           Container needs relative z-50 to sit ABOVE the fixed overlay (z-40) 
           so the logo and close button remain clickable.
        */}
        <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
          {/* Logo */}
          <div 
            onClick={() => {
              scrollToSection(Section.HERO);
              setIsMobileMenuOpen(false);
            }}
            className="cursor-pointer"
          >
             <Logo className="w-10 h-10 md:w-12 md:h-12" />
          </div>

          {/* Desktop Menu - Bilingual */}
          <div className="hidden md:flex gap-8 lg:gap-10 items-center">
            <button onClick={() => scrollToSection(Section.HERO)} className={linkClasses(Section.HERO)}>
              <span>{t('nav.home')}</span>
              <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">{t('nav.home.sub')}</span>
            </button>
            <button onClick={() => scrollToSection(Section.VISION)} className={linkClasses(Section.VISION)}>
              <span>{t('nav.vision')}</span>
              <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">{t('nav.vision.sub')}</span>
            </button>
            <button onClick={() => scrollToSection(Section.SERVICES)} className={linkClasses(Section.SERVICES)}>
              <span>{t('nav.services')}</span>
              <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">{t('nav.services.sub')}</span>
            </button>
            <button onClick={() => scrollToSection(Section.PRICING)} className={linkClasses(Section.PRICING)}>
              <span>{t('nav.pricing')}</span>
              <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">{t('nav.pricing.sub')}</span>
            </button>
            <button onClick={() => scrollToSection(Section.WORKS)} className={linkClasses(Section.WORKS)}>
              <span>{t('nav.works')}</span>
              <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">{t('nav.works.sub')}</span>
            </button>
            <button onClick={() => scrollToSection(Section.CONTACT)} className={linkClasses(Section.CONTACT)}>
              <span>{t('nav.contact')}</span>
              <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">{t('nav.contact.sub')}</span>
            </button>

            <div className="flex items-center gap-2 ml-2">
              {/* Language Toggle */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="p-2 rounded-full border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white hover:border-oni-cyan hover:text-oni-cyan transition-all duration-300 relative overflow-hidden group"
                >
                  <Languages size={18} />
                </button>
                
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-oni-card border border-black/5 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl z-[100]"
                    >
                      <div className="p-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsLangMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-xs font-bold tracking-widest rounded-xl transition-all flex items-center justify-between group ${language === lang.code ? 'text-oni-cyan bg-oni-cyan/10' : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'}`}
                          >
                            <span>{lang.label}</span>
                            {language === lang.code && <Check size={14} className="text-oni-cyan" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white hover:border-oni-cyan hover:text-oni-cyan transition-all duration-300 relative overflow-hidden group"
              >
                 <div className="relative z-10">
                   {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                 </div>
                 <div className="absolute inset-0 bg-oni-cyan/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              </button>
            </div>
          </div>

          {/* Mobile Toggle Group */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="p-2 text-gray-800 dark:text-white hover:text-oni-cyan transition-colors"
            >
              <Languages size={22} />
            </button>

            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-800 dark:text-white hover:text-oni-cyan transition-colors"
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 dark:text-white hover:text-oni-cyan z-50 p-2">
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Language Menu Overlay - Bottom Sheet Style */}
      <AnimatePresence>
        {isLangMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLangMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            {/* Bottom Sheet */}
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-[70] bg-white dark:bg-oni-card rounded-t-[32px] overflow-hidden shadow-2xl border-t border-black/5 dark:border-white/10 md:hidden"
            >
              {/* Drag Handle Indicator */}
              <div className="w-12 h-1.5 bg-gray-300 dark:bg-white/10 mx-auto mt-4 rounded-full" />
              
              <div className="p-6 pt-2">
                <div className="flex justify-between items-center mb-8">
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white">Language</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-oni-magenta font-bold">Select Preference</p>
                  </div>
                  <button 
                    onClick={() => setIsLangMenuOpen(false)}
                    className="p-3 bg-black/5 dark:bg-white/5 rounded-full text-gray-500 hover:text-oni-cyan transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl text-base font-bold tracking-[0.1em] transition-all border-2 ${
                        language === lang.code 
                          ? 'bg-oni-cyan/10 border-oni-cyan text-oni-cyan shadow-lg shadow-oni-cyan/5' 
                          : 'bg-black/5 dark:bg-white/5 border-transparent text-gray-900 dark:text-white active:bg-oni-cyan/5'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${language === lang.code ? 'bg-oni-cyan animate-pulse' : 'bg-gray-400'}`} />
                        {lang.label}
                      </span>
                      {language === lang.code && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 bg-oni-cyan rounded-full flex items-center justify-center"
                        >
                          <Check size={14} className="text-white" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Safe area padding for mobile browsers */}
                <div className="h-10"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay - Bilingual */}
      <div 
        className={`fixed inset-0 w-full h-[100dvh] z-40 transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        } md:hidden flex flex-col justify-center items-center gap-6`}
        // Use inline style for absolute certainty of background color in production build, ensuring NO transparency
        style={{ 
          backgroundColor: theme === 'dark' ? '#0b0c15' : '#f3f4f6' 
        }}
      >
        {/* Force Solid Background Layer to prevent bleed-through */}
        <div className="absolute inset-0 bg-oni-light-bg dark:bg-oni-bg opacity-100 z-[-1]"></div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-oni-cyan/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-oni-magenta/10 rounded-full blur-[80px] pointer-events-none"></div>

        <button onClick={() => { scrollToSection(Section.HERO); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-1 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-2xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">{t('nav.home')}</span>
          <span className="text-[10px] font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">{t('nav.home.sub')}</span>
        </button>
        
        <div className="w-8 h-[1px] bg-black/10 dark:bg-white/10"></div>

        <button onClick={() => { scrollToSection(Section.VISION); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-1 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-2xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">{t('nav.vision')}</span>
          <span className="text-[10px] font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">{t('nav.vision.sub')}</span>
        </button>

        <div className="w-8 h-[1px] bg-black/10 dark:bg-white/10"></div>

        <button onClick={() => { scrollToSection(Section.SERVICES); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-1 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-2xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">{t('nav.services')}</span>
          <span className="text-[10px] font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">{t('nav.services.sub')}</span>
        </button>

        <div className="w-8 h-[1px] bg-black/10 dark:bg-white/10"></div>

        <button onClick={() => { scrollToSection(Section.PRICING); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-1 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-2xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">{t('nav.pricing')}</span>
          <span className="text-[10px] font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">{t('nav.pricing.sub')}</span>
        </button>

        <div className="w-8 h-[1px] bg-black/10 dark:bg-white/10"></div>

        <button onClick={() => { scrollToSection(Section.WORKS); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-1 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-2xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">{t('nav.works')}</span>
          <span className="text-[10px] font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">{t('nav.works.sub')}</span>
        </button>

        <div className="w-8 h-[1px] bg-black/10 dark:bg-white/10"></div>

        <button onClick={() => { scrollToSection(Section.CONTACT); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-1 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-2xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">{t('nav.contact')}</span>
          <span className="text-[10px] font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">{t('nav.contact.sub')}</span>
        </button>
      </div>
    </>
  );
};
