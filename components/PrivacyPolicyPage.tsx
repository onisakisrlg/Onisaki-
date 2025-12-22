import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Privacy Policy
            </h1>
            <h2 className="text-lg text-oni-purple font-sans font-bold tracking-widest mb-4">
               プライバシーポリシー（個人情報保護方針）
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-oni-cyan to-oni-magenta rounded-full"></div>
          </div>
        </Reveal>

        <div className="space-y-12">
          <Reveal width="100%">
             <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-6">
                <p>
                  Onisaki株式会社（以下、「当社」といいます。）は、お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                </p>

                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-oni-cyan border-b border-gray-700 pb-2">1. 個人情報の収集について</h3>
                   <p>
                      当社は、お客様が当社のサービスをご利用になる際、またはお問い合わせをいただく際に、氏名、住所、電話番号、メールアドレスなどの個人情報を収集することがあります。これらの情報は、適法かつ公正な手段によって収集されます。
                   </p>
                </div>

                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-oni-cyan border-b border-gray-700 pb-2">2. 個人情報の利用目的</h3>
                   <p>当社は、収集した個人情報を以下の目的で利用いたします。</p>
                   <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>当社サービスの提供・運営のため</li>
                      <li>お問い合わせへの回答・連絡のため</li>
                      <li>重要なお知らせやメンテナンス情報の通知のため</li>
                      <li>利用規約に違反したユーザーや、不正利用を防止・特定するため</li>
                      <li>その他、上記の利用目的に付随する目的のため</li>
                   </ul>
                </div>

                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-oni-cyan border-b border-gray-700 pb-2">3. 個人情報の第三者への提供</h3>
                   <p>
                      当社は、法令に基づく場合を除き、あらかじめお客様の同意を得ることなく、個人情報を第三者に提供することはいたしません。ただし、以下の場合は除きます。
                   </p>
                   <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>人の生命、身体または財産の保護のために必要がある場合</li>
                      <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                      <li>国の機関もしくは地方公共団体が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                      <li>業務を円滑に遂行するため、利用目的の達成に必要な範囲内で個人情報の取扱いの全部または一部を委託する場合</li>
                   </ul>
                </div>

                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-oni-cyan border-b border-gray-700 pb-2">4. 個人情報の管理</h3>
                   <p>
                      当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                   </p>
                </div>

                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-oni-cyan border-b border-gray-700 pb-2">5. 個人情報の開示・訂正・削除</h3>
                   <p>
                      お客様がご本人の個人情報の開示・訂正・削除などをご希望される場合には、ご本人であることを確認の上、速やかに対応いたします。
                   </p>
                </div>

                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-oni-cyan border-b border-gray-700 pb-2">6. プライバシーポリシーの変更</h3>
                   <p>
                      本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                   </p>
                </div>

                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-oni-cyan border-b border-gray-700 pb-2">7. お問い合わせ窓口</h3>
                   <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
                   <div className="bg-black/5 dark:bg-white/5 p-4 rounded-lg border border-black/10 dark:border-white/10">
                      <p><strong>社名：</strong> Onisaki株式会社</p>
                      <p><strong>住所：</strong> 東京都中央区銀座１丁目２２番１１号 銀座大竹ビジデンス２Ｆ</p>
                      <p><strong>メールアドレス：</strong> support@onisaki.com</p>
                   </div>
                </div>

             </div>
          </Reveal>
        </div>

        <div className="mt-16 text-center">
             <p className="text-[10px] text-gray-500">© {new Date().getFullYear()} Onisaki Inc.</p>
        </div>
      </div>
    </div>
  );
};