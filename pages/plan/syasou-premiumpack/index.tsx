import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from "@components/breadcrumb"
import { css } from '@emotion/react'
import { FirstView } from '@components/firstview'

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  return (
    <>
      <Head>
        <title>社葬プレミアムパック │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「社葬プレミアムパック」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-plan-syasou-premiumpack">
        <main>
          <section className="s01">
            <div className="wrapper">
              <div css={css`
                @media screen and (max-width: 880px) {
                  padding: 0 16px;
                }
              `}>
                {Breadcrumb({
                  pagenames: ['セレモアの社葬トップ'],
                  pageurls: ['/'],
                  targetpage: '社葬プレミアムパック',
                })}
              </div>

              <div className="firstview">
                <FirstView
                  imagePath="/images/spc_600_typea_2.png?202207191557"
                  imagePathSp="/images/spc_600_typea_2_sp.png?202207191557"
                  alt="社葬プレミアムパック"
                  description={<>社葬プレミアムパックは、社葬・お別れの会・合同葬などあらゆる形態に合わせてお選びいただけます。</>}
                  shrinkDescription
                  shrinkDescriptionSp
                  descriptionWidthOnShrinkPercent={78}
                  descriptionWidthOnShrinkPercentSp={70}
                  descriptionMargin="-13% 0 2%"
                  descriptionMarginTablet="-15% 0 2%"
                  descriptionMarginSp="-8% 0 0"
                />
              </div>

              <div className="plancontent">
                <h2>
                  <img src="/images/sp0101.svg?202207191557" alt="社葬プレミアムパック" />
                </h2>
                {/* <p className="t01">社葬プレミアムパックは、社葬・お別れの会・合同葬などあらゆる形態に合わせてお選びいただけます。</p> */}
                <div className='premium-packs premium-low-packs'>
                  <div className='premium-pack premium-250-pack'>
                    <Link href="/plan/syasou-premiumpack/250m"><a>
                      <div className='premium-pack-img-wrapper'><img src="/images/sp_250_img.jpg?v=202207012150" alt="社葬プレミアムパック250万円プラン" className='premium-pack-img'/></div>
                      <div className='pack-title'>社葬プレミアムパック</div>
                      <div className='pack-price'><span>250</span>万円</div>
                      <div className='pack-button'>
                        <div>パック詳細内容はこちら</div>
                        <img src="/images/sp_link_mark.png" alt="パック詳細内容はこちら" />
                      </div>
                    </a></Link>
                  </div>
                  <div className='premium-pack premium-400-pack'>
                    <Link href="/plan/syasou-premiumpack/400m"><a>
                      <div className="premium-pack-img-wrapper"><img src="/images/sp_400_img.jpg?v=202207012150" alt="社葬プレミアムパック400万円プラン" className='premium-pack-img'/></div>
                      <div className='pack-title'>社葬プレミアムパック</div>
                      <div className='pack-price'><span>400</span>万円</div>
                      <div className='pack-button'>
                        <div>パック詳細内容はこちら</div>
                        <img src="/images/sp_link_mark.png" alt="パック詳細内容はこちら" />
                      </div>
                    </a></Link>
                  </div>
                  <div className='premium-pack premium-600-pack'>
                    <Link href="/plan/syasou-premiumpack/600m"><a>
                      <div className="premium-pack-img-wrapper"><img src="/images/sp_600_img.jpg?v=202207012150" alt="社葬プレミアムパック600万円プラン" className='premium-pack-img'/></div>
                      <div className='pack-title'>社葬プレミアムパック</div>
                      <div className='pack-price'><span>600</span>万円</div>
                      <div className='pack-button'>
                        <div>パック詳細内容はこちら</div>
                        <img src="/images/sp_link_mark.png" alt="パック詳細内容はこちら" />
                      </div>
                    </a></Link>
                  </div>
                </div>
                <div className='premium-packs premium-high-packs'>
                  <div className='premium-pack premium-800-pack'>
                    <Link href="/plan/syasou-premiumpack/800m"><a>
                      <div className="premium-pack-img-wrapper"><img src="/images/spc_800_typea.jpg" alt="社葬プレミアムパック800万円プラン" className='premium-pack-img'/></div>
                      <div className='pack-title'>社葬プレミアムパック</div>
                      <div className='pack-price'><span>800</span>万円</div>
                      <div className='pack-button'>
                        <div>パック詳細内容はこちら</div>
                        <img src="/images/sp_link_mark.png" alt="パック詳細内容はこちら" />
                      </div>
                    </a></Link>
                  </div>
                  <div className='premium-pack premium-1000-pack'>
                    <Link href="/plan/syasou-premiumpack/1000m"><a>
                      <div className="premium-pack-img-wrapper"><img src="/images/spc_1000_typea.jpg" alt="社葬プレミアムパック1000万円プラン" className='premium-pack-img'/></div>
                      <div className='pack-title'>社葬プレミアムパック</div>
                      <div className='pack-price'><span>1,000</span>万円</div>
                      <div className='pack-button'>
                        <div>パック詳細内容はこちら</div>
                        <img src="/images/sp_link_mark.png" alt="パック詳細内容はこちら" />
                      </div>
                    </a></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="s02">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">オリジナル<br />デザイン祭壇</span>
              </h3>
              <div className="plancontent">
                <p className='t02'>
                  <div><span>セレモアでは日本武道館、青山葬儀所、<br className='t02br'></br>大規模寺院式場、ホテルでの社葬、<br className='t02br'></br>お別れの会、合同葬、公葬などの<br className='t02br'></br>あらゆる実績がございます。</span></div>
                  <div><span className="bold">「プレミアムパック以外にも、あらゆるご要望、規模に合わせて、<br className='t02br'></br>オリジナルデザイン祭壇をご提案いたします。」</span></div>
                  {/* <span>セレモアでは、100名~4万人規模の<br className='t02br'></br>お葬儀まで承っております。</span>
                  <br></br>
                  <span>上記社葬プレミアムパック以外にも<br className='t02br'></br>ご要望に応じて承りますので、</span>
                  <br></br>
                  <span>どうぞお申し付けください。</span> */}
                </p>
                <div>
                  <div className='premium-packs'>
                    <div className='premium-pack'>
                        <img src="/images/pp001.jpg?v=202207020000" alt="社葬プレミアムパック250万円プラン" className='premium-pack-img'/>
                    </div>
                    <div className='premium-pack'>
                        <img src="/images/pp002.jpg?202206291629" alt="社葬プレミアムパック400万円プラン" className='premium-pack-img'/>
                    </div>
                    <div className='premium-pack'>
                        <img src="/images/pp003.jpg?202206291629" alt="社葬プレミアムパック600万円プラン" className='premium-pack-img'/>
                    </div>
                    <div className='premium-pack'>
                        <img src="/images/pp004.jpg?202206291629" alt="社葬プレミアムパック250万円プラン" className='premium-pack-img'/>
                    </div>
                    <div className='premium-pack'>
                        <img src="/images/pp005.jpg?202206291629" alt="社葬プレミアムパック400万円プラン" className='premium-pack-img'/>
                    </div>
                    <div className='premium-pack'>
                        <img src="/images/pp006.jpg?202206291629" alt="社葬プレミアムパック600万円プラン" className='premium-pack-img'/>
                    </div>
                  </div>
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
