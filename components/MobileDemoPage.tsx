import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Home, Bell, User, Heart, MessageSquare, PlusCircle } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const MobileDemoPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <Link to="/" state={{ targetSection: 'services' }} className="inline-flex items-center gap-2 text-oni-cyan hover:text-white transition-colors text-sm font-bold tracking-widest mb-6 group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              BACK TO SERVICES
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-2">
              Mobile App Development
            </h1>
            <h2 className="text-sm md:text-base text-oni-purple font-mono font-bold tracking-widest">
              iOS & ANDROID NATIVE / CROSS-PLATFORM
            </h2>
          </div>
        </Reveal>

        {/* Phone Frame Simulator */}
        <Reveal delay={0.2}>
           <div className="relative w-[320px] h-[640px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-xl z-20"></div>

              {/* Status Bar Mock */}
              <div className="absolute top-2 w-full px-6 flex justify-between text-[10px] text-white font-bold z-10">
                 <span>9:41</span>
                 <div className="flex gap-1">
                    <span>5G</span>
                    <span>100%</span>
                 </div>
              </div>

              {/* App Content */}
              <div className="w-full h-full bg-white dark:bg-black pt-12 pb-20 overflow-y-auto scrollbar-hide relative">
                 
                 {/* HOME TAB */}
                 {activeTab === 'home' && (
                    <div className="px-5 animate-[fadeIn_0.3s_ease-out]">
                       <div className="flex justify-between items-center mb-6">
                          <h3 className="text-2xl font-bold text-black dark:text-white">Discover</h3>
                          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                       </div>
                       
                       {/* Stories */}
                       <div className="flex gap-4 overflow-x-auto pb-4 mb-4 scrollbar-hide">
                          {[...Array(5)].map((_, i) => (
                             <div key={i} className="flex flex-col items-center gap-1 min-w-[60px]">
                                <div className="w-14 h-14 rounded-full border-2 border-oni-magenta p-0.5">
                                   <div className="w-full h-full bg-gray-300 rounded-full"></div>
                                </div>
                                <span className="text-[10px] text-gray-500">User {i+1}</span>
                             </div>
                          ))}
                       </div>

                       {/* Feed Item */}
                       <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 mb-4">
                          <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-xl mb-3 relative overflow-hidden group">
                             <div className="absolute inset-0 bg-gradient-to-tr from-oni-cyan/20 to-oni-purple/20"></div>
                          </div>
                          <div className="flex justify-between items-start">
                             <div>
                                <h4 className="font-bold text-sm dark:text-white">Cyber Sunset</h4>
                                <p className="text-[10px] text-gray-500">Tokyo, Japan</p>
                             </div>
                             <Heart size={18} className="text-oni-magenta" />
                          </div>
                       </div>
                       <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 mb-4">
                          <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-xl mb-3 relative overflow-hidden group">
                             <div className="absolute inset-0 bg-gradient-to-tr from-oni-magenta/20 to-orange-500/20"></div>
                          </div>
                       </div>
                    </div>
                 )}

                 {/* NOTIFICATIONS TAB */}
                 {activeTab === 'bell' && (
                    <div className="px-5 pt-2 animate-[fadeIn_0.3s_ease-out]">
                       <h3 className="text-xl font-bold mb-6 dark:text-white">Notifications</h3>
                       {[...Array(6)].map((_, i) => (
                          <div key={i} className="flex items-center gap-3 mb-4 border-b border-gray-100 dark:border-gray-800 pb-3">
                             <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                             <div>
                                <p className="text-xs dark:text-white"><span className="font-bold">User {i+42}</span> liked your post.</p>
                                <p className="text-[10px] text-gray-400">2 min ago</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 )}

                 {/* PROFILE TAB */}
                 {activeTab === 'user' && (
                    <div className="px-5 pt-4 flex flex-col items-center animate-[fadeIn_0.3s_ease-out]">
                       <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-4 border-oni-cyan"></div>
                       <h3 className="text-xl font-bold dark:text-white">Onisaki User</h3>
                       <p className="text-xs text-gray-500 mb-6">@onisaki_dev</p>
                       <div className="flex gap-8 mb-8 text-center">
                          <div><span className="block font-bold text-lg dark:text-white">2.5k</span><span className="text-[10px] text-gray-500">Posts</span></div>
                          <div><span className="block font-bold text-lg dark:text-white">48k</span><span className="text-[10px] text-gray-500">Followers</span></div>
                       </div>
                       <button className="w-full py-2 bg-oni-cyan text-black font-bold rounded-lg text-sm">Edit Profile</button>
                    </div>
                 )}

              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-0 w-full h-16 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 flex justify-around items-center px-2 z-20">
                 <button onClick={() => setActiveTab('home')} className={`p-2 rounded-xl transition-colors ${activeTab === 'home' ? 'text-oni-cyan bg-oni-cyan/10' : 'text-gray-400'}`}><Home size={22} /></button>
                 <button onClick={() => setActiveTab('bell')} className={`p-2 rounded-xl transition-colors ${activeTab === 'bell' ? 'text-oni-cyan bg-oni-cyan/10' : 'text-gray-400'}`}><Bell size={22} /></button>
                 <button className="p-3 bg-oni-cyan text-black rounded-full -translate-y-4 shadow-lg shadow-oni-cyan/30"><PlusCircle size={24} /></button>
                 <button className="p-2 text-gray-400"><MessageSquare size={22} /></button>
                 <button onClick={() => setActiveTab('user')} className={`p-2 rounded-xl transition-colors ${activeTab === 'user' ? 'text-oni-cyan bg-oni-cyan/10' : 'text-gray-400'}`}><User size={22} /></button>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black dark:bg-white rounded-full opacity-20 z-30"></div>
           </div>
        </Reveal>

      </div>
    </div>
  );
};