import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  return (
    <>
      <Head>
        <title>社葬プレミアムパック │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「社葬プレミアムパック」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-plan-syasou-premiumpack">
        <main>
          <section className="s01">
            <div className="wrapper">
              <h2 className="mincho">社葬プレミアムパック</h2>
              <p className="t01">- PREMIUM PACK -</p>
            </div>
          </section>

          <section className="s02">
            <div className="wrapper">
              <h3 className="mincho">~ セレモアの最上品質を経済的に ~</h3>
              <img src="/images/pp0201.png" alt="プレミアムパック" className="bnr" />
              <p className="t01">社葬プレミアムパックは、社葬・お別れの会・合同葬など<br className="op" />あらゆる形態に合わせてお選びいただけます。</p>
              <ul className="planlist">
                <li className="active">
                  <Link href="/plan"><a>
                    <p className="t02">2,500,000円プラン</p>
                    <p className="t03">(税込2,750,000円)</p>
                  </a></Link>
                </li>
                <li>
                  <Link href="/plan"><a>
                    <p className="t02">4,000,000円プラン</p>
                    <p className="t03">(税込4,400,000円)</p>
                  </a></Link>
                </li>
                <li>
                  <Link href="/plan"><a>
                    <p className="t02">6,000,000円プラン</p>
                    <p className="t03">(税込6,600,000円)</p>
                  </a></Link>
                </li>
                <li>
                  <Link href="/plan"><a>
                    <p className="t02">8,000,000円プラン</p>
                    <p className="t03">(税込8,800,000円)</p>
                  </a></Link>
                </li>
                <li>
                  <Link href="/plan"><a>
                    <p className="t02">10,000,000円プラン</p>
                    <p className="t03">(税込11,000,000円)</p>
                  </a></Link>
                </li>
              </ul>
              <div className="detailbox">
                <div className="photobox">
                  <img src="/images/pp0202.jpg" alt="イメージ" />
                  <p>プレミアム生花祭壇</p>
                </div>
                <p className="t04">※供花は含まれておりません</p>
                <ul className="optionlist">
                  <li>
                    <img src="/images/pp0203.jpg" alt="オプション" />
                    <div className="white">
                      <p>遺影写真<br />(カラー電照額)</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0204.jpg" alt="オプション" />
                    <div className="white">
                      <p>看板<br />(メイン看板)</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0205.jpg" alt="オプション" />
                    <div className="white">
                      <p>記録写真<br />(30カット)</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0206.jpg" alt="オプション" />
                    <div className="white">
                      <p>受付事務用品一式</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0207.jpg" alt="オプション" />
                    <div className="white">
                      <p>セレモニーコンパニオン<br />(4名)</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0208.jpg" alt="オプション" />
                    <div className="white">
                      <p>司会者<br />(1名)</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0209.jpg" alt="オプション" />
                    <div className="white">
                      <p>メモリアルコーナー<br />企画演出</p>
                    </div>
                  </li>
                </ul>
                <h4 className="mincho">社葬運営管理費</h4>
                <ul className="optionlist">
                  <li>
                    <img src="/images/pp0210.jpg" alt="オプション" />
                    <div className="white">
                      <p>社葬取扱規程作成の<br />アドバイス</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0211.jpg" alt="オプション" />
                    <div className="white">
                      <p>スケジュールの<br />提案・管理</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0212.jpg" alt="オプション" />
                    <div className="white">
                      <p>社葬式場の提案<br />使用手続き</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0213.jpg" alt="オプション" />
                    <div className="white">
                      <p>訃報連絡の作成</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0214.jpg" alt="オプション" />
                    <div className="white">
                      <p>訃報広告の手配</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0215.jpg" alt="オプション" />
                    <div className="white">
                      <p>通知状の校正<br />発送の手配</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0216.jpg" alt="オプション" />
                    <div className="white">
                      <p>社葬マニュアルの作成</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0217.jpg" alt="オプション" />
                    <div className="white">
                      <p>席次の作成</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0218.jpg" alt="オプション" />
                    <div className="white">
                      <p>実行委員への<br />説明会の実施</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0219.jpg" alt="オプション" />
                    <div className="white">
                      <p>移動救護室<br />の手配</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0220.jpg" alt="オプション" />
                    <div className="white">
                      <p>リハーサルの<br />運営管理</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0221.jpg" alt="オプション" />
                    <div className="white">
                      <p>社葬当日の<br />執行運営管理</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0222.jpg" alt="オプション" />
                    <div className="white">
                      <p>社葬当日の<br />運営スタッフ</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0223.jpg" alt="オプション" />
                    <div className="white">
                      <p>おしぼりサービス</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0224.jpg" alt="オプション" />
                    <div className="white">
                      <p>供花リストの作成</p>
                    </div>
                  </li>
                  <li>
                    <img src="/images/pp0225.jpg" alt="オプション" />
                    <div className="white">
                      <p>社葬終了後の御礼状<br />校正・発送の手配</p>
                    </div>
                  </li>
                </ul>
                <ul className="caution">
                  <li>パック料金につき、ご使用されない項目の減額はありません</li>
                  <li>パック料金に対する弊社会員制度・ご解約団体の割引は適用されません。</li>
                  <li>パック料金以外に附帯品、式場装飾費、式場内外設備費、式場使用料などが必要です。<br /><br /></li>
                  <li>弊社では日本武道館、東京文化会館での大規模葬儀の実績がございます。<br />上記社葬プレミアムパック以外にもご要望に応じて承りますので、どうぞお気軽にお申し付けください。</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  )
}

export default Page

declare global {
  interface Window{
    [key: string]: any,
  }
}
