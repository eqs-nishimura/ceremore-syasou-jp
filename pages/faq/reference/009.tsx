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

  const faq = FAQ.reference["009"];
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
                  <div className='mincho font-size-24px font-weight-bold'>会長への弔辞 社長より</div>
                  <div>謹んで○○会長の御霊前に心から追悼の辞を捧げるにあたり、涕涙止まるところを知りません。会長のご人徳を敬慕し、長年に亘り限りない御慈愛と御薫陶を受けた者といたしまして、ご逝去の報に接して以来、諒暗をさまよう心地して、寂漠たる思いに駆られております。<br />会長は極めて厳格であられた反面、非常に愛情細やかなお人柄で、人材を育てることに関しては余人の追随するところではありませんでした。<br />仕事に対する気迫の凄絶さは、瞠目に値し、お側にいるだけで常に多大なものを学ばせていただくことができました。<br />ここまで我が社の繁栄をもたらしたものは、ひとえに会長が新しい時代感覚を経営に生かし、後に続く者が積極的で果敢な実行力を発揮できる土壌を、培って下さったからだと思います。<br />今後は会長のお言葉を新たに思い浮かべ、遺された御教訓を守って、社業に一層専念し、更に大きく発展させる覚悟でおります。<br />温容呼べども還えらず、空空漠漠たる思いひとしおながら、冥の永遠に安からんことを祈りて惜別の辞といたします。</div>
                  <br />

                  <div className='mincho font-size-24px font-weight-bold'>社長への弔辞 社員代表より</div>
                  <div>謹んで、白玉楼中の人となられた、○○○○会社代表取締役社長○○様の御霊前に、社員を代表して、一言お別れのご挨拶を申し上げます。<br />いまこの悲痛な現実に遭遇し、私どもは為すことを知らぬ有様です。現世の定めとはいえ、ただ無情を怨むばかりでございます。<br />社長は、常に社員の先頭に立ち、縦横無尽の活躍をなされました。その一方、周囲に寛容であり、慈父の如く慕われたことは、広く人の知るところであります。御功績は枚挙にいとまがありませんが、特筆すべきは、すぐれた先見性のもとに、各種システム開発にいち早く着手し、業界をリードし続けた点でありましょう。そして我が社の基礎を不動のものにいたしました。<br />このうえは、我々社員が一致協力し、社長の御遺徳、御偉業をさらに前進させてまいる決意であります。これを御霊前に固くお誓い申し上げます。後は私どもにお任せ下さり、なにとぞ心安らかにお眠りください。<br />最後に社長の御冥福をお祈り申し上げ弔辞といたします。</div>
                  <br />

                  <div className='mincho font-size-24px font-weight-bold'>社員への弔辞 社長より</div>
                  <div>本日執り行います社葬に臨んで、故○○君の御霊前に、謹んで哀悼の意を捧げます。<br />○○君、君は享年○○歳、卒然として我々の前から去られました。<br />「人生は朝の露の如し」とはいうものの、かかる前途ある人材を喪ったことは、悲傷これにまさるを知りません。<br />これほど早く、君と再び会うことのできない日が来るとは、一体誰が予想したでしょう。君を失った損失の大きさは、残念とも無念ともいいようがありません。君は我が○○会社にとって、欠くことのできない社員の一人でありました。後輩諸君はもとより、先輩にあたる人々からも、君の実績と見識は認められ信頼されておりました。<br />思えば初めは不可能と思われ、各社が手をつけなかった○○の開発も、君の強い意志と不撓不屈の行動力で、わが社が他に先駆けて大きな業績を挙げることができました。これは社内ばかりでなく、○○業界においても長く記憶に留どめられることでありましょう。君が尊敬し協力を惜しまなかった上司、手を取りあって励んでくれた同期の人たち、また君の後に続く後輩たちは、君の残した愛社精神を引継ぎ、今後の諸問題に対処し、難関を乗り越えていく覚悟を固めたに違いありません。<br />また、御家庭では、良き父、良き夫であったかけがえのない君を突然失った御家族の御悲嘆はいかばかりかと拝察するだに断腸の思いがいたします。御遺族の方々の今後の、御相談役としては微力ながらも、私に出来る最善を尽くしたいと決意しております。願わくば、君も御家族の幸せ、特にご子息たちの将来を、静かなる世界から見守っていて、この悲しみを乗り越える力を授けてあげてください。君のご霊前に立ち、心から今までのご労苦に対し深い感謝の念を贈ると共に、ここに永別の言葉を述べさせていただく次第であります。<br />○○君、安らかなる眠りに就かれんことを。</div>
                  <br />

                  <div className='mincho font-size-24px font-weight-bold'>上司への弔辞 社員代表より</div>
                  <div>○○○○様。総務部を代表し、心から哀悼の辞を捧げます。部長がご他界なされようとは、正直なところ、今だに信じられない気持ちでいっぱいです。<br />私たちが入社した翌日、部長が朝礼でおっしゃったお言葉を昨日のことのように覚えております。「君たちは今日から社会人なのだから、心に着ている学生服を脱ぎ捨てろ。なんならおれが酒で洗い流してやろう」豪放らいらく、無類の酒豪、歯に衣を着せず何事もズバリとおっしゃるご性格･･････私たち若手社員は、その日のうちに部長に惚れました。あなたに捧げた仇名は、「カミナリオヤジ」でした。<br />部長。会社が創業以来、はじめてといってよいほどの難関にあるときになぜ、私どもを置いて逝ってしまわれたのですか。低成長下のもと、あなたは会社の合理化、近代化のために全精力を傾注されてきました。工場のOA化を促進し、いよいよ業界の荒波の中へ全社員一丸となって乗り出そうとした今、部長は私どもを残して、突然に逝ってしまわれました。<br />しかし、部長、今となってはどうか心安らかにお眠りください。私どもの胸の中には、「カミナリオヤジ」が事あるごとに残されたお言葉が、一つ一つ刻みこまれております。私どもはそれを貴重なご遺訓とし、社長を柱に社員一同、心を合わせて社業の一層の発展に努める覚悟でございます。どうか草葉の陰で見守ってください。<br />部長のご意思、必ずやりとげることをお誓い申し上げて、哀悼の辞にかえさせていただきます。</div>
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
