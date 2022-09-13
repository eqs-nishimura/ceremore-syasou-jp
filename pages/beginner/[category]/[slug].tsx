import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import * as modals from "@components/modals"
import { Breadcrumb } from '@components/breadcrumb'
import { SougiFlow } from '@components/flow'
import { SeminarInfo } from '@components/seminar'
import { SyasouTypeListButton } from '@components/buttons'
import * as commons from "@components/commons"
import { FirstView } from '@components/firstview'
import { css } from '@emotion/react'

const Page: NextPage = () => {
  const router = useRouter();
  const [category, setCategory] = useState<"syasou" | "owakarenokai" | "goudousou">("syasou");
  const [slug, setSlug] = useState<string>();

  useEffect(() => {
    const $ = window.jQuery;
    if (typeof window !== 'undefined' && $) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
      window.qa();
      window.beginner();

      try{
        window.jQuery('.slider').slick({
          autoplay: false,
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
      const { category, slug } = router.query;
      if(!category || Array.isArray(category) || category !== "syasou" && category !== "owakarenokai" && category !== "goudousou") {
        router.push("/");
        return;
      }
      if(Array.isArray(slug)) {
        router.push("/");
        return;
      }

      setCategory(category);
      setSlug(slug);
    }
  }, [router.isReady]);

  const sectionImgPcCss = css`
    @media screen and (max-width: 600px) {
      display: none;
    }
  `;
  const sectionImgSpCss = css`
    display: none;
    @media screen and (max-width: 600px) {
      display: block;
    }
  `;
  return (
    <>
      <Head>
        <title>はじめての方へ │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「はじめての方へ」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet" />
      </Head>

      <Header/>

      <div id="page-beginner">
        <main>
          <section className="s01">
            <div className="wrapper">
              <Breadcrumb
                targetpage="はじめての方へ"
              />
              <FirstView
                imagePath="/images/hj0101.png?202207191557"
                imagePathSp="/images/hj0101_sp.png?202207191557"
                alt="はじめての方へ"
               />
              <dl className="dl01">
                <ul className="pointList">
                  <li><a href="#s02">
                    <img css={sectionImgPcCss} src="/images/hj0201.png?v=202206171035" alt="社葬を行う意義と目的" />
                    <img css={sectionImgSpCss} src="/images/hj0201_sp.png?" alt="社葬を行う意義と目的" />
                  </a></li>
                  <li><a href="#s03">
                    <img css={sectionImgPcCss} src="/images/hj0202.png?v=202206171035" alt="社葬の形態" />
                    <img css={sectionImgSpCss} src="/images/hj0202_sp.png" alt="社葬の形態" />
                  </a></li>
                  <li><a href="#s04">
                    <img css={sectionImgPcCss} src="/images/hj0203.png?v=202206171035" alt="社葬の流れ" />
                    <img css={sectionImgSpCss} src="/images/hj0203_sp.png" alt="社葬の流れ" />
                  </a></li>
                </ul>
              </dl>
            </div>
          </section>

          <section id="s02" className="s02">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">社葬を行う<br />意義と目的</span>
              </h3>
              <div className="box01 u-hide-sp">
                <div className="box11">
                <img src="/images/hj0202.jpg" alt="社葬を行う意義と目的" className="photo01" />
                <div className="t01">
                経営者の逝去は企業にとって重大なリスクであり事前の入念な準備が求められます。<br />創業者や重要な方の社葬は企業にとって社会的評価に関わります。<br /><br />社葬を成功に収めることで企業の新体制と結束力を関係者に示し信頼性を高めます。<br />社葬は関係各所に安心感を与え良好な関係を継続する大きな機会となります。
                </div>
                </div>
                <div className="box12">
                <img src="/images/hj0203.svg?v=500" alt="過去の功績を明日へとつなぐ" className="photo01" />
                </div>
              </div>
              <div className="box01 u-hide-pc">
              <img src="/images/hj0202.jpg" alt="社葬を行う意義と目的" className="photo01" />
                <div className="box11">
                  <div className="t01">
                  経営者の逝去は企業にとって重大なリスクであり事前の入念な準備が求められます。<br />創業者や重要な方の社葬は企業にとって社会的評価に関わります。<br /><br />社葬を成功に収めることで企業の新体制と結束力を関係者に示し信頼性を高めます。<br />社葬は関係各所に安心感を与え良好な関係を継続する大きな機会となります。
                  </div>
                  <img src="/images/hj0203.svg?v=500" alt="過去の功績を明日へとつなぐ" className="photo02" />
                </div>
              </div>
              <div className="box02">
                <ul>
                  <li>
                    <h4 className="mincho">1. 故人の追悼</h4>
                    <img src="/images/hj0207.jpg" alt="故人の追悼" className="photo02" />
                    <div className="t01">
                    会社の発展に貢献した故人を偲び、その功績を讃え、感謝とともに弔意を表す厳かな儀式。
                    </div>
                  </li>
                  <li>
                    <h4 className="mincho">2. 社外への広報</h4>
                    <img src="/images/hj0208.jpg" alt="社外への広報" className="photo02" />
                    <div className="t01">
                    お客様やお取引先などの関係者に会社の新体制・方針を示すことで、信頼関係を継続できる。
                    </div>
                  </li>
                  <li>
                    <h4 className="mincho">3. 社内の結束を高める</h4>
                    <img src="/images/hj0209.jpg" alt="社内の結束を高める" className="photo02" />
                    <div className="t01">
                    社葬を一致協力して行うことで、社員の結束、一体感を高める重要な機会となる。
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <Link
            href={`/beginner/[category]`}
            as={`/beginner/${category}`}
            scroll={false}
          >
            <a>
              <div className="modalBg opened" />
            </a>
          </Link>
          <div className={`modalContents ${category} opened`}>
            {slug === "jizenjunbi" && <modals.SyasouDialogJizenjunbi type={category === "syasou" ? "社葬" : category === "owakarenokai" ? "お別れの会" : "合同葬"} beginner />}
            {slug === "goseikyo" && <modals.SyasouDialogGoseikyo type={category === "syasou" ? "社葬" : category === "owakarenokai" ? "お別れの会" : "合同葬"} beginner />}
            {slug === "missou" && <modals.Missou type={category!} beginner />}
          </div>
          <section id="s03" className="s03">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">社葬の形態</span>
              </h3>
              <div className="box01">
                <img src="/images/hj0302.svg?v=400" alt="社葬の形態" />
              </div>
              <SyasouTypeListButton type="all" />
            </div>
          </section>
          <section id="s04" className="s04">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">社葬・お別れの会・<br />合同葬の流れ</span>
              </h3>
              <div className="box01 slightly-colored-bg">
                <nav className="tablist">
                  <ul>
                    <li className={`syasou${category === "syasou" ? " active" : ""}`}>
                      <Link href="/beginner/[category]" as={"/beginner/syasou"} scroll={false}>
                        <a>
                          <p className="mincho">社葬</p>
                        </a>
                      </Link>
                    </li>
                    <li className={`owakarenokai${category === "owakarenokai" ? " active" : ""}`}>
                      <Link href="/beginner/[category]" as={"/beginner/owakarenokai"} scroll={false}>
                        <a>
                          <p className="mincho">お別れの会</p>
                        </a>
                      </Link>
                    </li>
                    <li className={`goudousou${category === "goudousou" ? " active" : ""}`}>
                      <Link href="/beginner/[category]" as={"/beginner/goudousou"} scroll={false}>
                        <a>
                          <p className="mincho">合同葬</p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <SougiFlow type={category} wrap beginner />
                <div className="box11">
                  <img src="/images/hj0402.png" alt="社葬は会社にとって重要なリスクマネジメントです。総務・人事・秘書の実務担当者は万が一に備え、事前に準備しておくことが重要です。" className="photo01 u-hide-sp" />
                  <img src="/images/hj0403.svg" alt="社葬は会社にとって重要なリスクマネジメントです。総務・人事・秘書の実務担当者は万が一に備え、事前に準備しておくことが重要です。" className="photo02 u-hide-pc" />
                  <img src="/images/hj0404.png" alt="社葬は会社にとって重要なリスクマネジメントです。総務・人事・秘書の実務担当者は万が一に備え、事前に準備しておくことが重要です。" className="photo03 u-hide-pc" />
                </div>
              </div>
            </div>
          </section>
          <SeminarInfo className="s08" />

          <commons.ThreePointsArea />
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