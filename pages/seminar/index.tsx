import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { BoxTitle, SeminarBox } from '@components/seminar'
import { SEMINARS } from '@lib/seminars'
import { Breadcrumb } from '@components/breadcrumb'
import { FirstView } from '@components/firstview'
import { useWindowDimensions } from '@lib/util'
import { css } from '@emotion/react'

const Page: NextPage = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
      window.tab_seminar();
    }
  });

  return (
    <>
      <Head>
        <title>社葬セミナーのご案内 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「社葬セミナーのご案内」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-seminar">
        <main>
          <section className="s02">
            <div className="wrapper">
              <Breadcrumb
                targetpage="社葬セミナー"
              />
              <FirstView
                imagePath="/images/se_fv_2.png?202207191557"
                imagePathSp="/images/se_fv_2_sp.png?202207191557"
                alt="社葬セミナー"
                title={<>社葬についての知識と備えは企業にとって重要なリスクマネジメントです</>}
                description={<>社葬の準備は総務、人事、秘書のご担当者にとって危機管理の一つです。セレモアでは社葬セミナーを無料で開催しています。社葬セミナーへの参加は、いざという時の備えの必要性を社内で共有するきっかけとなるはずです。ぜひ、ご参加ください。</>}
              />

              <div className="box01">
                <BoxTitle title="実務セミナー" className="title-margin" />
                <dl className="dl01">
                  <dt>
                    <p className="t01">東京紀尾井町本社セミナー会場(紀尾井町ビル6F、70席常設)、立川本社セミナー会場(80席常設)で月1回開催されている「会社がすべき事前準備 実務セミナー」は、数多くの企業の方が参加しています。<br />万が一のリスクに備えて、多くの企業様がセミナーにご参加いただいています。</p>
                    <img src="/images/se0202.png" alt="社葬" className="photo" />
                  </dt>
                  <dd>
                    <img src="/images/se0201.png" alt="紀尾井町ビル" />
                  </dd>
                </dl>
                <div className="for-narrow">
                  <div>
                    <p className="t01">東京紀尾井町本社セミナー会場(紀尾井町ビル6F、70席常設)、立川本社セミナー会場(80席常設)で月1回開催されている「会社がすべき事前準備 実務セミナー」は、数多くの企業の方が参加しています。<br />万が一のリスクに備えて、多くの企業様がセミナーにご参加いただいています。</p>
                  </div>
                  <div className="image-wrapper">
                    <img src="/images/se0202_sp.png" alt="社葬" className="photo" />
                    {/* <img src="/images/se0201.png" alt="紀尾井町ビル" /> */}
                    <img src="/images/se0201_other.png" alt="紀尾井町ビル" />
                  </div>
                  {width <= 600 &&
                    <div css={css`
                      margin-top: 12px;
                      font-size: 12px;
                      padding: 12px;
                      background-color: #eadfcc;
                    `}>
                      東京紀尾井町本社&nbsp;/&nbsp;紀尾井町ビル6Fセミナー会場&nbsp;70席&nbsp;常設
                    </div>
                  }
                </div>
              </div>

              <div className="box01">
                <BoxTitle title="体験セミナー" className="title-margin" />
                <div>
                  <div className="half half-sentence">
                    <p className="t01">「社葬・お別れの会 体験セミナー」では、実際の会場に祭壇等を設営し、参加された方には献花等も体験していただいております。</p>
                  </div>
                  <div className="flex-wrapper">
                    <div className="half">
                      <img src="/images/se0203.png" alt="社葬" className="photo" />
                    </div>
                    <div className="half">
                      <img src="/images/se0204.png" alt="社葬" className="photo" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="box01">
                <p className="t03 mincho">セミナー参加のメリット</p>
                <ul className="list02">
                  <li>{width > 880 ? <>いざというとき、<br />どう対応すべきかが<br />明確になる</> : <>いざというとき、どう対応すべきかが明確になる</>}</li>
                  <li>{width > 880 ? <>社葬の事前準備を<br />組織的に進める<br />きっかけとなる</> : <>社葬の事前準備を組織的に進めるきっかけとなる</>}</li>
                  <li>{width > 880 ? <>体験セミナーで<br />より具体的に社葬が<br />イメージできる</> : <>体験セミナーでより具体的に社葬がイメージできる</>}</li>
                </ul>
              </div>

              <div className="nobox">
                <p className="t02 mincho">このような方にご参加いただいています</p>
                <ul className="list01">
                  <li>
                    <img src="/images/se0205.png?v=800" alt="参加者" />
                  </li>
                  <li>
                    <img src="/images/se0206.png?v=800" alt="参加者" />
                  </li>
                  <li>
                    <img src="/images/se0207.png?v=800" alt="参加者" />
                  </li>
                  <li>
                    <img src="/images/se0208.png?v=800" alt="参加者" />
                  </li>
                </ul>

              </div>
            </div>
          </section>

          <section className="s03" id="sche">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">社葬セミナー<br />スケジュール</span>
              </h3>
              <div className="box01 slightly-colored-bg">
                <ul className="tablist">
                  <li className="active tab01">基礎知識<br className="os" />実践セミナー</li>
                  <li className="tab02">体験セミナー</li>
                  <li className="tab03">弔辞マナー<br className="os" />セミナー</li>
                </ul>
                <ul className="contentslist">
                  <li className="tab01 tab">
                    <ul>
                      {SEMINARS.map(item => (
                        <SeminarBox
                          key={item.id}
                          id={item.id}
                          seminarTitle={item.seminarTitle}
                          location={item.location}
                          date={item.date}
                          startTime={item.startTime}
                          endTime={item.endTime}
                          capacity={item.capacity}
                          free={item.free}
                          photoPath={item.photoPath}
                          seminarType={item.seminarType}
                        />
                      ))}
                    </ul>
                  </li>
                </ul>

                {/* <a href="" className="bnr">
                  <img src="/images/se0304.png" alt="無料進呈中" />
                </a> */}
              </div>
            </div>
          </section>

          {/* <section className="s04">
            <div className="wrapper">
              <ul className="photolist">
                <li>
                  <img src="/images/se0305.jpg" alt="葬儀" />
                </li>
                <li>
                  <img src="/images/se0306.jpg" alt="葬儀" />
                </li>
                <li>
                  <img src="/images/se0307.jpg" alt="葬儀" />
                </li>
              </ul>
            </div>
          </section> */}
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
