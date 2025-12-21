import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Activity, Server, Globe, Shield, Wifi, Cpu, Database, Zap } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';

export const WebDemoPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [logs, setLogs] = useState<string[]>([]);
  
  // Simulation Effect
  useEffect(() => {
    const messages = [
      "Connecting to secure server...",
      "Handshake successful.",
      "Fetching real-time analytics...",
      "Optimizing database queries...",
      "Deploying edge functions...",
      "Synchronizing global nodes...",
      "Updating UI components...",
      "System healthy."
    ];
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < messages.length) {
        setLogs(prev => [...prev.slice(-4), `[${new Date().toLocaleTimeString()}] ${messages[i]}`]);
        i++;
      } else {
        // Random chatter after initial sequence
        if (Math.random() > 0.7) {
           const actions = ["Packet received", "Ping: 12ms", "Auto-scaling trigger", "Cache refreshed"];
           const randomAction = actions[Math.floor(Math.random() * actions.length)];
           setLogs(prev => [...prev.slice(-4), `[${new Date().toLocaleTimeString()}] ${randomAction}`]);
        }
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Link to="/" state={{ targetSection: 'services' }} className="inline-flex items-center gap-2 text-oni-cyan hover:text-white transition-colors text-sm font-bold tracking-widest mb-6 group">
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                BACK TO SERVICES
              </Link>
              
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                Web App Demo
              </h1>
              <h2 className="text-sm md:text-base text-oni-purple font-mono font-bold tracking-widest">
                INTERACTIVE DASHBOARD PROTOTYPE // v.1.0.4
              </h2>
            </div>
            
            <div className="flex gap-2 text-xs font-mono text-gray-500">
               <span className="animate-pulse text-green-500">●</span> SYSTEM ONLINE
            </div>
          </div>
        </Reveal>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           
           {/* Top Stats Row */}
           <div className="col-span-1 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <StatCard label="ACTIVE USERS" value="14,205" trend="+12%" icon={<Globe size={18} />} color="cyan" />
              <StatCard label="SERVER LOAD" value="42%" trend="-5%" icon={<Cpu size={18} />} color="purple" />
              <StatCard label="AVG. RESPONSE" value="24ms" trend="FAST" icon={<Zap size={18} />} color="magenta" />
              <StatCard label="SECURITY" value="SECURE" trend="LOCKED" icon={<Shield size={18} />} color="green" />
           </div>

           {/* Main Chart Area */}
           <div className="col-span-1 md:col-span-3">
             <Reveal width="100%" delay={0.2}>
               <TiltCard className="h-full">
                 <div className="h-full min-h-[400px] bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-6 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col relative overflow-hidden">
                    <div className="flex justify-between items-center mb-6">
                       <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                         <Activity size={18} className="text-oni-cyan" />
                         Real-Time Traffic Analysis
                       </h3>
                       <div className="flex gap-2">
                          <span className="w-2 h-2 rounded-full bg-oni-cyan animate-pulse"></span>
                          <span className="w-2 h-2 rounded-full bg-oni-magenta animate-pulse delay-75"></span>
                       </div>
                    </div>

                    {/* Fake Chart Visualization */}
                    <div className="flex-1 relative w-full h-full flex items-end gap-1 md:gap-2 opacity-80">
                       {[...Array(30)].map((_, i) => {
                          const height = Math.floor(Math.random() * 60) + 20;
                          return (
                             <div 
                               key={i} 
                               className="flex-1 bg-gradient-to-t from-oni-cyan/20 to-oni-cyan rounded-t-sm animate-[pulse_3s_ease-in-out_infinite]"
                               style={{ 
                                 height: `${height}%`,
                                 animationDelay: `${i * 0.1}s` 
                               }}
                             />
                          )
                       })}
                       
                       {/* Overlay Line Graph Effect */}
                       <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                          <path d="M0,200 Q50,150 100,180 T200,120 T300,160 T400,100 T500,140 T600,80 T700,120 T800,100 L800,400 L0,400 Z" fill="url(#grad1)" opacity="0.2" />
                          <path d="M0,200 Q50,150 100,180 T200,120 T300,160 T400,100 T500,140 T600,80 T700,120 T800,100" fill="none" stroke="#00f0ff" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                          <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                       </svg>
                    </div>

                    {/* Grid Lines */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                 </div>
               </TiltCard>
             </Reveal>
           </div>

           {/* Sidebar: Server Status & Logs */}
           <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              
              {/* Server Nodes */}
              <Reveal width="100%" delay={0.3}>
                <div className="bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-6 rounded-2xl border border-black/5 dark:border-white/10">
                   <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-xs uppercase tracking-widest">
                     <Server size={14} className="text-oni-purple" />
                     Server Clusters
                   </h3>
                   <div className="space-y-4">
                      <ServerRow name="Tokyo (AP-NE-1)" status="active" load={45} />
                      <ServerRow name="Osaka (AP-NE-3)" status="active" load={23} />
                      <ServerRow name="Singapore (AP-SE-1)" status="warning" load={88} />
                   </div>
                </div>
              </Reveal>

              {/* System Logs */}
              <Reveal width="100%" delay={0.4}>
                <div className="flex-1 bg-black/90 p-4 rounded-xl border border-oni-cyan/30 font-mono text-[10px] md:text-xs text-green-400 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] min-h-[200px] flex flex-col">
                   <div className="flex justify-between items-center mb-2 border-b border-green-900/50 pb-2">
                      <span className="font-bold">SYSTEM LOG</span>
                      <Wifi size={12} className="animate-pulse" />
                   </div>
                   <div className="flex-1 flex flex-col justify-end gap-1">
                      {logs.map((log, i) => (
                        <div key={i} className="animate-[fadeIn_0.3s_ease-out]">
                           <span className="opacity-50 mr-2">{'>'}</span>{log}
                        </div>
                      ))}
                      <div className="animate-pulse">_</div>
                   </div>
                </div>
              </Reveal>

           </div>
        </div>

      </div>
    </div>
  );
};

// --- Sub-components ---

const StatCard = ({ label, value, trend, icon, color }: any) => {
  const colorClass = {
    cyan: 'text-oni-cyan border-oni-cyan/30',
    purple: 'text-oni-purple border-oni-purple/30',
    magenta: 'text-oni-magenta border-oni-magenta/30',
    green: 'text-green-400 border-green-400/30',
  }[color as string] || 'text-white border-white/20';

  return (
    <Reveal width="100%">
      <div className={`bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-4 md:p-6 rounded-xl border border-black/5 dark:border-white/10 group hover:border-${color}-500/50 transition-colors`}>
        <div className="flex justify-between items-start mb-2">
           <div className={`p-2 rounded-lg bg-black/5 dark:bg-white/5 ${colorClass} border`}>
              {icon}
           </div>
           <span className={`text-xs font-bold ${trend.includes('+') ? 'text-green-400' : trend.includes('-') ? 'text-green-400' : 'text-oni-cyan'}`}>
             {trend}
           </span>
        </div>
        <div className="mt-2">
           <h4 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{label}</h4>
           <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-mono">{value}</p>
        </div>
      </div>
    </Reveal>
  );
};

const ServerRow = ({ name, status, load }: any) => (
  <div className="flex items-center justify-between text-xs">
     <div className="flex items-center gap-2">
       <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-500 shadow-[0_0_5px_rgba(0,255,0,0.5)]' : 'bg-yellow-500 animate-pulse'}`}></div>
       <span className="text-gray-300">{name}</span>
     </div>
     <div className="flex items-center gap-2 w-24">
       <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
         <div 
           className={`h-full rounded-full ${load > 80 ? 'bg-oni-magenta' : 'bg-oni-cyan'}`} 
           style={{ width: `${load}%` }}
         ></div>
       </div>
       <span className="font-mono w-6 text-right text-gray-500">{load}%</span>
     </div>
  </div>
);