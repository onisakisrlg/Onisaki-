import React, { useEffect, useRef } from 'react';

interface InteractiveBackgroundProps {
  theme?: 'dark' | 'light';
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ theme = 'dark' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Mouse tracking
    const mouse = { x: -1000, y: -1000 };

    // Particle configuration
    const particleCount = Math.min(Math.floor((width * height) / 12000), 120); 
    const connectionDistance = 160;
    const mouseDistance = 220;
    
    // Vibrant colors array
    const colors = ['rgba(0, 240, 255, ', 'rgba(255, 0, 170, ', 'rgba(189, 0, 255, '];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      colorBase: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8; 
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 1.5;
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          const attractionStrength = 0.04;
          
          this.vx += forceDirectionX * force * attractionStrength;
          this.vy += forceDirectionY * force * attractionStrength;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Dark Mode: Bright particles (opacity 0.8)
        // Light Mode: Darker/Colored particles to be visible on white (opacity 0.6)
        const alpha = theme === 'dark' ? '0.8)' : '0.6)';
        ctx.fillStyle = this.colorBase + alpha;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas based on theme
      // Note: The actual background color is handled by CSS, we just clear here.
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            
            // Adjust line opacity for themes
            const opacityFactor = theme === 'dark' ? 1 : 0.7;

            // Create gradient line between particles
            const gradient = ctx.createLinearGradient(particle.x, particle.y, p2.x, p2.y);
            gradient.addColorStop(0, particle.colorBase + ((1 - distance / connectionDistance) * opacityFactor) + ')');
            gradient.addColorStop(1, p2.colorBase + ((1 - distance / connectionDistance) * opacityFactor) + ')');
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseDistance) {
            ctx.beginPath();
            const mouseLineAlpha = theme === 'dark' ? 0.6 : 0.4;
            ctx.strokeStyle = particle.colorBase + ((1 - distance / mouseDistance) * mouseLineAlpha) + ')';
            ctx.lineWidth = 0.6;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    // Event Listeners
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [theme]); // Re-run effect when theme changes to update particle colors

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-500"
    />
  );
};