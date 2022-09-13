import { css } from "@emotion/react";

export function Telbox() {

	return (
		<div className='tel-box'>
      <div className='tel-box-message'>
        <div>ご相談無料<br className="op" />24時間365日対応</div>
      </div>
      <div className='tel-box-link'>
        <a href='tel:0120-470-470'>
          <img src="/images/tel-link.png" alt="電話" />
        </a>
      </div>
    </div>
	)
}

export function TelBanner() {
  return (
    <div css={css`
      max-width: 500px;
      margin: 0 auto 0;
      @media screen and (max-width: 880px) {
        margin-top: 20px;
      }
    `}>
      <a href="tel:0120-470-470">
        <img css={css`
          width: 100%;
          @media screen and (max-width: 600px) {
            display: none;
          }
        `} src="/images/tel_banner.png" alt="お問い合わせはこちら" />
        <img css={css`
          width: 100%;
          display: none;
          @media screen and (max-width: 600px) {
            display: block;
          }
        `} src="/images/tel_banner_sp.png" alt="お問い合わせはこちら" />
      </a>
    </div>
  );
}