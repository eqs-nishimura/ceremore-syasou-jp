import type { NextPage } from 'next'
import Head from 'next/head'
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

  const faq = FAQ.manner["001"];
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
                  <div className='font-weight-bold font-size-24px'>社葬でお手伝いを出す場合には</div><br />

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>服装</div>
                    <div>
                      <ul className='default-ul'>
                        <li>社葬のお手伝いをするときには、男性なら略式礼服、女性なら洋装の喪服を着用しましょう。</li>
                        <li>接待係を担当するときは、エプロンなども用意しておきます。</li>
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>式場では</div>
                    <div>
                      <ul className='default-ul'>
                        <li>故人の親戚をはじめ、友人など数多くの方がお手伝いされます。世話役、または責任者の方から、役割や具体的な指示を受けましょう。受付係や駐車場、会場の整理、接待係を依頼されることが多いようです。</li>
                        <li>会社としてお手伝いに来ているときは、自社の代表であるといった意識を持って、お手伝いをしましょう。</li>
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>終了の挨拶</div>
                    <div>
                      <ul className='default-ul'>
                        <li>終わったら、世話役や責任者の方に挨拶をして帰ります。※身の回りの後片づけも忘れないようにしましょう。</li>
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-20px'>＜社葬のＱ＆Ａ＞</div>
                    <div>
                      Ｑ．お手伝いを出すならどんな係？<br />
                      Ａ．大切な取引会社の訃報に際しては、率先して手伝いを申し出ましょう。社葬当日は参列者も多く、大変混雑します。先方様も駐車場係や外回りの案内係はできる限り、多く欲しいと考えています。その誘導は大変な作業となります。駐車場係、給茶などの手伝いを申し出ると良いでしょう。
                    </div>
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
