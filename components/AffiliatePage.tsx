import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShoppingBag, ExternalLink, Star, Tag } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';

// Mock Data: Replace these with your actual Amazon Affiliate products and links
const PRODUCTS = [
  {
    id: 1, 
    // SEO Keywords: はさみ, プラス, フィットカットカーブ, フッ素コート
    title: "プラス はさみ フィットカットカーブ フッ素コート (ホワイト/グレー)",
    price: "¥537",
    rating: 4.8,
    category: "Office Tool",
    image: "https://m.media-amazon.com/images/I/51jT+Fmae7L._AC_SX679_.jpg", 
    description: "【梱包開封のストレス、ゼロへ】EC事業の梱包作業やオフィスの雑務で、「テープのベタつき」に悩んでいませんか？このプラスの「フィットカットカーブ」は、物理学に基づいた刃の角度で、段ボールから牛乳パックまで驚くほど軽い力でサクサク切れます。\n\nさらに最強なのが「フッ素コート」加工。ガムテープやセロハンテープを何度切ってもベタつかず、切れ味が持続します。数百円で毎日の作業効率が劇的に変わる、まさに「魔法のハサミ」です。",
    amazonLink: "https://amzn.to/49plvTy" 
  },
  {
    id: 2,
    // SEO Keywords: カッター, オルファ, OLFA, 大型, ハイパーAL型
    title: "オルファ(OLFA) ハイパーAL型 オートロック式大型カッター 193B",
    price: "¥565",
    rating: 4.9,
    category: "Professional Tool",
    // Provided Amazon Image
    image: "https://m.media-amazon.com/images/I/61NB3HrW2lS._AC_SX679_.jpg",
    description: "【プロが選ぶ絶対的なグリップ力】厚手の段ボールを解体する時、普通のカッターでは手が滑って危険だと感じたことはありませんか？このOLFA「ハイパーAL型」は、握った瞬間に違いが分かる「エラストマー樹脂グリップ」を採用。滑らず、力強く、安全に切断作業ができます。\n\n刃が勝手に出ない「オートロック式」はもちろん、本体後部にはツメが付いており、段ボールのフタをこじ開けたりペンキ缶を開けたりするのにも便利。耐久性・安全性・機能性、すべてにおいて完成された一本です。",
    amazonLink: "https://amzn.to/4ssX806" 
  },
  {
    id: 3,
    // SEO Keywords: 携帯はさみ, プラス, ツイッギー, Twiggy
    title: "プラス 携帯はさみ フィットカットカーブ ツイッギー ホワイト",
    price: "¥559",
    rating: 4.7,
    category: "Mobile Tool",
    // Provided Amazon Image
    image: "https://m.media-amazon.com/images/I/51Ul8mGf7BL._AC_SX679_.jpg",
    description: "売上No.1シリーズのはさみブランドから遂に携帯用が登場! 根元から刃先までサクサク切れる、究極スリムな携帯はさみ!\nかさばらない「携帯性」・ほつれ糸も切れる「切れ味」・サッと使える「操作性」、開封に欠かせない「刃渡り」。すべてを兼ね備えた携帯はさみです。\n本体サイズ:全長135mm 直径:12mm 刃渡り42mm 板厚:1.2mm\nカラー:ホワイト / 材質:本体・キャップ=ABS、刃=ハイカーボンステンレス鋼\n※紙など薄い物を切るためのはさみです。厚い物、かたい物の切断には適していません。",
    amazonLink: "https://amzn.to/3LdmWN1" 
  },
  {
    id: 6,
    // SEO Keywords: 携帯はさみ, ツイッギー, 日本の文様, お土産
    title: "プラス 携帯はさみ ツイッギー 日本の文様シリーズ",
    price: "¥614",
    rating: 4.8,
    category: "Mobile Tool",
    // Provided Amazon Image
    image: "https://m.media-amazon.com/images/I/51i6Vh2sVAL._AC_SX679_.jpg",
    description: "思い浮かべられることの多い日本ならではのモチーフを、便利で機能的な文房具へあしらいました。日本での思い出と一緒に持ち帰るお土産やギフトにはもちろん、可愛いデザインで携帯したくなる文具シリーズです。\nかさばらない「携帯性」・ほつれ糸も切れる「切れ味」・サッと使える「操作性」、開封に欠かせない「刃渡り」。すべてを兼ね備えた携帯はさみです。\n【外形寸法】W135 ×D12 ×H10 (mm)【材質】本体・キャップ＝ABS、刃＝ハイカーボンステンレス鋼",
    amazonLink: "https://amzn.to/4pqzVJc" 
  }
];

