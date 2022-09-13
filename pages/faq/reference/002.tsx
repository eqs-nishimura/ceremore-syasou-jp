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

  const faq = FAQ.reference["002"];
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
                  <div className="mincho font-size-20px font-weight-bold">社葬費用として認められるものと認められないもの</div><br />
                  <div className="mincho font-size-24px font-weight-bold">社葬費用に関する法人税基本通達の解説のポイント</div>
                  <div>税法では通達に、社葬に要した費用のうち、どの範囲まで税務上、福利厚生費として認められるのでしょうか。社葬に要した費用のうち、税務上、福利厚生費として損金で認められる範囲は、税法では、その通達において「社会通念上通常要すると認められる金額については、損金に算入しても差支えありません」としています。法人税基本通達、およびその解説を掲載しますので、参考にしてください。</div><br />
                  <div className="mincho font-size-18px font-weight-bold">１．「社葬を行うことが社会通念上相当である」場合とはどのように判断するのか</div>
                  <div>亡くなられた方の生前における会社への貢献度（職務上の地位や経歴）や亡くなられた事情（業務上か業務外の区別）に照し合せて、会社が費用を負担することに十分な理由であれば、福利厚生費用として計上することができます。しかし、亡くなられた方が、生前会社への貢献度がない場合や、会社が費用を負担することが相当ではない場合は福利厚生費として計上することは認められておりません。</div><br />
                  <div className="mincho font-size-18px font-weight-bold">２．「社葬を行うために通常要すると認められる費用」の範囲について</div>
                  <div>
                    社葬費用として福利厚生費で処理することが認められるものは、社葬を実際に執り行う際に必要な費用のみとなります
                  </div>
                  <div>
                    <ul className="default-ul">
                      <li>葬儀基本価格（白木祭壇や生花祭壇の費用）</li>
                      <li>宗教家（僧侶）へのお礼（お布施）</li>
                      <li>会葬御礼、会葬御礼品</li>
                      <li>式場使用料金</li>
                      <li>バス、ハイヤーの料金</li>
                      <li>ガードマン等の費用</li>
                      <li>社葬通知状作成費用、発送料金</li>
                      <li>宛名書き、筆耕料金</li>
                      <li>新聞訃報広告費</li>
                      <li>お手伝いの方の食事代</li>
                      <li>写真、映像撮影料金 など</li>
                    </ul>
                  </div>
                  <br />
                  <div>
                    経費として認められないもの<br />
                    遺族が負担すべきと判断される費用は福利厚生費として計上することが認められておりません。
                  </div>
                  <div>
                    <ul className="default-ul">
                      <li>戒名料</li>
                      <li>仏壇、本位牌</li>
                      <li>ご遺族が行う香典返し</li>
                      <li>ご法要費用</li>
                      <li>除籍手続、死亡診断書などの手続き費用</li>
                      <li>墓地・墓石</li>
                    </ul>
                  </div>
                  <br />
                  <div>また、会社とご遺族の関係によってその負担した費用は次のようになります</div>
                  <br />
                  <div>
                    <table className="default-table">
                      <thead>
                        <tr>
                          <th>対象者</th>
                          <th>経理処理</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>遺族が役員の場合</td>
                          <td>役員賞与</td>
                        </tr>
                        <tr>
                          <td>遺族が会社の関係者でない場合</td>
                          <td>寄付金</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <div className="mincho font-size-18px font-weight-bold">３．弔慰金を支給した場合</div>
                  <div>弔慰規程等の一定の基準に基づき支給され、かつ、その金額が社会通念上相当な金額の範囲内にあれば、弔慰金も福利厚生費として処理することが認められます。また支給を受けた遺族についても相続税の課税対象にはなりません。しかし適正額を超える場合には、死亡退職金とみなされることもあります。</div>
                  <br />
                  <div>
                    <table className="default-table">
                      <thead>
                        <tr>
                          <th>内容</th>
                          <th>支給を受けた遺族の取り扱い</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>弔慰金が社会通念上相当額の範囲内の場合</td>
                          <td>非課税</td>
                        </tr>
                        <tr>
                          <td>弔慰金が社会通念上相当額の範囲を超える場合</td>
                          <td>死亡退職金（相続税課税対象）</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <div className="mincho font-size-18px font-weight-bold">４．合同葬を行った場合の費用負担方法について</div>
                  <div>関連会社が費用負担することに相当の理由があることとその負担金額が適正である事が税務上問題となります。特に法令、通達などで按分の基準が明確にされてはおりませんが、会社の業績に対する故人の貢献度合い、職位、企業規模、会葬者の割合など総合的に判断して処理します。不相当に高額な負担をした場合は、関連会社からの寄付金や遺族への賞与と判断されることもあります。</div>
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
