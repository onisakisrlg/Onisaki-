import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Philosophy } from './Philosophy';
import { Collection } from './Collection';
import { Works } from './Works';
import { DeliveryProcess } from './DeliveryProcess';
import { Concierge } from './Concierge';
import { Footer } from './Footer';
import { Section } from '../types';

interface MainLayoutProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  // Flag to prevent scroll listener from overriding click navigation momentarily
  const [isScrollingTo, setIsScrollingTo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // If we are automatically scrolling via click, don't update state to avoid flickering
      if (isScrollingTo) return;

      // Detection point: roughly 30% down the screen (user focus area)
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      const sections = [Section.HERO, Section.VISION, Section.SERVICES, Section.WORKS, Section.CONTACT];
      
      let current = Section.HERO;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Check if the scroll position falls within this section's bounds
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
             current = section;
             break; // Found the active section
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrollingTo]);

  // Handle auto-scroll when returning from other pages
  useEffect(() => {
    if (location.state && (location.state as any).targetSection) {
      const section = (location.state as any).targetSection;
      // Slight delay to ensure DOM render
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    }
  }, [location]);

  const scrollToSection = (section: Section) => {
    setIsScrollingTo(true);
    setActiveSection(section);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Re-enable scroll listener after animation finishes (approx 1s)
      setTimeout(() => setIsScrollingTo(false), 1000);
    } else {
        setIsScrollingTo(false);
    }
  };

  return (
    <>
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <Philosophy /> 
        <Collection />
        <Works />
        <DeliveryProcess />
        <Concierge />
      </main>

      <Footer />
    </>
  );
};
