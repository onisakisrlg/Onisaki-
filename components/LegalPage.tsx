import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { CipherText } from './ui/CipherText';

export const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { label: '販売業者', value: 'Onisaki株式会社' },
    { label: '運営責任者', value: 'ソウニチラクガク' },
    { label: '所在地', value: '東京都中央区銀座１丁目２２番１１号 銀座大竹ビジデンス２Ｆ' },
    { 
      label: '電話番号', 
      value: <div className="flex items-center"><CipherText text="050" />-<CipherText text="6864" />-<CipherText text="0984" /></div> 
    },
    { 
      label: 'メールアドレス', 
      value: <div className="flex items-center"><CipherText text="support" />@<CipherText text="onisaki.com" /></div> 
    },
    { label: '営業時間', value: '平日 10:00 - 18:00（土日祝日・年末年始を除く）。メールでのお問い合わせは24時間受け付けておりますが、返信は営業時間内となります。' },
    { label: '販売価格', value: '商品・サービスごとに表示された価格（税込）。\n価格帯は500円〜2,000,000円です。詳細は各サービスページをご確認ください。' },
    { 
      label: '送料', 
      value: '・全国一律 500円（税込）\n・合計10,000円（税込）以上のご購入で送料無料。' 
    },
    { label: '商品代金以外の必要料金', value: '消費税、送料（上記参照）、振込手数料（銀行振込の場合）、代引手数料（代金引換の場合）。' },
    { 
      label: '購入・お支払いフロー', 
      value: '1. ご希望のサービスまたは商品を選択し、「お問い合わせ」または「購入」ボタンをクリックしてください。\n2. 必要事項（お名前、ご連絡先、お支払い方法等）を入力してください。\n3. 入力内容を確認し、注文を確定してください。\n4. 弊社より自動返信メールまたは担当者より確認メールを送信いたします。\n5. お支払い完了の確認後、サービス提供または商品発送の手続きを開始いたします。' 
    },
    { label: 'お支払い方法', value: 'クレジットカード、銀行振込、コンビニ決済、代金引換、WeChat Pay（微信支付）、Alipay（支付宝）' },
    { label: 'お支払い期限', value: 'ご注文後7日以内にお支払いください。期限を過ぎた場合はキャンセル扱いとなる場合がございます。' },
    { 
      label: 'デジタルコンテンツについて', 
      value: '・商品内容：Webサイト制作サービス、デザインデータ、ECシステムライセンス、デジタルマーケティング資料等。\n・使用目的：お客様の事業促進、広報活動、オンラインビジネスの構築等。\n・提供方法：メール添付、専用サーバーからのダウンロード、またはオンラインアクセス権の提供。\n・動作環境：各WEBブラウザ（Chrome, Safari等）の最新版を推奨。' 
    },
    { label: '引き渡し時期', value: '・デジタル商品：お支払い完了確認後、即時または3営業日以内に提供いたします。\n・制作サービス：契約締結後、別途合意したスケジュールに基づき提供いたします。\n・有形商品：通常3営業日以内に発送いたします。' },
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
                  <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {item.value}
                  </div>
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