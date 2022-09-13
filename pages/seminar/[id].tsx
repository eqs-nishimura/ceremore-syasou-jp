import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { SEMINARS } from '@lib/seminars'
import { Breadcrumb } from '@components/breadcrumb'

export const getStaticProps = async (ctx: { params: { id: string } }) => {
  return {
    props: {
      key: ctx.params.id,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: SEMINARS.map(item=>`/seminar/${item.id}`),
    fallback: false,
  };
}

const Page: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  const router = useRouter();
  const [id, setId] = useState<string | string[] | undefined>();

  useEffect(() => {
    if(router.isReady) {
      const { id } = router.query;
      setId(id);
    }
  }, [router.isReady]);
  if(!id) return (<></>);

  let seminar = SEMINARS.find(item => item.id === id);

  if(!seminar) {
    seminar = SEMINARS[0];
  }
  const nextSeminar = SEMINARS.find(item => seminar!.nextSeminarId === item.id);
  const prevSeminar = SEMINARS.find(item => seminar!.prevSeminarId === item.id);

  const dateComponents = seminar.date.split("-");
  const partialDateComponents = dateComponents[2].split(" ");

  let nextDateComponents: string[];
  let partialNextDateComponents: string[];
  if(nextSeminar) {
    nextDateComponents = nextSeminar.date.split("-");
    partialNextDateComponents = nextDateComponents[2].split(" ");
  }

  let prevDateComponents: string[];
  let partialPrevDateComponents: string[];
  if(prevSeminar) {
    prevDateComponents = prevSeminar.date.split("-");
    partialPrevDateComponents = prevDateComponents[2].split(" ");
  }

  const now = new Date();
  const targetDate = new Date(now);
  targetDate.setFullYear(Number(dateComponents[0]), (Number(dateComponents[1])-1), Number(dateComponents[2].split("(")[0]));
  targetDate.setHours(0, 0, 0, 0);
  const available = targetDate.getTime() >= now.getTime();

  return (
    <>
      <Head>
        <title>{seminar.seminarTitle} │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「"+seminar.seminarTitle+"」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-seminar-detail">
        <main>
          <section>
            <div className="wrapper">
              <Breadcrumb
                pagenames={["セレモアの社葬トップ", "社葬セミナー"]}
                pageurls={["/", "/seminar"]}
                // targetpage={`${seminar.seminarTitle}`}
                targetpage="セミナー詳細"
              />

              <div className="fv">
                <div className="mincho">
                  <div className="sentence">
                    <p className="subtitle">― 総務・人事・秘書必見 ―</p>
                    <div className="flex-wrapper justify-content-space-between align-items-center unchange-flex-direction-on-sp">
                      <div className='title-wrap'>
                        {/* <p className="title">社葬・お別れの会・合同葬</p>
                        <p className="title"><span className="wine-red">成功</span>のポイント</p> */}
                        <div className='title'>{seminar.seminarTitle}</div>
                      </div>
                      <div className="flex-wrapper flex-direction-column align-items-center justify-content-center wine-red online-offline">
                        <p>会場参加と</p>
                        <p>オンラインの</p>
                        <p>同時開催</p>
                      </div>
                    </div>
                  </div>
                  <div className="fv-image">
                    <img src="/images/se_fv.png" alt="社葬セミナー" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="seminar-description">
            <div className="wrapper">
              <div className="schedule-table-wrap">
                <table className="schedule-table">
                  <tbody>
                    <tr>
                      <td>開催予定日時</td>
                      <td>
                        <h1 className="flex-wrapper justify-content-center align-items-center">
                          {seminar.firstHalf ? <><div className="wine-red">前編</div><div className="whitespace-h-20" /></> : <></>}
                          {seminar.secondHalf ? <><div className="wine-red">後編</div><div className="whitespace-h-20" /></> : <></>}
                          <div className="date">
                            {`${dateComponents[0]}年${dateComponents[1]}月${partialDateComponents[0]}日${partialDateComponents[1]}`}
                          </div>
                        </h1>
                        <div className="time">
                          <div>{seminar.startTime}〜{seminar.endTime}（受付：{seminar.receptionTime}〜）</div>
                          {seminar.firstHalf ? <div>※セミナーは後編[{<Link href="/seminar/[id]" as={`/seminar/${seminar.nextSeminarId!}`}><a>{`${nextDateComponents![1]}月${partialNextDateComponents![0]}日${partialNextDateComponents![1]}`}開催</a></Link>}]と2部構成となっております</div> : <></>}
                          {seminar.secondHalf ? <div>※セミナーは前編[{<Link href="/seminar/[id]" as={`/seminar/${seminar.prevSeminarId!}`}><a>{`${prevDateComponents![1]}月${partialPrevDateComponents![0]}日${partialPrevDateComponents![1]}`}開催</a></Link>}]と2部構成となっております</div> : <></>}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>定員</td>
                      <td>
                        <div className="capacity">
                          <div>{seminar.capacity}名　※先着順にて承ります</div>
                          <div>新型コロナウイルス感染防止のため、会場の座席数は70席のところ、{seminar.capacity}席の少人数制とさせていただきます。</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>費用</td>
                      <td className="fee">
                        {seminar.free ? "無料" : `${seminar.price!.toLocaleString()}円`}
                      </td>
                    </tr>
                    <tr>
                      <td>セミナー内容</td>
                      <td>
                        {seminar.firstHalf ? <><div className="wine-red mark">前編</div><div className="whitespace-v-20" /></> : <></>}
                        {seminar.secondHalf ? <><div className="wine-red mark">後編</div><div className="whitespace-v-20" /></> : <></>}
                        <ol>
                          {seminar.contents.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ol>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {available
                  ? <div className="contact">
                      <Link href="/contact/form?mode=3"><a>
                        <img src="/images/se_detail_contact.png?v=202207201935" alt="お申し込み" />
                      </a></Link>
                    </div>
                  : <div className="contact">
                      <img src="/images/se_detail_contact_no_button.png" alt="お申し込み" />
                    </div>
                  }
              </div>
            </div>
          </section>

          <section>
            <div className="heading-image">
              <img src="/images/se_tutor.png" alt="講師紹介" />
            </div>
            <div className="wrapper">
              <div className="tutor-box flex-wrapper slightly-colored-bg">
                <div className="profile-wrapper flex-wrapper flex-direction-column justify-content-center">
                  <div className="profile-image">
                    <img src="/images/se_tutor_profile_image.png" alt="プロフィール写真" />
                  </div>
                  <div className="description">
                    <div>セレモアホールディングス株式会社</div>
                    <div>取締役　嶋田 竜博</div>
                  </div>
                </div>
                <div className="introduction">
                  <p>平成7年、株式会社セレモア入社。</p>
                  <p>家族葬から5,000人規模の社葬・お別れの会・合同葬まで約80,000件の葬儀執行ならびに管理監督責任者を担当。</p>
                  <p>豊富な経験を生かし、多くの事例を用いながら総務・人事・秘書室実務担当者様の目線での社葬セミナーは常に好評を博している。</p>
                  <p>ほか、終活セミナー、エンゼルケア・グリーフケアセミナーなど年間約100回のセミナーにて講演。</p>
                </div>
              </div>
            </div>
          </section>

          <section className="location-bg slightly-colored-bg">
            <div className="heading-image">
              <img src="/images/se_location.png" alt="講師紹介" />
            </div>
            <div className="wrapper">
              <div className="flex-wrapper unchange-flex-direction-on-sp">
                <div className="location-image">
                  <img src="/images/se_detail_location1.png" alt="社葬" />
                </div>
                <div className="location-image">
                  <img src="/images/se_detail_location2.png" alt="社葬" />
                </div>
              </div>

              <div className="location">
                {seminar.location}
              </div>

              <div className="clipping-box flex-wrapper justify-content-center">
                <div>新型コロナウイルス感染防止のため、会場の座席数は70席のところ、{seminar.capacity}席の少人数制とさせていただきます。</div>
              </div>

              <div className="access">
                <div className="title mincho">アクセス情報</div>
                <div className="clipping-box flex-wrapper justify-content-space-between">
                  <div className="map">
                  <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_EMBED_API_KEY}&q=${seminar.location}`} style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                  </div>
                  <div className="description">
                    <p className="heading">《電車・バスをご利用の場合》</p>
                    <p>麹町駅 徒歩2分（東京メトロ 有楽町線）</p>
                    <p>永田町駅 徒歩6分（東京メトロ 有楽町線・半蔵門線・南北線）</p>
                    <p>半蔵門駅 徒歩6分（東京メトロ 半蔵門線）</p>
                    <p>赤坂見附駅 徒歩7分（東京メトロ 丸ノ内線・銀座線）</p>
                  </div>
                </div>
              </div>

              {available
                ? <div className="contact clickable">
                    <Link href="/contact/form?mode=3"><a>
                      <img src="/images/se_detail_contact.png?v=202207201935" alt="お申し込み" />
                    </a></Link>
                  </div>
                : <div className="contact">
                    <img src="/images/se_detail_contact_no_button.png" alt="お申し込み" />
                  </div>
              }
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
  interface Window{
    [key: string]: any,
  }
}
