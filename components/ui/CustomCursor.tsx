import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Physics state
  const mouse = useRef({ x: -100, y: -100 }); // Initialize off-screen
  const pos = useRef({ x: -100, y: -100 });
  const speed = 0.15; // Lag factor (lower = smoother/slower, higher = faster/stiffer)

  useEffect(() => {
    // 1. Check if device has a fine pointer (mouse)
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Check clickable targets for hover state
      const target = e.target as HTMLElement;
      // We check recursively up the tree for buttons or links
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.onclick !== null;
        
      setIsHovering(!!isClickable);
    };

    const animate = () => {
      // Linear Interpolation (Lerp) for smooth movement
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      
      pos.current.x += dx * speed;
      pos.current.y += dy * speed;

      if (cursorRef.current) {
        // Center the 32px (w-8) cursor: offset by 16px
        cursorRef.current.style.transform = `translate3d(${pos.current.x - 16}px, ${pos.current.y - 16}px, 0)`;
      }
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Don't render on mobile to avoid covering content
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
    >
      {/* 
        Cursor Container 
        Size: w-8 h-8 (32px)
      */}
      <div className={`relative flex items-center justify-center w-8 h-8 transition-transform duration-300 ${isHovering ? 'scale-150' : 'scale-100'}`}>
        
        {/* Outer Ring (Cyan) - Spins clockwise */}
        <div className={`absolute w-full h-full rounded-full border-[2px] border-t-oni-cyan border-r-oni-cyan border-b-transparent border-l-transparent opacity-90 shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all duration-500 ${isHovering ? 'animate-[spin_1s_linear_infinite] border-t-oni-cyan border-r-oni-cyan' : 'animate-[spin_3s_linear_infinite]'}`}></div>

        {/* Inner Ring (Magenta) - Spins counter-clockwise */}
        <div className={`absolute w-5 h-5 rounded-full border-[2px] border-t-transparent border-r-transparent border-b-oni-magenta border-l-oni-magenta opacity-90 transition-all duration-500 ${isHovering ? 'animate-[spin_1s_linear_infinite_reverse]' : 'animate-[spin_4s_linear_infinite_reverse]'}`}></div>

        {/* Core (White/Purple) - Pulses */}
        <div className={`w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-colors duration-300 ${isHovering ? 'bg-oni-purple scale-125' : 'animate-pulse'}`}></div>

      </div>
    </div>
  );
};
