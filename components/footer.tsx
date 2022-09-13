import React from 'react';
import Link from 'next/link'
import { useEffect } from 'react'
import { css } from '@emotion/react'
import * as commons from "@components/commons"

export function Footer(props:{
  hideTopcontents?: boolean
}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery && (props.hideTopcontents==null || !props.hideTopcontents)) {
      const $ = window.jQuery;
      try{

      }catch(e){}
    }
  }, [props]);
  return (
    <footer>
      <a href="#__next" className="toTopBtn">
        一番上へ戻る
      </a>
      <div className="fixedFooter">
        <div className="wrapper">
          <a href="tel:0120470470" className="tel">
            {/* <img src="/images/footerFixed_tel.png?202207082038" alt="0120-470-470" /> */}
            <div className="thumb">
              <img src="/images/tel.png" alt="電話" />
            </div>
            <p className="t01">社葬相談<br />受付ダイヤル</p>
            <div className="tel-num">
              <p className="main bahnschrift">0120-470-470</p>
              <div className="sub">
                <span>ご相談無料</span>
                <span>24時間365日受付</span>
              </div>
            </div>
          </a>
          <Link href="/seminar#sche">
            <a className="btn sub seminar">セミナー<br />ご案内</a>
          </Link>
          <Link href="/contact/form?mode=2">
            <a className="btn seikyu">資料請求・<br />お問い合わせ</a>
          </Link>
          <Link href="/emergency">
          <a className="btn sub em">お急ぎの方へ</a>
          </Link>
        </div>
      </div>
      <div className="wrapper">
        {(props.hideTopcontents==null || !props.hideTopcontents) && <>
          <div className="topcontents">
            <div className="box01">
              {/* <img src="/images/msg_footer01.svg" alt="" className="msg" /> */}
              <div className="msg-wrapper">
                <div className="mincho msg">
                社葬の事前相談から<br />お急ぎのご依頼まで<br /><span>24</span>時間<span>365</span>日深夜早朝<br />いつでもご連絡ください
                </div>
              </div>
            </div>
            <div className="bnrbox">
              <commons.SyasouGosoudanBanner />
              <div className="inner">
                <div className="threebox">
                  <Link href="/contact/shucchou/"><a className="bnr bnr04">
                    {/* <img src="/images/bnr0104_sp.jpg?v=10" alt="出張相談" /> */}
                    <div className="bnr-wrapper">
                      <p>ご希望の場所に<br />スタッフが伺う<span>出張相談</span></p>
                      <div className="img">
                        <img src="/images/syucchou.png" alt="出張相談" />
                      </div>
                    </div>
                    <p className="bnr-button">出張相談</p>
                  </a></Link>
                  {/* <Link href="/contact/form?mode=2"><a className="bnr02">
                    <img src="/images/bnr0102_sp.jpg?v=10" alt="資料請求" />
                  </a></Link> */}
                  <Link href="/contact/form?mode=2"><a className="bnr bnr02">
                    {/* <img src="/images/bnr0104_sp.jpg?v=10" alt="出張相談" /> */}
                    <div className="bnr-wrapper">
                      <p>かんたん入力60秒<br />WEBでの<br />お問い合わせ・<span>資料請求</span></p>
                      <div className="img">
                        <img src="/images/shiryouseikyu.png" alt="資料請求" />
                      </div>
                    </div>
                    <p className="bnr-button">資料請求</p>
                  </a></Link>
                </div>
                <a href="https://soudan.ceremore.jp/" className="bnr06">
                  {/* <img src="/images/bnr0106.jpg?202206291843" alt="セレモピアン" /> */}
                  <div className="left">
                    <p className="title">直接対面の相談窓口</p>
                    <p><img src="/images/ceremopian_logo.svg" alt="セレモピアン" className="logo" /></p>
                    <p className="t01">各百貨店・駅ビル・ショッピングモールにてご相談を承ります</p>
                  </div>
                  <div className="right">
                    <img src="/images/pc_ceremopian_service.png" alt="セレモピアン対応店舗" />
                  </div>
                  <p className="bnr-button">
                    <span>詳しくは<br />こちら</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="bnrbox_sp">
              <commons.SyasouGosoudanBanner />
              <div className="inner">
                <div className="threebox">
                  <Link href="/contact/shucchou/"><a className="bnr bnr04">
                      {/* <img src="/images/bnr0104_sp.jpg?v=10" alt="出張相談" /> */}
                      <div className="bnr-wrapper">
                        <p>ご希望の場所に<br />スタッフが伺う<span>出張相談</span></p>
                        <div className="img">
                          <img src="/images/syucchou.png" alt="出張相談" />
                        </div>
                      </div>
                      <p className="bnr-button">出張相談</p>
                    </a></Link>
                    {/* <Link href="/contact/form?mode=2"><a className="bnr02">
                      <img src="/images/bnr0102_sp.jpg?v=10" alt="資料請求" />
                    </a></Link> */}
                    <Link href="/contact/form?mode=2"><a className="bnr bnr02">
                      {/* <img src="/images/bnr0104_sp.jpg?v=10" alt="出張相談" /> */}
                      <div className="bnr-wrapper">
                        <p>かんたん入力60秒<br />WEBでの<br />お問い合わせ・<span>資料請求</span></p>
                        <div className="img">
                          <img src="/images/shiryouseikyu.png" alt="資料請求" />
                        </div>
                      </div>
                      <p className="bnr-button">資料請求</p>
                    </a></Link>
                </div>
                <a className="bnr06" href="https://soudan.ceremore.jp/">
                  <div className="left">
                    <p className="title">直接対面の相談窓口</p>
                    <p><img src="/images/ceremopian_logo.svg" alt="セレモピアン" className="logo" /></p>
                    <p className="t01">各百貨店・駅ビル・ショッピング<br className="os" />モールにてご相談を承ります</p>
                  </div>
                  <div className="right">
                    <img src="/images/sp_ceremopian_service.png" alt="セレモピアン対応店舗" />
                  </div>
                  <p className="bnr-button">
                    <span>詳しくは<br />こちら</span>
                  </p>
                </a>
              </div>
            </div>
          </div>

        </>}
        <div className="bottomcontents">
          <div className="inner">
            <a className="logo" href="https://www.ceremore.co.jp/">
              <img src="/images/logo02.svg" alt="セレモア" />
            </a>
            <ul className="list01">
              <li className="li li01">
                <p><Link href="/"><a>セレモアの社葬HOME</a></Link></p>
                <ul>
                  <li><Link href="/company"><a>企業情報</a></Link></li>
                  {/* <li><Link href="/company#reason"><a>セレモアが選ばれる理由</a></Link></li> */}
                </ul>
                <p><Link href="/beginner/[category]" as="/beginner/syasou"><a>はじめての方へ</a></Link></p>
              </li>
              <li className="li li02">
                <p><Link href="/plan/syasou"><a>社葬</a></Link></p>
                <p><Link href="/plan/owakarenokai"><a>お別れの会</a></Link></p>
                <p><Link href="/plan/goudousou"><a>合同葬</a></Link></p>
                <p><Link href="/price"><a>費用について</a></Link></p>
              </li>
              <li className="li li03">
                <p><Link href="/case"><a>事例集</a></Link></p>
                <p><Link href="/sougijou"><a>葬儀場・ホテル紹介</a></Link></p>
                <ul>
                  <li><Link href="/sougijou#shikijou"><a>葬儀専用式場</a></Link></li>
                  <li><Link href="/sougijou#hotel"><a>ホテル</a></Link></li>
                  <li><Link href="/sougijou#other"><a>その他の施設</a></Link></li>
                </ul>
              </li>
              <li className="li li04">
                <p><Link href="/covid19"><a>コロナ禍での社葬・お別れの会・合同葬</a></Link></p>
                <p><Link href="/seminar"><a>社葬セミナーのご案内</a></Link></p>
                <p><Link href="/plan/syasou-premiumpack"><a>社葬プレミアムパック</a></Link></p>
                <p><Link href="/contact/form?mode=2"><a>資料請求・お問い合わせ</a></Link></p>
              </li>
            </ul>
            <p className="copy mincho">Copyright &copy; CEREMORE,INC.All right reserved.</p>
            <p className="t01 mincho">「セレモア」は商標登録されております。</p>
          </div>
        </div>
      </div>
    </footer>
  )
}