import React from 'react';

// Common classes for neon effects
const strokeBase = "stroke-gray-800 dark:stroke-white transition-colors duration-500";
const strokeAccent = "stroke-oni-cyan";
const strokePurple = "stroke-oni-purple";
const strokeMagenta = "stroke-oni-magenta";

export const WebDevAnim = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
    {/* Browser Window Frame */}
    <rect x="10" y="20" width="80" height="60" rx="4" fill="none" strokeWidth="2" className={strokeBase} />
    <line x1="10" y1="35" x2="90" y2="35" strokeWidth="1" className={strokeBase} opacity="0.5" />
    
    {/* Theme-colored Window Controls (Replaces Red/Yellow/Green) */}
    <circle cx="20" cy="28" r="2" fill="currentColor" className="text-oni-cyan" />
    <circle cx="28" cy="28" r="2" fill="currentColor" className="text-oni-purple" />
    <circle cx="36" cy="28" r="2" fill="currentColor" className="text-oni-magenta" />

    {/* Animated Code Lines */}
    <line x1="20" y1="50" x2="60" y2="50" strokeWidth="3" strokeLinecap="round" className={`${strokeAccent} animate-[pulse_2s_ease-in-out_infinite]`} />
    <line x1="20" y1="60" x2="70" y2="60" strokeWidth="3" strokeLinecap="round" className={`${strokePurple} animate-[pulse_2s_ease-in-out_infinite_0.5s]`} />
    <line x1="20" y1="70" x2="50" y2="70" strokeWidth="3" strokeLinecap="round" className={`${strokeMagenta} animate-[pulse_2s_ease-in-out_infinite_1s]`} />
    
    {/* Blinking Cursor */}
    <rect x="55" y="68" width="4" height="4" fill="currentColor" className="text-oni-cyan animate-ping" />
  </svg>
);

export const EcAnim = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(255,0,170,0.5)]">
    {/* Floating Box */}
    <g className="animate-[bounce_3s_infinite]">
        <path d="M20 40 L50 25 L80 40 L50 55 Z" fill="none" strokeWidth="2" className={strokeAccent} />
        <path d="M20 40 L20 70 L50 85 L50 55" fill="none" strokeWidth="2" className={strokeBase} />
        <path d="M80 40 L80 70 L50 85" fill="none" strokeWidth="2" className={strokeBase} />
        
        {/* Glow inside */}
        <circle cx="50" cy="55" r="10" className="fill-oni-magenta/20 animate-pulse" />
    </g>
    
    {/* Orbiting Ring */}
    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" strokeWidth="1" className={`${strokePurple} opacity-50`} />
    <circle cx="20" cy="80" r="3" className="fill-oni-cyan animate-[ping_2s_linear_infinite]" />
  </svg>
);

export const UiUxAnim = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(189,0,255,0.5)]">
    {/* Bottom Layer */}
    <rect x="35" y="45" width="40" height="40" rx="4" fill="none" strokeWidth="2" className={`${strokeBase} opacity-30 animate-[pulse_3s_infinite]`} transform="rotate(-10 55 65)" />
    
    {/* Middle Layer */}
    <rect x="30" y="35" width="40" height="40" rx="4" fill="none" strokeWidth="2" className={`${strokePurple} opacity-60 animate-[pulse_3s_infinite_0.5s]`} transform="rotate(-5 50 55)" />
    
    {/* Top Layer */}
    <rect x="25" y="25" width="40" height="40" rx="4" fill="none" strokeWidth="2" className={strokeAccent} />
    
    {/* Interactive Element */}
    <circle cx="55" cy="45" r="5" className="fill-oni-magenta animate-ping" />
    <line x1="30" y1="55" x2="60" y2="55" strokeWidth="2" className={strokeBase} />
  </svg>
);

export const GameAnim = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
    {/* D-Pad */}
    <path d="M25 50 L35 50 L35 40 L45 40 L45 50 L55 50 L55 60 L45 60 L45 70 L35 70 L35 60 L25 60 Z" fill="none" strokeWidth="2" className={`${strokeAccent} animate-pulse`} />
    
    {/* Buttons */}
    <circle cx="75" cy="55" r="6" fill="none" strokeWidth="2" className={`${strokeMagenta} animate-[bounce_1s_infinite]`} />
    <circle cx="65" cy="70" r="6" fill="none" strokeWidth="2" className={`${strokePurple} animate-[bounce_1s_infinite_0.2s]`} />
    
    {/* Connection Lines */}
    <path d="M10 50 Q 50 10 90 50" fill="none" strokeWidth="1" strokeDasharray="4 4" className="stroke-gray-500 opacity-30" />
    <circle cx="50" cy="30" r="2" className="fill-white animate-ping" />
  </svg>
);

export const DxAnim = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
    {/* Central Hub */}
    <circle cx="50" cy="50" r="10" fill="none" strokeWidth="2" className={strokeAccent} />
    <circle cx="50" cy="50" r="4" className="fill-oni-magenta animate-pulse" />
    
    {/* Orbiting Satellite 1 */}
    <g className="animate-[spin_4s_linear_infinite] origin-center">
       <circle cx="50" cy="20" r="5" fill="none" strokeWidth="2" className={strokePurple} />
       <line x1="50" y1="25" x2="50" y2="40" strokeWidth="1" className={strokeBase} opacity="0.5" />
    </g>

    {/* Orbiting Satellite 2 */}
    <g className="animate-[spin_6s_linear_infinite_reverse] origin-center">
       <rect x="75" y="45" width="10" height="10" fill="none" strokeWidth="2" className={strokeBase} />
       <line x1="75" y1="50" x2="60" y2="50" strokeWidth="1" className={strokeBase} opacity="0.5" />
    </g>

    {/* Orbiting Satellite 3 */}
    <g className="animate-[spin_8s_linear_infinite] origin-center">
       <path d="M20 50 L25 55 L20 60 Z" fill="none" strokeWidth="2" className={strokeAccent} />
       <line x1="25" y1="50" x2="40" y2="50" strokeWidth="1" className={strokeBase} opacity="0.5" />
    </g>
  </svg>
);

