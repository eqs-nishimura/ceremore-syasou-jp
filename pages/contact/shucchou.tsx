import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from "@components/breadcrumb"
import { TelBanner, Telbox } from "@components/telbox"
import * as commons from "@components/commons"
import { FirstView } from '@components/firstview'
import { css } from '@emotion/react'

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      // const $ = window.jQuery;
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
      window.desk();
    }
  });

  return (
    <>
      <Head>
        <title>出張相談 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「出張相談」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-contact-shucchou">
        <main>
        <section className="s01">
          <div className="wrapper">
            {Breadcrumb({
              pagenames: ['セレモアの社葬トップ'],
              pageurls: ['/'],
              targetpage: '社葬出張相談のお申し込み',
            })}
             <FirstView
              imagePath="/images/shucchou_top_image.png?202207191557"
              imagePathSp="/images/shucchou_top_image_sp.png?202207191557"
              alt="社葬出張相談のお申し込み"
              title="お好きな場所で社葬のご相談が可能です"
              description={<>セレモアでは、ご希望の場所に担当者が直接お伺いする「無料出張相談」を承っております。<br />事前相談をすることで、葬儀の内容や流れ、葬儀費用の概算を把握することができ、急な場合でも、慌てず落ち着いて葬儀に対応することができます。</>}
              shrinkTitle
              shrinkDescription
              titleMargin="-3% 0 0"
              descriptionMargin="0 0 3%"
            />
            <div css={css`margin-top: 20px;`}>
              <TelBanner />
            </div>
          </div>
        </section>

        <section className="s02">
          <div className="wrapper">
            <div className='shucchou-section-top'>
              <img src="/images/shucchou_houmon_nagare.png" alt="ご訪問までの流れ" />
            </div>
            <div className='houmon-nagare houmon-nagare-1'>
              <div className='houmon-nagare-content'>
                <div>
                  <div className='houmon-nagare-content-title'>
                  出張相談のお申込み
                  </div>
                  <div className='houmon-nagare-content-text'>
                  ご相談のお申込みは、セレモア電話ご相談窓口、もしくはこのWebサイトのお問い合わせフォームにご連絡ください。
                  </div>
                  <div className='houmon-form'>
                    <Link href="/contact/form"><a>
                      <img src="/images/shucchou_form.png" alt="お問い合わせフォーム" />
                    </a></Link>
                  </div>
                </div>
                <div>
                  <div className='houmon-tel'>
                    <div className='houmon-text-1'>セレモア電話ご相談窓口</div>
                    <div className='houmon-tel-img'>
                      <a href='tel:0120-470-470'>
                        <img src="/images/tel-link.png" alt="電話" />
                      </a>
                    </div>
                    <div className='houmon-text-2'>ご相談無料・24時間365日対応</div>
                  </div>
                </div>
              </div>
              <div className='houmon-nagare-no'>
                <img src="/images/shucchou_nagare_no1.png" alt="電話" />
              </div>
            </div>

            <div className='shucchou_nagare_arrow'>
              <img src="/images/shucchou_nagare_arrow.png" alt="電話" />
            </div>

            <div className='houmon-nagare houmon-nagare-2'>
              <div className='houmon-nagare-content'>
                <div className='houmon-nagare-left-content'>
                  <div className='houmon-nagare-content-title'>
                  セレモアよりご返信
                  </div>
                  <div className='houmon-nagare-content-text'>
                  弊社よりご返信を申し上げ、訪問日、ご希望の待ち合わせ場所、内容等についてお打ち合わせいたします。
                  </div>
                </div>
                <div className='houmon-nagare-2-img'>
                  <img src="/images/shucchou_no2_image.png" alt="セレモアよりご返信" />
                </div>
              </div>
              <div className='houmon-nagare-no'>
                <img src="/images/shucchou_nagare_no2.png" alt="電話" />
              </div>
            </div>

            <div className='shucchou_nagare_arrow'>
              <img src="/images/shucchou_nagare_arrow.png" alt="電話" />
            </div>

            <div className='houmon-nagare houmon-nagare-2'>
              <div className='houmon-nagare-content'>
                <div className='houmon-nagare-left-content'>
                  <div className='houmon-nagare-content-title'>
                  ご訪問〜相談の実施
                  </div>
                  <div className='houmon-nagare-content-text'>
                  ご指定の場所にセレモア担当者がお伺いし、お葬儀の相談を承ります。
                  </div>
                </div>
                <div className='houmon-nagare-2-img'>
                  <img src="/images/shucchou_no3_image.png" alt="ご訪問〜相談の実施" />
                </div>
              </div>
              <div className='houmon-nagare-no'>
                <img src="/images/shucchou_nagare_no3.png" alt="電話" />
              </div>
            </div>
          </div>
        </section>

        <commons.ThreePointsArea />


          {/* <section className="s01">
            <div className="wrapper">
              <h2 className="mincho">社葬ご相談デスク</h2>
              <img src="/images/cs0101.png" alt="セミナー会場" className="photo" />
            </div>
          </section>

          <section className="s02">
            <div className="wrapper">
              <div className="box">
                <p className="mincho">セレモアでは各本社・支社のご相談窓口におきまして、豊富な経験をもった専門スタッフが親身にご相談を承ります。お気軽にお申し付けください。</p>
                <img src="/images/cs0201.png" alt="スタッフ" />
              </div>
            </div>
          </section>

          <section className="s03">
            <h3 className="mincho">社葬ご相談窓口</h3>
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
