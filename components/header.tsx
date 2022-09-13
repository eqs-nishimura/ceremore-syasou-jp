import React, { useState } from 'react';
import Link from 'next/link';

const menu = [
  {name:'ホーム',id:'home',link:'/'},
  {name:'はじめての方へ',id:'beginner',link:'/beginner/syasou'},
  {name:'社葬',id:'plan-syasou',link:'/plan/syasou'},
  {name:'お別れの会',id:'plan-owakarenokai',link:'/plan/owakarenokai'},
  {name:'合同葬',id:'plan-goudousou',link:'/plan/goudousou'},
  {name:'費用について',id:'price',link:'/price'},
  {name:'事例集',id:'case',link:'/case'},
  {name:'式場紹介',id:'sougijou',link:'/sougijou'},
  {name:'企業情報',id:'company',link:'/company'},
]

export function Header(props:{
  activeMenu?: string
}) {
  // const menuList = menu.map(d=>
  //   <li key={d.id} className={props.activeMenu==d.id?"_active":""}>
  //     <Link href={d.link}><a>{d.name}</a></Link>
  //   </li>
  // )

  return (
    <header>
      <div className="wrapper cf">
        <div className="box01">
          <p>社葬・お別れの会・合同葬は信頼と安心の<br className="os" />セレモアへお任せください</p>
        </div>
        <div className="box02">
          <Link href="/"><a className="logo">
            <h2>
              <img src="/images/logo01.svg" width={82} height={80} alt="社葬・お別れの会・合同葬、首都圏随一の実績 セレモアの社葬"  css={{
                height: 'auto',
              }}/>
            </h2>
          </a></Link>
          <a href="tel:0120-470-470" className="sans-jp" css={{
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
            width: 'auto',
            '@media screen and (max-width: 880px)':{
              display: 'none',
            }
          }}>
            <span css={{
              display: 'block',
              width: [
                '36px',
                'max(10px, min(3vw, 36px))',
                'clamp(10px, 3vw, 36px)'
              ],
              height: [
                '36px',
                'max(10px, min(3vw, 36px))',
                'clamp(10px, 3vw, 36px)'
              ],
              '& img':{
                width: '100%',
                height: '100%',
              }
            }}>
              <img src="/images/tel.png?2022082717" width={36} height={36} alt="社葬相談ダイヤル" />
            </span>
            <span css={{
              backgroundColor: '#92272d',
              color: '#fff',
              fontSize: [
                '12px',
                'max(10px, min(1vw, 12px))',
                'clamp(10px, 1vw, 12px)'
              ],
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              padding: '0 6px 1px',
              margin: '0 8px 0 6px',
              height: [
                '48px',
                'max(10px, min(4vw, 48px))',
                'clamp(10px, 4vw, 48px)'
              ],
            }}>社葬相談<br/>受付ダイヤル</span>
            <span className="syasou-dial">電話</span>
            <span css={{
              color: '#94292f',
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'center',
              lineHeight: 1,
              transform: 'scale(0.9, 1)',
              transformOrigin: 'left',
              position: 'relative',
            }}>
              <span className="bahnschrift" css={{
                fontWeight: 'bold',
                fontSize: [
                  '26px',
                  'max(10px, min(2.2vw, 26px))',
                  'clamp(10px, 2.2vw, 26px)'
                ],
                whiteSpace: 'nowrap',
                letterSpacing: 0,
              }}>0120-470-470</span>
              <span css={{
                display: 'flex',
                fontSize: 10,
                transformOrigin: 'left',
                '@media (max-width: 1000px)':{
                  transform: 'scale(0.78, 0.78)',
                  width: 120,
                },
                '& span':{
                  display: 'block',
                  border: '1px solid #94292f',
                  padding: '1px 3px',
                  whiteSpace: 'nowrap',
                  letterSpacing: 0,
                  '&:first-child': {
                    marginRight: '3px',
                  },
                }
              }}>
                <span>ご相談無料</span>
                <span>24 時間 365 日受付</span>
              </span>
            </span>
          </a>
          <div>
            <img src="/images/logo_ceremore_q.svg?v=200" width="300" height="63" alt="セレモア品質" css={{
              display: 'block',
              position: 'absolute',
              right: 0,
              left: 0,
              top: 0,
              bottom: 0,
              margin: 'auto',
              width: [
                '200px',
                'max(200px, min(23vw, 250px))',
                'clamp(200px, 23vw, 250px)'
              ],
              height: 'auto',
            }}/>
          </div>
          <div className="sans-jp box021">
            <Link href="/faq"><a className="qa">社葬のQ&amp;A</a></Link>
            <Link href="/emergency"><a className="text-decoration-none">
              <span css={{
                textDecoration: 'none',
                height: '42px',
                padding: '7px 30px 7px 25px',
                borderRadius: '9999px',
                backgroundColor: '#9b272d',
                fontSize: '12px',
                lineHeight: '12px',
                backgroundImage: 'url(/images/icon_arrow02.svg)',
                backgroundSize: '5.5px auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center right 15px',
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                borderBottom: '3px solid #7a060f',
                '@media screen and (max-width: 880px)':{
                  display: 'none',
                }
              }}>お急ぎの方へ</span>
              {/* <img src="/images/btn_hurry.svg?202206292031" alt="お急ぎの方" /> */}
            </a></Link>
          </div>
        </div>
        <nav className="gnav mincho">
          <ul>
            <li>
              <Link href="/"><a>ホーム</a></Link>
            </li>
            <li>
              <Link href="/beginner/[category]" as="/beginner/syasou"><a>はじめて<br />の方へ</a></Link>
            </li>
            <li>
              <Link href="/plan/syasou"><a>社葬</a></Link>
            </li>
            <li>
              <Link href="/plan/owakarenokai"><a>お別れの会</a></Link>
            </li>
            <li>
              <Link href="/plan/goudousou"><a>合同葬</a></Link>
            </li>
            <li>
              <Link href="/price"><a>費用について</a></Link>
            </li>
            <li>
              <Link href="/case"><a>事例集</a></Link>
            </li>
            <li>
              <Link href="/sougijou"><a>葬儀場・<br />ホテル紹介</a></Link>
            </li>
            <li>
              <Link href="/company"><a>企業情報</a></Link>
            </li>
          </ul>
        </nav>
      </div>

      <img src="/images/icon_ham.svg" alt="ハンバーガーメニュー" className="ham" />
      <div className="spmenu">
        <div>
          <div className="spwrapper">
            <div className="box03">
              <Link href="/seminar">
                <a className="btn btn_seminar">社葬セミナー<br />のご案内</a>
              </Link>
              <Link href="/contact/form">
                <a className="btn btn_contact">資料請求<br />お問い合わせ</a>
              </Link>
              <Link href="/emergency">
                <a className="btn btn_hurry">お急ぎの方へ</a>
              </Link>
              <Link href="/faq"><a className="btn qa">社葬のQ&A</a></Link>
            </div>
            <ul className="ul-main">
              <li>
                <Link href="/"><a>ホーム</a></Link>
              </li>
              <li>
                <Link href="/beginner/[category]" as="/beginner/syasou"><a>はじめての方へ</a></Link>
              </li>
              <li>
                <Link href="/plan/syasou"><a>社葬</a></Link>
              </li>
              <li>
                <Link href="/plan/owakarenokai"><a>お別れの会</a></Link>
              </li>
              <li>
                <Link href="/plan/goudousou"><a>合同葬</a></Link>
              </li>
              <li>
                <Link href="/price"><a>費用について</a></Link>
              </li>
              <li>
                <Link href="/plan/syasou-premiumpack"><a>社葬プレミアムパック</a></Link>
              </li>
              <li>
                <Link href="/case"><a>事例集</a></Link>
              </li>
              <li>
                <Link href="/sougijou"><a>葬儀場・ホテル紹介</a></Link>
              </li>
              <li>
                <Link href="/company"><a>企業情報</a></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="close">閉じる</div>
      </div>
    </header>
  )
}
