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

  const faq = FAQ.reference["006"];
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
                  <div className='mincho font-weight-bold font-size-24px'>葬儀委員長　挨拶文</div>

                  <div className='font-size-20px'>サンプル１</div>
                  <div>葬儀委員長といたしまして、ひとことご挨拶を申し述べさせていただきます。ご会葬の皆様、本日はご多用中にもかかわらず多数ご会葬くださいまして、誠にありがとうございました。おかげさまをもちまして、株式会社◯◯◯◯、社葬、並びに告別式は滞りなく終了いたしました。ご遺族に代わりまして、厚く御礼申し上げます。<br /><br />◯◯常務は、本年初春よりご自宅で療養中でございましたが、今月◯月の午後◯時◯分、◯歳の生涯を閉じられました。思えば、◯◯常務は今から◯年前、前会長と共に株式会社◯◯◯◯を興され、今日の繁栄を導いた功労者でございます。私どもはかけがえのない大切な方を失ったものと考えております。まことに残念でございます。事後、私ども社員一同、常務の意志を受け継ぎ、社を一層発展させていく覚悟でございます。どうぞ事後とも変わらぬご協力、お引き立てをお願い申し上げます。最後にご遺族に対しましても、故人に賜りましたのと同様のご厚意をお願い申し上げまして、ご挨拶を終わらせていただきます。<br /><br />本日は誠にありがとうございました。</div>
                  <br />
                  <br />

                  <div className='font-size-20px'>サンプル２</div>
                  <div>故　◯◯◯◯会長のご葬儀を株式会社◯◯◯◯◯◯の社葬をもって執り行うにあたり、会社を代表して一言ご挨拶を申し上げます。<br /><br />◯◯◯◯会長は、◯◯年　◯◯県◯◯市にお生まれになりました。◯◯大学をご卒業後、株式会社◯◯に勤務されました。◯◯年、株式会社◯◯◯◯◯◯を設立され、以来社長として常に陣頭に立ち、会社の今日を築き上げられました。<br /><br />昨年◯月にご病気のため社長を退任され、◯◯夫人の手厚い看護の下で療養されておりましたが、◯年◯月◯日、ご逝去されました。<br /><br />会長は、根っからの営業マンでした。といっても性格は温和で、押しつけがましいところのまったくない人柄でございました。情報を細かに整理して、相手のニーズは何かを正確につかみとられ、そのニーズにあった商品を提供することを心がけておられました。「自分に得にだけなって、お客様のお役に立てない商品なんて売るな」というのが口癖でした。<br /><br />今でも心に刻まれている言葉を紹介させていただきます。一つは「野球でも３割ヒット打てば大打者じゃないか。失敗は恐れるな」です。断られ、がっかりして会社に戻ると決まって聞かされたものです。もう一つは「フォローをきちんとしろよ。商品を売るだけでなく、使われるところまで見とどけなさい。お客様にとって価値あるのは使ってからだよ」です。<br /><br />すべては紹介はできませんが、私たちにとって会長は、営業マンとはどうあるべきか、ということを一から十まで教えてくれた先生でした。おかげさまで、お客様の信頼を得られる社員となり、会社となれたと感謝しております。　ご参列の皆様、本日はご多用にもかかわらずご会葬いただきありがとうございました。会長は私どもにとってかけがえのない存在であっただけに、社員一同大きな衝撃の中にあります、だが、私でもはこれを乗り越えて、会社の精神を体に刻み込み、一層信頼される商品のご提供に努めていく所存です。これが会長に報いる唯一のことであると思います。</div>
                  <br />
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>喪主　挨拶文</div>

                  <div className='font-size-20px'>サンプル１</div>
                  <div>遺族を代表し、一言ご挨拶申し上げます。　本日は、ご多忙のところ、遠路ご会葬いただき、厚く御礼申し上げます。<br /><br />父は、「仕事一筋」の人間で、したがって趣味もとりたてて持たず、家にいるときはいつも所在なげでボンヤリしておりました。母や私ども子供が何を言っても笑ってフンフンと頷いてばかりでしたが、他人の悪口を言おうものなら、突然に大声で怒ったものです。<br /><br />「他人の悪口を言う前に自分に悪いところがないか反省しろ」というのが口癖でした。今もそのときの怒った様子が目に浮かびます。仕事場でも偏屈なところがあり、ご迷惑をおかけしたこともあるのではないかと心配しております。この際、お許しを賜りたくお願い申し上げます。　このような父に対して、生前寄せられました皆様のご厚情に対し、心より御礼申し上げます。私どもは、未熟ではありますが、故人の教えを守り、精進していく所存です。皆様方には、故人と同様お付き合いいただき、ご指導いただけますことをお願い申し上げます。<br /><br />本日は誠にありがとうございました。</div>
                  <br />

                  <div className='font-size-20px'>サンプル２</div>
                  <div>遺族を代表し、一言ご挨拶を申し上げます。<br /><br />本日は、お忙しい中、父◯◯◯の葬儀にご参列賜りありがとうございました。<br /><br />父は長い入院生活を送っておりましたが、病院の先生方の暖かいご配慮で、最後は１週間だけでしたが自宅に戻ることができました。私ども家族の中でやすらいでおりました。<br /><br />自分が育てた庭に花を見られるのが、何よりも本人の希望でした。意識を無くしたのは亡くなる２日前のことです。静かに眠りにつきました。痛みもなく安らかでした。<br /><br />自然をこよなく愛した父でしたが、静かに自然にとけ込むような、父らしい最後でした。　たくさんの方々からお見舞いに申し出をいただきましたが、勝手を通してお断りしましたことをお詫び申し上げます。皆様のご厚情はその都度父には伝えておりました。父も慰められた様子でした。　父に生前賜りました皆様の暖かいお気持ちを心より感謝申し上げます。私も一男一女の父ですが、父のような人に愛され、自然に愛された一生を送れたらと思っております。<br /><br />本日は誠にありがとうございました。</div>
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
