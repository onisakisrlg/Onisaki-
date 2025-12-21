import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  theme?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", showText = true, theme }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className={`relative ${className} flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#ff00aa" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Rotating Ring (Broken Segments) */}
          <g className="origin-center animate-[spin_10s_linear_infinite]">
             <path d="M 50 10 A 40 40 0 0 1 90 50" stroke="url(#logo-gradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
             <path d="M 50 90 A 40 40 0 0 1 10 50" stroke="url(#logo-gradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>

          {/* Middle Static Ring */}
          <circle cx="50" cy="50" r="28" stroke="#bd00ff" strokeWidth="1" fill="none" opacity="0.5" />
          
          {/* Inner Counter-Rotating Ring */}
          <g className="origin-center animate-[spin_5s_linear_infinite_reverse]">
             <path d="M 50 30 A 20 20 0 0 1 70 50" stroke="#00f0ff" strokeWidth="2" fill="none" />
             <path d="M 50 70 A 20 20 0 0 1 30 50" stroke="#ff00aa" strokeWidth="2" fill="none" />
          </g>

          {/* Center Core (Pulse) */}
          <circle cx="50" cy="50" r="8" fill="white" filter="url(#glow)" className="animate-pulse" />
        </svg>
        
        {/* Glow backdrop behind the logo */}
        <div className="absolute inset-0 bg-oni-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className="text-lg md:text-xl font-serif font-[800] tracking-wider leading-none text-gray-900 dark:text-white transition-colors">
            ONISAKI
          </span>
          <span className="text-[9px] font-sans font-bold tracking-[0.3em] text-oni-cyan leading-none mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
            CREATIVE
          </span>
        </div>
      )}
    </div>
  );
};
