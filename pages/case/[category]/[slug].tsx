import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import * as Constants from '@lib/Constants';
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { css } from '@emotion/react'
import { Breadcrumb } from '@components/breadcrumb';
import { useWindowDimensions } from '@lib/util';

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
  const category: string | undefined = Array.isArray(params?.category)? params?.category[0] : params?.category;
  const slug: string | undefined = Array.isArray(params?.slug)? params?.slug[0] : params?.slug;
  const data = category && slug && Constants.FUNERAL_CASE2[category][slug];
  return {props:data};
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.entries(Constants.FUNERAL_CASE2)
      .map(d1=>Object.entries(d1[1] as any)
      .map(d2=>`/case/${d1[0]}/${d2[0]}`)).flat(),
    fallback: false
  }
}

const Page: NextPage<any> = (props) => {
  const router = useRouter();
  const { width } = useWindowDimensions();

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
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: 'calc((100% - 894px) / 2)',
          responsive: [{
            breakpoint: 881,
            settings: {
              centerPadding: 'calc((100% - 300px) / 2)',
            }
          }]
        });
      }catch(e){}
    }
  });

  return (
    <>
      <Head>
        <title>事例詳細 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「事例詳細」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-case-detail">
        <main className="m01">
          <section className="s01">
            <div className="wrapper">
              <Breadcrumb
                pagenames={["セレモアの社葬トップ", "社葬の葬儀事例"]}
                pageurls={["/", `/case`]}
                targetpage={`${props.categoryJP}（${props.scale}）- ${props.industry}`}
              />
              <h1 className="title">
                <p className="subttl mincho">{props.categoryJP}（{props.scale}）</p>
                <h2 className="mainttl mincho">{props.industry}</h2>
              </h1>
              <dl>
                <dt className="t01">
                  <div className="mainImg">
                    <img src={`${props.mainImg.src}?v=202207020115`} width={props.mainImg.w} height={props.mainImg.h} alt="photo" />
                  </div>
                </dt>
                <dd>
                  <table>
                    <tbody>
                      <tr>
                        <th>故人様</th>
                        <td>{props.industry}<br />{props.position}</td>
                      </tr>
                      <tr>
                        <th>参列者</th>
                        <td>
                        {props.attendee.match(/([\d,]+|[^\d]+)/g).map((t:string,i:number)=>/[\d,]+/.test(t)?<span key={i} className="n01">{t}</span>:t)}名
                        </td>
                      </tr>
                      <tr>
                        <th>式場</th>
                        <td>{props.facility.name}<br />({props.facility.address})</td>
                      </tr>
                      <tr>
                        <th>葬儀費用</th>
                        <td>
                        {props.cost.match(/([\d,]+|[^\d]+)/g).map((t:string,i:number)=>/[\d,]+/.test(t)?<span key={i} className="n01">{t}</span>:t)}円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </dl>
              {props.introduction &&  <>
                <div className="mincho t02">{props.introduction}</div>
              </>}
            </div>
          </section>

          <section className="s03">
            <div className="wrapper">
              <div className="info">
                {width > 600
                  ? <>※上記式場は参列者数・規模、総額費用はご要望に応じて承ります。<br />詳しくはお問合せください。</>
                  : <>※上記式場は参列者数・規模、総額費用はご要望に応じて承ります。詳しくはお問合せください。</>
                }
              </div>
            </div>
          </section>

          {Object.entries(props.content).map((d:[string,any],i)=>
            <section key={d[0]} className={`s02${i === 0 ? " first" : ""}`}>
              <div className="wrapper">
                <div className="c01">
                  <h2 className="mincho ttl">{d[1].title}</h2>
                  <div className={["content",i%2?'row-reverse':'row'].join(' ')}>
                    <p className="mincho t02">{d[1].text}</p>
                    <div className="subImg">
                      <div className="si01">
                        <img src={`${d[1].img.src}?v=202206301100`} width={d[1].img.w} height={d[1].img.h} alt={d[1].img.caption} />
                      </div>
                      {i==1 && <div className="si02">
                        ※企業を特定されないよう変更している部分がございます。<br />
                        ※写真はイメージです。
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {props.link &&
            <section className="s02">
              <div className="wrapper">
                <div className="c01">
                  <dl>
                    <dt>
                      <div className="mainImg">
                        <img src={`${props.mainImg.src}?v=202207020115`} width={props.mainImg.w} height={props.mainImg.h} alt="photo" />
                      </div>
                    </dt>
                    <dd>
                      <div className="i01">
                        <div className="i02 mincho">{props.facility.name}</div>
                        <div className="i03">{props.facility.addressFull}</div>
                        {/* <div className="i03">TEL：03-3432-1431／FAX：03-3432-1437</div> */}
                      </div>
                    </dd>
                  </dl>
                  <div className="l01">
                    <Link href={props.link}><a>
                      <svg viewBox="0 0 270.85 63.53">
                        <path fill="#801a42" d="M7.3 6.32h263.55v57.21H7.3z"/>
                        <path fill="none" d="M.18.25h263.55v57.21H.18z"/>
                        <path fill="none" stroke="#801a42" d="M.5.5h262.9v56.7H.5z"/>
                        <path fill="none" d="M7.3 6.32h256.43v51.13H7.3z"/>
                        <path fill="none" stroke="#fff" d="M7.62 6.58H263.4v50.63H7.62z"/>
                        <path fill="#fff" d="m46.92 34.69-7.09 3.54v-7.09Z"/>
                        <text fill="#fff" transform="translate(57.4 41.01)">
                          この式場を詳しく見る
                        </text>
                      </svg>
                    </a></Link>
                  </div>
                </div>
              </div>
            </section>
          }
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
