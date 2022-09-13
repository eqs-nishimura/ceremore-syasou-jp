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

  const faq = FAQ.manner["007"];
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
                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>香典の準備</div>
                    <div>香典金額を決定します。香典金額は社内規定や前例を参考にしましょう。<br />市販の香典袋を用いるときは、金額や相手との関係にふさわしい水引き付きの袋を用います。</div>
                  </div>

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>受付では</div>
                    <div>開始時間が決められていますので、受付が集中し、たいへん混雑します。くどくどとしたお悔みは避け、声を控えめにし、慎み深く「このたびは、ご愁傷様でございます」などの弔意の言葉を簡単に述べます。</div>
                  </div>

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>名刺の出し方</div>
                    <div>社葬などの受付では、名刺を出される方も多く、会社の控として名刺での受付を行うところもありますので、名刺を必ず持参しましょう。</div>
                  </div>

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>受付に入る前にチェックしておくこと</div>
                    <div>開始時間よりも早めに入ることが大切です。また、手荷物などがあると、携帯品係の手を煩わせるようなことになりますので、よけいな荷物などは持たずに行くことを心がけましょう。コートやマフラーなどは、受付につく前に脱いでおくのが礼儀です。車の場合は、車の中に置いておくとよいでしょう。</div>
                  </div>

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>記帳をする時には</div>
                    <div>「会葬者芳名録」や「記帳カード」へ記帳する場合には、会社名や役職名を記入してから名前を書きます。「会葬者芳名録」は遺族への控となります。</div>
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>＜社葬アドバイス＞</div>
                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>香典金額の目安は？</div>
                    <div>同業種、同業体、同規模の会社と連絡が取れれば打ち合わせをするとよいでしょう。また、以前に自社の行ったデータがあれば、その金額を参考に決めるとよいでしょう。通常取引先の場合は、会社代表で行う場合、5万円程度が多く1万円・3万円・5万円がめどとされますが、取引の度合い、当方の参列者の地位などによっても異なります。</div>
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>＜社葬Ｑ＆Ａ＞</div>
                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>Ｑ．香典に入れるお札は新札でもよいのか？</div>
                    <div>Ａ．新札は入れません。新札は、「事前に準備をしていた」につながり、失礼にあたることから、避けましょう。新札に一本折り目を入れる心配りをします。</div>
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
