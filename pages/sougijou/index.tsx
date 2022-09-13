import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Category, FacilityCard } from '@components/sougijiou'
import { HOTELS, OTHERS, SHIKIJIOU } from '@lib/shikijiou'
import { Breadcrumb } from '@components/breadcrumb'
import { css } from '@emotion/react'
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
        <title>葬儀場・ホテル紹介 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「葬儀場・ホテル紹介」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-sougijou">
        <main>
          <section className="s02">
            <div className="wrapper">
              <Breadcrumb
                targetpage="葬儀場・ホテル紹介"
              />
              <FirstView
                imagePath="/images/pi_fv_master.png?202207191557"
                imagePathSp="/images/pi_fv_master_sp.png?202207191557"
                alt="葬儀場・ホテル紹介"
                title={<>社葬・お別れの会・合同葬などあらゆる形態・ご要望に合わせた式場を提案いたします</>}
                description="※詳細についてはお問い合わせください"
                shrinkTitle
                titleWidthOnShrinkPercent={77}
                titleMarginTop={-40}
                titleMarginTopTablet={-30}
                titleMarginTopSp={2}
                descriptionFontSize={12}
              />

              <div className="facility-category flex-wrapper justify-content-space-around unchange-flex-direction-on-tablet">
                <Category
                  jumpTo="#shikijou"
                  imgPath="/images/pi_categorybox_img1.png?v=202206161540"
                  imgPathSp="/images/pi_categorybox_img1_sp.png?202206291629"
                  content="葬儀専用式場のため、多数の会葬者をお迎えする動線が取りやすく、厳粛な儀式を執り行うのに相応しい式場となります。"
                  buttonImgPath="/images/pi_categorybox_button1.png"
                />
                <Category
                  jumpTo="#hotel"
                  imgPath="/images/pi_categorybox_img2.png?v=202206161540"
                  imgPathSp="/images/pi_categorybox_img2_sp.png?202206291629"
                  content="交通アクセスが良く、会葬者にとっても利便性の高い会場です。受付なども室内に設けることができますので、天候に左右されることがありません。"
                  buttonImgPath="/images/pi_categorybox_button2.png"
                  className="hotel"
                />
                <Category
                  jumpTo="#other"
                  imgPath="/images/pi_categorybox_img3.png?v=202206161540"
                  imgPathSp="/images/pi_categorybox_img3_sp.png?202206291629"
                  content="日本武道館・国際フォーラム・東京文化会館などの多目的施設や音楽ホール、企業・団体で保有する施設でも執り行うことができます。"
                  buttonImgPath="/images/pi_categorybox_button3.png"
                  className="others"
                />
              </div>
            </div>
          </section>

          <section className="s03 slightly-colored-bg">
            <div className="wrapper">
              <h3>
                <img src="/images/pi0201.png?v=202206180100" alt="式場選びのポイント" />
              </h3>

              <h3 id="shikijou" className="mincho title">葬儀専用式場</h3>

              <ul>
                {SHIKIJIOU.map((item, i) => (
                  <FacilityCard
                    key={item.id}
                    type="shikijou"
                    id={item.id}
                    name={
                      item.ceremore
                        ? item.ceremoreFullLogo
                          ? <div className="full-logo">
                              <img src={item.ceremoreFullLogo} alt={item.name} />
                            </div>
                          : <div className="with-logo">
                              <img src="/images/pi_ceremore_logo.png" alt="セレモア" /><div>{item.name.replace("セレモア", "")}</div>
                            </div>
                        : item.name
                    }
                    address={item.address}
                    imgPath={`${item.imagePath}?v=202206132240`}
                    hasMorgue={item.hasMorgue}
                    description={item.description}
                    ceremore={item.ceremore}
                  />
                ))}
              </ul>

              <h3 id="hotel" className="mincho title">ホテル</h3>
              <div css={css`text-align:center; margin-top: 16px;`} className="caption mincho">五十音順、都県別に掲載しております。</div>

              <ul>
                {HOTELS.map(item => (
                  <FacilityCard
                    key={item.id}
                    type="hotel"
                    id={item.id}
                    name={
                      item.ceremore
                        ? item.ceremoreFullLogo
                          ? <div className="full-logo">
                              <img src={item.ceremoreFullLogo} alt={item.name} />
                            </div>
                          : <div className="with-logo">
                              <img src="/images/pi_ceremore_logo.png" alt="セレモア" /><div>{item.name}</div>
                            </div>
                        : item.name
                    }
                    address={item.address}
                    imgPath={`${item.imagePath}?v=202206281600`}
                    hasMorgue={item.hasMorgue}
                    description={item.description}
                    ceremore={item.ceremore}
                  />
                ))}
              </ul>

              <h3 id="other" className="mincho title">その他の施設</h3>

              <ul>
                {OTHERS.map(item => (
                  <FacilityCard
                    key={item.id}
                    type="other"
                    id={item.id}
                    name={
                      item.ceremore
                        ? item.ceremoreFullLogo
                          ? <div className="full-logo">
                              <img src={item.ceremoreFullLogo} alt={item.name} />
                            </div>
                          : <div className="with-logo">
                              <img src="/images/pi_ceremore_logo.png" alt="セレモア" /><div>{item.name}</div>
                            </div>
                        : item.name
                    }
                    address={item.address}
                    imgPath={`${item.imagePath}?v=202206132240`}
                    hasMorgue={item.hasMorgue}
                    description={item.description}
                    ceremore={item.ceremore}
                  />
                ))}
              </ul>
            </div>
          </section>

          <section className="s04">
            <div className="wrapper">
              <div className="flex-wrapper justify-content-center align-items-center">
                <div className="map">
                  <img src="/images/pi_area_map.png" alt="サービスエリア" />
                </div>
                <div className="area mincho">
                  <p><img src="/images/com_ceremore_logo.svg" alt="セレモア®" width={100} /> は幅広いネットワークであらゆるお式に対応いたします。サービスエリア内にご利用いただける式場・ホテルが多数ございます。</p>
                </div>
                <div className="area sm mincho">
                  <p><img src="/images/com_ceremore_logo.svg" alt="セレモア®" width={100} /> は幅広いネットワークであらゆるお式に対応いたします。サービスエリア内にご利用いただける式場・ホテルが多数ございます。</p>
                </div>
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
