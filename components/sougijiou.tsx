import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';

export function Category(props: { jumpTo: string, imgPath: string, imgPathSp: string, content: string, buttonImgPath: string, className?: string }) {
  const { jumpTo, imgPath, imgPathSp, content, buttonImgPath, className } = props;

  return (
    <a css={css`display: block; color: #000; text-decoration: none;`} href={`${jumpTo}`} className={`category-box${className ? ` ${className}` : ""}`}>
      <div className="image">
        <img
          css={css`
            @media screen and (max-width: 600px) {
              display: none;
            }
          `}
          src={imgPath}
          alt="施設イメージ"
        />
        <img
          css={css`
            display: none;
            @media screen and (max-width: 600px) {
              display: block;
            }
          `}
          src={imgPathSp}
          alt="施設イメージ"
        />
      </div>
      <div className="content">
        {content}
      </div>
      <div className="button">
        <img src={buttonImgPath} alt="一覧ボタン" />
      </div>
    </a>
  );
}

export function FacilityCard(props: {
  type: string,
  id: string,
  name: string | React.ReactNode,
  address: string,
  imgPath?: string,
  hasMorgue?: boolean,
  description?: string,
  ceremore?: boolean,
}) {
  const { type, id, name, address, imgPath, hasMorgue, description, ceremore } = props;

  return (
    <li>
      <Link href={description ? "/sougijou/[type]/[id]" : ""} as={description ? `/sougijou/${type}/${id}` : undefined}>
        <a>
          {/* <div className={`img-area${type === "shikijou" ? " shikijou-img" : ""}`}> */}
          <div className={`img-area shikijou-img`}>
            <img src={imgPath ? imgPath : ""} alt="イメージ画像" />
          </div>
          <div className="content">
            <div className="name">{name}</div>
            <div className="address">{address}</div>
          </div>
          {hasMorgue
            && <div className="morgue">
              {/* <img src="/images/pi_morgue.png" alt="安置所あり" /> */}
              <div className="has_morgue">ご安置室<div className="whitespace" />有</div>
            </div>
          }
          <div className="whitespace-v-10"/>
        </a>
      </Link>
    </li>
  );
}