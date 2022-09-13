import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { FAQ, FAQ_CATEGORY } from '@lib/faq'
import { OtherCategorySection, RelatedQuestions } from '@components/faq'

const Page: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  const faq = FAQ.reference["010"];
  const faqCategory = FAQ_CATEGORY.reference;

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
                pageurls={["/", "/faq", `/faq/reference`]}
                targetpage={faq.question}
              />
            </div>
          </section>

          <section className="answer-section">
            <div className="wrapper">
              <div className="answer-box slightly-colored-bg">
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
                  <div className='mincho font-weight-bold font-size-24px'>{"規模が大きい場合の社葬の広告例"}</div>
                  <div className='img'>
                    <img src="/images/faq/reference/d11_001.png?v=202206081930" alt="規模が大きい場合の社葬の広告例" />
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>{"お別れの会の広告例"}</div>
                  <div className='img'>
                    <img src="/images/faq/reference/d11_003.png?v=202206081930" alt="お別れの会の広告例" />
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>{"合同葬の広告例"}</div>
                  <div className='img'>
                    <img src="/images/faq/reference/d11_002.png?v=202206081930" alt="合同葬の広告例" />
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>{"会葬御礼状広告例"}</div>
                  <div className='img max'>
                    <img src="/images/faq/reference/d11_004.png?v=202206081930" alt="会葬御礼状広告例" />
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>{"訃報広告の基本料金表（社会面掲載の場合）"}</div>
                  {/* <div className='img'>
                    <img src="/images/faq/reference/201703028_001.png" alt="訃報広告の基本料金表（社会面掲載の場合）" />
                  </div> */}
                  <div className="table-wrapper">
                    <table>
                      <caption>※令和4年6月1日現在</caption>
                      <tr className="header">
                        <td></td>
                        <td>北海道</td>
                        <td>東京</td>
                        <td>名古屋</td>
                        <td>大阪</td>
                        <td>西部</td>
                        <td>全国版</td>
                      </tr>
                      <tr>
                        <td>読売新聞</td>
                        <td>￥26,280</td>
                        <td>￥278,300</td>
                        <td>￥24,200</td>
                        <td>￥128,260</td>
                        <td>￥62,920</td>
                        <td>￥394,460</td>
                      </tr>
                      <tr>
                        <td>朝日新聞</td>
                        <td colSpan={2}>￥220,000</td>
                        <td>￥35,200</td>
                        <td>￥132,000</td>
                        <td>￥63,800</td>
                        <td>￥396,000</td>
                      </tr>
                      <tr>
                        <td>毎日新聞</td>
                        <td colSpan={2}>￥143,000</td>
                        <td>￥22,660</td>
                        <td>￥90,200</td>
                        <td>￥41,800</td>
                        <td>￥261,800</td>
                      </tr>
                      <tr>
                        <td>日本経済新聞</td>
                        <td>￥11,440</td>
                        <td>￥140,800</td>
                        <td>￥20,240</td>
                        <td>￥73,920</td>
                        <td>￥20,900</td>
                        <td>￥176,000</td>
                      </tr>
                      <tr>
                        <td>産経新聞</td>
                        <td>―</td>
                        <td>￥68,200</td>
                        <td>―</td>
                        <td>￥70,400</td>
                        <td>―</td>
                        <td>￥121,000</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="s03">
            <div className="wrapper">
              <div className="related-header mincho">関連のご質問</div>

              <RelatedQuestions
                category="reference"
                current={faq}
                toStatic={true}
              />
            </div>
          </section>

          <OtherCategorySection currentCategory="reference" />
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
