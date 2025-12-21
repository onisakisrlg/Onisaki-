import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, Search, Filter, Star, Plus, Cpu, Shirt, Zap, Box, Headphones, Monitor, Check } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';

// Mock Product Data
const PRODUCTS = [
  { id: 1, name: "Neural Link Headset", price: "¥128,000", category: "Electronics", icon: <Headphones className="w-16 h-16" />, color: "cyan", rating: 4.9 },
  { id: 2, name: "Cyber Punk Jacket", price: "¥45,000", category: "Apparel", icon: <Shirt className="w-16 h-16" />, color: "magenta", rating: 4.7 },
  { id: 3, name: "Quantum Processor", price: "¥250,000", category: "Components", icon: <Cpu className="w-16 h-16" />, color: "purple", rating: 5.0 },
  { id: 4, name: "Holo-Display v4", price: "¥89,500", category: "Electronics", icon: <Monitor className="w-16 h-16" />, color: "blue", rating: 4.5 },
  { id: 5, name: "Energy Cell Pack", price: "¥12,000", category: "Components", icon: <Zap className="w-16 h-16" />, color: "yellow", rating: 4.2 },
  { id: 6, name: "Tactical Gear Box", price: "¥18,900", category: "Gear", icon: <Box className="w-16 h-16" />, color: "green", rating: 4.8 },
];

const CATEGORIES = ["All", "Electronics", "Apparel", "Components", "Gear"];

export const EcDemoPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isAnimatingCart, setIsAnimatingCart] = useState(false);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setIsAnimatingCart(true);
    setTimeout(() => setIsAnimatingCart(false), 300);
  };

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <Reveal>
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Link to="/" state={{ targetSection: 'services' }} className="inline-flex items-center gap-2 text-oni-cyan hover:text-white transition-colors text-sm font-bold tracking-widest mb-6 group">
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                BACK TO SERVICES
              </Link>
              
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                EC Shop Demo
              </h1>
              <h2 className="text-sm md:text-base text-oni-magenta font-mono font-bold tracking-widest">
                NEXT-GEN E-COMMERCE PLATFORM
              </h2>
            </div>
            
            {/* Cart & Search */}
            <div className="flex items-center gap-4">
               <div className="relative group hidden md:block">
                  <input 
                    type="text" 
                    placeholder="Search product..." 
                    className="bg-black/10 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-oni-cyan w-48 transition-all focus:w-64 text-gray-800 dark:text-white"
                  />
                  <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
               </div>

               <div className={`relative p-3 rounded-full bg-oni-cyan/10 border border-oni-cyan/30 text-oni-cyan cursor-pointer hover:bg-oni-cyan/20 transition-all ${isAnimatingCart ? 'scale-110 bg-oni-cyan/30' : ''}`}>
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-oni-magenta text-white text-[10px] font-bold flex items-center justify-center rounded-full animate-[bounce_0.5s]">
                      {cartCount}
                    </div>
                  )}
               </div>
            </div>
          </div>
        </Reveal>

        {/* Filter Bar */}
        <Reveal width="100%" delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2 text-gray-500 mr-4">
               <Filter size={16} />
               <span className="text-xs uppercase tracking-widest font-bold">Filter:</span>
            </div>
            {CATEGORIES.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                   activeCategory === cat 
                   ? 'bg-oni-cyan text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
                   : 'bg-black/5 dark:bg-white/5 text-gray-500 hover:text-white hover:bg-white/10'
                 }`}
               >
                 {cat}
               </button>
            ))}
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredProducts.map((product, index) => (
             <Reveal key={product.id} delay={index * 0.1}>
                <ProductCard product={product} onAdd={handleAddToCart} />
             </Reveal>
           ))}
        </div>

      </div>
    </div>
  );
};

// --- Sub-components ---

const ProductCard = ({ product, onAdd }: any) => {
  const [added, setAdded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onAdd();
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  // Color mapping for dynamic styles
  const colorMap: Record<string, string> = {
    cyan: 'text-oni-cyan bg-oni-cyan/10 border-oni-cyan/30 group-hover:border-oni-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]',
    magenta: 'text-oni-magenta bg-oni-magenta/10 border-oni-magenta/30 group-hover:border-oni-magenta group-hover:shadow-[0_0_20px_rgba(255,0,170,0.2)]',
    purple: 'text-oni-purple bg-oni-purple/10 border-oni-purple/30 group-hover:border-oni-purple group-hover:shadow-[0_0_20px_rgba(189,0,255,0.2)]',
    blue: 'text-blue-400 bg-blue-400/10 border-blue-400/30 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]',
    yellow: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30 group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.2)]',
    green: 'text-green-400 bg-green-400/10 border-green-400/30 group-hover:border-green-400 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]',
  };

  const styleClass = colorMap[product.color] || colorMap['cyan'];

  return (
    <TiltCard className="h-full">
       <div className={`relative h-full bg-white/80 dark:bg-oni-card/80 backdrop-blur-md p-6 rounded-2xl border transition-all duration-300 group flex flex-col ${styleClass.split(' ').filter(c => c.includes('border')).join(' ')} border-black/5 dark:border-white/10 hover:-translate-y-2`}>
          
          {/* Top Label */}
          <div className="flex justify-between items-start mb-4">
             <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 bg-black/10 dark:bg-white/10 px-2 py-1 rounded">
               {product.category}
             </span>
             <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
               <Star size={12} fill="currentColor" />
               {product.rating}
             </div>
          </div>

          {/* Image Placeholder */}
          <div className={`w-full aspect-square rounded-xl mb-6 flex items-center justify-center relative overflow-hidden ${styleClass.split(' ').filter(c => c.includes('bg')).join(' ')}`}>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>
             
             {/* Tech Grid Background */}
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

             <div className={`transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg ${styleClass.split(' ').filter(c => c.includes('text')).join(' ')}`}>
                {product.icon}
             </div>
          </div>

          {/* Product Info */}
          <div className="mt-auto">
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-oni-cyan transition-colors">
               {product.name}
             </h3>
             <div className="flex items-end justify-between mt-4">
                <span className="text-xl font-mono font-bold text-gray-800 dark:text-white">
                  {product.price}
                </span>
                
                <button 
                  onClick={handleClick}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                    ${added ? 'bg-green-500 text-white scale-110' : 'bg-black/10 dark:bg-white/10 hover:bg-oni-cyan hover:text-black text-gray-500 dark:text-white'}
                  `}
                >
                  {added ? <Check size={18} /> : <Plus size={18} />}
                </button>
             </div>
          </div>
       </div>
    </TiltCard>
  );
};