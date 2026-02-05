import React from 'react';
import { Section } from '../types';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';
import { ExternalLink, Tag, Globe, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: '株式会社天馬',
    category: 'Corporate Website',
    description: 'A modern corporate website built with Next.js. Features responsive design, smooth animations, and optimized performance for a logistics and trading enterprise.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop', // Placeholder image - replace with actual screenshot
    link: 'https://tianma.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion']
  },
  // Add more projects here in the future
];

export const Works: React.FC = () => {
  return (
    <section id={Section.WORKS} className="py-16 md:py-24 bg-oni-light-bg dark:bg-oni-bg relative z-10 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-oni-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-oni-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Reveal width="100%">
            <h2 className="flex flex-col items-center justify-center gap-2">
              <span className="text-3xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white transition-colors duration-500 tracking-wide">
                Selected Works
              </span>
              <span className="text-lg md:text-2xl text-oni-purple font-bold tracking-[0.3em] font-sans mt-2 relative">
                <span className="absolute inset-0 blur-md bg-oni-purple/20 rounded-full"></span>
                <span className="relative">制作実績</span>
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-oni-cyan to-oni-purple mx-auto rounded-full mt-6"></div>
          </Reveal>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <TiltCard className="h-full">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block h-full bg-white/80 dark:bg-oni-card/80 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden hover:border-oni-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-48 md:h-56 overflow-hidden border-b border-black/5 dark:border-white/5">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-oni-cyan text-[10px] font-bold uppercase tracking-widest rounded border border-oni-cyan/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Link Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="flex items-center gap-2 text-white font-bold tracking-widest uppercase border border-white/30 px-6 py-2 rounded-full backdrop-blur-md">
                        Visit Site <ExternalLink size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl md:text-2xl font-bold font-serif text-gray-900 dark:text-white group-hover:text-oni-cyan transition-colors">
                        {project.title}
                      </h3>
                      <Globe size={18} className="text-gray-400 group-hover:text-oni-cyan transition-colors" />
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-2 py-1 rounded border border-transparent group-hover:border-white/10 transition-colors">
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-end text-oni-purple text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      View Project <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        
        {/* Placeholder for future expansion */}
        <div className="mt-16 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
               More projects coming soon
            </p>
        </div>

      </div>
    </section>
  );
};
