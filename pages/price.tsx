import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import * as Constants from '@lib/Constants';
import { css } from '@emotion/react'
import * as buttons from '@components/buttons'
import * as commons from '@components/commons'
import { FirstView } from '@components/firstview'

const Page: NextPage = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      const $ = window.jQuery;
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();

      try{
        $('.slider').slick({
          autoplay: false,
          autoplaySpeed: 4500,
          speed : 1000,
          arrows: true,
          dots: true,
          centerMode: true,
          centerPadding: 'calc((100% - 500px) / 2)',
          responsive: [{
            breakpoint: 881,
            settings: {
              centerPadding: 'calc((100% - 300px) / 2)',
            }
          }]
        });
      }catch(e){}
    }
  }, [props]);

  return (
    <>
      <Head>
        <title>費用について｜社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「費用について」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header />

      <div id="page-price">
        <main>
          <section className="s01">
            <div className="wrapper">
              <Breadcrumb
                targetpage="社葬・お別れの会の費用について"
              />
              <FirstView
                imagePath="/images/pr0101.png?202207191557"
                imagePathSp="/images/pr0101_sp.png?202207191557"
                alt="費用について"
                title="功績を残した方へ社を挙げて行うセレモニー"
                description={<>社葬の費用は規模、会場、種類（形態）により総額は大きく異なるため、あらかじめ費用を把握しながらどのような社葬を執り行うか方針を決めることが重要となります。また、費用については税法上の取扱いについて注意が必要です。セレモアでは豊富な経験と知識をもった社葬プロデューサーが、貴社のご要望に合わせて最適なプラン、お見積りをご提案いたします。</>}
                shrinkTitle
                shrinkDescription
                titleWidthOnShrinkPercent={78}
                descriptionWidthOnShrinkPercent={78}
                titleMargin="-17% 0 0"
                titleMarginTablet="-18% 0 0"
                titleMarginTopSp={0}
              />
            </div>
          </section>

          <section className="s02">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">社葬の<br />費用項目</span>
              </h3>
              {/* <p className="t01 mincho">社葬・お別れの会では<br className="os" />様々な費用が発生します。</p> */}
              <p className="arc u-hide-sp">
                {/* <Image width="800px" height="50px" src="/images/pr0218.svg" alt="社葬・お別れの会では様々な費用が発生します。" /> */}
                {/* <Image width="800px" height="50px" src="/images/pr0219.svg" alt="社葬・お別れの会では様々な費用が発生します。" /> */}
                <img src="/images/pr0219.svg" alt="社葬・お別れの会では様々な費用が発生します。" />
              </p>
              <p className="arc u-hide-pc">社葬・お別れの会では様々な費用が発生します。</p>
              <ul className="list02">
                {(() => {
                  const a = [];
                  const data = [
                    {
                      'title': '社葬基本費用',
                      'text': "社葬の企画運営管理、祭壇（デザイン・設営・装飾）など"
                    },
                    {
                      'title': '執行管理費用',
                      'text': "式進行管理、人件費"
                    },
                    {
                      'title': '付帯品費用',
                      'text': "遺影写真、会葬礼状、ハイヤー・マイクロバス、ガードマンなど"
                    },
                    {
                      'title': '会場使用料',
                      'text': "セレモア直営式場、寺院式場、ホテルなどの使用料"
                    },
                    {
                      'title': '設備費用',
                      'text': "会場内装飾・会場外装飾、音響・照明・ステージ装飾、テント・テーブル・椅子・看板など"
                    },
                    {
                      'title': '演出費用',
                      'text': "弦楽演奏、メモリアルコーナー設置"
                    },
                    {
                      'title': '印刷費用',
                      'text': "通知状の印刷と発送費用"
                    },
                    {
                      'title': '広告費用',
                      'text': "新聞の訃報広告"
                    },
                    {
                      'title': '会葬御礼費用',
                      'text': "当日に会葬いただいた方への御礼品"
                    },
                    {
                      'title': '飲食費用',
                      'text': "通夜料理、おもてなし料理"
                    },
                    {
                      'title': '宗教家への御礼',
                      'text': "読経料"
                    },
                  ];
                  for (const k in data) {
                    var num = parseInt(k) + 2;
                    var numstr = num < 10 ? "0" + num : num
                    var src = "/images/pr02" + numstr + ".jpg"
                    a.push(
                      <li>
                        <dl>
                          <div className="photo">
                            <img src={src} alt={data[k].title} />
                          </div>
                          <div className="dsc">
                            <dd>
                              {data[k].title}
                            </dd>
                            <dt>
                              {data[k].text}
                            </dt>
                          </div>
                        </dl>
                      </li>
                    );
                  }
                  return a;
                })()}
              </ul>
              {/* <p className="t02 mincho">合同葬の場合、ご遺族が<br className="os" />以下の費用を負担します</p> */}
              <p className="arc u-hide-sp">
                {/* <Image width="700px" height="50px" className='img' src="/images/pr0219.svg" alt="合同葬の場合、ご遺族が以下の費用を負担します" ></Image> */}
                {/* <Image width="700px" height="50px" className='img' src="/images/pr0218.svg" alt="合同葬の場合、ご遺族が以下の費用を負担します" ></Image> */}
                <img src="/images/pr0218.svg" alt="合同葬の場合、ご遺族が以下の費用を負担します" />
              </p>
              <p className="arc u-hide-pc">合同葬の場合、ご遺族が以下の費用を負担します。</p>
              <ul className="list02 list03">
                {(() => {
                  const a = [];
                  const data = [
                    {
                      'title': '飲食費用',
                      'text': "精進落とし料理"
                    },
                    {
                      'title': '納棺用品費用',
                      'text': "ご寝棺・掛布・布団など"
                    },
                    {
                      'title': '返礼品費用',
                      'text': "香典返し"
                    },
                    {
                      'title': '宗教家への御礼',
                      'text': "戒名料"
                    },
                    {
                      'title': '火葬場費用',
                      'text': "火葬料・控室使用料・飲食費など"
                    },
                  ];
                  for (const k in data) {
                    var num = parseInt(k) + 13;
                    var numstr = num < 10 ? "0" + num : num
                    var src = "/images/pr02" + numstr + ".jpg"
                    a.push(
                      <li>
                        <dl>
                          <div className="photo">
                            <img src={src} alt={data[k].title} />
                          </div>
                          <div className="dsc">
                            <dd>
                              {data[k].title}
                            </dd>
                            <dt>
                              {data[k].text}
                            </dt>
                          </div>
                        </dl>
                      </li>
                    );
                  }
                  return a;
                })()}
              </ul>
            </div>
          </section>
          <section className="s03 slightly-colored-bg">
            <div className="wrapper">
              <div className="note">
                <p>
                  社葬は種類（形態）により、費用項目・費用負担（会社、または遺族）が異なります。
                  <br></br>会社もしくは遺族の費用負担を区別し明確にすることで、社葬執行の際の実務がスムーズになるばかりでなく、トラブルも避けることができます。
                </p>
              </div>
              <div className='tables'>
                <img src="/images/pr_table.svg?202207061619" alt="費用項目一覧" className="op" />
                <img src="/images/pr_table_1.svg?202207061619" alt="費用項目一覧" className="os" />
                <img src="/images/pr_table_2.svg?202207061619" alt="費用項目一覧" className="os goudousou" />
              </div>
            </div>
          </section>
          <section className="s05">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">社葬・お別れの会・<br />合同葬の事例</span>
              </h3>
              <div className="sliderbox">
                <ul className="slider">
                  {(()=>{
                    const a = [];
                    const data = Constants.FUNERAL_CASE2.syasou;
                    for(const k in data){
                      a.push(
                      <Link href="/case/[category]/[slug]" as={`/case/syasou/${k}`}>
                        <a>
                          <li key={k} className="li cat01">
                            <p className="t01"><img src="/images/lb_cat01.svg" alt="社葬" /></p>
                            <div className="thumb">
                              <img src={data[k].mainImg.src} alt={data[k].mainImg.caption} />
                            </div>
                            <p className="t02 mincho">{data[k].catchphrase}</p>
                            <p className="t03">
                              <ul>
                                <li>
                                  <span className="s1">参列者</span>
                                  <span className="s2">{data[k].attendee}人</span>
                                </li>
                                <li>
                                  <span className="s1">式場</span>
                                  <span className="s2">{data[k].facility.name}</span>
                                </li>
                              </ul>
                            </p>
                          </li>
                        </a>
                      </Link>);
                    }
                    return a;
                  })()}
                    {(()=>{
                    const a = [];
                    const data = Constants.FUNERAL_CASE2.owakarenokai;
                    for(const k in data){
                      a.push(
                      <Link href="/case/[category]/[slug]" as={`/case/owakarenokai/${k}`}>
                        <a>
                          <li key={k} className="li cat02">
                            <p className="t01"><img src="/images/lb_cat02.svg" alt="お別れの会" /></p>
                            <div className="thumb">
                              <img src={data[k].mainImg.src} alt={data[k].mainImg.caption} />
                            </div>
                            <p className="t02 mincho">{data[k].catchphrase}</p>
                            <p className="t03">
                              <ul>
                                <li>
                                  <span className="s1">参列者</span>
                                  <span className="s2">{data[k].attendee}人</span>
                                </li>
                                <li>
                                  <span className="s1">式場</span>
                                  <span className="s2">{data[k].facility.name}</span>
                                </li>
                              </ul>
                            </p>
                          </li>
                        </a>
                      </Link>);
                    }
                    return a;
                  })()}
                    {(()=>{
                    const a = [];
                    const data = Constants.FUNERAL_CASE2.goudousou;
                    for(const k in data){
                      a.push(
                      <Link href="/case/[category]/[slug]" as={`/case/goudousou/${k}`}>
                        <a>
                          <li key={k} className="li cat03">
                            <p className="t01"><img src="/images/lb_cat03.svg" alt="合同葬" /></p>
                            <div className="thumb">
                              <img src={data[k].mainImg.src} alt={data[k].mainImg.caption} />
                            </div>
                            <p className="t02 mincho">{data[k].catchphrase}</p>
                            <p className="t03">
                              <ul>
                                <li>
                                  <span className="s1">参列者</span>
                                  <span className="s2">{data[k].attendee}人</span>
                                </li>
                                <li>
                                  <span className="s1">式場</span>
                                  <span className="s2">{data[k].facility.name}</span>
                                </li>
                              </ul>
                            </p>
                          </li>
                        </a>
                      </Link>);
                    }
                    return a;
                  })()}
                </ul>
              </div>
              <div>
                <buttons.ViewListButton href="/case" marginTop={30} />
              </div>
            </div>
          </section>

          <section className="s106">
            <div className="wrapper">
              <commons.PremiumPackBanner />
            </div>
          </section>

          <section className="s04 slightly-colored-bg">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">社葬費用の<br />税務上の<br />取扱いについて</span>
              </h3>
              {/* <h4>
                <img src="/images/pr0401.svg" alt="税について" />
              </h4> */}
              <div id='s04-title1'>
                <div className='s4-title-n'><span>1</span></div>
                <p className="t01 mincho">税法上の取扱い</p>
              </div>
              <p className="t03">社葬にかかる費用については、税法上の取り扱いを把握しておく必要があります。<br></br>法人税法上の基本通達では社葬費用の取り扱いを以下のように定めております。</p>
              <blockquote className="pr0402">
              <h5 className="mincho">法人税法基本通達9-7-19</h5>
              <p>法人が、その役員または使用人が死亡したため社葬を行い、その費用を負担した場合において、その社葬を行うことが社会通念上相当（※1）と認められるときは、その負担した金額のうち社葬のために通常要すると認められる部分の金額は、その支出した日の属する事業年度の損金の額に算入することができるものとする。</p>
              <p className="small">(注) 会葬者が持参した香典等を法人の収入としないで遺族の収入としたときは、これを認める。</p>
              <cite>参照：法令解釈通達第4款 その他</cite>
              </blockquote>
              <div className="pr0403">
                <h5 className="mincho">(*1)「社会通念上相当」とは、どのような場合か</h5>
                <p>生前における故人の会社への貢献度（経歴、職務上の役職）や死亡事由（業務内、業務外の区別）を鑑みて、会社が社葬を執り行うにふさわしい理由があれば、福利厚生費として損金での処理が認められます。<br />したがって、生前会社への貢献がなく実務に携わっていない名目上だけの役員などは社葬を執り行っても、福利厚生費として損金処理することは認められません。<br />詳しくは税理士にご相談することをおすすめします。</p>
                <p className="sub">※セレモアでは税理士をご紹介することも可能です。</p>
              </div>
              <div id='s04-title2'>
                <div className='s4-title-n'><span>2</span></div>
                <p className="t02 mincho">損金処理</p>
              </div>
              {/* <p className="t02 mincho">換金処理</p> */}
              <p className="t03">税務上、損金処理として認められるものとそうでないものがあります。</p>
              {/* <img src="/images/pr0404.png" alt="認められるもの" className="photo03" />
              <img src="/images/pr0405.png" alt="認められないもの" className="photo04" /> */}
              <div className='sonkin-hikaku'>
                <img src="/images/price_sonkin_hikaku.png?v=200" alt="認められないもの" className="u-hide-sp" />
                <img src="/images/price_sonkin_allow.jpg" alt="認められるもの" className="u-hide-pc" />
                <img src="/images/price_sonkin_notallow.jpg" alt="認められないもの" className="u-hide-pc" />
              </div>
            </div>
            <div className="zeirishi">
              <img src="/images/price_zeirishi_image.png" alt="税理士" className="op" />
              <img src="/images/price_zeirishi_image_sp.jpg" alt="税理士" className="os" />
              <p className="u-hide-pc mincho">セレモアでは税理士のご紹介も承ります。</p>
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
  interface Window {
    [key: string]: any,
  }
}
