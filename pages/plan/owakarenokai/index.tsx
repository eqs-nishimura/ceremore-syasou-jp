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
import { SyasouTypeListButton } from '@components/buttons'
import * as commons from '@components/commons'
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
      window.main();

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
        <title>お別れの会 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「お別れの会」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet" />
      </Head>

      <Header/>

      <div id="page-plan-owakarenokai">
        <main>
          <section className="s01">
            <div className="wrapper">
              <Breadcrumb
                targetpage="お別れの会"
              />
              <FirstView
                imagePath="/images/ow0101.png?202207191557"
                imagePathSp="/images/ow0101_sp.png?202207191557"
                alt="お別れの会"
                title="故人の思いを込めた空間で、ゆかりのある方々と追悼する故人らしさを尊重した会"
                description="一般的に「お別れの会」は密葬後、日を改めて行われます。自由な形式(無宗教形式)で行うことが増えてきており、葬儀専用式場以外に、ホテルなどで行われることもあります。セレモアでは、密葬からお別れの会まで一貫してサポート対応しております。"
                shrinkTitle
                titleMarginTop={-28}
                titleMarginTopSp={0}
              />
              <dl className="dl02">
                <dt>
                  <img src="/images/ow0103.svg" alt="流れ" />
                  <p>※密葬後、概ね40日前後に行われるのが一般的です。</p>
                </dt>
              </dl>
            </div>
          </section>
          <commons.SyasouSuchAsCase type="owakarenokai" phrases={[
            "「故人の功績をしっかりと社内外へ伝え、弔意を示したい」",
            "「宗教にとらわれず、自由な形式で行いたい」",
            "「参列者にしっかりとおもてなしをし、故人を偲んでもらいたい」",
          ]} />
          {/* <div className="modalBg"></div>
          <div className="modalContents owakarenokai opened">
            <modals.SyasouDialogJizenjunbi type="お別れの会" />
            <modals.SyasouDialogGoseikyo type="お別れの会" />
            {modals.Missou()}
          </div> */}
          <section className="s04">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">お別れの会<br />当日までの<br />スケジュール</span>
              </h3>
              <div className="box01 slightly-colored-bg">
                <SougiFlow type="owakarenokai" />
              </div>
            </div>
          </section>
          <section className="s06 slightly-colored-bg">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">お別れの会の<br />費用と事例</span>
              </h3>
              <CaseSlider syasou={false} owakarenokai goudousou={false} industry price listButton />
            </div>
          </section>
          <section className="s61">
            <div className="wrapper">
              <commons.PremiumPackBanner />
            </div>
          </section>
          <commons.ThreePointsArea />

          <SyasouTypeFaqBox type="owakarenokai" className="s07" />

          <section className="s08">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">その他の<br />葬儀形態</span>
              </h3>
              <SyasouTypeListButton type="owakarenokai" />
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
