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

  const faq = FAQ.reference["001"];
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
                  <div className="font-weight-bold">＜一例＞</div>
                  <div className="text-align-center font-weight-bold">役員会議事録</div>

                  ○○年○月○○日　午前○○時○○分より当社の会議室において、役員会を開催した。
                  出席役員　　○○名（全役員　　○○名）
                  代表取締役　○○　○○は、選ばれて議長となり、下記の議案につき、討議に入った。
                  <br />
                  <div className="font-weight-bold">{"[議案]"}</div>
                  社葬取扱規程制定の件
                  <br />
                  <br />
                  <div className="font-weight-bold">{"[決議内容]"}</div>
                  　上記の議案につき議長からの制定の趣旨に関し説明があり、その内容について逐条的に審議したところ、出席した役員全員の賛成をもってこれを可決した。
                  <br />
                  　以上により、本日の議事を終了したので議長は閉会を宣し午前○○時○○分散会した。
                  　以上の決議を明確にするため、この議事録を作成し、議長および出席役員全員がこれに記名捺印する。
                  <br />
                  <br />
                  ○○年○月○○日
                  <br />
                  <br />
                  <div className="text-align-right">
                    議長　　○○○○　　印<br />
                    出席役員　　○○○○　　印<br />
                    ○○○○　　印<br />
                    ○○○○　　印<br />
                    ○○○○　　印<br />
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
