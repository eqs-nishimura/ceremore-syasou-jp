import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { TelBanner, Telbox } from '@components/telbox'
import { FirstView } from '@components/firstview'
import { css } from '@emotion/react'

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      // const $ = window.jQuery;
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
      window.desk();
    }
  });

  return (
    <>
      <Head>
        <title>社葬ご相談デスク │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「社葬ご相談デスク」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header />

      <div id="page-contact-syasou-desk">
        <main>
          <section className="s01">
            <div className="wrapper">
              {Breadcrumb({
                targetpage: '社葬ご相談デスク',
              })}
              {/* <h1 className=" mincho" style={{ maxWidth: '900px', padding: '0 10px' }}>
                <img src="/images/cs0101.png?v=400" alt='首都圏随一の社葬・お別れ会・合同葬・公葬の実績' className="photo " />
              </h1>
              <div>
                <img src="/images/cs0102.jpg?v=600" alt="セミナー会場" className="photo " />
              </div>
              <div className='content'>
                <h1 className='stand mincho'>
                  <img src='/images/cs0103.svg?v=500' alt='社葬ご相談デスク' />
                </h1>
                <h2 className='mincho'>
                  社葬ご相談デスクにて<br className="mini" />きめ細やかな対応
                </h2>
                <p>
                  ご要望に沿って、 社葬に関するあらゆる企画提案を行い、 事前のお見積りを作成いたします。 <br />
                  ご希望のご相談方法をお選びいただけます。
                </p>
              </div> */}
              <FirstView
                imagePath="/images/cs0102.png?202207191557"
                imagePathSp="/images/cs0102_sp.png?202207191557"
                alt="社葬ご相談デスク"
                title="社葬ご相談デスクにてきめ細やかな対応"
                description={<>ご要望に沿って、 社葬に関するあらゆる企画提案を行い、 事前のお見積りを作成いたします。ご希望のご相談方法をお選びいただけます。</>}
                shrinkTitle
                shrinkDescription
                descriptionMargin="0 0 3%"
               />
              {/* <Telbox /> */}
              <TelBanner />
            </div>
          </section>

          <section className="s02">
            <h3 className="mincho sylogo">
                <span className="tategaki">社葬ご相談デスク</span>
              </h3>
            {/* <h3 className="mincho">社葬ご相談窓口</h3> */}
            <div className="wrapper flex">
              <div className="content">
                <dl className="dl01">
                  <dd>
                    <h4 className="t01 mincho">東京紀尾井町本社</h4>
                    <p className="t02">〒102-0094 <br />東京都千代田区紀尾井町3-12  紀尾井町ビル6F</p>
                    <p className="t03">TEL：03-3556-1111（大代表）</p>
                    <div className="btnbox moreinfo">
                      <Link href='/faq'>
                        <a>
                          <img src='/images/cs0202.svg' alt='詳細を見る' />
                        </a>
                      </Link>
                    </div>
                  </dd>
                  <dt>
                    <img src="/images/cs0203.png?202207151353" alt="セレモア東京紀尾井町本社" />
                  </dt>
                </dl>
                <dl className="dl02">
                  <dt>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7823337049276!2d139.73455341602158!3d35.68236123751608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c9f75e4db%3A0x3406d62cd07349dc!2z5qCq5byP5Lya56S-44K744Os44Oi44KiIOadseS6rOe0gOWwvuS6leeUuuacrOekvg!5e0!3m2!1sja!2sjp!4v1635356984527!5m2!1sja!2sjp"
                      width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                  </dt>
                  <dd>
                    <p className="t01 mincho">交通のご案内</p>
                    <ul>
                      <li>JR山手線「四谷駅（麹町口）」より徒歩約10分。</li>
                      <li>東京メトロ有楽町線「麹町駅（2番出口）」より徒歩約2分。</li>
                      <li>東京メトロ半蔵門線「半蔵門駅（2番出口）」より徒歩約6分。</li>
                      <li>東京メトロ南北線「永田町駅（9番出口）」より徒歩約6分。</li>
                      <li>お車の場合、首都高速4号新宿線「外苑」出口より約5分。</li>
                    </ul>
                  </dd>
                </dl>
                <p className="btn_detail_close">閉じる</p>
              </div>
              <div className="content">
                <dl className="dl01">
                  <dd>
                    <h4 className="t01 mincho">立川本社</h4>
                    <p className="t02">〒190-8566 <br />東京都立川市柏町1-26-4</p>
                    <p className="t03">TEL：042-534-1111（大代表）</p>
                    <div className="btnbox moreinfo">
                      <Link href='/faq'>
                        <a>
                          <img src='/images/cs0202.svg' alt='詳細を見る' />
                        </a>
                      </Link>
                    </div>
                  </dd>
                  <dt>
                    <img src="/images/cs0204.jpg" alt="セレモア立川本社" />
                  </dt>
                </dl>
                <dl className="dl02">
                  <dt>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7823337049276!2d139.73455341602158!3d35.68236123751608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c9f75e4db%3A0x3406d62cd07349dc!2z5qCq5byP5Lya56S-44K744Os44Oi44KiIOadseS6rOe0gOWwvuS6leeUuuacrOekvg!5e0!3m2!1sja!2sjp!4v1635356984527!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                  </dt>
                  <dd>
                    <p className="t01 mincho">交通のご案内</p>
                    <ul>
                      <li>JR山手線「四谷駅（麹町口）」より徒歩約10分。</li>
                      <li>東京メトロ有楽町線「麹町駅（2番出口）」より徒歩約2分。</li>
                      <li>東京メトロ半蔵門線「半蔵門駅（2番出口）」より徒歩約6分。</li>
                      <li>東京メトロ南北線「永田町駅（9番出口）」より徒歩約6分。</li>
                      <li>お車の場合、首都高速4号新宿線「外苑」出口より約5分。</li>
                    </ul>
                  </dd>
                </dl>
                <p className="btn_detail_close">閉じる</p>
              </div>
              <div className="content">
                <dl className="dl01">
                  <dd>
                    <h4 className="t01 mincho">新宿本社</h4>
                    <p className="t02">〒160-0004 <br />東京都新宿区四谷4-19-7</p>
                    <p className="t03">TEL：03-5379-0111（大代表）</p>
                    <div className="btnbox moreinfo">
                      <Link href='/faq'>
                        <a>
                          <img src='/images/cs0202.svg' alt='詳細を見る' />
                        </a>
                      </Link>
                    </div>
                  </dd>
                  <dt>
                    <img src="/images/cs0205.jpg" alt="セレモア新宿本社" />
                  </dt>
                </dl>
                <dl className="dl02">
                  <dt>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7823337049276!2d139.73455341602158!3d35.68236123751608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c9f75e4db%3A0x3406d62cd07349dc!2z5qCq5byP5Lya56S-44K744Os44Oi44KiIOadseS6rOe0gOWwvuS6leeUuuacrOekvg!5e0!3m2!1sja!2sjp!4v1635356984527!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                  </dt>
                  <dd>
                    <p className="t01 mincho">交通のご案内</p>
                    <ul>
                      <li>JR山手線「四谷駅（麹町口）」より徒歩約10分。</li>
                      <li>東京メトロ有楽町線「麹町駅（2番出口）」より徒歩約2分。</li>
                      <li>東京メトロ半蔵門線「半蔵門駅（2番出口）」より徒歩約6分。</li>
                      <li>東京メトロ南北線「永田町駅（9番出口）」より徒歩約6分。</li>
                      <li>お車の場合、首都高速4号新宿線「外苑」出口より約5分。</li>
                    </ul>
                  </dd>
                </dl>
                <p className="btn_detail_close">閉じる</p>
              </div>
              <div className="content">
                <dl className="dl01">
                  <dd>
                    <h4 className="t01 mincho">八王子本社</h4>
                    <p className="t02">〒192-0062 <br />東京都八王子市大横町13-20</p>
                    <p className="t03">TEL：042-667-1111（大代表）</p>
                    <div className="btnbox moreinfo">
                      <Link href='/faq'>
                        <a>
                          <img src='/images/cs0202.svg' alt='詳細を見る' />
                        </a>
                      </Link>
                    </div>
                  </dd>
                  <dt>
                    <img src="/images/cs0206.jpg" alt="セレモア八王子本社" />
                  </dt>
                </dl>
                <dl className="dl02">
                  <dt>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7823337049276!2d139.73455341602158!3d35.68236123751608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c9f75e4db%3A0x3406d62cd07349dc!2z5qCq5byP5Lya56S-44K744Os44Oi44KiIOadseS6rOe0gOWwvuS6leeUuuacrOekvg!5e0!3m2!1sja!2sjp!4v1635356984527!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                  </dt>
                  <dd>
                    <p className="t01 mincho">交通のご案内</p>
                    <ul>
                      <li>JR山手線「四谷駅（麹町口）」より徒歩約10分。</li>
                      <li>東京メトロ有楽町線「麹町駅（2番出口）」より徒歩約2分。</li>
                      <li>東京メトロ半蔵門線「半蔵門駅（2番出口）」より徒歩約6分。</li>
                      <li>東京メトロ南北線「永田町駅（9番出口）」より徒歩約6分。</li>
                      <li>お車の場合、首都高速4号新宿線「外苑」出口より約5分。</li>
                    </ul>
                  </dd>
                </dl>
                <p className="btn_detail_close">閉じる</p>
              </div>
              <div className="content">
                <dl className="dl01">
                  <dd>
                    <h4 className="t01 mincho">神奈川本社</h4>
                    <p className="t02">〒252-0237 <br />神奈川県相模原市中央区千代田2-1-18</p>
                    <p className="t03">TEL：042-752-1111（大代表）</p>
                    <div className="btnbox moreinfo">
                      <Link href='/faq'>
                        <a>
                          <img src='/images/cs0202.svg' alt='詳細を' />
                        </a>
                      </Link>
                    </div>
                  </dd>
                  <dt css={css`
                    width: 301px;
                  `}>
                    <img src="/images/cs0207.jpg?v=202207051400" alt="セレモア神奈川本社" />
                  </dt>
                </dl>
                <dl className="dl02">
                  <dt>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7823337049276!2d139.73455341602158!3d35.68236123751608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c9f75e4db%3A0x3406d62cd07349dc!2z5qCq5byP5Lya56S-44K744Os44Oi44KiIOadseS6rOe0gOWwvuS6leeUuuacrOekvg!5e0!3m2!1sja!2sjp!4v1635356984527!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                  </dt>
                  <dd>
                    <p className="t01 mincho">交通のご案内</p>
                    <ul>
                      <li>JR山手線「四谷駅（麹町口）」より徒歩約10分。</li>
                      <li>東京メトロ有楽町線「麹町駅（2番出口）」より徒歩約2分。</li>
                      <li>東京メトロ半蔵門線「半蔵門駅（2番出口）」より徒歩約6分。</li>
                      <li>東京メトロ南北線「永田町駅（9番出口）」より徒歩約6分。</li>
                      <li>お車の場合、首都高速4号新宿線「外苑」出口より約5分。</li>
                    </ul>
                  </dd>
                </dl>
                <p className="btn_detail_close">閉じる</p>
              </div>
              <div className="content">
                <dl className="dl01">
                  <dd>
                    <h4 className="t01 mincho">埼玉本社</h4>
                    <p className="t02">〒350-0225 <br />埼玉県坂戸市日の出町31-13</p>
                    <p className="t03">TEL：049-283-0111（大代表）</p>
                    <div className="btnbox moreinfo">
                      <Link href='/faq'>
                        <a>
                          <img src='/images/cs0202.svg' alt='詳細を見る' />
                        </a>
                      </Link>
                    </div>
                  </dd>
                  <dt>
                    <img src="/images/cs0208.jpg?202207111930" alt="セレモア埼玉本社" />
                  </dt>
                </dl>
                <dl className="dl02">
                  <dt>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7823337049276!2d139.73455341602158!3d35.68236123751608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c9f75e4db%3A0x3406d62cd07349dc!2z5qCq5byP5Lya56S-44K744Os44Oi44KiIOadseS6rOe0gOWwvuS6leeUuuacrOekvg!5e0!3m2!1sja!2sjp!4v1635356984527!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                  </dt>
                  <dd>
                    <p className="t01 mincho">交通のご案内</p>
                    <ul>
                      <li>JR山手線「四谷駅（麹町口）」より徒歩約10分。</li>
                      <li>東京メトロ有楽町線「麹町駅（2番出口）」より徒歩約2分。</li>
                      <li>東京メトロ半蔵門線「半蔵門駅（2番出口）」より徒歩約6分。</li>
                      <li>東京メトロ南北線「永田町駅（9番出口）」より徒歩約6分。</li>
                      <li>お車の場合、首都高速4号新宿線「外苑」出口より約5分。</li>
                    </ul>
                  </dd>
                </dl>
                <p className="btn_detail_close">閉じる</p>
              </div>
              <div className="content ">
                <dl className="dl01">
                  <dd>
                    <h4 className="t01 mincho">所沢本社</h4>
                    <p className="t02">〒359-1124 <br />埼玉県所沢市東住吉4-7</p>
                    <p className="t03">TEL：04-2928-1121（大代表）</p>
                    <div className="btnbox moreinfo">
                      <Link href='/faq'>
                        <a>
                          <img src='/images/cs0202.svg' alt='詳細を見る' />
                        </a>
                      </Link>
                    </div>
                  </dd>
                  <dt>
                    <img src="/images/cs0209.jpg" alt="セレモア所沢本社" />
                  </dt>
                </dl>
                <dl className="dl02">
                  <dt>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7823337049276!2d139.73455341602158!3d35.68236123751608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c9f75e4db%3A0x3406d62cd07349dc!2z5qCq5byP5Lya56S-44K744Os44Oi44KiIOadseS6rOe0gOWwvuS6leeUuuacrOekvg!5e0!3m2!1sja!2sjp!4v1635356984527!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                  </dt>
                  <dd>
                    <p className="t01 mincho">交通のご案内</p>
                    <ul>
                      <li>JR山手線「四谷駅（麹町口）」より徒歩約10分。</li>
                      <li>東京メトロ有楽町線「麹町駅（2番出口）」より徒歩約2分。</li>
                      <li>東京メトロ半蔵門線「半蔵門駅（2番出口）」より徒歩約6分。</li>
                      <li>東京メトロ南北線「永田町駅（9番出口）」より徒歩約6分。</li>
                      <li>お車の場合、首都高速4号新宿線「外苑」出口より約5分。</li>
                    </ul>
                  </dd>
                </dl>
                <p className="btn_detail_close">閉じる</p>
              </div>
              <p className="t01">他、支社・営業所・店舗・式場にて、社葬、お別れの会、合同葬に関するご相談を承ります。</p>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Page

declare global {
  interface Window {
    [key: string]: any,
  }
}
