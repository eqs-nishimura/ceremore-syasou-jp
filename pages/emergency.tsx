import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import * as Constants from '@lib/Constants';
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { css } from '@emotion/react'

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
  });

  return (
    <>
      <Head>
        <title>危篤・ご逝去・お急ぎの方 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「危篤・ご逝去・お急ぎの方」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet" />
      </Head>

      <Header/>

      <div id="page-emergency">
        <main>
          <section className="s01">
            <div className="wrapper">
              <div css={css`padding: 20px 4px 10px;`}>
                <Breadcrumb
                  className='bc'
                  targetpage="危篤・ご逝去・お急ぎの方"
                />
              </div>
              <h1>
                <img src="/images/em0102.png?v=600" alt="ご危篤・ご逝去・お急ぎの方へ" className="bg u-hide-sp" />
                <Link href="tel:0120470470"><a className="u-hide-pc btn_call">電話をかける</a></Link>
                <div className="box03 os">
                  <h4>深夜・早朝でもご遠慮なくご相談ください</h4>
                  <ul>
                    <li>安置所までの移送のみ依頼したい</li>
                    <li>社葬を行うかどうかまだ決めていない</li>
                    <li>他の葬儀社で故人を搬送したが、お葬式の相談をしたい</li>
                    <li>まずは逝去後の段取りだけ知りたい</li>
                  </ul>
                </div>
              </h1>
              <div className="box01">
                <div className="box11">
                  <img src="/images/em0103.png" alt="上記のような場合でも、安心してお電話ください。ご質問だけでもセレモアのスタッフが丁寧にご説明、ご対応いたします。" className="photo01" />
                  <div className="t01">上記のような場合でも、安心してお電話ください。<br />ご質問だけでもセレモアのスタッフが丁寧にご説明、ご対応いたします。</div>
                </div>
              </div>
            </div>
          </section>
          <section className="s02 slightly-colored-bg">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">お電話後の<br />流れの一例</span>
              </h3>
              <div className="box01">
                {(()=>{
                  const a = [];
                  const data = Constants.EMERGENCY_FLOW;
                  for(const k in data){
                    a.push(
                    <dl>
                      <dt><p className="num mincho">{data[k].id}</p></dt>
                      <dd className="dd01">
                        <div className="inner">
                          <p className="t01 mincho">{data[k].title}</p>
                          <p className="t02">{data[k].text}</p>
                            {data[k].btn=='call' && <>
                              <a href="tel:0120470470" className="btn_call">電話する</a>
                            </>}
                        </div>
                      </dd>
                      <dd className="dd02">
                        <img src={data[k].image.src} alt={data[k].image.caption} />
                      </dd>
                    </dl>
                    );
                  }
                  return a;
                })()}
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
