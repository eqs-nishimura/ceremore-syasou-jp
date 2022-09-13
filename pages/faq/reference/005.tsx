import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { FAQ, FAQ_CATEGORY } from '@lib/faq'
import { OtherCategorySection, RelatedQuestions } from '@components/faq'
import { css } from '@emotion/react'

const Page: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  const faq = FAQ.reference["005"];
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
                  <div>表書きの書き方と作り方</div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>仏式の表書き</div>
                  <div className='img'>
                    <img src="/images/faq/reference/201703086_001.jpeg" alt="仏式の表書き" />
                  </div>
                  <br />
                  <div>■包み方のこころえ</div>
                  <div>
                    <ol className='default-ol'>
                      <li>まず右端からたたむ。</li>
                      <li>上下の端は下を上へ上を下への順。</li>
                      <li>最後に左端をたたみます。</li>
                      <li>完成。</li>
                    </ol>
                  </div>
                  <div css={css`max-width: 300px;`} className='img'>
                    <img src="/images/faq/reference/img_message26.jpeg" alt="包み方のこころえ" />
                  </div>
                  <br />

                  <div>■渡し方のこころえ<br />ふくさに包んだ香典は、受付でふくさを外し、丁重にお悔やみを述べ、「ご霊前にお供えください」と一言添えて渡します。そのとき文字が逆さにならないよう注意します。</div>
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
