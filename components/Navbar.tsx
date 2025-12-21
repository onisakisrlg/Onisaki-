import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Section } from '../types';

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

  // Updated classes to support light/dark mode opacity and colors
  // Reduced vertical padding slightly on scroll since items are now taller (double line)
  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-oni-light-bg/90 dark:bg-oni-bg/90 backdrop-blur-md py-2 border-b border-black/5 dark:border-white/5 shadow-lg' 
      : 'bg-transparent py-6'
  }`;

  const linkClasses = (section: Section) => `
    uppercase tracking-[0.2em] text-xs font-bold hover:text-oni-cyan transition-colors cursor-pointer flex flex-col items-center group
    ${activeSection === section ? 'text-oni-cyan' : 'text-gray-800 dark:text-white'}
  `;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="font-serif font-[800] tracking-widest cursor-pointer flex items-center gap-3 group"
          onClick={() => scrollToSection(Section.HERO)}
        >
           {/* Cyber Reactor Logo Animation */}
           <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Outer Ring (Cyan) */}
              <div className="absolute w-full h-full rounded-full border-2 border-t-oni-cyan border-r-oni-cyan border-b-transparent border-l-transparent animate-[spin_3s_linear_infinite] group-hover:animate-[spin_1s_linear_infinite] transition-all opacity-80 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
              
              {/* Inner Ring (Magenta) */}
              <div className="absolute w-6 h-6 rounded-full border-2 border-t-transparent border-r-transparent border-b-oni-magenta border-l-oni-magenta animate-[spin_4s_linear_infinite_reverse] group-hover:animate-[spin_1.5s_linear_infinite_reverse] transition-all opacity-80"></div>
              
              {/* Core (White/Purple) */}
              <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:bg-oni-purple transition-colors"></div>
           </div>

          <span className="text-lg md:text-xl font-[800] text-gray-900 dark:text-white tracking-wider group-hover:text-oni-cyan transition-colors duration-300">
            ONISAKI株式会社
          </span>
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

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 dark:text-white hover:text-oni-cyan">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Bilingual */}
      <div className={`fixed inset-0 bg-oni-light-bg/95 dark:bg-oni-bg/95 backdrop-blur-xl z-40 transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center gap-8`}>
        <button onClick={() => { scrollToSection(Section.HERO); setIsMobileMenuOpen(false); }} className="group flex flex-col items-center gap-1 text-gray-800 dark:text-white hover:text-oni-cyan transition-colors">
          <span className="text-3xl font-serif font-bold tracking-widest">Home</span>
          <span className="text-sm font-sans opacity-60">ホーム</span>
        </button>
        <button onClick={() => { scrollToSection(Section.VISION); setIsMobileMenuOpen(false); }} className="group flex flex-col items-center gap-1 text-gray-800 dark:text-white hover:text-oni-cyan transition-colors">
          <span className="text-3xl font-serif font-bold tracking-widest">Vision</span>
          <span className="text-sm font-sans opacity-60">ビジョン</span>
        </button>
        <button onClick={() => { scrollToSection(Section.SERVICES); setIsMobileMenuOpen(false); }} className="group flex flex-col items-center gap-1 text-gray-800 dark:text-white hover:text-oni-cyan transition-colors">
          <span className="text-3xl font-serif font-bold tracking-widest">Services</span>
          <span className="text-sm font-sans opacity-60">事業内容</span>
        </button>
        <button onClick={() => { scrollToSection(Section.CONTACT); setIsMobileMenuOpen(false); }} className="group flex flex-col items-center gap-1 text-gray-800 dark:text-white hover:text-oni-cyan transition-colors">
          <span className="text-3xl font-serif font-bold tracking-widest">Contact</span>
          <span className="text-sm font-sans opacity-60">お問い合わせ</span>
        </button>
      </div>
    </nav>
  );
};