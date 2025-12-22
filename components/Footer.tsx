import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 md:py-12 border-t border-white/5 relative z-20 text-center md:text-left">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
           <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
              <div className="mb-6 scale-90 origin-center md:origin-left">
                <Logo className="w-12 h-12" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                Empowering businesses through future-proof digital solutions.
              </p>
           </div>
           
           <div className="col-span-1">
             <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
             <ul className="text-gray-500 text-xs space-y-2">
               <li>
                 <Link to="/web-demo" className="hover:text-oni-cyan transition-colors">
                   WEB開発
                 </Link>
               </li>
               <li>
                 <Link to="/ec-demo" className="hover:text-oni-cyan transition-colors">
                   EC構築
                 </Link>
               </li>
               <li>
                 <Link to="/ui-demo" className="hover:text-oni-cyan transition-colors">
                   UI/UXデザイン
                 </Link>
               </li>
               <li>
                 <Link to="/game-demo" className="hover:text-oni-cyan transition-colors">
                   ゲーム開発
                 </Link>
               </li>
               <li>
                 <Link to="/dx-demo" className="hover:text-oni-cyan transition-colors">
                   業務DX支援
                 </Link>
               </li>
               <li>
                 <Link to="/mobile-demo" className="hover:text-oni-cyan transition-colors">
                   アプリ開発
                 </Link>
               </li>
             </ul>
           </div>

           <div className="col-span-1">
             <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
             <ul className="text-gray-500 text-xs space-y-2">
               <li>
                  <Link to="/process" className="hover:text-oni-cyan transition-colors">
                    ご依頼の流れ
                  </Link>
               </li>
               <li className="hover:text-oni-cyan cursor-pointer transition-colors">Careers</li>
               <li>
                  <Link to="/legal" className="hover:text-oni-cyan transition-colors">
                    特定商取引法に基づく表記
                  </Link>
               </li>
               <li>
                  <Link to="/privacy" className="hover:text-oni-cyan transition-colors">
                    プライバシーポリシー
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