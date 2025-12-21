import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { label: '販売業者', value: 'Onisaki株式会社' },
    { label: '運営責任者', value: 'ソウニチラクガク' },
    { label: '所在地', value: '東京都中央区銀座１丁目２２番１１号 銀座大竹ビジデンス２Ｆ' },
    { label: '電話番号', value: '050-6864-0984' },
    { label: 'メールアドレス', value: 'support@onisaki.com' },
    { label: '販売価格', value: '商品ごとに表示された価格（税込）。\n価格帯は500円〜1,000,000円です。' },
    { label: '商品代金以外の必要料金', value: '消費税、送料、振込手数料（銀行振込の場合）、代引手数料（代金引換の場合）など。詳細はご注文画面にてご確認ください。' },
    { label: 'お支払い方法', value: 'クレジットカード、銀行振込、コンビニ決済、代金引換、WeChat Pay（微信支付）、Alipay（支付宝）' },
    { label: 'お支払い期限', value: 'ご注文後7日以内にお支払いください。期限を過ぎた場合はキャンセル扱いとなる場合がございます。' },
    { label: '引き渡し時期', value: 'ご入金確認後、通常3営業日以内に発送いたします。ただし、在庫状況や注文内容により前後する場合がございます。' },
    { label: '配送方法', value: 'クリックポスト、ゆうパック、ゆうパケット、レターパックなど。配送方法は商品や地域により異なります。' },
    { label: '返品・交換について', value: '商品の品質には万全を期しておりますが、万一不良・誤送品があった場合は、商品到着後7日以内にご連絡ください。当社負担で交換または返金対応いたします。お客様のご都合による返品・交換は原則としてお受けしておりません。' },
    { label: 'キャンセルについて', value: '発送手配前であればキャンセルが可能です。発送後のキャンセルはお受けできませんので、あらかじめご了承ください。' },
    { label: '販売数量の制限', value: '商品により販売数量を制限させていただく場合がございます。各商品ページにてご確認ください。' },
    { label: 'その他', value: '法令に基づき、適切な情報開示と顧客対応を行っております。ご不明点がございましたら、お気軽にお問い合わせください。' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <Link to="/" state={{ targetSection: 'contact' }} className="inline-flex items-center gap-2 text-oni-cyan hover:text-white transition-colors text-sm font-bold tracking-widest mb-8 group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              BACK TO HOME
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-2">
              特定商取引法に基づく表記
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-oni-cyan to-oni-magenta rounded-full"></div>
          </div>
        </Reveal>

        <div className="space-y-8">
          {items.map((item, index) => (
            <Reveal key={index} delay={index * 0.05} width="100%">
              <div className="grid md:grid-cols-12 gap-4 border-b border-black/5 dark:border-white/10 pb-6">
                <div className="md:col-span-4">
                  <h3 className="text-sm font-bold text-oni-cyan uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-oni-magenta rounded-full"></span>
                    {item.label}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {item.value}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
             <p className="text-[10px] text-gray-500">© {new Date().getFullYear()} Onisaki Inc.</p>
        </div>
      </div>
    </div>
  );
};