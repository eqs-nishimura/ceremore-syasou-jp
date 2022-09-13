import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import * as modals from "@components/modals"
import { Breadcrumb } from '@components/breadcrumb'
import * as buttons from '@components/buttons'
import { CaseSlider } from '@components/slider'
import { SougiFlow } from '@components/flow'
import * as commons from "@components/commons"
import { FirstView } from '@components/firstview'
import { SyasouTypeFaqBox } from '@components/faq'

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const $ = window.jQuery;
    if (typeof window !== 'undefined' && $) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
      window.qa();
      window.syasou();

      try{
        window.jQuery('.slider').slick({
          autoplay: true,
          autoplaySpeed: 4500,
          speed : 1000,
          arrows: true,
          dots: true,
          centerMode: true,
          centerPadding: 'calc((100% - 530px) / 2)',
          responsive: [{
            breakpoint: 881,
            settings: {
              centerPadding: 'calc((100% - 300px) / 2)',
            }
          }]
        });
      }catch(e){}

    }
    window.document.body.classList.remove("modalOpened");
  });

  return (
    <>
      <Head>
        <title>合同葬 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「合同葬」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet" />
      </Head>

      <Header/>

      <div id="page-plan-goudousou">
        <main>
          <section className="s01">
            <div className="wrapper">
              <Breadcrumb
                targetpage="合同葬"
              />
              <FirstView
                imagePath="/images/gd0101.png?202207191557"
                imagePathSp="/images/gd0101_sp.png?202207191557"
                alt="合同葬"
                title="ご遺族と会社が共に追悼するお葬儀"
                description="ご遺族と企業が合同で行う葬儀を「合同葬」といいます。ご遺族の意思・宗旨を反映した葬儀となるため、限られた時間の中で、ご遺族と会社との意見調整が必要です。(2つ以上の企業や団体が合同で行う葬儀なども合同葬といわれ、密葬後に行う場合もございます。)"
                titleMarginTop={-18}
                titleMarginTopSp={0}
              />
              <dl className="dl02">
                <dt>
                  <img src="/images/gd0103.svg" alt="流れ" />
                  <p>※ご逝去後、5日〜1週間前後に行われるのが一般的です。</p>
                </dt>
              </dl>
            </div>
          </section>
          <commons.SyasouSuchAsCase type="goudousou" phrases={[
            "「故人の功績をしっかりと社内外へ伝え、弔意を示したい」",
            <>「密葬をせずに、<br className="os" />一度で葬儀を行いたい」</>,
            "「会社と遺族で費用を分けたい」",
          ]} />
          {/* <div className="modalBg"></div>
          <div className="modalContents goudousou opened">
            <modals.SyasouDialogJizenjunbi type="合同葬" />
            <modals.SyasouDialogGoseikyo type="合同葬" />
            {modals.Missou()}
          </div> */}
          <section className="s04">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">合同葬当日までの<br />スケジュール</span>
              </h3>
              <div className="box01 slightly-colored-bg">
                <SougiFlow type="goudousou" />
              </div>
            </div>
          </section>

          {/* <section className="s05">
            <div className="wrapper">
              <h6>
                <img src="/images/sy0501.svg" alt="費用と事例" />
              </h6>
              <p className="t01">式場・参加者数、その他条件により、<br />明確な費用にてお見積り致します。</p>
              <ul>
                <li className="li01">
                  <p className="t02 mincho">大規模社葬</p>
                  <p className="t03 mincho"><span>980</span>万円～</p>
                  <p className="t04 mincho"><span className="span01">参列者</span><span className="span02">約</span>500<span className="span02">人～</span></p>
                </li>
                <li className="li02">
                  <p className="t02 mincho">中小規模社葬</p>
                  <p className="t03 mincho"><span>630</span>万円～</p>
                  <p className="t04 mincho"><span className="span01">参列者</span><span className="span02">少人数〜約</span>500<span className="span02">人</span></p>
                </li>
              </ul>
            </div>
          </section> */}

          <section className="s06 slightly-colored-bg">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">合同葬の事例</span>
              </h3>
              <CaseSlider syasou={false} owakarenokai={false} goudousou industry price listButton />
            </div>
          </section>
          <section className="s61">
            <div className="wrapper">
              <commons.PremiumPackBanner />
            </div>
          </section>

          <commons.ThreePointsArea />

          <SyasouTypeFaqBox type="goudousou" className="s07" />

          <section className="s08">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">その他の<br />葬儀形態</span>
              </h3>
              <buttons.SyasouTypeListButton type="goudousou" />
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
