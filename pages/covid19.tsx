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
// import { svg } from '@covid19/otherq'

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      // const $ = window.jQuery;
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
      window.qa();
    }
  });

  return (
    <>
      <Head>
        <title>新型コロナウイルスの取り組みについて｜社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「新型コロナウイルスの取り組みについて」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-covid19">
        <main>
          <section className="s01">
            <div className="wrapper">
              {Breadcrumb({
                targetpage: 'コロナ禍での社葬・お別れの会・合同葬',
                className: "breadcrumb"
              })}
              <h1 className="mincho">
                <span className="logo">
                  <img src="/images/logo01.svg" alt="セレモア社葬" />
                </span>
                コロナ禍での<br className='os'/>社葬・お別れの会・合同葬
                <img src="/images/cv0101.jpg"
                  sizes="100vw"
                  srcSet='/images/cv0101_sp.jpg 500w, /images/cv0101.jpg' alt="コロナ禍でのお葬式" className="photo" />
              </h1>
            </div>
          </section>

          <section className="s02">
            <div className="wrapper">
              <h3>セレモアでは新型コロナウイルス感染拡大防止対策を徹底した、<br className="op" />安心、安全な社葬・お別れの会・合同葬をご提案いたします。</h3>
              <div className='note'>
              厚生労働省や各自治体のガイドラインに沿ってご対応させていただいております
              </div>
              <div className='flex'>
                <div className="point">
                  待合いスペースを含めた<br />大きめな会場選定のご提案
                  </div>
                <div className="point">
                時間を一部、二部と分け、参列者が分散されるスケジュールのご提案
                </div>
              </div>
            </div>
          </section>

          <section className="s03">
            <div className="wrapper">
              <h3 className="mincho">
              ソーシャルディスタンスに配慮し、<br />3密(密閉・密集・密接)にならないように対応してまいります
              </h3>
              <ul>
                {(()=>{
                  const a = [];
                  const data = [
                    {
                      'title': 'マスクの着用'
                    },
                    {
                      'title': 'ソーシャルディスタンスを考慮'
                    },
                    {
                      'title': '清拭消毒の徹底'
                    },
                  ];
                  for(const k in data){
                    var src = "/images/cv030"+(parseInt(k)+1)+".jpg"
                    a.push(
                      <li>
                        <div className="photo">
                          <img src={src} alt={data[k].title} />
                        </div>
                        <p>
                          {data[k].title}
                        </p>
                      </li>
                    );
                  }
                  return a;
                })()}
              </ul>
            </div>
          </section>

          <section className="s04">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki"><img src="/images/ceremore_vertical_logo.svg" alt="セレモア®" className="logo" />の<br />感染防止対策</span>
              </h3>
              <ul>
                {(()=>{
                  const a = [];
                  const data = [
                    {
                      'title': '手指の消毒',
                      'text': "玄関口・各フロア等館内各所に消毒液を設置しております。手指消毒にご協力ください"
                    },
                    {
                      'title': '施設内の消毒徹底',
                      'text': `机、椅子、エレベーターなど人の手がよく触れる箇所の消毒を実施しています`
                    },
                    {
                      'title': 'こまめな換気対応',
                      'text': "定期的な換気作業を行っております"
                    },
                    {
                      'title': 'マスク着用',
                      'text': "ご来館の方にはマスクの着用にご協力いただいております"
                    },
                    {
                      'title': '手洗いの徹底',
                      'text': "来館の際には事前に手洗いの徹底にご協力ください"
                    },
                    {
                      'title': '検温・体調管理',
                      'text': "スタッフの健康問診と検温を実施、強化しております"
                    },
                  ];
                  for(const k in data){
                    var src = "/images/cv040"+(parseInt(k)+2)+".svg"
                    a.push(
                      <li>
                        <div className="photo">
                          <img src={src} alt={data[k].title} />
                        </div>
                        <h4>
                          {data[k].title}
                        </h4>
                        <p>
                          {data[k].text}
                        </p>
                      </li>
                    );
                  }
                  return a;
                })()}
              </ul>
            </div>
          </section>

          <section id='covid19_faq' className="s05">
            <div className="wrapper">
              <div className="box01">
                <h3 className='sylogo'>
                  <img src="/images/cv0501.svg" alt="よくあるご質問" />
                </h3>
              </div>
              <div className="mincho">
                <dl className="dl_qa">
                  <dt>
                    <span className="num mincho"><img alt='Q.' src="/images/question.svg" /></span>
                    <p>コロナ禍での葬儀での具体的な対応策は？</p>
                  </dt>
                  <dd><span className="num"><img src="/images/answer.svg" /></span>セレモアでは新型コロナウィルスの状況に合わせ、行政の指導による感染対策を行い、安心して葬儀が行なえるよう十分な対策で対応いたします。<br />①社葬の規模、式場の大きさに合わせた三密を避けるための具体的なご提案とサポート。<br />②感染予防資材の準備。<br />③弊社スタッフの手洗い、アルコール消毒の徹底と健康管理を行いコロナ禍の葬儀に対応しております。</dd>
                </dl>
                <dl className="dl_qa">
                  <dt>
                    <span className="num mincho"><img alt='Q.' src="/images/question.svg" /></span>
                    <p>コロナ禍でも葬儀は行えますか？</p>
                  </dt>
                  <dd><span className="num"><img src="/images/answer.svg" /></span>行えます。葬儀の規模に合わせたコロナ対策を葬儀社と連携しながら進めて参りましょう。様々な状況に合わせた対策案を提供させていただきます。</dd>
                </dl>
                <dl className="dl_qa">
                  <dt>
                    <span className="num mincho"><img alt='Q.' src="/images/question.svg" /></span>
                    <p>食事を出さなくても失礼にはあたりませんか？</p>
                  </dt>
                  <dd><span className="num"><img src="/images/answer.svg" /></span>食事を出さなくても決して失礼になることはございません。食事をふるまう場所は、密になる可能性が高いので、会葬者も立ち寄ることを遠慮される場合が多いです。どうしても食事を出されたいのであれば、食事を提供する場を設けず、お持ち帰り用のお弁当などで対応する事もできます。</dd>
                </dl>
                <dl className="dl_qa">
                  <dt>
                    <span className="num mincho"><img alt='Q.' src="/images/question.svg" /></span>
                    <p>コロナ禍での社葬ではどこまで人を呼んで良いのでしょうか？	</p>
                  </dt>
                  <dd><span className="num"><img src="/images/answer.svg" /></span>多くの方をお呼びし故人を偲んで頂きたいのは、主催者側として当然のお考えだと思います。しかし、コロナ禍という状況を踏まえ、会葬者の立場を考慮することが大切です。会葬のご案内に関しても制限をかけたり、代表の方にお越し頂けるようご理解をいただく必要がありますので、主催者側として会葬者の選定が必要になります。</dd>
                </dl>
              </div>
            </div>
            <div className='moreinfo'>
              <Link href='/faq'>
                <a>
                  <img src='/images/cv0502.svg' alt='その他の質問を見る' />
                </a>
              </Link>
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
