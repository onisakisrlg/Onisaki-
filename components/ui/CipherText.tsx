import React, { useState, useEffect } from 'react';

interface CipherTextProps {
  text: string;
  className?: string;
  hover?: boolean;
  delay?: number; // Added delay prop in milliseconds
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export const CipherText: React.FC<CipherTextProps> = ({ text, className = "", hover = false, delay = 0 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 2; 
    }, 30);
  };

  useEffect(() => {
    // Wait for the specified delay before starting the initial scramble
    const timeoutId = setTimeout(() => {
      scramble();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return (
    <span 
      className={`inline-block font-mono ${className}`}
      onMouseEnter={hover ? scramble : undefined}
    >
      {displayText}
    </span>
  );
};