export const AffiliatePage: React.FC = () => {
  useEffect(() => {
    // 1. Scroll to top
    window.scrollTo(0, 0);

    // 2. SEO Optimization: Dynamic Title & Meta Description for Google Search
    // Changed title to reflect "Office/Packing Efficiency"
    document.title = "【プロ愛用】作業効率が劇的に上がる最強の道具・ガジェット | Onisaki Selects";
    
    // Update or Create Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    // Rich description with keywords specifically for these tools
    metaDescription.setAttribute('content', 'Web開発会社Onisakiが厳選する、仕事の生産性を高める「神ツール」。Ankerの急速充電器、ベタつかないハサミ、プロ仕様のカッターなど、デスクワークと物流作業を快適にするアイテムを徹底レビュー。');

    // Cleanup function to reset title when leaving page
    return () => {
      document.title = "ONISAKI | Creative Web Solutions";
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-oni-cyan hover:text-white transition-colors text-sm font-bold tracking-widest mb-8 group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              BACK TO HOME
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Onisaki Selects
            </h1>
            <h2 className="text-lg text-oni-purple font-sans font-bold tracking-widest mb-6 flex items-center gap-2">
               <ShoppingBag size={20} />
               梱包・物流・オフィス効率化ツール
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-oni-cyan to-oni-magenta rounded-full mb-8"></div>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              EC事業の現場で毎日使うものだからこそ、妥協してはいけません。
              <br/>
              数百円の投資で、日々の「切る」「貼る」「開ける」作業のストレスをゼロにする、プロが認めた最強のツールをご紹介します。
              <br/>
              <span className="text-xs opacity-70 mt-2 block">
                ※ Onisaki株式会社は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
              </span>
            </p>
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-12">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} width="100%" delay={index * 0.1}>
              <TiltCard className="h-full">
                <div className="flex flex-col md:flex-row bg-white/80 dark:bg-oni-card/80 backdrop-blur-md rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden hover:border-oni-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-500 group">
                  
                  {/* Image Section - STRICT FIXED DIMENSIONS */}
                  {/* Changed from md:h-auto to md:h-[380px] to prevent vertical stretching */}
                  <div className="w-full md:w-[380px] h-[320px] md:h-[380px] shrink-0 relative overflow-hidden bg-white flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-black/5">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 bg-black/70 backdrop-blur text-white text-xs font-bold uppercase tracking-widest rounded flex items-center gap-2 border border-white/20">
                         <Tag size={12} className="text-oni-cyan" />
                         {product.category}
                       </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 md:p-10 flex flex-col justify-between relative">
                     {/* Background Glow */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-oni-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>

                     <div>
                       <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-oni-cyan transition-colors leading-tight">
                            {product.title}
                          </h3>
                       </div>
                       
                       <div className="flex items-center gap-1 mb-6 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                              className={i < Math.floor(product.rating) ? "" : "text-gray-600"}
                            />
                          ))}
                          <span className="text-gray-500 text-xs ml-2 font-mono">({product.rating}.0)</span>
                       </div>

                       <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-8 whitespace-pre-wrap">
                         {product.description}
                       </p>
                     </div>

                     <div className="flex items-center justify-between border-t border-black/5 dark:border-white/10 pt-6 mt-auto">
                        <span className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                          {product.price}
                        </span>
                        
                        <a 
                          href={product.amazonLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-[#FF9900] hover:bg-[#FFB84D] text-black font-bold text-sm rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20"
                        >
                          Amazonで見る
                          <ExternalLink size={16} />
                        </a>
                     </div>
                  </div>

                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-center">
            <p className="text-xs text-gray-500 leading-relaxed max-w-3xl mx-auto">
              ※ 商品の価格や在庫状況は常に変動しています。最新の情報はAmazon.co.jpのサイトでご確認ください。<br/>
              当ページはアフィリエイト広告を利用しています。
            </p>
        </div>

      </div>
    </div>
  );
};
