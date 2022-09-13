import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"

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
        <title>オンライン相談 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「オンライン相談」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-contact-online">
        <main>
          <section className="s01">
            <div className="wrapper">
              <h1 className="dl01">
                <dt>
                  <img src="/images/co0101.jpg" alt="オンライン相談" />
                </dt>
                <dd>
                  <h2 className="mincho">オンライン相談</h2>
                  <p className="t01">- Online consultation -</p>
                </dd>
              </h1>
              <Link href="/"><a className="btn">
                <img src="/images/co0102.svg" alt="オンライン葬儀相談" />
              </a></Link>
              <p className="t02">セレモアでは、30分から1時間のお時間で「オンライン葬儀相談」を承っております。<br /><br />※オンラインでのご相談の際は、お客様の電話回線（音声）と、PCまたはタブレット（画面共有）が必要です。<br />※スマートフォンではご利用いただけません。</p>
            </div>
          </section>

          <section className="s02">
            <div className="wrapper">
              <dl className="dl01">
                <dt>オンライン葬儀相談のポイント</dt>
                <dd>
                  <ul>
                    <li>
                      <p className="t01">ポイント1</p>
                      <p className="t02">30分から1時間のお時間で<br className="op" />「無料」オンライン葬儀<br className="op" />相談を承ります。</p>
                    </li>
                    <li>
                      <p className="t01">ポイント2</p>
                      <p className="t02">出張相談の<br className="op" />お申込みに費用は<br className="op" />一切かかりません</p>
                    </li>
                    <li>
                      <p className="t01">ポイント3</p>
                      <p className="t02">いつでも何度でも<br className="op" />親身になって<br className="op" />ご相談を承ります</p>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl className="dl02">
                <dt>オンライン葬儀相談の流れ</dt>
                <dd>
                  <ul>
                    <li>
                      <img src="/images/co0201.svg" alt="step" className="icon" />
                      <p className="t01 mincho">Step 1</p>
                      <p className="t02">オンライン葬儀相談のお申込み</p>
                      <p className="t03">オンライン葬儀相談のお申込みは、こちらのページにて空き時間をご確認いただきお申し込みください。</p>
                      <Link href="/"><a className="btn">
                        <img src="/images/co0204.svg" alt="オンライン葬儀相談" />
                      </a></Link>
                    </li>
                    <li>
                      <img src="/images/co0202.svg" alt="step" className="icon" />
                      <p className="t01 mincho">Step 2</p>
                      <p className="t02">ご予約日時の確認メール</p>
                      <p className="t03">ご予約が確定しましたら、弊社よりご相談日時の確認メールを差し上げます。</p>
                    </li>
                    <li>
                      <img src="/images/co0203.svg" alt="step" className="icon" />
                      <p className="t01 mincho">Step 3</p>
                      <p className="t02">ご相談当日</p>
                      <p className="t03">ご相談当日は、お時間になりましたら弊社スタッフよりお電話いたします。<br />お客様の電話回線（音声）と、パソコンまたはタブレット端末（画面共有）をご準備いただきお待ちください。<br /><br />オンラインのお葬儀相談は、スマートフォンではご利用になりません。</p>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </section>

          <section className="s03">
            <div className="wrapper">
              <dl>
                <dt>オンライン葬儀相談を<br className="os" />ご予約済のお客様へ</dt>
                <dd>
                  <p>ご予約いただきましたお時間になりましたら、<br className="op" />当社スタッフよりお電話にてご案内いたします。<br />案内があってから下記のリンクボタンをクリックください。<br />※「セールスプラス」サイトへ移動します</p>
                  <Link href="/"><a>オンライン葬儀相談への<br className="os" />入室はこちら</a></Link>
                </dd>
              </dl>
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
