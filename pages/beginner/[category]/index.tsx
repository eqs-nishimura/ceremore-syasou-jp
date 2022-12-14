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

export const getStaticProps = async (ctx: { params: { category: string } }) => {
  return {
    props: {
      key: ctx.params.category,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [
      "/beginner/syasou",
      "/beginner/owakarenokai",
      "/beginner/goudousou",
    ],
    fallback: false,
  };
}

const Page: NextPage = () => {
  const router = useRouter();
  const [category, setCategory] = useState<"syasou" | "owakarenokai" | "goudousou">("syasou");

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
    window.document.body.classList.remove("modalOpened");
  });

  useEffect(() => {
    if(router.isReady) {
      const { category } = router.query;
      if(!category || Array.isArray(category) || category !== "syasou" && category !== "owakarenokai" && category !== "goudousou") {
        router.push("/");
        return;
      }
      setCategory(category);
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
        <title>????????????????????? ??? ???????????????????????????????????????????????????????????????</title>
        <meta name="description" content={"???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????24??????365???????????????????????????????????????????????????"} />
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
                targetpage="?????????????????????"
              />
              <FirstView
                imagePath="/images/hj0101.png?202207191557"
                imagePathSp="/images/hj0101_sp.png?202207191557"
                alt="?????????????????????"
               />
              <dl className="dl01">
                <ul className="pointList">
                  <li><a href="#s02">
                    <img css={sectionImgPcCss} src="/images/hj0201.png?v=202206171035" alt="??????????????????????????????" />
                    <img css={sectionImgSpCss} src="/images/hj0201_sp.png?" alt="??????????????????????????????" />
                  </a></li>
                  <li><a href="#s03">
                    <img css={sectionImgPcCss} src="/images/hj0202.png?v=202206171035" alt="???????????????" />
                    <img css={sectionImgSpCss} src="/images/hj0202_sp.png" alt="???????????????" />
                  </a></li>
                  <li><a href="#s04">
                    <img css={sectionImgPcCss} src="/images/hj0203.png?v=202206171035" alt="???????????????" />
                    <img css={sectionImgSpCss} src="/images/hj0203_sp.png" alt="???????????????" />
                  </a></li>
                </ul>
              </dl>
            </div>
          </section>

          <section id="s02" className="s02">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">???????????????<br />???????????????</span>
              </h3>
              <div className="box01 u-hide-sp">
                <div className="box11">
                <img src="/images/hj0202.jpg" alt="??????????????????????????????" className="photo01" />
                <div className="t01">
                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />??????????????????????????????????????????????????????????????????????????????????????????<br /><br />??????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />?????????????????????????????????????????????????????????????????????????????????????????????????????????
                </div>
                </div>
                <div className="box12">
                <img src="/images/hj0203.svg?v=500" alt="???????????????????????????????????????" className="photo01" />
                </div>
              </div>
              <div className="box01 u-hide-pc">
              <img src="/images/hj0202.jpg" alt="??????????????????????????????" className="photo01" />
                <div className="box11">
                  <div className="t01">
                  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />??????????????????????????????????????????????????????????????????????????????????????????<br /><br />??????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />?????????????????????????????????????????????????????????????????????????????????????????????????????????
                  </div>
                  <img src="/images/hj0203.svg?v=500" alt="???????????????????????????????????????" className="photo02" />
                </div>
              </div>
              <div className="box02">
                <ul>
                  <li>
                    <h4 className="mincho">1. ???????????????</h4>
                    <img src="/images/hj0207.jpg" alt="???????????????" className="photo02" />
                    <div className="t01">
                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </div>
                  </li>
                  <li>
                    <h4 className="mincho">2. ??????????????????</h4>
                    <img src="/images/hj0208.jpg" alt="??????????????????" className="photo02" />
                    <div className="t01">
                    ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </div>
                  </li>
                  <li>
                    <h4 className="mincho">3. ???????????????????????????</h4>
                    <img src="/images/hj0209.jpg" alt="???????????????????????????" className="photo02" />
                    <div className="t01">
                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* <div className="modalBg"></div>
          <div className="modalContents syasou opened">
            <modals.SyasouDialogJizenjunbi type="??????" beginner />
            <modals.SyasouDialogGoseikyo type="??????" beginner />
            <modals.Missou type="syasou" beginner />
          </div>
          <div className="modalContents owakarenokai">
            <modals.SyasouDialogJizenjunbi type="???????????????" beginner />
            <modals.SyasouDialogGoseikyo type="???????????????" beginner />
            <modals.Missou type="owakarenokai" beginner />
          </div>
          <div className="modalContents goudousou">
            <modals.SyasouDialogJizenjunbi type="?????????" beginner />
            <modals.SyasouDialogGoseikyo type="?????????" beginner />
            <modals.Missou type="goudousou" beginner />
          </div> */}
          <section id="s03" className="s03">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">???????????????</span>
              </h3>
              <div className="box01">
                <img src="/images/hj0302.svg?v=400" alt="???????????????" />
              </div>
              <SyasouTypeListButton type="all" currentType={category} beginner />
            </div>
          </section>
          <section id="s04" className="s04">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">???????????????????????????<br />??????????????????</span>
              </h3>
              <div className="box01 slightly-colored-bg">
                <nav className="tablist">
                  <ul>
                    <li className={`syasou${category === "syasou" ? " active" : ""}`}>
                      <Link href="/beginner/[category]" as={"/beginner/syasou"} scroll={false}>
                        <a>
                          <p className="mincho">??????</p>
                        </a>
                      </Link>
                    </li>
                    <li className={`owakarenokai${category === "owakarenokai" ? " active" : ""}`}>
                      <Link href="/beginner/[category]" as={"/beginner/owakarenokai"} scroll={false}>
                        <a>
                          <p className="mincho">???????????????</p>
                        </a>
                      </Link>
                    </li>
                    <li className={`goudousou${category === "goudousou" ? " active" : ""}`}>
                      <Link href="/beginner/[category]" as={"/beginner/goudousou"} scroll={false}>
                        <a>
                          <p className="mincho">?????????</p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <SougiFlow type={category} wrap beginner />
                <div className="box11">
                  <img src="/images/hj0402.png" alt="?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" className="photo01 u-hide-sp" />
                  <img src="/images/hj0403.svg" alt="?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" className="photo02 u-hide-pc" />
                  <img src="/images/hj0404.png" alt="?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" className="photo03 u-hide-pc" />
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