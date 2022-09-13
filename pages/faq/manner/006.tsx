import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { OtherCategorySection, RelatedQuestions } from '@components/faq'
import { FAQ, FAQ_CATEGORY } from '@lib/faq'
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

  const faq = FAQ.manner["006"];
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
                  <div className='mincho font-weight-bold font-size-24px'>仏式の作法（焼香）</div>
                  <div className='img'>
                    <img src="/images/faq/manner/img_religion01.jpeg" alt="仏式の作法（焼香）" />
                  </div>
                  <div>
                    <ol className='default-ol'>
                      <li>祭壇の少し手前で僧侶とご遺族に一礼します。</li>
                      <li>霊前に軽く頭を下げます。</li>
                      <li>両手に数珠をかけ、祭壇の前で一礼します。</li>
                      <li>抹香を親指、人差指、中指で摘み、軽くおしいただいて、静かに香炉に入れます。</li>
                      <li>焼香が終わったら、両手に数珠をかけて合掌し、一礼します。<br />※宗派により、作法や焼香回数など異なる場合があります。</li>
                      <li>最後に前向きのまま下がって僧侶とご遺族に一礼します。</li>
                    </ol>
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>神式の作法（玉串奉奠）</div>
                  <div css={css`max-width: 500px;`} className='img'>
                    <img src="/images/faq/manner/img_religion02.jpeg" alt="仏式の作法（焼香）" />
                  </div>
                  <div>玉串は根元の方を右手、枝先の方を左手で受取り、右に回し根元を祭壇に向けて置きます。このあと二礼二拍手一礼しますが、拍手はしのび手といって音を立てないようにします。</div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>キリスト教の作法（献花）</div>
                  <div css={css`max-width: 500px;`} className='img'>
                    <img src="/images/faq/manner/img_religion03.jpeg" alt="キリスト教の作法（献花）" />
                  </div>
                  <div>牧師・神父・ご遺族に一礼して花の根元を左手、花を右手で受け取り、90度右に回して花が手前に向くようにして献花台の上に置きます。 手を合わせて頭を下げて黙礼します。</div>
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
