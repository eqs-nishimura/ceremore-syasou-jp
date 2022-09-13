import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { OtherCategorySection, RelatedQuestions } from '@components/faq'
import { FAQ, FAQ_CATEGORY } from '@lib/faq'

const Page: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  const faq = FAQ.manner["003"];
  const faqCategory = FAQ_CATEGORY.manner;

  return (
    <>
      <Head>
        <title>{faq.question} │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「"+faq.question+"」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header />

      <div id="page-faq-category-detail">
        <main>
          <section className="first-view">
            <div className="wrapper">
              <Breadcrumb
                pagenames={["セレモアの社葬トップ", "社葬のQ&A", `${faqCategory}`]}
                pageurls={["/", "/faq", `/faq/manner`]}
                targetpage={faq.question}
              />
            </div>
          </section>

          <section className="answer-section">
            <div className="wrapper">
              <div className="answer-box">
                <div className="question">
                  <div className="label">
                    {`社葬のQ&A : ${faqCategory}`}
                  </div>
                  <h1 className="mincho q">{faq.question}</h1>
                </div>
                <div className="img">
                  <img src={faq.imagePath} alt={faq.question} />
                </div>
                <div className="answer">
                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>弔電のマナー</div>
                    <div>
                      <ul className='default-ul'>
                        <li>葬儀に参列できない場合は、弔電を送りましょう。</li>
                        <li>弔電の宛先は喪主名とするのが一般的です。<br />※喪主名がわからないときや、関係により、自社関係者宛に送ることもあります。</li>
                        <li>弔電の届け先は、式場が一般的です。<br />※状況によっては、会社、式場に直接打っても構いません。</li>
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>弔電の送り方</div>
                    <div>
                      <ul className='default-ul'>
                        <li>弔電の受付は午前8時から午後10時まで、インターネットは24時間です。<br />※午前8時から午後7時までに打った弔電は当日中に配達されます。</li>
                        <li>電話でのご依頼は、ダイヤル「115」にかけます。<br />※自社の電話番号と社名、電報の種類（お悔やみ）、配達希望日、お届け先と電文、発信人名を伝えます。<br />※配達が遅れる場合もありますので、お届け先に確認の電話を入れるようにしましょう。</li>
                        <li>電報は所定の用紙にてFAXで申し込むこともできます。<br />※詳しくはフリーダイヤル「0120-077-115」へお問い合わせください。</li>
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-20px'>＜社葬のＱ＆Ａ＞</div>
                  <div>
                    <span className='font-weight-bold'>Ｑ．弔電の差し出し名は？</span><br />
                    Ａ．社長名が多いようです。供花についても同様です。これは会社からという意味で出されるようです。<br />
                    <br />
                    ----------------------------------------------------<br />
                    NTT「おくやみ電報」文例（NTTホームページより抜粋）<br />
                    ----------------------------------------------------<br />
                    <br />
                    ご利用の際は「お悔やみの○○番」とダイヤル「115」へ、お申し込みください。
                    <br />
                    ［7620］御社社長様のご訃報に接し、ご生前のご功績を偲び、心からご冥福をお祈りいたします。
                    <br />
                    ［7621］御社社長様の不慮のご逝去の報に接し、御社ご一同様に衷心より哀悼の意を表します。
                    <br />
                    ［7622］会長様のご逝去に際し、惜別の急を禁じ得ません。ご功労に敬意を表しますとともに、心からご冥福をお祈りいたします。
                    <br />
                    ［7623］社長様のご訃報に、当社社員一同、謹んで哀悼の意を表します。ご遺族の皆様ならびに社員ご一同様に、心からお悔やみ申しあげます。
                    <br />
                    <br />
                    ----------------------------------------------------<br />
                    社葬・お別れの会弔電文例<br />
                    ----------------------------------------------------<br />
                    <br />
                    ■○○部長様のご霊前に、深く哀悼の意を表します。
                    <br />
                    ■貴社専務の○○氏、ご急逝の知らせを受け、心より哀悼の意を表します。
                    <br />
                    ■貴社の○○様のご永眠に接し、深く哀悼の意を表します。
                    <br />
                    ■ご逝去を悼み、故人のご功績をたたえ、心からお悔やみ申しあげます。
                    <br />
                    ■会長様ご天寿を全うされました由、謹んで哀悼の意を表します。
                    <br />
                    ■○○様の不慮のご逝去の報に接し、貴社ご一同に心からお悔やみ申しあげます。
                    <br />
                    ■突然のご逝去に接し、職場の一同、まことに驚愕、くやしさで言葉もありません。深く哀悼の意を表わします。
                    <br />
                    ■御社社長の片腕として、永年ご活躍されてきた専務○○氏、突然のご永眠、言葉もございません、遥かに、哀悼の意を表します。
                    <br />
                    ■かねてご病気、ご療養中とは伺っておりましたが、このたびの○○社長のご逝去の報に、心からお悔み申しあげます。
                    <br />
                    ■○○翁の突然の訃報に、家内ともども深く悲しんでおります、このくやしさを仕事にぶつけ精進いたす所存です。
                    <br />
                    ■天寿を全うされました○○会長の、在りし日を偲びつつ、ご冥福をお祈り申しあげます。
                    <br />
                    ■貴社○○氏の、ご逝去のご通知をいただき、心からお悔やみ申しあげます。
                    <br />
                    ■御社社長のご逝去を悼み、謹んでお悔やみ申しあげます。
                    <br />
                    ■在りし日のすばらしい部長を偲び、はるかにご冥福をお祈り申しあげます。
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="s03">
            <div className="wrapper">
              <div className="related-header mincho">関連のご質問</div>

              <RelatedQuestions
                category="manner"
                current={faq}
                toStatic={true}
              />
            </div>
          </section>

          <OtherCategorySection currentCategory="manner" />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Page;

declare global {
  interface Window{
    [key: string]: any,
  }
}
