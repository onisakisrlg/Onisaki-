import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Sword, Shield, Zap, Crosshair, Play } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const CHARACTERS = [
  { 
    id: 1, 
    name: "CYBER SAMURAI", 
    class: "Assault",
    stats: { atk: 90, def: 40, spd: 80 },
    color: "cyan",
    desc: "A master of high-frequency blades and rapid strikes."
  },
  { 
    id: 2, 
    name: "HEAVY MECH", 
    class: "Tank",
    stats: { atk: 60, def: 95, spd: 30 },
    color: "purple",
    desc: "Heavily armored unit capable of withstanding massive damage."
  },
  { 
    id: 3, 
    name: "VOID SNIPER", 
    class: "Recon",
    stats: { atk: 95, def: 20, spd: 70 },
    color: "magenta",
    desc: "Precision specialist utilizing cloaking technology."
  }
];

export const GameDemoPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedChar, setSelectedChar] = useState(CHARACTERS[0]);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative z-10 overflow-hidden">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
        
        {/* Header */}
        <Reveal>
          <div className="mb-8">
            <Link to="/" state={{ targetSection: 'services' }} className="inline-flex items-center gap-2 text-oni-cyan hover:text-white transition-colors text-sm font-bold tracking-widest mb-6 group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              EXIT GAME
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2 italic tracking-tighter">
              CHOOSE YOUR HERO
            </h1>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 items-center flex-1">
           
           {/* Character Visual */}
           <div className="flex-1 w-full flex justify-center items-center relative min-h-[400px]">
              <div className={`absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-${selectedChar.color === 'cyan' ? 'oni-cyan' : selectedChar.color === 'purple' ? 'oni-purple' : 'oni-magenta'}/20 rounded-full blur-[100px] transition-colors duration-500`}></div>
              
              {/* Fake 3D Model Placeholder */}
              <div className="relative z-10 animate-[float_4s_ease-in-out_infinite]">
                 {selectedChar.id === 1 && <Sword size={200} className="text-oni-cyan drop-shadow-[0_0_30px_rgba(0,240,255,0.8)]" />}
                 {selectedChar.id === 2 && <Shield size={200} className="text-oni-purple drop-shadow-[0_0_30px_rgba(189,0,255,0.8)]" />}
                 {selectedChar.id === 3 && <Crosshair size={200} className="text-oni-magenta drop-shadow-[0_0_30px_rgba(255,0,170,0.8)]" />}
              </div>
              
              {/* Floor Ring */}
              <div className="absolute bottom-0 w-[200px] h-[60px] border-2 border-white/20 rounded-[100%] animate-[spin_10s_linear_infinite]"></div>
           </div>

           {/* Stats & Selection */}
           <div className="flex-1 w-full space-y-8">
              
              {/* Info Card */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 p-8 rounded-xl relative overflow-hidden">
                 <div className={`absolute top-0 left-0 w-1 h-full bg-${selectedChar.color === 'cyan' ? 'oni-cyan' : selectedChar.color === 'purple' ? 'oni-purple' : 'oni-magenta'} transition-colors duration-300`}></div>
                 
                 <h2 className="text-3xl font-bold italic mb-1 text-white">{selectedChar.name}</h2>
                 <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Class: {selectedChar.class}</p>
                 <p className="text-gray-300 mb-8 leading-relaxed">{selectedChar.desc}</p>

                 {/* Stats Bars */}
                 <div className="space-y-4 font-mono text-xs">
                    <div>
                       <div className="flex justify-between mb-1 text-gray-400"><span>ATTACK</span><span>{selectedChar.stats.atk}</span></div>
                       <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 transition-all duration-500" style={{ width: `${selectedChar.stats.atk}%` }}></div>
                       </div>
                    </div>
                    <div>
                       <div className="flex justify-between mb-1 text-gray-400"><span>DEFENSE</span><span>{selectedChar.stats.def}</span></div>
                       <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${selectedChar.stats.def}%` }}></div>
                       </div>
                    </div>
                    <div>
                       <div className="flex justify-between mb-1 text-gray-400"><span>SPEED</span><span>{selectedChar.stats.spd}</span></div>
                       <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 transition-all duration-500" style={{ width: `${selectedChar.stats.spd}%` }}></div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Selector */}
              <div className="grid grid-cols-3 gap-4">
                 {CHARACTERS.map(char => (
                    <button
                      key={char.id}
                      onClick={() => setSelectedChar(char)}
                      className={`p-4 border rounded-lg transition-all duration-300 flex flex-col items-center gap-2 group ${selectedChar.id === char.id ? 'bg-white/10 border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'bg-black/40 border-white/10 hover:border-white/50'}`}
                    >
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center ${char.id === 1 ? 'bg-oni-cyan/20 text-oni-cyan' : char.id === 2 ? 'bg-oni-purple/20 text-oni-purple' : 'bg-oni-magenta/20 text-oni-magenta'}`}>
                          {char.id === 1 && <Sword size={14} />}
                          {char.id === 2 && <Shield size={14} />}
                          {char.id === 3 && <Crosshair size={14} />}
                       </div>
                       <span className="text-[10px] font-bold tracking-widest text-gray-400 group-hover:text-white">{char.class}</span>
                    </button>
                 ))}
              </div>

              {/* Start Button */}
              <button className="w-full py-4 bg-oni-cyan text-black font-bold text-xl uppercase tracking-widest hover:bg-white transition-colors clip-path-polygon flex items-center justify-center gap-2 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">START MISSION <Play size={20} fill="black" /></span>
                  <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

           </div>

        </div>

      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};