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

  const faq = FAQ.reference["003"];
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
                  <div className='section'>
                    <div className='mincho font-weight-bold font-size-24px'>死亡連絡</div>
                    <div>「早朝に失礼します。私は、○○の長男でございますが、実は先ほど○○が病院で息をひきとりました。今後のことは、また追ってお知らせいたします」</div>
                  </div>
                  <br />

                  <div className='section'>
                    <div className='mincho font-weight-bold font-size-24px'>葬儀日程の連絡</div>
                    <div>「通夜と告別式の日取りが決まりましたので、ご連絡申しあげます。通夜は明日□時より、告別式は明後日午後□時より、○○○会館にて行います。皆様へよろしくお伝えください」</div>
                  </div>
                  <br />

                  <div className='section'>
                    <div className='mincho font-weight-bold font-size-24px'>通夜の挨拶</div>
                    <div>■僧侶への挨拶<br />「ご多忙中のところお越しいただきましてありがとうございます。慣れないことばかりで手落ちの部分もあると存じますが、どうかよろしくお引きまわしくださいますよう、お願い申し上げます」</div>
                    <div>■弔問客への挨拶<br />「お寒いところ遠路はるばるお越しいただきましてありがとうございます。定刻には始めたいと思いますので今しばらくお待ちください」</div>
                  </div>
                  <br />

                  <div className='section'>
                    <div className='mincho font-weight-bold font-size-24px'>香典を受ける時の挨拶</div>
                    <div>「ご丁寧にどうもありがとうございます。霊前に供えさせていただきます」「ご心配をいただきまして恐れ入ります。霊前に供えさせていただきます」</div>
                  </div>
                  <br />

                  <div className='section'>
                    <div className='mincho font-weight-bold font-size-24px'>関係者への挨拶</div>
                    <div>■世話役への挨拶<br />「これから面倒なことをお願いすることになりました。どうぞよろしくお願いいたします」</div>
                  </div>
                  <br />

                  <div className='section'>
                    <div className='mincho font-weight-bold font-size-24px'>お悔みの返礼</div>
                    <div>「生前は故人がひとかたならぬお世話になりまして、ありがとうございました」 「お忙しいところを早速お悔みいただきまして、ありがとうございました」</div>
                  </div>
                  <br />

                  <div className='section'>
                    <div className='mincho font-weight-bold font-size-24px'>出棺の挨拶</div>
                    <div>「本日はご多忙のところ、わざわざご会葬いただき、誠にありがとうございました。生前からご親交いただきました、多くの方々にお見送りいただき、故人もさぞかし喜んでいることと存じます。生前のご厚誼に対し厚くお礼申し上げます。これからは、私ども遺族一同&nbsp;故人の遺志に沿うよう努めていく所存でございます。何卒、今後ともご指導、ご支援の程お願い申し上げます」</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>散会の挨拶</div>
                    <div>「本日はご多忙のところ、ご会葬、お見送りをいただきまして、誠にありがとうございました。厚く御礼申し上げます」</div>
                    <div>■お世話になった方への挨拶<br />「お陰様で無事お葬儀を終えることができました。ご多忙の時間をさいて、お世話をしていただきありがとうございました。親族一同、心から感謝いたしております」</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>勤務先への挨拶</div>
                    <div>「○○の妻でございます。先日の葬儀に際しましては、会社の皆様には何かとお世話になりありがとうございました。多数のお見送りをいただき、本当にありがとうございました。○○も、さぞ喜んでいたことと思います」<br />「在職中は、皆様にたいへんお世話になりました。自宅にありました社員証とバッジ、保険証をお持ちいたしましたので、よろしくお願いいたします」「本日は、○○の遺品がありましたら、持ち帰らせていただきたく思います。もし差支えなければ、○○のロッカー、机などを拝見させていただけませんでしょうか」</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>寺院・僧侶への挨拶</div>
                    <div>「先日の葬儀に際しましては、多忙のところ、たいへんご丁寧にお勤めを賜わり、ありがとうございました。お陰様で、無事に葬儀をとりおこなうことができました。」</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>病院への挨拶</div>
                    <div>「先日は、○○がたいへんお世話になり、ありがとうございました。皆様の心からのご看護には、故人もさぞ感謝していたことと思います」「心ばかりの品でございますが、どうか皆さんでお召し上がりください。どうもありがとうございました」</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>葬儀委員長への挨拶</div>
                    <div>「先日の葬儀に際しましては、たいへんお世話になりありがとうございました。お陰をもちまして、無事に葬儀を済ませることができました」「慣れないことですので、何かと不行き届きな点があったと存じますが、どうぞお許しくださるようお願い申し上げます」「これからも、いろいろご相談にのっていただかねばならないこともあるかと存じますが、よろしくご指導賜りますようお願い申し上げます」</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>葬儀を手伝っていただいた方への挨拶</div>
                    <div>「先日は、いろいろお手伝いいただき、本当にありがとうございました。お陰様で、滞りなく葬儀を済ませることができました。これからも、どうぞよろしくお願いいたします」</div>
                  </div>
                  <br />

                  <div className='section'>
                    <div className='mincho font-weight-bold font-size-24px'>香典のお返しを持参した場合</div>
                    <div>「○○の葬儀に際しましては、わざわざお出掛けいただき、ありがとうございました。早いもので、もう忌明けを迎えることとなりました。ほんの心ばかりの品でございますが、供養の印でございます。どうぞお納めください」</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>法要の挨拶</div>
                    <div>「本日はお忙しいところ亡き○○のために参列していただきまして、誠にありがとうございました。お陰様で、すべて滞りなく終えることができました。亡き○○もこれで安らかに眠れることと存じます。これもひとえに皆様方のお陰でございます。厚くお礼申しあげます。ささやかではございますが、心ばかりの粗膳を用意させていただきましたので、ごゆっくりおくつろぎください」</div>
                  </div>
                  <br />

                  <div className="section">
                    <div className='mincho font-weight-bold font-size-24px'>お斎の挨拶</div>
                    <div>「本日はご多忙中にもかかわらず、長時間、本当にありがとうございました。お陰をもちまして、すべて滞りなく、相済ませることができました。社葬という身に余る扱いをいただき、遺族一同心から感謝している次第です。お口よごしではございますが、心ばかりの粗膳を用意いたしましたので、おくつろぎいただきまして、精進落としをしていただきとう存じます。本日はありがとうございました」</div>
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
