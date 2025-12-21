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


      {/* --- CENTRAL CORE --- */}
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
         
         <div className="relative w-24 h-24 md:w-36 md:h-36 bg-black/80 dark:bg-[#0b0c15]/90 backdrop-blur-xl rounded-full border border-oni-cyan/30 shadow-[0_0_60px_rgba(0,240,255,0.2)] flex flex-col items-center justify-center z-20 overflow-hidden">
            
            {/* Background Texture inside Core */}
            <div className="absolute inset-0 opacity-30">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.4)_0%,transparent_70%)] animate-pulse"></div>
            </div>

            {/* Floating Text Container */}
            {/* Added custom float animation via style since Tailwind animate-bounce is too harsh */}
            <div className="relative z-10 text-center animate-[float_6s_ease-in-out_infinite]">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                ONISAKI
                </h3>
                <p className="text-oni-cyan text-[9px] md:text-[10px] font-bold tracking-[0.3em] font-sans mt-1 opacity-80">
                株式会社
                </p>
            </div>
         </div>
         
         {/* Outer Slow Rings */}
         <div className="absolute inset-[-10px] border border-oni-cyan/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
         <div className="absolute inset-[-20px] border border-oni-magenta/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
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
      
      {/* Custom Keyframe for Float */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-3px) translateX(2px); }
          50% { transform: translateY(0) translateX(0); }
          75% { transform: translateY(3px) translateX(-2px); }
        }
      `}</style>
    </div>
  );
};
