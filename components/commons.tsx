import { css } from '@emotion/react';
import Link from 'next/link'
import { ReactNode } from 'react';

export function ThreePointsArea(props: {
  className?: string,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  margin?: string,
}) {
  const { className, marginTop, marginBottom, marginLeft, marginRight, margin } = props;
	return (
    <section className={`${className ? `${className}` : ""} threepointsArea`}>
      <div className="wrapper">
        <h3 className="mincho sylogo">
        {/* <img css={css`width: 50px; height: auto !important;`} src="/images/tp2301.svg" alt="安心のポイント" /> */}
        <span className="tategaki">安心の<br /><span className="eisuu">3</span>つのポイント</span>
        </h3>
        <div className="box01">
        {/* <img className="op" src="/images/tp2302.png?v=600" alt="安心のポイント" /> */}
        <img src="/images/ceremore_q_g.svg" alt="セレモア®品質" className="logo" />
        <div className="wrapper">
          <ol className="mincho">
            <li>徹底した危機管理</li>
            <li>経験と実績で<br className="os" />的確なアドバイス</li>
            <li>経済性と明確な費用</li>
          </ol>
          <div className="three-img">
            <img src="/images/ceremore-staff.png" alt="3つのポイント" />
          </div>
        </div>
        {/* <img className="os" src="/images/tp2302_sp.jpg?202207022105" alt="安心のポイント" /> */}
        </div>
      </div>
    </section>
  )
}

export function PremiumPackBanner(props: {
  className?: string,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  margin?: string,
}) {
  const { className, marginTop, marginBottom, marginLeft, marginRight, margin } = props;
	return (
    <Link href="/plan/syasou-premiumpack"><a className="premiumPackBanner">
      <img src="/images/price_premium_pack.svg?202207191557" alt="社葬プレミアムパック" className="op" />
      <img src="/images/price_premium_pack_sp.svg?202207191557" alt="社葬プレミアムパック" className="os" />
    </a></Link>
	)
}

