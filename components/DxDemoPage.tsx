import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, GitMerge, FileCheck, Database, RefreshCw, ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const DxDemoPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isProcessing, setIsProcessing] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const runAutomation = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setCompletedSteps([]);

    let step = 1;
    const interval = setInterval(() => {
       setCompletedSteps(prev => [...prev, step]);
       step++;
       if (step > 4) {
         clearInterval(interval);
         setIsProcessing(false);
       }
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="mb-12">
            <Link to="/" state={{ targetSection: 'services' }} className="inline-flex items-center gap-2 text-oni-cyan hover:text-white transition-colors text-sm font-bold tracking-widest mb-6 group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              BACK TO SERVICES
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-2">
              DX & Automation
            </h1>
            <h2 className="text-sm md:text-base text-oni-purple font-mono font-bold tracking-widest">
              BUSINESS PROCESS OPTIMIZATION
            </h2>
          </div>
        </Reveal>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
           <Reveal width="100%">
              <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5 relative opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 <h3 className="text-red-400 font-bold mb-4 uppercase tracking-wider">Before: Manual Legacy Flow</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-500">
                       <div className="w-10 h-10 rounded border border-gray-600 flex items-center justify-center"><FileCheck size={18} /></div>
                       <div className="h-0.5 flex-1 bg-gray-700"></div>
                       <div className="w-10 h-10 rounded border border-gray-600 flex items-center justify-center"><Database size={18} /></div>
                    </div>
                    <div className="text-xs text-red-400 font-mono border-l-2 border-red-500/30 pl-3">
                       <p>! High error rate (12%)</p>
                       <p>! Processing time: 3-5 days</p>
                       <p>! Manual data entry required</p>
                    </div>
                 </div>
              </div>
           </Reveal>

           <Reveal width="100%" delay={0.2}>
              <div className="p-6 rounded-2xl border border-oni-cyan/30 bg-oni-cyan/5 relative shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                 <h3 className="text-oni-cyan font-bold mb-4 uppercase tracking-wider flex items-center gap-2">
                    After: Automated Workflow <span className="text-[10px] bg-oni-cyan text-black px-2 rounded">LIVE</span>
                 </h3>
                 
                 {/* Interactive Automation Visualizer */}
                 <div className="relative py-8">
                    <div className="flex justify-between items-center relative z-10">
                       <NodeStep icon={<FileCheck />} label="Input" active={completedSteps.includes(1)} />
                       <Arrow active={completedSteps.includes(1)} />
                       <NodeStep icon={<RefreshCw className={completedSteps.includes(2) ? 'animate-spin' : ''} />} label="Process" active={completedSteps.includes(2)} />
                       <Arrow active={completedSteps.includes(2)} />
                       <NodeStep icon={<GitMerge />} label="Merge" active={completedSteps.includes(3)} />
                       <Arrow active={completedSteps.includes(3)} />
                       <NodeStep icon={<Database />} label="Store" active={completedSteps.includes(4)} />
                    </div>
                    
                    {/* Connection Line Bg */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-0 -translate-y-8 md:-translate-y-6"></div>
                 </div>

                 <div className="mt-6 flex justify-between items-end">
                    <div className="text-xs text-green-400 font-mono border-l-2 border-green-500/30 pl-3">
                       <p>✓ Error rate: 0.01%</p>
                       <p>✓ Processing time: 0.5 sec</p>
                       <p>✓ Fully automated</p>
                    </div>
                    <button 
                      onClick={runAutomation}
                      disabled={isProcessing}
                      className="px-6 py-2 bg-oni-cyan text-black font-bold text-sm rounded hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                       {isProcessing ? 'OPTIMIZING...' : 'RUN DEMO'}
                    </button>
                 </div>
              </div>
           </Reveal>
        </div>

      </div>
    </div>
  );
};

const NodeStep = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center gap-2 transition-all duration-300 ${active ? 'text-oni-cyan scale-110' : 'text-gray-600'}`}>
     <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center bg-black transition-colors ${active ? 'border-oni-cyan bg-oni-cyan/10 shadow-[0_0_15px_rgba(0,240,255,0.5)]' : 'border-gray-700'}`}>
        {icon}
     </div>
     <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
  </div>
);

const Arrow = ({ active }: any) => (
  <div className={`flex-1 h-0.5 mx-2 transition-colors duration-500 ${active ? 'bg-oni-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]' : 'bg-gray-800'}`}></div>
);