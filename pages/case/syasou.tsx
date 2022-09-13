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

/**
 * @deprecated
 */
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
              <div className="bg">
                <img src="/images/ci0121.jpg?v=202206172300" alt="葬儀事例" width={984} height={341}/>
              </div>
              <div className="bt">
                <span>100名から4万人規模の社葬、日本武道館、</span>
                <span>東京国際フォーラム等での大規模葬、お別れの会、</span>
                <span>合同葬、公葬（警視庁・消防庁・外務省等）の</span>
                <span>信頼の執行実績でお選びいただいております</span>
              </div>
              <ul className="menu mincho">
                <li className="syasou active">
                  <Link href="/case/syasou" scroll={false}><a>社葬</a></Link>
                </li>
                <li className="owakarenokai">
                  <Link href="/case/owakarenokai" scroll={false}><a>お別れの会</a></Link>
                </li>
                <li className="goudousou">
                  <Link href="/case/goudousou" scroll={false}><a>合同葬</a></Link>
                </li>
              </ul>
              <ul className="caselist">
                {(()=>{
                  const a = [];
                  const data = Constants.FUNERAL_CASE2.syasou;
                  for(const k in data){
                    // console.log(<li key={k}>{data[k]}</li>);
                    a.push(
                    <li key={k}>
                      <dl>
                      <dt>
                        <div className='mainImg'>
                          <div>
                            <img src="/images/ci0122.png" alt="" width={534} height={518} />
                            <div className='caseImg'>
                              <Link href={"/case/"+data[k].category+"/"+k}><a className="">
                                <img src={data[k].mainImg.src} alt={data[k].mainImg.caption} />
                              </a></Link>
                            </div>
                          </div>
                        </div>
                      </dt>
                      <dd>
                      <p className="t01 mincho">
                        <Link href={"/case/"+data[k].category+"/"+k}><a className="">
                          {data[k].catchphrase}
                        </a></Link>
                      </p>
                      <table>
                        <tbody>
                          <tr>
                            <th><span>式場</span></th>
                            <td>
                            <Link href={"/case/"+data[k].category+"/"+k}><a className="">
                              {data[k].facility.name}
                            </a></Link>
                            </td>
                          </tr>
                          <tr>
                            <th><span>参列者</span></th>
                            <td>{data[k].attendee}人</td>
                          </tr>
                        </tbody>
                      </table>
                    </dd>
                  </dl>
                </li>);
                  }
                  return a;
                })()}
              </ul>
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
                  <img src="/images/ci0201.jpg" alt="社葬" width={1047} height={524}/>
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
