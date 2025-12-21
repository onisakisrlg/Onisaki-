import React, { useState, useEffect, useRef } from 'react';
import { WebDevAnim, EcAnim, UiUxAnim, GameAnim, DxAnim, MobileAnim } from './ServiceAnimations';

// --- Configuration ---
// Significantly reduced speed for "Three-Body" majestic feel
const ORBIT_SPEED_MULTIPLIER = 0.15; 
const NODES = [
  { id: 0, component: <WebDevAnim />, label: 'WEB DEV', orbitR: 180, speed: 0.8, offset: 0 },
  { id: 1, component: <EcAnim />, label: 'EC BUILD', orbitR: 260, speed: -0.6, offset: 2 },
  { id: 2, component: <UiUxAnim />, label: 'UI / UX', orbitR: 220, speed: 0.5, offset: 4 },
  { id: 3, component: <GameAnim />, label: 'GAME', orbitR: 160, speed: -0.9, offset: 1.5 },
  { id: 4, component: <DxAnim />, label: 'DX SYS', orbitR: 280, speed: 0.4, offset: 5.5 },
  { id: 5, component: <MobileAnim />, label: 'MOBILE', orbitR: 200, speed: -0.7, offset: 3.2 },
];

export const VisionAnim = () => {
  const [time, setTime] = useState(0);
  
  // Logic State
  const [targetIndex, setTargetIndex] = useState(0);
  const [pulseState, setPulseState] = useState<'charging' | 'traveling' | 'hit' | 'cooldown'>('charging');
  const [pulseProgress, setPulseProgress] = useState(0); // 0 to 1
  
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const isMobileRef = useRef(false);

  // --- Animation Loop ---
  const animate = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = (timestamp - startTimeRef.current) / 1000; // Seconds
    
    setTime(elapsed); 
    handlePulseLogic();
    requestRef.current = requestAnimationFrame(animate);
  };

  const handlePulseLogic = () => {
    setPulseProgress((prev) => {
      if (pulseState === 'charging') {
        // Wait briefly then fire
        if (Math.random() > 0.98) setPulseState('traveling'); // Lower chance per frame for longer gaps
        return 0;
      }
      
      if (pulseState === 'traveling') {
        const speed = 0.03; // Slower beam speed so we can see the particle travel
        const next = prev + speed;
        if (next >= 1) {
          setPulseState('hit');
          setTimeout(() => setPulseState('cooldown'), 3000); // Stay active longer
          return 1;
        }
        return next;
      }

      if (pulseState === 'hit') {
        return 1; 
      }

      if (pulseState === 'cooldown') {
        const next = prev - 0.05; // Fade out/retract
        if (next <= 0) {
          setPulseState('charging');
          setTargetIndex((current) => (current + 1) % NODES.length);
          return 0;
        }
        return next;
      }

      return prev;
    });
  };

  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768;
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [pulseState]);

  // --- Position Calculation ---
  const getPosition = (node: typeof NODES[0], t: number) => {
    const isMob = isMobileRef.current;
    // Slower orbit calculation
    const angle = node.offset + (t * node.speed * ORBIT_SPEED_MULTIPLIER);
    const baseR = isMob ? node.orbitR * 0.5 : node.orbitR;
    // Gentler breathing
    const breathing = Math.sin(t * 0.3 + node.id) * 15; 
    const r = baseR + breathing;

    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    return { x, y, r };
  };

  return (
    <div className="w-full h-full min-h-[500px] md:min-h-[700px] relative flex items-center justify-center overflow-visible">
      
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Very faint, slow orbits */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-white/5 opacity-30 animate-[spin_120s_linear_infinite]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[360px] md:h-[360px] rounded-full border border-white/5 opacity-20 animate-[spin_90s_linear_infinite_reverse]"></div>
      </div>

      {/* --- SVG Layer: Beams & Particles --- */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible">
        <defs>
           <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fff" stopOpacity="1" />
           </linearGradient>
           <filter id="particle-glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
              </feMerge>
           </filter>
        </defs>

        <g style={{ transform: 'translate(50%, 50%)' }}>
          {(() => {
            const targetNode = NODES[targetIndex];
            const pos = getPosition(targetNode, time);
            
            // Calculate current particle position
            const currentX = pos.x * pulseProgress;
            const currentY = pos.y * pulseProgress;

            if (pulseProgress > 0.01) {
                return (
                    <g>
                        {/* The Trail (Fades out as it gets longer to emphasize the head) */}
                        <line 
                            x1="0" y1="0" 
                            x2={currentX} y2={currentY} 
                            stroke="url(#beam-grad)" 
                            strokeWidth="1"
                            opacity={pulseState === 'cooldown' ? 0 : 0.6}
                        />
                        
                        {/* The Moving Particle (Photon) */}
                        {pulseState !== 'hit' && pulseState !== 'cooldown' && (
                            <circle 
                                cx={currentX} cy={currentY} 
                                r="4" 
                                fill="#fff" 
                                filter="url(#particle-glow)"
                                className="drop-shadow-[0_0_8px_rgba(0,240,255,1)]"
                            />
                        )}

                        {/* Connection Line (Locks on after hit) */}
                        {pulseState === 'hit' && (
                           <line 
                            x1="0" y1="0" 
                            x2={pos.x} y2={pos.y} 
                            stroke="#00f0ff" 
                            strokeWidth="1"
                            strokeOpacity="0.3"
                           />
                        )}
                        
                        {/* Impact Shockwave Ring */}
                        {pulseState === 'hit' && (
                            <circle 
                                cx={pos.x} cy={pos.y} 
                                r={50} 
                                fill="none" 
                                stroke="#00f0ff" 
                                strokeWidth="1" 
                                className="animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" 
                                opacity="0.5"
                            />
                        )}
                    </g>
                )
            }
            return null;
          })()}
        </g>
      </svg>


      {/* --- CENTRAL CORE: Cyber Seal (Hanko) Style --- */}
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
         
         {/* The Seal Container */}
         <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-[3px] border-double border-oni-cyan shadow-[0_0_40px_rgba(0,240,255,0.3)] bg-black/90 backdrop-blur-xl flex items-center justify-center overflow-hidden group">
            
            {/* Inner Wall Glowing Text - Rotating */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                   <path id="textCircle" d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
                </defs>
                <text fill="rgba(0,240,255,0.8)" fontSize="16" fontWeight="bold" letterSpacing="6" fontFamily="Cinzel, serif">
                  <textPath href="#textCircle" startOffset="0%" textLength="515">
                    ONISAKI • CREATIVE • ONISAKI • CREATIVE •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Decorative Inner Ring (Static) */}
            <div className="absolute inset-2 rounded-full border border-oni-purple/30 pointer-events-none"></div>
            
            {/* Center Glow Pulse */}
            <div className="absolute inset-0 bg-oni-cyan/5 animate-pulse pointer-events-none"></div>
            
            {/* Small Geometric Core Anchor */}
            <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-oni-magenta rotate-45 animate-pulse shadow-[0_0_15px_rgba(255,0,170,1)]"></div>
         </div>
         
         {/* Outer Decorative Rings (Slow Counter-Spin) */}
         <div className="absolute inset-[-15px] border border-dashed border-oni-cyan/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
         <div className="absolute inset-[-5px] border border-oni-magenta/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
      </div>


      {/* --- ORBITING SATELLITE NODES --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {NODES.map((node, index) => {
          const pos = getPosition(node, time);
          const isTarget = index === targetIndex;
          const isHit = isTarget && pulseState === 'hit';

          return (
            <div 
              key={node.id}
              className="absolute pointer-events-auto will-change-transform"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                zIndex: isHit ? 50 : 10 + Math.floor(pos.y), 
              }}
            >
              <div 
                className={`
                  relative flex flex-col items-center justify-center
                  transition-all duration-500 ease-out
                  ${isHit 
                    ? 'scale-125 z-50' 
                    : 'scale-75 md:scale-90 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-100'
                  }
                `}
              >
                {/* Node Container */}
                <div className={`
                   w-16 h-16 md:w-20 md:h-20 p-2 rounded-lg border backdrop-blur-sm
                   transition-all duration-500
                   ${isHit 
                     ? 'bg-black/90 border-oni-cyan shadow-[0_0_30px_rgba(0,240,255,0.6)]' 
                     : 'bg-black/20 border-white/5'
                   }
                `}>
                   {node.component}
                </div>

                {/* Label */}
                <div className={`
                  absolute -bottom-6 left-1/2 -translate-x-1/2 
                  px-2 py-0.5 rounded text-[8px] font-bold tracking-widest whitespace-nowrap
                  transition-all duration-500 border
                  ${isHit
                    ? 'bg-oni-cyan text-black border-oni-cyan opacity-100 translate-y-0'
                    : 'bg-black/80 text-gray-400 border-white/20 opacity-0 -translate-y-2 group-hover:opacity-100'
                  }
                `}>
                  {node.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};