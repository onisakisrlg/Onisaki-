import React from 'react';
import { Mail } from 'lucide-react';

interface FixedContactButtonProps {
  onClick: () => void;
}

export const FixedContactButton: React.FC<FixedContactButtonProps> = ({ onClick }) => {
  return (
    <>
      {/* Mobile: Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-t border-white/10 p-4 md:hidden">
        <button 
          onClick={onClick}
          className="w-full bg-white text-black font-bold py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-gray-200 transition-colors"
        >
          <Mail size={20} />
          <span>お問い合わせ</span>
        </button>
      </div>

      {/* Desktop: Floating Action Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <button 
          onClick={onClick}
          className="bg-white text-black font-bold p-4 rounded-full shadow-lg hover:bg-gray-200 transition-transform hover:scale-105 flex items-center gap-2"
        >
          <Mail size={24} />
          <span className="pr-2">お問い合わせ</span>
        </button>
      </div>
    </>
  );
};