export const MobileAnim = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
    {/* Phone Outline */}
    <rect x="30" y="20" width="40" height="60" rx="4" fill="none" strokeWidth="2" className={strokeBase} />
    <circle cx="50" cy="75" r="2" fill="currentColor" className="text-gray-500" />
    
    {/* Screen Content - Notification Pop */}
    <rect x="35" y="30" width="30" height="10" rx="2" className={`${strokeAccent} fill-oni-cyan/10 animate-[bounce_2s_infinite]`} strokeWidth="1" />
    
    {/* Signal Waves */}
    <path d="M75 25 Q 85 25 85 35" fill="none" strokeWidth="2" className={`${strokeMagenta} animate-[pulse_1s_infinite]`} />
    <path d="M75 20 Q 90 20 90 35" fill="none" strokeWidth="2" className={`${strokePurple} animate-[pulse_1s_infinite_0.2s] opacity-60`} />
  </svg>
);

export const OfficeAnim = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
    {/* Radar Grid */}
    <g className="opacity-50" transform="scale(1, 0.5) translate(0, 50)">
      <circle cx="50" cy="50" r="15" fill="none" strokeWidth="2" className={`${strokePurple} animate-[ping_3s_linear_infinite]`} />
      <circle cx="50" cy="50" r="30" fill="none" strokeWidth="1" className={strokeBase} />
      <circle cx="50" cy="50" r="45" fill="none" strokeWidth="1" className={strokeBase} opacity="0.5" />
      <line x1="50" y1="5" x2="50" y2="95" strokeWidth="1" className={strokeBase} opacity="0.3" />
      <line x1="5" y1="50" x2="95" y2="50" strokeWidth="1" className={strokeBase} opacity="0.3" />
    </g>

    {/* Map Pin */}
    <g className="animate-[bounce_2s_infinite]">
      <path d="M50 80 L50 45" strokeWidth="2" className={strokeAccent} />
      <path d="M30 35 Q 50 10 70 35 Q 70 55 50 80 Q 30 55 30 35 Z" fill="none" strokeWidth="2" className={`${strokeAccent} fill-oni-cyan/10`} />
      <circle cx="50" cy="35" r="6" className="fill-oni-magenta animate-pulse" />
    </g>
  </svg>
);

export const PhoneAnim = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(255,0,170,0.5)]">
    {/* Handset */}
    <path d="M30 30 C 20 30, 20 70, 30 70 L 70 70 C 80 70, 80 30, 70 30 Z" fill="none" strokeWidth="2" className={`${strokeBase} opacity-50`} />
    <path d="M35 35 L 65 35" strokeWidth="2" className={strokePurple} />
    
    <g className="animate-[shake_0.5s_ease-in-out_infinite]">
        {/* Modern Phone Frame */}
        <rect x="35" y="20" width="30" height="60" rx="4" fill="none" strokeWidth="2" className={strokeAccent} />
        <circle cx="50" cy="70" r="3" className="fill-oni-cyan" />
        
        {/* Incoming Call Screen */}
        <rect x="40" y="25" width="20" height="10" rx="1" className="fill-oni-magenta animate-pulse" />
    </g>

    {/* Sound Waves */}
    <path d="M75 40 Q 85 50 75 60" fill="none" strokeWidth="2" className={`${strokeMagenta} animate-[pulse_1s_infinite]`} />
    <path d="M80 35 Q 95 50 80 65" fill="none" strokeWidth="2" className={`${strokePurple} animate-[pulse_1s_infinite_0.2s] opacity-70`} />
    
    <style>{`
      @keyframes shake {
        0%, 100% { transform: rotate(0deg); transform-origin: 50% 50%; }
        25% { transform: rotate(-5deg); }
        75% { transform: rotate(5deg); }
      }
    `}</style>
  </svg>
);

export const MailAnim = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(189,0,255,0.5)]">
    {/* Envelope Body */}
    <rect x="15" y="35" width="70" height="45" rx="2" fill="none" strokeWidth="2" className={strokeBase} />
    
    {/* Flap */}
    <path d="M15 35 L 50 60 L 85 35" fill="none" strokeWidth="2" className={strokeBase} />
    
    {/* Paper Inside (Sliding Up) */}
    <g className="animate-[slideUpLoop_3s_ease-in-out_infinite]">
       <rect x="25" y="25" width="50" height="40" rx="1" fill="none" strokeWidth="2" className={`${strokeAccent} bg-oni-bg`} />
       <line x1="30" y1="35" x2="60" y2="35" strokeWidth="2" className={strokePurple} />
       <line x1="30" y1="45" x2="70" y2="45" strokeWidth="2" className={strokeMagenta} />
       <line x1="30" y1="55" x2="50" y2="55" strokeWidth="2" className={strokeAccent} />
    </g>

    {/* Front Fold (to cover bottom of sliding paper) */}
    <path d="M15 80 L 50 50 L 85 80" fill="none" strokeWidth="2" className={strokeBase} />
    
    <style>{`
      @keyframes slideUpLoop {
        0% { transform: translateY(10px); opacity: 0; }
        20% { transform: translateY(0); opacity: 1; }
        80% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-10px); opacity: 0; }
      }
    `}</style>
  </svg>
);