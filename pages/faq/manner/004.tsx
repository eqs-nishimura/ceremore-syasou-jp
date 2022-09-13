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

  const faq = FAQ.manner["004"];
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
                    <div className='mincho font-weight-bold font-size-24px'>■弔辞を依頼されたら</div>
                    <div>
                      <ul className='default-ul'>
                        <li>葬儀式では、仏式・神式・キリスト教式を問わず、弔辞を奉読します。</li>
                        <li>先方から弔辞を依頼された場合には、特別な理由がない限り引き受けるようにしましょう。</li>
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>弔辞を書くには</div>
                    <div>
                      <ul className='default-ul'>
                        <li>奉読時間は3～4分を基本とします。400字詰原稿用紙で2枚程度を目安にするとよいでしょう。</li>
                        <li>原則として薄墨の毛筆で、奉書紙や巻紙に書きます。<br />※市販の弔辞用紙を使われる方が増えています。</li>
                        <li>弔辞はご遺族の元に長く保存されます。文字は丁寧に書き、代筆であっても構いません。</li>
                        <li>文頭や改行の際、一文字下げる必要はなく、句読点を打つ必要もありません。読みやすいように一字分空けて書きましょう。</li>
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>弔辞を読むには</div>
                    <div>
                      <ul className='default-ul'>
                        <li>弔辞は故人へ語りかけると同時に、ご遺族や参列者にも聞いてもらうものです。耳で聞いてわかりやすい言葉を選びましょう。</li>
                        <li>読む際は、［ゆっくり、一語一語かみしめるように］［心を込め、丁寧に］読み上げるようにしましょう。</li>
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className='font-weight-bold font-size-24px'>＜社葬アドバイス＞</div>
                  <div>
                    <span className='font-weight-bold mincho font-size-18px'>弔辞を依頼された時には？</span><br /><br />
                    自分の他に依頼された方がいるのか。内容が重複しないようにするために確認しておきましょう。<br />
                    <br />
                    故人の経歴を確認する。生年月日、氏名、名称などの間違いを防ぐため（依頼する側は、故人の経歴書をお渡しする配慮をします）ゆっくり、はっきりと朗読します。早口の弔辞は聞きとりにくく、軽い印象を与えます。
                    <br />
                    <br />
                    ----------------------------------------------------<br />

                    社長への弔辞（社員代表より）<br />

                    ----------------------------------------------------<br />
                    <br />
                    ○○株式会社社長・故○○殿の社葬にあたり、全社員を代表いたしまして、謹んでご霊前に弔辞を捧げます。
                    <br />
                    ○○社長は、○○年○○月○○日午前○時○分に、○○のため、○○年にわたる生涯を閉じられました。社員一同、ここに深く哀悼の意を表しますとともに、ご遺族の皆様方に心からお悔やみを申し上げます。
                    <br />
                    <br />
                    ○○社長は今から○○年前に当社の前身であった○○商店を創立され、着実に地歩を固められて、○○年後に当社を設立されました。その後も社業ならびに業界の発展に全力を尽くされ、平成○○年からは当社と当業界の重鎮としてご活躍になり、平成○年に勲○等○○章受賞の栄に輝かれました。さらにこの間、市の障害者福祉の面でも多大な貢献をされ、三度にわたり、市長賞などの感謝状を受けられました。このように大きな存在を失うこととなり、まさに痛恨の極みであります。
                    <br />
                    <br />
                    ○○社長は将棋をご趣味とされていました。堂々たる打ち筋で迷いなく駒を進めるお姿は、そのまま社長のお人柄を象徴しているかのように感じられました。誠に懐かしく思い出されます、私どもの今の思いは、ともすれば社長のご生前へと向かいがちです。しかし過去を振り返って執着することを何よりも嫌われた社長に対し、それはあまりにも失礼なことでしょう。社長という大きな存在、それは○○という大きな個性を失って、視線が宙をさまようような私達ではございますが、まずは社長が示された指針の方向をしっかりと見定め、足元を固めて全社員が一丸となって全身してまいることをお誓い申し上げます。
                    <br />
                    <br />
                    ○○社長、私達とその日々の営みを、どうかいつまでもお見守りください。私達も、社長の大きなお姿を絶対に忘れません。社員一同、心からご冥福をお祈り申し上げます。
                  </div>
                  <br />
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
