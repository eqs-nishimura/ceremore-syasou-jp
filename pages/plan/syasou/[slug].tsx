import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import * as modals from '@components/modals'
import { Breadcrumb } from '@components/breadcrumb'
import * as buttons from '@components/buttons'
import { CaseSlider } from '@components/slider'
import { SougiFlow } from '@components/flow'
import * as commons from "@components/commons"
import { FirstView } from '@components/firstview'
import { SyasouTypeFaqBox } from '@components/faq'
import Link from 'next/link'
import { css } from '@emotion/react'

const Page: NextPage = () => {
  const router = useRouter();
  const [slug, setSlug] = useState<string>();

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
    window.document.body.classList.add("modalOpened");
  });

  useEffect(() => {
    if(router.isReady) {
      const { slug } = router.query;
      if(Array.isArray(slug)) {
        router.push("/");
        return;
      }
      setSlug(slug)
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>社葬 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「社葬」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet" />
      </Head>

      <Header/>

      <div id="page-plan-syasou">
        <main>
          <section className="s01">
            <div className="wrapper">
              <Breadcrumb
                targetpage="社葬"
              />
              <FirstView
                imagePath="/images/sy0101.png?202207191557"
                imagePathSp="/images/sy0101_sp.png?202207191557"
                alt="社葬"
                title="功績を残した方へ社を挙げて行うセレモニー"
                description="「社葬」とは、企業が運営の主体となって行う葬儀・告別式のことです。多くの場合、近親者で密葬を行い、その後社葬(本葬)を行います。セレモアでは、密葬から社葬まで一貫してサポートしております。"
              />
              <dl className="dl02">
                <dt>
                  <img src="/images/sy0103.svg" alt="流れ" />
                  <p>※密葬後、概ね40日前後に行われるのが一般的です。</p>
                </dt>
              </dl>
            </div>
          </section>
          <commons.SyasouSuchAsCase type="syasou" phrases={[
            "「対象者の功績をしっかりと社内外へ伝え、弔意を示したい」",
            "「伝統や格式を大切にし、正式な式を行いたい」",
            "「先代の会長や社長の時に社葬を行った」",
          ]} />
          <Link
            href="/plan/syasou"
            scroll={false}
          >
            <a css={css`display: block;`}>
              <div className="modalBg opened" />
            </a>
          </Link>
          {slug === "jizenjunbi" && <modals.SyasouDialogJizenjunbi type="社葬" />}
          {slug === "goseikyo" && <modals.SyasouDialogGoseikyo type="社葬" />}
          {slug === "missou" && <modals.Missou type="syasou" />}
          <section className="s04">
            <div className="wrapper">
              <h3 className="mincho sylogo">
              <span className="tategaki">社葬当日までの<br />スケジュール</span>
              </h3>
              <div className="box01 slightly-colored-bg">
                <SougiFlow type="syasou" />
              </div>
            </div>
          </section>

          <section className="s06 slightly-colored-bg">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">社葬の<br />費用と事例</span>
              </h3>
              <CaseSlider syasou owakarenokai={false} goudousou={false} industry price listButton />
            </div>
          </section>
          <section className="s61">
            <div className="wrapper">
              <commons.PremiumPackBanner />
            </div>
          </section>

          <commons.ThreePointsArea />

          <SyasouTypeFaqBox type="syasou" className="s07" />

          <section className="s08">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">その他の<br />葬儀形態</span>
              </h3>
              <buttons.SyasouTypeListButton type="syasou" />
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
