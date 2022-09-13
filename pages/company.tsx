import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { constants } from 'buffer'
import * as Constants from '@lib/Constants';
import { FirstView } from '@components/firstview'

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      // const $ = window.jQuery;
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  return (
    <>
      <Head>
        <title>企業情報 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「企業情報」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-company">
        <main>
          <section className="s01">
            <div className="wrapper">
              <Breadcrumb
                targetpage="企業情報"
              />
              <FirstView
                imagePath="/images/cm_fv.png?202207191557"
                imagePathSp="/images/cm_fv_sp.png?202207191557"
                alt="企業情報"
               />
            </div>
          </section>

          <section id="info" className="s02 slightly-colored-bg">
            <div className="wrapper">
              {/* <div className="logo_ceremore_q">
                <img src="/images/logo_ceremore_q.svg?v=200" alt="セレモア品質"></img>
              </div> */}
              <h3 className="mincho sylogo">
                <span className="tategaki">会社概要</span>
              </h3>
              <table>
                <tbody>
                  <tr>
                    <th>
                      会社名
                    </th>
                    <td>
                      <p>株式会社セレモア</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      創業
                    </th>
                    <td>
                      <p>1968年 (昭和43年) 8月</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      設立
                    </th>
                    <td>
                      <p>1970年 (昭和45年) 4月</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      代表者
                    </th>
                    <td>
                      <p>辻　正司</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      所在地
                    </th>
                    <td>
                      <div className="location-wrapper">
                        <div>
                          <p>《東京紀尾井町本社》</p>
                          <p>〒102-0094 東京都千代田区紀尾井町3-12 紀尾井町ビル 6階<br />TEL：03-3556-1111</p>
                        </div>
                        <div>
                          <a className="map" href="https://goo.gl/maps/q1AwsvCn4czKgzmr7" target="_blank" rel="noreferrer">地図を見る</a>
                        </div>
                      </div>
                      <br />
                      <div className="location-wrapper">
                        <div>
                          <p>《立川本社》</p>
                          <p>〒190-0004 東京都立川市柏町1-26-4<br />TEL：042-534-1111</p>
                        </div>
                        <div>
                          <a className="map" href="https://goo.gl/maps/J8x2i3Wg6MdRogAB8" target="_blank" rel="noreferrer">地図を見る</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      事業内容
                    </th>
                    <td>
                      <p>葬儀総合サービス事業<br />葬儀式場管理サービス事業<br />仏事ご相談承りサービス事業<br />仏壇・仏具類の販売事業<br />創作骨壺の販売事業<br />患者移送サービス事業<br />介護用品の販売・レンタル事業<br />生花の販売事業<br />コンサートホール運営事業<br />各種会員の勧誘・募集事業</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="company-list">
                <h4 className="ttl">
                  <img src="/images/cmhd.svg?v=200" alt="セレモアホールディングスグループ" />
                </h4>
                <div className="op">
                  <ul>
                    {(()=>{
                      const a = [];
                      const data = Constants.COMPANY_LIST;
                      for(const k in data){
                        var src = "/images/cv030"+(parseInt(k)+1)+".jpg"
                        a.push(
                          <li className={data[k].id}>
                            <div className="thumb">
                              <img src={data[k].img.src} alt={data[k].name} />
                            </div>
                            <div className="content">
                              <p className="name">{data[k].name}</p>
                              <p className="address">{data[k].address}</p>
                              <p className="tel">{data[k].tel}(大代表)</p>
                            </div>
                          </li>
                        );
                      }
                      return a;
                    })()}
                  </ul>
                </div>
                <div className="os">
                  <ul className="ul1">
                    {(()=>{
                      const a = [];
                      const data = Constants.COMPANY_LIST;
                      for(const k in data){
                        var src = "/images/cv030"+(parseInt(k)+1)+".jpg"
                        if(parseInt(k)<2) {
                          a.push(
                            <li className={data[k].id}>
                              <div className="thumb">
                                <img src={data[k].img.src} alt={data[k].name} />
                              </div>
                              <div className="content">
                                <p className="name">{data[k].name}</p>
                                <p className="address">{data[k].address}</p>
                                <p className="tel">{data[k].tel}(大代表)</p>
                              </div>
                            </li>
                          );
                        }
                      }
                      return a;
                    })()}
                  </ul>
                  <ul className="ul2">
                    {(()=>{
                      const a = [];
                      const data = Constants.COMPANY_LIST;
                      for(const k in data){
                        var src = "/images/cv030"+(parseInt(k)+1)+".jpg"
                        if(parseInt(k)>=2) {
                          a.push(
                            <li className={data[k].id}>
                              <div className="thumb">
                                <img src={data[k].img.src} alt={data[k].name} />
                              </div>
                              <div className="content">
                                <p className="name">{data[k].name}</p>
                                <p className="address">{data[k].address}</p>
                                <p className="tel">{data[k].tel}(大代表)</p>
                              </div>
                            </li>
                          );
                        }
                      }
                      return a;
                    })()}
                  </ul>
                </div>
              </div>
              <p className="t01">他、支社・営業所・店舗・式場にて、<br className="os" />社葬、お別れの会、合同葬に関するご相談を承ります。</p>
            </div>
          </section>

          <section id="group" className="s04">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">グループ事業</span>
              </h3>
              <ul className="servicelist">
                <li>
                  <img src="/images/cm040101.png" alt="葬儀事業" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">家族葬・一般葬</h6>
                    </div>
                    <p className="t02">伝統的な白木祭壇、デザイン豊富な生花祭壇よりお選びいただけます。オリジナルデザインの祭壇も承ります。</p>
                    <a href="https://www.ceremore.co.jp/" target="_blank" rel="noopener noreferrer">詳細はこちら</a>
                  </div>
                </li>
                <li>
                  <img src="/images/cm040201.png" alt="仏壇・仏具販売" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">お仏壇のセレモア</h6>
                    </div>
                    <p className="t02">仏壇・仏具神具の総合専門店チェーン。最新デザインのお仏壇から高級大型仏壇まで豊富に取り揃えております。</p>
                    <a href="https://b.ceremore.jp/" target="_blank" rel="noopener noreferrer">詳細はこちら</a>
                  </div>
                </li>
                <li>
                  <img src="/images/cm040301.png" alt="患者移送サービス" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">東民急</h6>
                    </div>
                    <p className="t02">日本で初めての民間救急サービスとして設立された患者移送サービスです。</p>
                    <a href="https://minkyu.ceremore.jp/" target="_blank" rel="noopener noreferrer">詳細はこちら</a>
                  </div>  
                </li>
                <li>
                  <img src="/images/cm040401.png" alt="介護用品販売" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">健康館</h6>
                    </div>
                    <p className="t02">在宅療養機器・介護用品を取り揃えた、福祉用具専門店を運営しております。</p>
                    <a href="https://care.ceremore.jp/" target="_blank" rel="noopener noreferrer">詳細はこちら</a>
                  </div>
                </li>
                <li>
                  <img src="/images/cm040501.png" alt="生花・お花のギフト" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">花つかさ</h6>
                    </div>
                    <p className="t02">お祝い、お見舞い、追悼の花など全国どこへでもお送りいたします。</p>
                    <a href="https://www.ceremore.co.jp/company/business/flower/" target="_blank" rel="noopener noreferrer">詳細はこちら</a>
                  </div>
                </li>
                <li>
                  <img src="/images/cm040601.png" alt="お香・線香" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">香咲</h6>
                    </div>
                    <p className="t02">厳選された白壇、沈香、伽羅などの香木のお香から、香水のような華やかな香りのお香まで豊富に取り揃えております。</p>
                  </div>
                </li>
                <li>
                  <img src="/images/cm040701.png?202207111930" alt="葬儀生前契約" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">葬儀生前契約</h6>
                    </div>
                    <p className="t02">事前にお葬儀費用を銀行に預ける安心のシステムです。</p><p className="t02">提携銀行：きらぼし銀行/三井住友銀行</p>
                    <a href="https://www.ceremore.co.jp/support/" target="_blank" rel="noopener noreferrer">詳細はこちら</a>
                  </div>
                </li>
                <li>
                  <img src="/images/cm040801.png" alt="一般財団法人セレモア文化財団" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">セレモアコンサートホール武蔵野</h6>
                    </div>
                    <img src="/images/cm040802.png" alt="セレモアコンサートホール武蔵野" className="photo2" />
                    <p className="t02">美しく豊かな響きをお楽しみください。</p>
                  </div>
                </li>
                <li>
                  <img src="/images/cm040901.png" alt="イベントの企画・運営" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">イベントの企画・運営</h6>
                    </div>
                    <p className="t02">新庁舎・新社屋落成、各種式典、周年行事から大規模イベントまで多彩なニーズにお応えいたします。</p>
                  </div>
                </li>
                <li>
                  <img src="/images/cm041001.png" alt="法人会員制度" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">法人会員制度</h6>
                    </div>
                    <p className="t02">社員・職員の皆様の福利厚生、社葬のご相談窓口として、慶事・弔事のご相談を承ります。</p>
                  </div>
                </li>
                <li>
                  <img src="/images/cm041101.png" alt="仏事・葬儀ご相談窓口" className="photo" />
                  <div className="content">
                    <div className="header">
                      <h6 className="logo">セレモピアン</h6>
                    </div>
                    <p className="t02">平成2年、業界初の仏事・葬儀に関する無料ご相談窓口『セレモピアン』をJR立川駅ビルWill（現：LUMINE）に開設いたしました。経験豊かなスタッフが、仏事・葬儀に関するご相談を直接承ります。</p>
                    <a href="https://soudan.ceremore.jp/" target="_blank" rel="noopener noreferrer">詳細はこちら</a>
                  </div>
                </li>
              </ul>
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
