import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import * as Constants from '@lib/Constants'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { css, Interpolation, Theme } from '@emotion/react'
import { FirstView } from '@components/firstview'

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      // const $ = window.jQuery;
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  return (
    <>
      <Head>
        <title>事例集 │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「事例集」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-case">
        <main>
          <section className="s02">
            <div className="wrapper">
              <Breadcrumb
                targetpage="社葬の葬儀事例"
              />
              <FirstView
                imagePath="/images/ci0121.png?202207191557"
                imagePathSp="/images/ci0121_sp.png?202207191557"
                alt="葬儀事例"
                description="100名から4万人規模の社葬、日本武道館、東京国際フォーラム等での大規模葬、お別れの会、合同葬、公葬（警視庁・消防庁・外務省等）の信頼の執行実績でお選びいただいております。"
                descriptionMarginTop={-10}
              />
              <CaseListHelper type="syasou" />
              <CaseListHelper type="owakarenokai" />
              <CaseListHelper type="goudousou" />
            </div>
          </section>

          <section className="s03">
            <div className="wrapper">
              <div className="d01">
                <h3 className="mincho">
                  社葬のあり方はさまざまです。<br />
                  セレモアは貴社に寄り添い、<br className="os" />
                  ご希望に合わせた社葬を<br className="os" />
                  ご提案いたします。
                </h3>
                <div className="photo">
                  <img src="/images/ci0201.jpg?v=202207020125" alt="社葬" width={1047} height={524}/>
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

function CaseListHelper(props: {
  type: "syasou" | "owakarenokai" | "goudousou",
}) {
  const { type } = props;

  return (
    <ul className="caselist">
      {(()=>{
        const a = [];
        const data = Constants.FUNERAL_CASE2[type];
        for(const k in data){
          a.push(<li key={k}>
            <Link href={"/case/"+data[k].category+"/"+k}>
              <a css={css`text-decoration: none; cursor: pointer;`}>
                <dl>
                  <dt>
                    <div className='mainImg'>
                      <div>
                        <img src="/images/ci0122.png" alt="" width={534} height={518} />
                        <div className='caseImg'>
                          <div
                            css={css`
                              max-width: 80%;
                              margin: 0 auto;
                            `}
                          >
                            <img
                              css={css`
                                width: 30px !important;
                                height: unset !important;
                                position: absolute !important;
                                top: -20px !important;
                                left: 4% !important;
                              `}
                              src={type === "syasou"
                                ? "/images/lb_cat01.svg"
                                : type === "owakarenokai"
                                  ? "/images/lb_cat02.svg"
                                  : "/images/lb_cat03.svg"
                              }
                              alt={type === "syasou"
                                ? "社葬"
                                : type === "owakarenokai"
                                  ? "お別れの会"
                                  : "合同葬"
                              }
                            />
                          </div>
                          <img src={`${data[k].mainImg.src}?v=202207020115`} alt={data[k].mainImg.caption} />
                        </div>
                      </div>
                    </div>
                  </dt>
                  <dd>
                    <p className="t01 mincho">
                      {data[k].catchphrase}
                    </p>
                    <CaseListContentHelper
                      label="式場"
                      value={data[k].facility.name}
                    />
                    <CaseListContentHelper
                      label="参列者"
                      value={`${data[k].attendee}人`}
                    />
                  </dd>
                </dl>
              </a>
            </Link>
          </li>);
        }
        return a;
      })()}
    </ul>
  );
}

function CaseListContentHelper(props: {
  label: string;
  value: string;
}) {
  return (
    <div css={css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 14px;
      margin-top: 8px;
      margin-bottom: 8px;
      margin-left: 14px;
      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    `}>
      <div css={css`
        border: 1px solid #42210b;
        border-radius: 9999px;
        background-color: transparent;
        min-width: 100px;
        margin-right: 8px;
        height: 32px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 880px) {
          min-width: 70px;
        }
      `}>
        {props.label}
      </div>
      <div>
        {props.value}
      </div>
    </div>
  );
}

export default Page

declare global {
  interface Window{
    [key: string]: any,
  }
}
