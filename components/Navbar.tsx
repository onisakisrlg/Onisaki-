import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Section } from '../types';
import { Logo } from './ui/Logo';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Also lock html to prevent iOS elastic scroll
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Updated classes to support light/dark mode opacity and colors
  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-oni-light-bg/90 dark:bg-oni-bg/90 backdrop-blur-md py-3 border-b border-black/5 dark:border-white/5 shadow-lg' 
      : 'bg-transparent py-6'
  }`;

  const linkClasses = (section: Section) => `
    uppercase tracking-[0.2em] text-xs font-bold hover:text-oni-cyan transition-colors cursor-pointer flex flex-col items-center group
    ${activeSection === section ? 'text-oni-cyan' : 'text-gray-800 dark:text-white'}
  `;

  return (
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
        >
           <Logo className="w-10 h-10 md:w-12 md:h-12" />
        </div>

        {/* Desktop Menu - Bilingual */}
        <div className="hidden md:flex gap-10 lg:gap-12 items-center">
          <button onClick={() => scrollToSection(Section.HERO)} className={linkClasses(Section.HERO)}>
            <span>Home</span>
            <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">ホーム</span>
          </button>
          <button onClick={() => scrollToSection(Section.VISION)} className={linkClasses(Section.VISION)}>
            <span>Vision</span>
            <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">ビジョン</span>
          </button>
          <button onClick={() => scrollToSection(Section.SERVICES)} className={linkClasses(Section.SERVICES)}>
            <span>Services</span>
            <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">事業内容</span>
          </button>
          <button onClick={() => scrollToSection(Section.WORKS)} className={linkClasses(Section.WORKS)}>
            <span>Works</span>
            <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">制作実績</span>
          </button>
          <button onClick={() => scrollToSection(Section.CONTACT)} className={linkClasses(Section.CONTACT)}>
            <span>Contact</span>
            <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity font-normal tracking-normal mt-0.5">お問い合わせ</span>
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white hover:border-oni-cyan hover:text-oni-cyan transition-all duration-300 relative overflow-hidden group"
          >
             <div className="relative z-10">
               {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
             </div>
             <div className="absolute inset-0 bg-oni-cyan/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
          </button>
        </div>

        {/* Mobile Toggle Group */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-800 dark:text-white hover:text-oni-cyan transition-colors"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 dark:text-white hover:text-oni-cyan z-50">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Bilingual */}
      <div 
        className={`fixed inset-0 w-full h-[100dvh] z-40 transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        } md:hidden flex flex-col justify-center items-center gap-8`}
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

        <button onClick={() => { scrollToSection(Section.HERO); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-2 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-3xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">Home</span>
          <span className="text-xs font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">ホーム</span>
        </button>
        
        <div className="w-12 h-[1px] bg-black/10 dark:bg-white/10"></div>

        <button onClick={() => { scrollToSection(Section.VISION); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-2 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-3xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">Vision</span>
          <span className="text-xs font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">ビジョン</span>
        </button>

        <div className="w-12 h-[1px] bg-black/10 dark:bg-white/10"></div>

        <button onClick={() => { scrollToSection(Section.SERVICES); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-2 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-3xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">Services</span>
          <span className="text-xs font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">事業内容</span>
        </button>

        <div className="w-12 h-[1px] bg-black/10 dark:bg-white/10"></div>

        <button onClick={() => { scrollToSection(Section.WORKS); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-2 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-3xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">Works</span>
          <span className="text-xs font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">制作実績</span>
        </button>

        <div className="w-12 h-[1px] bg-black/10 dark:bg-white/10"></div>

        <button onClick={() => { scrollToSection(Section.CONTACT); setIsMobileMenuOpen(false); }} className="relative group flex flex-col items-center gap-2 text-gray-900 dark:text-white transition-all transform hover:scale-110">
          <span className="text-3xl font-serif font-bold tracking-widest group-hover:text-oni-cyan transition-colors">Contact</span>
          <span className="text-xs font-sans font-bold opacity-60 tracking-[0.2em] group-hover:text-oni-cyan transition-colors">お問い合わせ</span>
        </button>
      </div>
    </nav>
  );
};
