import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Palette, Type, Layers, Layout, MousePointer, Command } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';

export const UiUxDemoPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Link to="/" state={{ targetSection: 'services' }} className="inline-flex items-center gap-2 text-oni-cyan hover:text-white transition-colors text-sm font-bold tracking-widest mb-6 group">
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                BACK TO SERVICES
              </Link>
              
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                UI/UX Design System
              </h1>
              <h2 className="text-sm md:text-base text-oni-purple font-mono font-bold tracking-widest">
                DIGITAL AESTHETICS & INTERACTION
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Color Palette Section */}
        <Reveal width="100%" delay={0.1}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-8 rounded-2xl border border-black/5 dark:border-white/10">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <Palette className="text-oni-cyan" /> Color System
                 </h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-16 h-16 rounded-xl bg-oni-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)]"></div>
                       <div>
                          <p className="font-mono font-bold">CYAN_NEON</p>
                          <p className="text-xs text-gray-500">#00F0FF - Primary Action</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-16 h-16 rounded-xl bg-oni-magenta shadow-[0_0_15px_rgba(255,0,170,0.4)]"></div>
                       <div>
                          <p className="font-mono font-bold">MAGENTA_VIBE</p>
                          <p className="text-xs text-gray-500">#FF00AA - Accent / Alert</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-16 h-16 rounded-xl bg-oni-purple shadow-[0_0_15px_rgba(189,0,255,0.4)]"></div>
                       <div>
                          <p className="font-mono font-bold">PURPLE_DEEP</p>
                          <p className="text-xs text-gray-500">#BD00FF - Secondary</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-8 rounded-2xl border border-black/5 dark:border-white/10">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <Type className="text-oni-magenta" /> Typography
                 </h3>
                 <div className="space-y-6">
                    <div>
                       <p className="text-4xl font-serif font-bold mb-2">Cinzel Decorative</p>
                       <p className="text-sm text-gray-500">Headings & Hero Text</p>
                    </div>
                    <div>
                       <p className="text-2xl font-sans tracking-widest font-bold mb-2">MONTSERRAT / SANS</p>
                       <p className="text-sm text-gray-500">UI Elements & Labels</p>
                    </div>
                    <div>
                       <p className="text-base font-sans leading-relaxed text-gray-400">
                          "Design is not just what it looks like and feels like. Design is how it works."
                       </p>
                       <p className="text-sm text-gray-500 mt-2">Body Text (Regular 400)</p>
                    </div>
                 </div>
              </div>
           </div>
        </Reveal>

        {/* Interactive Components Section */}
        <Reveal width="100%" delay={0.2}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
             <Layers className="text-oni-purple" /> Interactive Components
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card Variant 1 */}
             <TiltCard className="h-full">
                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-white/10 h-full flex flex-col items-center justify-center text-center gap-4 group hover:border-oni-cyan/50 transition-all">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-oni-cyan/20 transition-colors">
                      <Layout size={24} className="group-hover:text-oni-cyan transition-colors" />
                   </div>
                   <h4 className="font-bold">Glassmorphism Card</h4>
                   <p className="text-sm text-gray-400">Background blur with subtle border gradients.</p>
                   <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-bold tracking-widest mt-2">
                      HOVER ME
                   </button>
                </div>
             </TiltCard>

             {/* Card Variant 2 */}
             <div className="bg-white dark:bg-gray-100 text-black p-6 rounded-2xl h-full flex flex-col justify-between shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-oni-magenta/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div>
                   <h4 className="font-bold text-xl mb-2">Neomorphism Light</h4>
                   <p className="text-sm text-gray-600">Clean, soft shadows and high contrast for clarity.</p>
                </div>
                <div className="flex gap-2 mt-6">
                   <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                   <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                   <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">+</div>
                </div>
             </div>

             {/* Card Variant 3 */}
             <div className="bg-black border border-oni-cyan/30 p-1 rounded-2xl h-full relative group">
                <div className="absolute inset-0 bg-oni-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="bg-black h-full rounded-xl p-6 relative z-10 flex flex-col items-center justify-center border border-oni-cyan/30 group-hover:border-oni-cyan transition-colors">
                   <MousePointer className="text-oni-cyan mb-4 animate-bounce" />
                   <h4 className="font-bold text-oni-cyan tracking-widest">CYBER_PUNK</h4>
                   <p className="text-xs text-gray-400 mt-2 text-center">Neon glows and sharp borders.</p>
                </div>
             </div>
          </div>
        </Reveal>

        {/* Tab Interface Demo */}
        <Reveal width="100%" delay={0.3}>
           <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
                 <Command size={18} className="text-gray-400" />
                 <span className="text-xs font-mono text-gray-400 uppercase">Tab Interface Component</span>
              </div>
              
              <div className="flex gap-4 mb-8">
                 {['Dashboard', 'Settings', 'Profile'].map((tab, i) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(i)}
                      className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 relative overflow-hidden group ${activeTab === i ? 'text-black bg-oni-cyan' : 'text-gray-400 hover:text-white bg-white/5'}`}
                    >
                       {tab}
                    </button>
                 ))}
              </div>

              <div className="bg-black/40 rounded-xl p-8 min-h-[200px] flex items-center justify-center border border-white/5">
                 <div className="text-center animate-[fadeIn_0.5s_ease-out]">
                    <h2 className="text-2xl font-bold mb-2">
                       {activeTab === 0 && "Welcome to Dashboard"}
                       {activeTab === 1 && "System Configuration"}
                       {activeTab === 2 && "User Profile"}
                    </h2>
                    <p className="text-gray-500">
                       {activeTab === 0 && "Overview of your application metrics."}
                       {activeTab === 1 && "Manage your preferences and alerts."}
                       {activeTab === 2 && "Update your personal information."}
                    </p>
                 </div>
              </div>
           </div>
        </Reveal>

      </div>
    </div>
  );
};