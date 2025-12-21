import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
           <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-serif font-bold text-white mb-4 tracking-widest">
                ONISAKI
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Empowering businesses through future-proof digital solutions.
              </p>
           </div>
           
           <div className="col-span-1">
             <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
             <ul className="text-gray-500 text-xs space-y-2">
               <li className="hover:text-oni-cyan cursor-pointer transition-colors">WEB Development</li>
               <li className="hover:text-oni-cyan cursor-pointer transition-colors">EC Construction</li>
               <li className="hover:text-oni-cyan cursor-pointer transition-colors">UI/UX Design</li>
             </ul>
           </div>

           <div className="col-span-1">
             <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
             <ul className="text-gray-500 text-xs space-y-2">
               <li className="hover:text-oni-cyan cursor-pointer transition-colors">About Us</li>
               <li className="hover:text-oni-cyan cursor-pointer transition-colors">Careers</li>
               <li className="hover:text-oni-cyan cursor-pointer transition-colors">Privacy Policy</li>
               <li>
                  <Link to="/legal" className="hover:text-oni-cyan transition-colors">
                    特定商取引法に基づく表記
                  </Link>
               </li>
             </ul>
           </div>

           <div className="col-span-1">
             <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Office</h4>
             <p className="text-gray-500 text-xs leading-relaxed">
               104-0061<br/>
               東京都中央区銀座１-２２-１１<br/>
               銀座大竹ビジデンス２Ｆ
             </p>
           </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <div className="text-gray-700 text-[10px]">
            © {new Date().getFullYear()} Onisaki Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};