import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import * as modals from '@components/modals'
import * as buttons from '@components/buttons'
import { CaseSlider } from '@components/slider'
import { SeminarInfo } from '@components/seminar'
import * as commons from "@components/commons"

const Page: NextPage = (props) => {
  const router = useRouter();

  useEffect(() => {
    // if (typeof window !== 'undefined'){
    //   console.log('jQuery','jQuery' in window);
    //   console.log('pageOnload','pageOnload' in window);
    // }
    if (typeof window !== 'undefined' && window.jQuery) {
      const $ = window.jQuery;

      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
      window.main();

      try{
        $('.slider').slick({
          autoplay: true,
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
        // $('.slider02').slick({
        //   autoplay: true,
        //   autoplaySpeed: 4500,
        //   speed : 1000,
        //   arrows: false,
        //   dots: true,
        //   centerMode: true,
        //   centerPadding: 'calc((100% - 674px) / 2)',
        //   responsive: [{
        //     breakpoint: 881,
        //     settings: {
        //       centerPadding: 'calc((100% - 300px) / 2)',
        //     }
        //   }]
        // });
      }catch(e){}
    }
  }, [props]);

  return (
    <>
      <Head>
        <title>社葬・お別れの会・合同葬ならセレモアの社葬【首都圏随一の実績】</title>
      </Head>

      <Header/>

      <div id="page-home">
        <main>
          <section className="s01">
            <div className="wrapper">
              <h2>
                <img src="/images/tp0101_ttl.png?v=600" alt="セレモアの社葬" className="u-hide-sp ttl" />
                {/* <div css={{
                  position: 'absolute',
                  right: 0,
                  left: 0,
                  margin: 'auto',
                  width: 'auto',
                  height: '70%',
                  marginTop: '14px',
                  display:'flex',
                  flexFlow: 'column',
                  alignItems: 'center',
                  zIndex: 3,
                  '@media only screen and (max-width: 880px)':{
                    marginTop: '6px',
                  },
                }}>
                  <div css={{
                    width:'39.76%',
                    '@media only screen and (max-width: 880px)':{
                      width:'65.76%',
                    },
                  }}><img src="/images/tp0101_ttl_1.png?v=600" width={930} height={116} alt="首都圏随一の信頼と実績" /></div>
                  <div className="serif-jp" css={{
                    textAlign: 'center',
                    fontSize: '3.9vw',
                    fontWeight: 'bold',
                    lineHeight: 1.34,
                    letterSpacing: 0.1,
                    color: '#42210a',
                    marginBottom: 6,
                    textShadow: '0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff',
                    '@media only screen and (max-width: 880px)':{
                      fontSize: '5.6vw',
                    },
                  }}>
                    100 名～ 4 万人規模の<br/>社葬 ・ お別れの会<br css={{
                      display:'none',
                      '@media only screen and (max-width: 880px)':{
                        display:'block',
                      },
                    }} /> ・ 合同葬 ・ 公葬
                  </div>
                  <div css={{
                    width:'37.48%',
                    marginBottom: 13,
                    '@media only screen and (max-width: 880px)':{
                      width:'64.48%',
                      marginBottom: 5,
                    },
                  }}><img src="/images/tp0101_ttl_2.png?v=600" width={889} height={71} alt="品質保障 ISO9001 認証（葬祭サービス）" /></div>
                  <div css={{
                    display:'flex',
                    width:'29.59%',
                    '@media only screen and (max-width: 880px)':{
                      width:'49.59%',
                      marginBottom: 8,
                    },
                    }}>
                    <div css={{width:'46.97%', marginRight:10}}><img src="/images/tp0101_ttl_3.png?v=600" width={329} height={173} alt="首都圏社葬実績 No.1" /></div>
                    <div css={{width:'49.86%'}}><img src="/images/tp0101_ttl_4.png?v=600" width={346} height={172} alt="官公庁・企業契約 2500団体" /></div>
                  </div>
                  <div css={{
                    display:'none',
                    '@media only screen and (max-width: 880px)':{
                      display:'block',
                      fontSize: '1.6vw',
                      width:'49.59%',
                      textAlign:'center',
                      textShadow: '0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff',
                    },
                  }}>※一般社団法人 日本儀礼文化調査協会 (JECIA) 調べ</div>
                </div> */}
                <img src="/images/tp0101.jpg?v=200" alt="セレモアの社葬" className="u-hide-sp" />
                <div className="u-hide-pc">
                  <img src="/images/tp0101_sp.jpg?202209071820" alt="セレモアの社葬" className="bg" />                  
                  <h3 className="phrase" css={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '14px',
                        marginBottom: '14px',
                      }}>
                    <div css={{
                          display: 'block',
                          textAlign: 'center',
                        }}>
                      <span css={{
                            background: 'linear-gradient(transparent 96%, #3D2310 0%)',
                            display: 'inline',
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            lineHeight: '1.6',
                            letterSpacing: '0.1em',
                            paddingBottom: '1px',
                            '@media only screen and (max-width: 600px)':{
                              fontSize: '1rem',
                              lineHeight: '1.2',
                            },
                            '@media only screen and (max-width: 417px)':{
                              fontSize: '.9rem',
                            },
                            '@media only screen and (max-width: 377px)':{
                              fontSize: '.8rem',
                            },
                            '@media only screen and (max-width: 334px)':{
                              fontSize: '.7rem',
                              paddingBottom: '0',
                            }
                          }}><img src="/images/pi_ceremore_logo.png" alt="セレモア®" className="logo" />では日本武道館、青山葬儀場、<br />大規模寺院式場、ホテルなどでの社葬・お別れの会・<br />合同葬・公葬、首都圏屈指の承り実績がございます</span>
                    </div>
                  </h3>
                  {/* <img src="/images/tp0102_sp.png?202207041629" alt="セレモアでは日本武道館、青山葬儀場、大規模寺院式場、ホテルなどでの社葬・お別れの会・合同葬・公葬、首都圏屈指の承り実績がございます" className="bg phrase" /> */}
                  {/* <img src="/images/ceremore_top_prize.svg" alt="" className="logo" /> */}
                </div>
                {/* <p className="u-hide-pc">※一般社団法人 日本儀礼文化調査協会(JECIA)調べ</p> */}
                {/* <Link href="/contact/form?mode=2"><a className="btn_fv_contact">資料請求</a></Link> */}
                <Link href="/contact/form?mode=2"><a className="btn_fv_contact">
                  <p className="main">資料請求・お問い合わせ</p>
                  <p className="sub">※事前のお見積りも承ります</p>
                </a></Link>

                <Link href="/seminar"><a className="btn_fv_seminar">
                  {/* <img src="/images/bnr010101.png" alt="社葬セミナー" /> */}
                  <div className="btn_fv_seminar-wrapper">
                    <p className="mincho">社葬セミナーのご案内</p>
                  </div>
                  <p className="seminar_btn">詳細を見る</p>
                </a></Link>
              </h2>
              <h3 className="phrase phrase-pc" css={{
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                <div css={{
                  display: 'block',
                  textAlign: 'center',
                }}>
                {/* <img src="/images/tp0102.png" alt="セレモアでは日本武道館、青山葬儀場、大規模寺院式場、ホテルなどでの社葬・お別れの会・合同葬・公葬、首都圏屈指の承り実績がございます" className="" /> */}
                <span css={{
                    background: 'linear-gradient(transparent 96%, #3D2310 0%)',
                    display: 'inline',
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    lineHeight: '1.6',
                    letterSpacing: '0.1em',
                    paddingBottom: '1px',
                    '@media only screen and (max-width: 1000px)':{
                      fontSize: '1.2rem',
                    }
                  }}><img src="/images/pi_ceremore_logo.png" alt="セレモア®" className="logo" />では日本武道館、青山葬儀場、大規模寺院式場、ホテルなどでの<br />社葬・お別れの会・合同葬・公葬、首都圏屈指の承り実績がございます</span>
                </div>
              </h3>
              <div className="btn_contact_box">
                <div className="inner">
                <Link href="tel:0120470470"><a className="btn_tell">
                  <div className="sub">24時間365日 / 通話無料</div>
                  <div className="main">0120-470-470</div>
                  </a></Link>
                <Link href="/contact/form?mode=2"><a className="btn_contact">資料請求</a></Link>
                </div>
              </div>
              <div className="syaso-desk">
                <commons.SyasouGosoudanBanner />
              </div>
              <ul className="bnrlist">
                <li>
                  <Link href="/covid19"><a>
                    <img src="/images/tp0102.jpg" alt="新型コロナウイルス対策" />
                  </a></Link>
                </li>
                <li>
                  <Link href="/plan/owakarenokai"><a>
                    <img src="/images/tp0103.jpg" alt="セレモアプロデュースのお別れの会" />
                  </a></Link>
                </li>
              </ul>
            </div>
          </section>

          <section className="s02">
            <div className="wrapper">
              <dl className="dl01">
                {/* <img className="op" src="/images/tp0202.png?v=200" alt="社葬の成功が企業の信頼を高めます" /> */}
                <div className="phrase">
                  <div className="mincho phrase-inner">
                    <h3><div className="wrapper">社葬の成功が<br />企業の信頼を<br className="op" />高めます</div></h3>
                    <div className="content">
                      <p>社葬は企業の新体制と結束力を<br />関係者に示し 信頼を高める<br />重要な儀式です</p>
                      <p>社葬を成功させるためには<br />事前の入念な準備が求められます</p>
                      <p>セレモアは 高い技術と豊富な経験と<br />実績と活かし すべてに寄り添い<br />サポートいたします</p>
                    </div>
                  </div>
                </div>
                <div className="phrase-img">
                  <img src="/images/syasou_no_seikou.png" alt="社葬の成功" />
                </div>
                {/* <img className="os" src="/images/tp0202_sp.svg?202207022105" alt="社葬の成功が企業の信頼を高めます" /> */}
              </dl>
              <div className="box01">
                <p className="t01 mincho">社葬の<br className="br-pc" />意義と目的</p>
                <ul>
                  <li>
                    <img className="" src="/images/tp0203.png" alt="社葬が果たす役割" />
                    <p className="mincho">故人を追悼する</p>
                  </li>
                  <li>
                    <img className="" src="/images/tp0204.png" alt="社葬が果たす役割" />
                    <p className="mincho">社外へ会社の<br />新体制を示す</p>
                  </li>
                  <li>
                    <img className="" src="/images/tp0205.png" alt="社葬が果たす役割" />
                    <p className="mincho">社内の結束力<br />を高める</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="modalBg"></div>
          {modals.staticMissou()}
          <section className="s22">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                {/* <img src="/images/tp2201.svg" alt="社葬の形態" /> */}
                <span className="tategaki">社葬の形態</span>
              </h3>
              <buttons.SyasouTypeListButton type="all" staticButton />
            </div>
          </section>
          <commons.ThreePointsArea />
          <section className="s23 os">
            <div className="wrapper">
              <img src="images/brand_slogan.jpg" alt="セレモアならではの心あたたまるサービスおもてなしどうぞご安心ください" />
            </div>
          </section>
          <section className="s03">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                {/* <img src="/images/tp0301.svg?202208041434" alt="セレモアの社葬プランと費用" /> */}
                <span className="tategaki"><img src="/images/ceremore_vertical_logo.svg" alt="セレモア®" className="logo" />の<br />社葬プランと費用</span>
              </h3>
              <div className="box01 slightly-colored-bg">
                {/* <img src="/images/tp0302_sp.png?202207191557" alt="プレミアムパック" className="bnr01 u-hide-pc" /> */}
                {/* <Link href="/plan/syasou-premiumpack/"><a className="u-hide-sp bnr01">
                  <img src="/images/tp0302.png?202207191557" alt="プレミアムパック" />
                </a></Link> */}
                <div className="inner">
                  <Link href="/plan/syasou-premiumpack/"><a className="pp-banner">
                  <img src="/images/plan_bg.jpg" alt="社葬とプラン" className="bg" />
                  <div className="pp-banner-wrapper">
                    <ul className="mincho pp-abstract">
                      <li><p>社葬に必要なものを含む</p></li>
                      <li><p>明確で経済的な</p></li>
                      <li><p>社葬専用パックプラン</p></li>
                    </ul>
                    <div className="pp-inner">
                      <img src="/images/premimupack_logo.svg" alt="社葬プレミアムパック®" className="logo" />
                      <p className="mincho">社葬プレミアムパックは、社葬、お別れの会、合同葬などあらゆる形態に合わせてお選びいただける社葬専用のオリジナルパッケージプランです。</p>
                      <div className="button op"><span>詳しく見る</span></div>
                    </div>
                    <div className="button os"><span>詳しく見る</span></div>
                  </div>
                  </a></Link>
                </div>
                {/* <Link href="/plan/syasou-premiumpack/"><a className="u-hide-pc btn">
                  <img src="/images/btn_premire_pack.svg" alt="詳しく見る" />
                </a></Link> */}
              </div>
              <div className="box02">
                <Link href="/contact/form?mode=2"><a className="btn_req">
                  {/* <img src="/images/tp0306_sp.png?v=100" alt="資料請求はこちら" className="os" /> */}
                  <div className="op">
                    {/* <img src="/images/tp0306.png" alt="資料請求はこちら" className="op" /> */}
                    <div className="button-wrapper">
                      <div className="left">
                        <ul>
                          <li><img src="/images/catalog_syasounosubete.jpg" alt="" /></li>
                          <li><img src="/images/catalog_syasou.jpg" alt="" /></li>
                          <li><img src="/images/catalog_premiumpack.jpg" alt="" /></li>
                        </ul>
                        <p className="t01">● 講談社発刊 / セレモア監修 社葬のすべて<br />● 社葬総合カタログ　● 社葬プレミアムパックカタログ</p>
                      </div>
                      <div className="right">
                        <p className="t01">無料で資料をお届けします</p>
                        <p className="t02">無料資料請求</p>
                        <p className="t03">請求はこちら</p>
                      </div>
                    </div>
                  </div>
                  <div className="os">
                    {/* <img src="/images/tp0306.png" alt="資料請求はこちら" className="op" /> */}
                    <div className="header">
                      <p className="t01">無料で資料をお届けします</p>
                      <p className="t02">無料資料請求</p>
                    </div>
                    <div className="button-wrapper">
                      <ul>
                        <li><img src="/images/catalog_syasounosubete.jpg" alt="" /></li>
                        <li><img src="/images/catalog_syasou.jpg" alt="" /></li>
                        <li><img src="/images/catalog_premiumpack.jpg" alt="" /></li>
                      </ul>
                      <p className="t01">● 講談社発刊 / セレモア監修 社葬のすべて<br />● 社葬総合カタログ　● 社葬プレミアムパックカタログ</p>
                    </div>
                    <p className="t03">請求はこちら</p>
                  </div>        
                </a></Link>
              </div>
            </div>
          </section>

          <section className="s04">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                {/* <img src="/images/tp0405.svg?202208041434" alt="セレモアが選ばれる理由" /> */}
                <span className="tategaki"><img src="/images/ceremore_vertical_logo.svg" alt="セレモア®" className="logo" />が<br />選ばれる理由</span>
              </h3>
              <h5><img src="/images/0401.svg" alt="首都圏随一の社葬実績と信頼" /></h5>
              <ul className="pointlist">
                <li className="pointitem">
                  <div className="header">
                    <div className="mincho title">
                      <span className="marker"><span className="content">理由<br /><span className="num">1</span></span></span>                      
                      <span className="tategaki"><span className="eisuu">4</span>万人規模の<br />社葬<span className="kutouten">・</span>お別れの会<span className="kutouten">・</span><br />合同葬<span className="kutouten">・</span>公葬の実績</span>
                    </div>
                    <div className="thumb">
                      <img src="/images/tp040101.png?202209070020" alt="首都圏随一の社葬実績と信頼" />
                    </div>
                  </div>
                  <div className="content">
                  大規模な社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。当社の葬祭スタッフは、葬祭ディレクター※1と社内認定制度の試験に合格した社葬ディレクター®の資格を持ち、事前のお打ち合わせから格式のあるお葬儀の執行までお客様のご要望に沿ってお手伝いをいたします。
                  </div>
                  <div className="sub">※1 厚生労働省認定の技能審査制度</div>
                </li>
                <li className="pointitem">
                  <div className="header">
                    <div className="mincho title">
                      <span className="marker"><span className="content">理由<br /><span className="num">2</span></span></span>                      
                      <span className="tategaki">企業<span className="kutouten">・</span>団体<span className="kutouten">・</span><span className="eisuu">2</span><span className="eisuu">5</span><span className="eisuu">0</span><span className="eisuu">0</span><br />との契約<br />個人会員<span className="eisuu">28</span>万人</span>
                    </div>
                    <div className="thumb">
                      <img src="/images/tp040102.png?202209070020" alt="企業・団体2500との契約 個人会員28万人 東京紀尾井町本社 /紀尾井町ビル6F / セミナー会場70席 常設" />
                    </div>
                  </div>
                  <div className="content">
                  当社は、2,500団体の官公庁・企業・団体と福利厚生などのご契約をさせていただいております。また、当社個人向けの会員制度「ファミリーライフクラブ」は、28万人を超える多くの会員様にご利用いただいております。なお、東京紀尾井町本社にはセミナー会場(70席 常設)、立川本社にはセミナー会場(80席 常設)を有しており、社葬・お別れの会のセミナーやご相談会等を定期的に開催しております。
                  </div>
                </li>
                <li className="pointitem li03">
                  <div className="header">
                    <div className="mincho title">
                      <span className="marker"><span className="content">理由<br /><span className="num">3</span></span></span>                      
                      <span className="tategaki">社葬ご相談デスクにて<br />きめ細やかな対応</span>
                    </div>
                    <div className="thumb">
                      <img src="/images/tp040103.png?202209070020" alt="社葬ご相談デスクにてきめ細やかな対応" />
                    </div>
                  </div>
                  <div className="content">
                  ご要望に沿って、社葬に関するあらゆる企画提案を行い、事前のお見積りを作成いたします。社葬ご相談デスクにてきめ細やかに承ります。
                  <ul className="li03_pointlist">
                    <li>電話相談</li>
                    <li>メール相談</li>
                    <li>直接のご相談</li>
                    <li>出張相談</li>
                  </ul>
                  <a className="li03_tel" href="tel:0120470470">電話相談</a>
                  </div>
                </li>
                <li className="pointitem li04">
                  <div className="header">
                    <div className="mincho title">
                      <span className="marker"><span className="content">理由<br /><span className="num">4</span></span></span>                      
                      <span className="tategaki">第三者機関が<br />認める品質</span>
                    </div>
                    <div className="thumb">
                      <img src="/images/tp040104.png?202209070020" alt="第三者機関が認める品質" />
                    </div>
                  </div>
                  <div className="content">
                    <ul className="li04_pointlist">
                      <li>国際規格 ISO9001認証</li>
                      <li>(一社)日本儀礼文化調査協会 JECIA★★★★★認定</li>
                      <li>社葬ディレクター® 資格取得者在籍</li>
                      <li>葬祭ディレクター※1 資格取得者在籍</li>
                      <li>フューネラルグランコンシェルジュ※2資格取得者在籍</li>
                      <li>優良防火対象認定(優マーク）の葬儀専用式場保有</li>
                    </ul>
                  </div>
                  <div className="sub">
                    <ul className="sub-list">
                      <li>厚生労働省認定の技能審査制度</li>
                      <li>(一社)日本儀礼文化調査協会認定の接遇・おもてなしの認定制度</li>
                    </ul>
                  </div>
                </li>
                <li className="pointitem">
                  <div className="header">
                    <div className="mincho title">
                      <span className="marker"><span className="content">理由<br /><span className="num">5</span></span></span>                      
                      <span className="tategaki">直接のご相談窓口<br />セレモピアン</span>
                    </div>
                    <div className="thumb">
                      <img src="/images/tp040105.png?202209070020" alt="直接のご相談窓口セレモピアン" />
                    </div>
                  </div>
                  <div className="content">
                  お葬儀は人生最後の大切な儀式です。後悔しないために、事前の相談が安心です。セレモアは仏事・葬儀に関するあらゆる相談や、お葬儀後のさまざまな諸手続きのお手伝いを承ります。無料でご利用いただける仏事・葬儀のご相談窓口「セレモピアン」を、百貨店・駅ビル・大型ショッピングセンターなどに設けております。
                  </div>
                </li>
              </ul>
              <div className="service_area">
                <h4 className="mincho">サービスエリアについて</h4>
                <div className="body">
                  <div className="body__inner">
                    <div className="map">
                      <img src="/images/pi_area_map2.png?202209070020" alt="" />
                    </div>
                    <p className="mincho"><img src="/images/com_ceremore_logo.svg" alt="セレモア®" width={100} /> は幅広いネットワークであらゆるお式に対応いたします。サービスエリア内にご利用いただける式場・ホテルが多数ございます。</p>
                  </div>
                  <Link href="/sougijou">
                  <a className="btn">詳しくはこちら</a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="s05 slightly-colored-bg">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                {/* <img src="/images/tp0501.svg?202206281550" alt="事例" /> */}
                <span className="tategaki">社葬<span className="kutouten">・</span>お別れの会<span className="kutouten">・</span><br />合同葬の事例</span>
              </h3>
              <CaseSlider syasou owakarenokai goudousou labeled />
              <div>
                <buttons.ViewListButton href="/case" marginTop={22} marginBottom={12} />
              </div>
            </div>
          </section>

          <section className="s06">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                {/* <img src="/images/tp0601.svg" alt="主な式場・ホテル" /> */}
                <span className="tategaki">ご紹介式場<span className="kutouten">・</span><br />ホテル</span>
              </h3>
              <h5>
                <p className="u-hide-pc mincho">豊富な経験で培った確かなノウハウで<br />最適な式場をご提案いたします</p>
                <img src="/images/tp060101.svg" alt="豊富な経験で培った確かなノウハウで最適な式場を" className="u-hide-sp" />
              </h5>
              <ul className="hall">
                <li>
                    <Link href="/sougijou#shikijou">
                      <a>
                        <div className="ttl">
                          {/* <img src="/images/tp060201.svg" alt="葬儀専用式場" /> */}
                          <div className="mincho tategaki">葬儀専用式場</div>
                        </div>
                        <div className="pict">
                          <img src="/images/hr0001.jpg" alt="葬儀専用式場" className="op" />
                          <img src="/images/hr0001_sp.jpg?202206291629" alt="葬儀専用式場" className="os" />
                        </div>
                        <div className="wrapper">
                          葬儀専用式場のため、多数の会葬者をお迎えする動線が取りやすく、厳粛な儀式を執り行うのに相応しい式場となります。
                        </div>
                      </a>
                    </Link>
                </li>
                <li>
                    <Link href="/sougijou#hotel">
                      <a>
                        <div className="ttl">
                          {/* <img src="/images/tp060202.svg" alt="ホテル" /> */}
                          <div className="mincho tategaki">ホテル</div>
                        </div>
                        <div className="pict">
                          <img src="/images/hr0002.jpg" alt="ホテル" className="op" />
                          <img src="/images/hr0002_sp.jpg?202206291629" alt="ホテル" className="os" />
                        </div>
                        <div className="wrapper">
                        交通アクセスが良く、会葬者にとっても利便性の高い会場です。受付なども室内に設けることができますので、天候に左右されることがありません。
                        </div>
                      </a>
                    </Link>
                </li>
                <li>
                    <Link href="/sougijou#other">
                      <a>
                        <div className="ttl">
                          {/* <img src="/images/tp060203.svg" alt="その他の施設" /> */}
                          <div className="mincho tategaki">その他の施設</div>
                        </div>
                        <div className="pict">
                          <img src="/images/hr0003.jpg" alt="その他の施設" className="op" />
                          <img src="/images/hr0003_sp.jpg?202206291629" alt="その他の施設" className="os" />
                        </div>
                        <div className="wrapper">
                        日本武道館・東京国際フォーラム・東京文化会館などの多目的施設や音楽ホール、企業・団体で保有する施設でも執り行うことができます。
                        </div>
                      </a>
                    </Link>
                </li>
              </ul>
            </div>
            <buttons.ViewMoreButton href="/sougijou" marginTop={20} />
          </section>

          <SeminarInfo className="s08 slightly-colored-bg" />

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