export function SyasouSuchAsCase(props: {
  className?: string,
  type: "syasou" | "owakarenokai" | "goudousou";
  phrases: string[] | ReactNode[],
}) {
  const { className, type, phrases } = props;

  const moreType: "社葬" | "合同葬" | "お別れの会" = type === "syasou" ? "社葬" : type === "goudousou" ? "合同葬" : "お別れの会";

  return (
    <section className={`${className ? `${className}` : ""} s02`}>
      <div className="wrapper">
        <h3 className="mincho sylogo">
          <span className="tategaki">{moreType}は<br />このような場合に<br />選ばれています</span>
        </h3>
        <div className="box11">
          <ul className="mincho">
            {Object.values(phrases).map((item, i) => {
              return (
                <li key={i}>{item}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SyasouManageFee() {
  return (
    <div css ={css`
      width: 94%;
      max-width: 692px;
      margin: 10px auto 0;
      @media screen and (max-width: 880px) {
        max-width: 431px;
      }
      @media screen and (max-width: 600px) {
        max-width: 416px;
      }
    `}>
      <div css={css`
        padding: 24px;
        background-color: #fff;
      `}>
        <div css={css`
          font-size: 18px;
          margin-bottom: 8px;
          @media screen and (max-width: 600px) {
            font-size: 16px;
          }
        `} className="mincho">社葬運営管理費</div>
        <div css={css`
          @media screen and (max-width: 600px) {
            font-size: 12px;
          }
        `}>
          <div>■社葬取扱規程作成のアドバイス</div>
          <div>■スケジュールの提案・管理</div>
          <div>■社葬式場の提案、使用手続き</div>
          <div>■訃報連絡の作成</div>
          <div>■訃報広告の手配</div>
          <div>■通知状(案内状)の校正・発送の手配</div>
          <div>■式進行要領、式場レイアウト図、動線図、実行委員(係員)の役割分担表などの作成</div>
          <div>■席次表(席札)の作成</div>
          <div>■実行委員(係員)への説明会実施</div>
          <div>■移動救護所の手配</div>
          <div>■リハーサルの運営管理</div>
          <div>■社葬当日の執行運営管理</div>
          <div>■社葬当日の運営スタッフ</div>
          <div>■供花リストの作成</div>
          <div>■社葬終了後の御礼状校正・発送の手配</div>
        </div>
      </div>
    </div>
  );
}
export function SyasouGosoudanBanner() {
  return(
    <div>
      <SyasouGosoudanBannerPc />
      <SyasouGosoudanBannerSp />  
    </div>
  );
}
export function SyasouGosoudanBannerPc() {
  return(
    <div>
      <Link href="/contact/syasou-desk">
      <a className="gosoudan-link">
      <div className="gosoudan-link-pc">
        <p className="ttl">社葬ご相談デスク</p>
        <div className="bg">
          <img src="/images/syasou_desk_banner_forPc.jpg" alt="" />
        </div>
        <div className="link-inner">
          <div className="link-inner-content">
            <div className="tel-num">
              <ul>
                <li>ご相談無料</li>
                <li>24時間365日受付</li>
              </ul>
              <p>
                <img src="/images/tel.svg?202209080155" alt="0120470470" />
              </p>
            </div>
            <div className="tel-list">
              <ul className="ul01">
                <li>
                  <div className="sub">東京紀尾井町本社</div>
                  <div className="main bahnschrift">03-3556-1111</div>
                </li>
                <li>
                  <div className="sub">立川本社</div>
                  <div className="main bahnschrift">042-534-1111</div>
                </li>
                <li>
                  <div className="sub">新宿本社</div>
                  <div className="main bahnschrift">03-5379-0111</div>
                </li>
              </ul>
              <ul className="ul02">
                <li>
                  <div className="sub">八王子本社</div>
                  <div className="main bahnschrift">042-667-1111</div>
                </li>
                <li>
                  <div className="sub">神奈川本社</div>
                  <div className="main bahnschrift">042-752-1111</div>
                </li>
                <li>
                  <div className="sub">埼玉本社</div>
                  <div className="main bahnschrift">049-283-0111</div>
                </li>
                <li>
                  <div className="sub">所沢本社</div>
                  <div className="main bahnschrift">04-2928-1121</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    </Link>
    </div>
  );
}
export function SyasouGosoudanBannerSp() {
  return(
    <div>
    <Link href="/contact/syasou-desk">
    <a className="gosoudan-link">
      <div className="gosoudan-link-sp">
        <p className="ttl">社葬ご相談デスク</p>
        <div className="bg">
          <img src="/images/syasou_desk_banner_forSp.jpg" alt="" />
        </div>
        <div className="link-inner">
          <div className="tel-list-main">
            <ul>
              <li>
                <div className="sub">東京紀尾井町本社 / <br className="os" />紀尾井町ビル6F<br />セミナー会場70席常設</div>
                <div className="main bahnschrift">03-3556-1111</div>
              </li>
              <li>
                <div className="sub">立川本社<br />セミナー会場80席常設 <br className="os" />P:180台</div>
                <div className="main bahnschrift">03-3556-1111</div>
              </li>
            </ul>
          </div>
          <div className="tel-num">
            <ul>
              <li>ご相談無料</li>
              <li>24時間365日受付</li>
            </ul>
            <p>
              <img src="/images/tel.svg?202209080155" alt="0120470470" />
            </p>
          </div>
          <div className="tel-list">
            <ul className="ul01">
              <li>
                <div className="sub">新宿本社</div>
                <div className="main bahnschrift">03-5379-0111</div>
              </li>
              <li>
                <div className="sub">八王子本社</div>
                <div className="main bahnschrift">042-667-1111</div>
              </li>
              <li>
                <div className="sub">神奈川本社</div>
                <div className="main bahnschrift">042-752-1111</div>
              </li>
            </ul>
            <ul className="ul02">
              <li>
                <div className="sub">埼玉本社</div>
                <div className="main bahnschrift">049-283-0111</div>
              </li>
              <li>
                <div className="sub">所沢本社</div>
                <div className="main bahnschrift">04-2928-1121</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </a>
  </Link>
  </div>
  );
}