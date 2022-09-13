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

  const faq = FAQ.manner["005"];
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
                    <div className='font-weight-bold font-size-24px'>遺族や先方の会社の意向を第一に考える</div>
                    <div>供花・供物は本来、持参して霊前に供えるべきものですが、現在は葬儀社および生花店に依頼し、式場まで届けてもらうことが多くなっています。<br />社葬の通知状（案内状）に供花・供物を辞退する旨の内容が記載されていた場合は、遺族や先方の会社の意向に従い、記載がない場合は手配を進めます。<br/>一般的には、枕花は5,000〜15,000円、供花は15,000〜30,000円が金額の目安とされています。<br />しかし、遺族や会社によっては、供花の金額や種類が統一される場合もありますので、確認することが必要です。<br />手配の際は名札の社名などに間違いが起こらないよう、必ず書面で行うようにしましょう。</div>
                  </div>

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>遅くとも前日までに手配を</div>
                    <div>供花・供物の手配は、社葬を担当している葬儀社にお願いするのが一般的です。遅くとも社葬前日までに手配するとよいでしょう。</div>
                  </div>

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>手配の際は書面で行う</div>
                    <div>
                      社名や名前などに間違いがあってはいけません。注文は書面で行うと安心です。（株）などの略語は使用しません。
                    </div>
                  </div>
                  <div className='img max'>
                    <img src="/images/faq/manner/img_flower01.jpeg" alt="供花の注文" />
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
