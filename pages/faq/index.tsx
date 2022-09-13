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
import { FaqBox, FaqBoxV2, FaqReferenceSection } from '@components/faq'
import { FirstView } from '@components/firstview'
import { useWindowDimensions } from '@lib/util'
import { FAQ_CATEGORY_LIST } from '@lib/faq'

const Page: NextPage = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();

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
        <title>社葬のQ&amp;A │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「社葬のQ&amp;A」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-faq">
        <main>
          <section className="s01">
            <div className="wrapper">
              <Breadcrumb
                targetpage="社葬のQ&A"
              />
              <FirstView
                imagePath="/images/ft_fv.png?202207191557"
                imagePathSp="/images/ft_fv_sp.png?202207191557"
                alt="社葬のQ&A"
                title={width > 650 ? <>社葬、お別れの会について、<br />よくあるご質問を掲載しております。</> : <>社葬、お別れの会について、よくあるご質問を掲載しております。</>}
                description="社葬を滞りなく執り行うための具体的な資料や参列する際のマナーなどさまざまな項目を解かりやすくまとめました。社葬の準備から社葬後の挨拶回り、取引先から訃報を受けたときの対応など、総務、人事、秘書のご担当者が知っておくとよい事柄を掲載しております。"
                shrinkTitle
                shrinkTitleSp
                titleMargin="-9% 0 0 0"
                titleMarginSp="-6% 11% 0 0"
              />
            </div>
          </section>

          <section className="faq">
            <div className="wrapper">
              <div className="faq-wrapper flex-wrapper">
                {Object.entries(FAQ_CATEGORY_LIST).map(([key, value]) => {
                  let title = value.title;
                  if(key === "covid19#covid19_faq") {
                    title = width > 600
                      ? "コロナ禍での社葬・お別れの会"
                      : width < 375
                        ? "コロナ禍での社葬・お別れの会"
                        : "コロナ禍での\n社葬・お別れの会";
                  } else if(key === "until") {
                    title = width > 600
                      ? "ご逝去直後から当日まで"
                      : width < 375
                        ? "ご逝去直後から当日まで"
                        : "ご逝去直後から\n当日まで";
                  }

                  return <FaqBoxV2
                    key={key}
                    category={key}
                    title={title}
                    desc={value.desc}
                    imgPath={value.imgPath}
                  />
                })}
              </div>
            </div>
          </section>

          <FaqReferenceSection />
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
