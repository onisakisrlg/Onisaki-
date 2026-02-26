import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = 'fit-content', delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Calculate total animation time: transition duration (0.9s) + delay
          // We add a small buffer to be safe before enabling overflow
          const animationDuration = 900; 
          const delayMs = delay * 1000;
          
          setTimeout(() => {
            setIsAnimationComplete(true);
          }, animationDuration + delayMs + 100);

          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 } // Trigger when 15% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    switch (direction) {
      case 'up': return 'translateY(75px)';
      case 'down': return 'translateY(-75px)';
      case 'left': return 'translateX(75px)';
      case 'right': return 'translateX(-75px)';
      default: return 'translateY(75px)';
    }
  };

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        width, 
        position: 'relative', 
        // Switch to 'visible' after animation to allow child hover effects (like translateY) to overflow bounds
        overflow: isAnimationComplete ? 'visible' : 'hidden' 
      }}
    >
      <div
        style={{
          transform: getTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};