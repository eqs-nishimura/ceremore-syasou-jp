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

  const faq = FAQ.manner["002"];
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
                  <div className='mincho font-weight-bold font-size-20px'>取引先より訃報を受けたら何をすべきか？</div>

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>■電話で訃報を受けたら</div>
                    <div>
                      <ul className='default-ul'>
                        <li>必ず「いつ」「どこの」「だれが」逝去されたのかを確認し、通夜、葬儀の日時と会場を聞きます。</li>
                        <li>弔電を打つ場合もありますので、喪主名、住所、必要に応じて電話番号を聞いておきます。</li>
                        {/* <li>訃報の連絡用紙などがあれば記入します。</li> */}
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-18px'>会社の対応</div>
                    <div>
                      <ul className='default-ul'>
                        <li>
                          訃報が入ったら、直ちに会社としての対応を決め、迅速に行動します。<br />
                          ※弔電の有無、および発信者名<br />
                          ※香典の額、および供花・供物の取り扱い<br />
                          ※葬儀参列者の決定<br />
                          ※その他（お手伝いなどの申し出）<br />
                        </li>
                        <li>場合によっては、前例や同じ立場にある会社と相談して決定することもあります。</li>
                      </ul>
                    </div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-18px'>誰が参列すべきか</div>
                    <div>会社を代表して社葬に参列するのですから、慎重な人選が大切です。故人が会長や社長など企業の中心的存在であれば、参列する側も、同等の役職にあたる人が参列するべきでしょう。</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-18px'>参列者の服装</div>
                    <div>会社対会社という関係の社葬ですから、役員クラスの方々は正装で臨むことがよいでしょう。規模によっては、略式礼服のほうがふさわしい場合もあります。また、装飾品はできるかぎりひかえるようにします。</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='font-weight-bold font-size-24px'>■訪問</div>
                    <div>特に故人と関係が深い場合には、ご自宅に駆けつけます。このときは平服で構いません。※長話をすることなく、用事が済み次第、失礼しましょう。</div>
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-20px'>＜社葬のＱ＆Ａ＞</div>
                  <div>
                    <span className='font-weight-bold'>Ｑ．取引先より訃報を受けたら？</span><br />
                    Ａ．まずはお悔やみをのべ、慌てずに、適切な行動をすることが大切です。まず社内の関連責任者に報告し、指示を仰ぎ対応の仕方を検討します。
                  </div>
                  <br />

                  <div className='font-weight-bold'>ー　検討事項　ー</div>
                  <div>
                    <span className='font-weight-bold'>１．弔電を送るか否か</span><br />
                    打つ場合、社長名にするのか担当役員名にするのかを決定します。
                  </div>

                  <div>
                    <span className='font-weight-bold'>２．訃報が遠隔地の取り引き先からの対応の仕方</span><br />
                    弔電、お悔み状を送るか、誰が駆けつけるのかを決定します。
                  </div>

                  <div>
                    <span className='font-weight-bold'>３．社葬への対応の仕方</span><br />
                    出席すべきか、だれが出席するのかを決定します。
                  </div>

                  <div>
                    <span className='font-weight-bold'>４．供花・供物を送るか送らないか、香典金額を決定</span>
                  </div>

                  <div>
                    <span className='font-weight-bold'>５．手伝いをどうするのかを決定</span><br />
                    手伝いをする場合は、経験豊富なベテラン社員を選び、受付係や雑務などを率先して申し出るようにします。
                  </div>

                  <div>
                    <span className='font-weight-bold'>６．弔辞を頼まれたら、誰が奉読するかを決定</span><br />
                    上記決定事項は速やかに指示、手配、行動に移します。
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
