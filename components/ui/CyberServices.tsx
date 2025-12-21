import React, { useState, useEffect } from 'react';

const SERVICES = [
  { jp: 'WEB開発', en: 'WEB DEV', id: 'web' },
  { jp: 'EC構築', en: 'E-COMMERCE', id: 'ec' },
  { jp: 'UIデザイン', en: 'UI / UX', id: 'ui' }
];

// Removed full-width Japanese characters to prevent internal jittering during glitch.
// Using only half-width characters ensures perfect monospaced alignment.
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%&?[]<>";

const GlitchItem: React.FC<{ 
  jp: string; 
  en: string; 
  isHovered: boolean;
}> = ({ jp, en, isHovered }) => {
  const [text, setText] = useState(jp);
  const [lang, setLang] = useState<'jp' | 'en'>('jp');
  
  // Random auto-glitch effect
  useEffect(() => {
    if (isHovered) {
      // Force English on hover with a scramble
      scrambleTo(en);
      return;
    }

    // Random interval to switch languages automatically
    const timeout = setTimeout(() => {
      const nextLang = lang === 'jp' ? 'en' : 'jp';
      setLang(nextLang);
      scrambleTo(nextLang === 'jp' ? jp : en);
    }, 2000 + Math.random() * 4000); // Random time between 2s and 6s

    return () => clearTimeout(timeout);
  }, [lang, isHovered, jp, en]);

  const scrambleTo = (targetText: string) => {
    let iter = 0;
    
    const interval = setInterval(() => {
      const scrambled = targetText.split('').map((char, index) => {
        if (index < iter) return targetText[index];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      
      setText(scrambled);
      iter += 1/2; // Speed of decoding

      if (iter >= targetText.length) {
        clearInterval(interval);
        setText(targetText);
      }
    }, 50);
  };

  return (
    <span 
      className={`
        relative inline-flex items-center justify-center px-2 transition-all duration-300 cursor-pointer
        ${isHovered ? 'text-oni-cyan scale-110 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'text-gray-500 dark:text-gray-300 hover:text-white'}
      `}
    >
      {/* Decorative brackets on hover */}
      <span className={`absolute left-0 text-[10px] text-oni-cyan transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>[</span>
      
      {/* 
        FIX: Added fixed width (w-[110px] mobile, w-[150px] desktop) 
        and text-center to prevent layout shifts ("左右乱动") when text changes length.
      */}
      <span className="inline-block w-[110px] md:w-[150px] text-center font-mono font-bold text-sm md:text-lg mx-2 whitespace-nowrap">
        {text}
      </span>

      <span className={`absolute right-0 text-[10px] text-oni-cyan transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>]</span>
    </span>
  );
};

export const CyberServices: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]" style={{ animationDelay: '1s' }}>
      
      {SERVICES.map((service, index) => (
        <React.Fragment key={service.id}>
          {/* The Service Item */}
          <div 
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative group"
          >
            <GlitchItem 
              jp={service.jp} 
              en={service.en} 
              isHovered={hoveredId === service.id} 
            />
            
            {/* Underline scanner effect */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-oni-cyan to-transparent transition-transform duration-300 origin-center ${hoveredId === service.id ? 'scale-x-100' : 'scale-x-0'}`} />
          </div>

          {/* Dynamic Separator (Audio Viz Style) - Don't show after last item */}
          {index < SERVICES.length - 1 && (
            <div className="hidden md:flex gap-[2px] items-center h-4 opacity-30 mx-2">
               <div className="w-[2px] h-full bg-oni-purple animate-[pulse_1s_ease-in-out_infinite]" />
               <div className="w-[2px] h-[60%] bg-oni-magenta animate-[pulse_1.5s_ease-in-out_infinite]" />
               <div className="w-[2px] h-[80%] bg-oni-cyan animate-[pulse_1.2s_ease-in-out_infinite]" />
            </div>
          )}
          
          {/* Mobile separator */}
          {index < SERVICES.length - 1 && (
             <div className="md:hidden w-1 h-1 bg-gray-500 rounded-full opacity-50 my-1" />
          )}

        </React.Fragment>
      ))}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
