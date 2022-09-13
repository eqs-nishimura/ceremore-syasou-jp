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

  const faq = FAQ.reference["004"];
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
                  <div>※見切れている表は横スクロールが可能です</div>
                  <div className='mincho font-weight-bold font-size-24px'>{"[年金]"}</div>
                  {/* <div className='img'>
                    <img src="/images/faq/reference/201703095_001.jpeg" alt="年金" />
                  </div> */}
                  <div className="table-wrapper">
                    <table>
                      <tr className="header">
                        <td></td>
                        <td colSpan={3}>国民年金</td>
                        <td>厚生年金</td>
                      </tr>
                      <tr>
                        <td>手続き内容</td>
                        <td>遺族基礎年金</td>
                        <td>寡婦年金</td>
                        <td>死亡一時金</td>
                        <td>遺族厚生年金</td>
                      </tr>
                      <tr>
                        <td>申請先</td>
                        <td colSpan={3}>国民年金のみの請求はお住まいの市町村役場または、年金事務所で受付</td>
                        <td>年金事務所または年金相談センター</td>
                      </tr>
                      <tr>
                        <td>申請期限</td>
                        <td>5年以内</td>
                        <td>5年以内</td>
                        <td>2年以内</td>
                        <td>5年以内</td>
                      </tr>
                      <tr>
                        <td>住民票</td>
                        <td>世帯全員の写し<br />〇<br />（住民票の除票）<br />*一部マイナンバーの記入で省略が可能</td>
                        <td>世帯全員の写し<br />〇<br />（住民票の除票）</td>
                        <td>世帯全員の写し<br />〇<br />（住民票の除票）</td>
                        <td>世帯全員の写し<br />〇<br />（住民票の除票）</td>
                      </tr>
                      <tr>
                        <td>戸籍謄本</td>
                        <td>〇<br />（受給権発生日以降で提出日から6カ月以内に交付されたもの）</td>
                        <td>〇<br />（受給権発生日以降で提出日から6カ月以内に交付されたもの）</td>
                        <td>〇</td>
                        <td>〇</td>
                      </tr>
                      <tr>
                        <td>死亡診断書</td>
                        <td>〇</td>
                        <td></td>
                        <td></td>
                        <td>〇</td>
                      </tr>
                      <tr>
                        <td>死亡者の年金手帳（証書）</td>
                        <td>〇</td>
                        <td>〇<br />（公的年金受給者）</td>
                        <td>〇</td>
                        <td>〇</td>
                      </tr>
                      <tr　className="text-align-left vertical-align-top">
                        <td>その他</td>
                        <td>・所得証明書（請求者）マイナンバー記載で添付省略可<br />・振込を受ける金融機関名と口座番号が確認できるもの。<br />・子の収入が確認できる書類（マイナンバー記載で添付省略可、義務教育終了前は不要）<br />・請求者の本人確認書類<br />・請求者の年金手帳（基礎年金番号を確認できるもの）</td>
                        <td>・振込を受ける金融機関名と口座番号が確認できるもの。<br />・請求者の所得証明書<br />・請求者の本人確認書類<br />・請求者の年金手帳（基礎年金番号を確認できるもの）</td>
                        <td>・振込を受ける金融機関名と口座番号が確認できるもの。<br />・請求者の本人確認書類<br />・請求者の年金手帳（基礎年金番号を確認できるもの）</td>
                        <td>・所得証明書（請求者）マイナンバー記載で添付省略可<br />・振込を受ける金融機関名と口座番号が確認できるもの。<br />・子の収入が確認できる書類（マイナンバー記載で省略可、義務教育終了前は不要）<br />・請求者の本人確認書類<br />・請求者の年金手帳（基礎年金番号を確認できるもの）</td>
                      </tr>
                    </table>
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>{"[保険]"}</div>
                  {/* <div className='img'>
                    <img src="/images/faq/reference/201703095_002.jpeg" alt="保険" />
                  </div> */}
                  <div className="table-wrapper">
                    <table>
                      <tr className="header">
                        <td></td>
                        <td>国民健康保険</td>
                        <td>健康保険</td>
                        <td colSpan={2}>労災保険</td>
                        <td>生命保険</td>
                        <td>簡易保険</td>
                      </tr>
                      <tr>
                        <td>手続き内容</td>
                        <td>葬祭費</td>
                        <td>埋葬料（費）</td>
                        <td>葬祭料（給付）</td>
                        <td>遺族（補償）年金</td>
                        <td>保険金</td>
                        <td>保険金</td>
                      </tr>
                      <tr>
                        <td>申請期限</td>
                        <td>2年以内</td>
                        <td>2年以内</td>
                        <td>2年以内</td>
                        <td>5年以内</td>
                        <td>3年以内</td>
                        <td>5年以内</td>
                      </tr>
                      <tr>
                        <td>印鑑証明書</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>保険金受取人<br />〇</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>住民票</td>
                        <td></td>
                        <td></td>
                        <td>〇</td>
                        <td>〇</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>戸籍謄本</td>
                        <td></td>
                        <td></td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>保険金受取人<br />〇</td>
                        <td>〇</td>
                      </tr>
                      <tr>
                        <td>除籍謄本</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>被保険者<br />〇</td>
                        <td>〇</td>
                      </tr>
                      <tr>
                        <td>死亡診断書</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>〇</td>
                      </tr>
                      <tr>
                        <td>被保険者証</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td></td>
                        <td></td>
                        <td>〇</td>
                        <td>〇</td>
                      </tr>
                      <tr className="text-align-left vertical-align-top">
                        <td>その他</td>
                        <td>・会葬礼状又は葬儀費用に関する領収書<br />・振込先口座番号<br />・葬祭を執行した方の本人確認書類</td>
                        <td>・事業主の証明（埋葬費の場合は埋葬に要した領収書、または費用の明細書）<br />・振込先口座番号</td>
                        <td>・事業主の証明、または死亡を証明する書類</td>
                        <td>・事業主の証明、または死亡を証明する書類</td>
                        <td>・保険金受取人の口座番号</td>
                        <td>・保険金受取人の口座番号</td>
                      </tr>
                    </table>
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>{"[その他手続き①]"}</div>
                  {/* <div className='img'>
                    <img src="/images/faq/reference/201703095_003.jpeg" alt="その他" />
                  </div> */}
                  <div className="table-wrapper">
                    <table>
                      <tr className="header">
                        <td></td>
                        <td>銀行預金・郵便貯金</td>
                        <td>不動産</td>
                        <td>株券（株式）・社債・国債</td>
                        <td>自動車</td>
                        <td>電話</td>
                        <td>電気・ガス・水道</td>
                      </tr>
                      <tr>
                        <td>手続き内容</td>
                        <td>名義変更</td>
                        <td>名義変更</td>
                        <td>名義変更</td>
                        <td>名義変更</td>
                        <td>名義変更</td>
                        <td>名義変更</td>
                      </tr>
                      <tr>
                        <td>印鑑証明書</td>
                        <td>相続人全員<br />〇</td>
                        <td>相続人全員<br />〇</td>
                        <td>相続人全員<br />〇</td>
                        <td>相続人全員<br />〇</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>住民票</td>
                        <td></td>
                        <td>〇</td>
                        <td></td>
                        <td>〇</td>
                        <td>〇</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>戸籍謄本</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>除籍者を含む<br />〇</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>戸籍抄本</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>除籍謄本</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td>〇</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-align-left vertical-align-top">
                        <td>その他</td>
                        <td>・依頼書（金融機関所定）<br />・遺産分割協議書又は遺言書がない場合は金融機関所定の用紙に署名、捺印（実印）が必要<br />・預貯金証書（通帳等）</td>
                        <td>・所有権移転（保存）登記申請書<br />・除住民票（被相続人）<br />・固定資産課評価証明書<br />・登録事項証明書<br />・遺産分割協議書など</td>
                        <td>・遺産分割協議書<br />・名義書換請求書（株券、社債、国債など）</td>
                        <td>・移転登録申請書<br />・自動車検査証<br />・自動車検査記入申請書（遺産分割協議書）<br />・車庫証明</td>
                        <td>・加入権承継届書</td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                  <br />

                  <div className='mincho font-weight-bold font-size-24px'>{"[その他手続き②]"}</div>
                  {/* <div className='img'>
                    <img src="/images/faq/reference/201703095_004.png" alt="死亡者の年金手帳（証書）" />
                  </div> */}
                  <div className="table-wrapper">
                    <table>
                      <tr className="header">
                        <td></td>
                        <td>借地権</td>
                        <td>死亡した者の所得税の確定申告</td>
                        <td>相続税の申告</td>
                        <td>生命保険付き住宅ローン</td>
                        <td>会社役員の死亡</td>
                        <td>営業許可申請</td>
                      </tr>
                      <tr>
                        <td>手続き</td>
                        <td>名義変更</td>
                        <td></td>
                        <td></td>
                        <td>保険金</td>
                        <td>役員の変更登記</td>
                        <td>営業継承または免許申請</td>
                      </tr>
                      <tr>
                        <td>申請期限</td>
                        <td></td>
                        <td>4ヶ月以内</td>
                        <td>10ヶ月以内</td>
                        <td></td>
                        <td>2週間以内</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>印鑑証明書</td>
                        <td>〇</td>
                        <td></td>
                        <td>〇</td>
                        <td></td>
                        <td>新代表者<br />〇</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>住民票</td>
                        <td>〇</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>戸籍謄本</td>
                        <td>〇</td>
                        <td></td>
                        <td>相続人<br />〇</td>
                        <td></td>
                        <td></td>
                        <td>相続人<br />〇</td>
                      </tr>
                      <tr>
                        <td>戸籍抄本</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>除籍謄本</td>
                        <td>〇</td>
                        <td></td>
                        <td>〇</td>
                        <td></td>
                        <td>〇</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>除籍抄本</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>〇</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>死亡診断書</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>〇</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>死亡者の年金手帳（証書）</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>保険証書</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-align-left vertical-align-top">
                        <td>その他</td>
                        <td>・除住民票（被相続人）<br />・固定資産評価証明書<br />・名義変更料</td>
                        <td>・各種源泉徴収票<br />・各種控除証明書<br />・控除対象費用の領収書</td>
                        <td>・相続関係図<br />・遺産分割協議書の写し<br />・固定資産評価証明書<br />・遺言書（ある場合）の写し<br />・預貯金などの残高証明書<br />・不動産の登記事項証明書<br />・相続人のマイナンバーカード（通知カードの場合には＋身分証明書）<br />・法定相続情報一覧図の写しで相続人の戸籍謄本省略可</td>
                        <td></td>
                        <td>・取締役会議事録<br />・株主総会議事録<br />・就任承諾書（不要な場合もある）<br />・株主名簿<br />・本人確認書類</td>
                        <td>・風俗営業、旅行業、酒類販売、貸金、飲食店、旅館、環境衛生、食品製造、薬局、運送、建設業など</td>
                      </tr>
                    </table>
                  </div>
                  <div>※手続きに必要な書類は市区町村、金融機関によって多少異なる場合があります。<br />※令和4年1月現在</div>
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
