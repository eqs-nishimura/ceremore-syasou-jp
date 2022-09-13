import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Facility, HOTELS, OTHERS, SHIKIJIOU } from '@lib/shikijiou'
import { Breadcrumb } from '@components/breadcrumb'


const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      const $ = window.jQuery;
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();

      try{
        $('.slider').slick({
          autoplay: false,
          autoplaySpeed: 4500,
          speed : 1000,
          arrows: true,
          dots: false,
        });
      }catch(e){}
    }
  });

  const [state, setState] = useState<{ type: string | string[] | undefined, id: string | string[] | undefined } | undefined>();
  useEffect(() => {
    if(router.isReady) {
      const { type, id } = router.query;
      setState({type: type, id: id});
    }
  }, [router.isReady]);
  if(!state?.type || !state?.id) return (<></>);

  if(state.type !== "shikijou" && state.type !== "hotel" && state.type !== "other" || Array.isArray(state.type) || Array.isArray(state.id)) {
    throw new Error(`予期せぬエラーが発生しました state.type => ${state.type}`);
  }

  let map: Facility[];
  switch(state.type) {
    case "shikijou":
      map = SHIKIJIOU;
      break;
    case "hotel":
      map = HOTELS;
      break;
    default:
      map = OTHERS;
      break;
  }

  const facility = map.find(item => item.id === state.id);
  if(!facility) {
    throw new Error(`予期せぬエラーが発生しました facility => ${JSON.stringify(facility)}`);
  }

  return (
    <>
      <Head>
        <title>{facility.name} │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「"+facility.name+"」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-sougijou-detail">
        <main>
          <section className="s02">
            <div className="wrapper">
              <Breadcrumb
                pagenames={["セレモアの社葬トップ", "葬儀場・ホテル紹介"]}
                pageurls={["/", "/sougijou"]}
                targetpage={facility.name}
              />

              <div className="intro flex-wrapper justify-content-space-between align-items-center">
                <div className="name mincho">
                  {facility.ceremore
                    ? <h1 className="full">
                        <div className="img"><img src={facility.ceremoreFullLogo} alt={facility.name} /></div>
                      </h1>
                    : <h1 className="full">{facility.name}</h1>
                  }
                  {/* {facility.nameHira ? <div className="hira">{facility.nameHira}</div> : <></>} */}
                </div>
                {/* <div className="tel">
                  <div className="caption">こちらの式場に関するお問い合わせはこちら</div>
                  <div className="number mincho">
                    <div className="phone-icon">
                      <img src="/images/pi_detail_phone.png" alt="0120-470-470" />
                    </div>
                    <div>0120-470-470</div>
                  </div>
                  <div className="label">ご相談無料・24時間365日受付</div>
                </div> */}
                <div className="tel">
                  <a href="tel:0120-470-470">
                    <img className="pc" src="/images/pi_detail_tel.png?v=202206301445" alt="こちらの式場に関するお問い合わせこちら" />
                    <img className="sp" src="/images/pi_detail_tel_sp.png?v=202206301445" alt="こちらの式場に関するお問い合わせこちら" />
                  </a>
                </div>
              </div>

              <div className="profile">
                <div className="flex-wrapper justify-content-space-between align-items-center unchange-flex-direction-on-tablet">
                  <div className="profile-image">
                    <img src={`${facility.imagePath}?v=202206281700`} alt={facility.name} />
                  </div>
                  <div className="description" dangerouslySetInnerHTML={{__html: facility.description}} />
                </div>

                <div className="table-wrapper">
                  <table className="detail-table">
                    <tbody>
                      <tr>
                        <td>所在地</td>
                        <td>{facility.address}</td>
                      </tr>
                      <tr>
                        <td>施設</td>
                        <td>
                          {facility.facilityDescription}
                        </td>
                      </tr>
                      <tr>
                        <td>駐車場</td>
                        <td dangerouslySetInnerHTML={{__html: `${facility.parking ? facility.parking : "なし"}`}} />
                      </tr>
                      {/* <tr>
                        <td>利用料</td>
                        <td>{facility.fee ? facility.fee : "お問い合わせください"}</td>
                      </tr> */}
                      <tr>
                        <td>備考</td>
                        <td dangerouslySetInnerHTML={{__html: `${facility.remarks ? facility.remarks : "なし"}`}} />
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* <div className="full-description" dangerouslySetInnerHTML={{__html: `${facility.fullDescription}`}} /> */}
              </div>
            </div>
          </section>

          {facility.facilityList.length > 0 &&
            <section className="s03 slightly-colored-bg">
              <div className="wrapper">
                <h3>
                  <img src="/images/pi_detail.png?v=202206221900" alt="施設概要" />
                </h3>

                {facility.fullDescription && <div className="full-description" dangerouslySetInnerHTML={{__html: `${facility.fullDescription}`}} />}

                <div className="all-facilities">
                  <ul>
                    {facility.facilityList.map((item, i) => {
                      if(!item.area && !item.description) return false;
                      return (
                        <li key={i}>
                          <div>
                            <div className="image-area">
                              <img src={`${item.imgPath}?v=202207122220`} alt={item.area} />
                            </div>
                            {item.area ? <div className="name">《 {item.area} 》</div> : <></>}
                            {item.description ? <div className="description">{item.description}</div> : <></>}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>
          }

          <section className="s04">
            <div className="wrapper">
              <h3>
                <img src="/images/pi_detail_access.png?v=202206221900" alt="アクセス" />
              </h3>

              <div className="map-area flex-wrapper justify-content-space-evenly align-items-center">
                <div className="map">
                  <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_EMBED_API_KEY}&q=${facility.address}`} style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="access" dangerouslySetInnerHTML={{__html: facility.access}} />
              </div>
              <div className="button-wrapper flex-wrapper justify-content-center align-items-center unchange-flex-direction-on-tablet">
                {facility.caseId && facility.caseCategory
                  ? <Link href="/case/[category]/[slug]" as={`/case/${facility.caseCategory}/${facility.caseId}`}><a><div className="button">
                      <img src="/images/pi_detail_case_button.png" alt="事例を見る" />
                    </div></a></Link>
                  : <></>
                }
                <Link href={`/sougijou#${state.type}`}>
                  <div>
                    <div className="button">
                      <img src="/images/pi_detail_list_button.png" alt="一覧に戻る" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="s05">
            <div className="wrapper">
              <div className="flex-wrapper justify-content-center align-items-center">
                <div className="map">
                  <img src="/images/pi_area_map.png" alt="サービスエリア" />
                </div>
                <div className="area mincho">
                  <p><img src="/images/com_ceremore_logo.svg" alt="セレモア®" width={120} /> は幅広いネットワークであらゆるお式に対応いたします。サービスエリア内にご利用いただける式場・ホテルが多数ございます。</p>
                </div>
                <div className="area sm mincho">
                  <p><img src="/images/com_ceremore_logo.svg" alt="セレモア®" width={100} /> は幅広いネットワークであらゆるお式に対応いたします。サービスエリア内にご利用いただける式場・ホテルが多数ございます。</p>
                </div>
              </div>
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
