import { css } from '@emotion/react';
import { Seminar } from '@lib/seminars';
import { useWindowDimensions } from '@lib/util';
import Link from 'next/link';
import React, { useState } from 'react';

export function BoxTitle(props: {title: string, className?: string}) {
  const { title, className } = props;

  return (
    <div className={`seminar-box-title mincho${className ? ` ${className}` : ""}`}>
      <p>
        《 {title} 》
      </p>
    </div>
  );
}

export function SeminarBox(props: Omit<Seminar, "receptionTime" | "contents" | "firstHalf" | "secondHalf" | "nextSeminarId" | "prevSeminarId" | "price"> & {key?: any}) {
  const { id, seminarTitle, location, date, startTime, endTime, capacity, free, photoPath, seminarType } = props;
  const { width } = useWindowDimensions();

  const dateComponents = date.split("-");
  const partialDateComponents = dateComponents[2].split(" ");

  const now = new Date();
  const targetDate = new Date(now);
  targetDate.setFullYear(Number(dateComponents[0]), (Number(dateComponents[1])-1), Number(dateComponents[2].split("(")[0]));
  targetDate.setHours(0, 0, 0, 0);
  const available = targetDate.getTime() >= now.getTime();
  const subBtnCssPc = `
    padding: 4px 12px;
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px 8px;
  `;
  const subBtnCss = `
    padding: 4px 12px;
    text-align: center;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px 8px;
  `;
  return (
    <li>
      <Link href="/seminar/[id]" as={`/seminar/${id}`}>
        <a>
          {width > 600
            ? <>
                <div className="flex-wrapper">
                  <div className="photobox">
                    <img src={photoPath} alt={seminarTitle} />
                  </div>
                  <div className="txtbox">
                    <p className="t06">{seminarTitle}</p>
                    <p className="t07">{location}</p>
                      {seminarType && <>
                        <p className="t08">会場とオンラインの同時開催</p>
                        </>}
                  </div>
                </div>
                <div className="datebox">
                  <div className="sp-image photobox">
                    <img src={photoPath} alt={seminarTitle} />
                  </div>
                  <div className="date-wrapper">
                    <div className="t01">開催日時</div>
                    <div className="t02">{`${dateComponents[0]}年${dateComponents[1]}月${partialDateComponents[0]}日${partialDateComponents[1]} ${startTime}〜${endTime}`}</div>
                  </div>
                  <div className="date-wrapper no-block">
                    <div className="labels">
                      {available ? <div className="t04">受付中</div> : <></>}
                      {free ? <div className="t05">無料</div> : <></>}
                      <div className="num">定員{capacity}名</div>
                    </div>
                    {available && <Link href="/contact/form?mode=3">
                        <a className="seminar-btn">セミナーのお申し込み</a>
                    </Link>}
                  </div>
                </div>
              </>
            : <div css={css`width: 100%;`}>
                <div>
                  <div css={css`
                    background-color: #ececec;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-bottom: 11px;
                    // color: #344b4f;
                  `}>
                    <div
                      css={css`
                        font-weight: bold;
                        text-align: center;
                        border-bottom: 1px solid #ccc;
                        padding: 10px 10px 6px;
                        line-height: 1.2;
                      `}
                    >
                    <p css={css`
                        font-size: 21px;
                      `}>{`${dateComponents[0]}年${dateComponents[1]}月${partialDateComponents[0]}日${partialDateComponents[1]}`}</p>
                    <p css={css`
                        font-size: 19px;
                      `}>{`${startTime}〜${endTime}`}</p>
                    </div>
                    <div css={css`
                      padding: 10px 43px 10px 10px;
                      font-size: 14px;
                      background-size: 24px auto;
                      background-repeat: no-repeat;
                      background-position: center right 10px;
                      background-image: url(/images/icon_arrow17.svg);
                      display: flex;
                      align-items: center;
                    `}>
                      {seminarTitle}
                    </div>
                  </div>
                  <div className="sp-image photobox" css={css`margin-bottom: 0 !important;`}>
                    <img src={photoPath} alt={seminarTitle} />
                  </div>
                </div>
                <div className="txtbox" css={css`
                  margin-top: 10px;
                  margin-bottom: 16px;
                `}>
                  <div css={css`
                      color: #9c272d;
                      background-color: rgba(156, 39, 45, 0.1);
                      ${subBtnCss}
                      width: calc(100% - 120px);
                      min-width: 220px;
                      max-width: 275px;
                      margin: 0 auto;
                  `}>会場とオンラインの同時開催</div>
                  <div css={css`
                    margin-top: 8px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    padding: 0 16px;
                  `}>
                    {available
                      ? <div css={css`
                          background-color: #ecf7d2;
                          color: #0a9029;
                          ${subBtnCss}
                        `}>
                          受付中
                        </div>
                      : <></>
                    }
                    {free
                      ? <div css={css`
                          background-color: #f7f0d2;
                          color: #aa9d03;
                          ${subBtnCss}
                        `}>
                          無料
                        </div>
                      : <></>
                    }
                    <div css={css`
                          ${subBtnCss}
                          background-color: #f2f2f2;
                          font-size: 16px;
                    `}>
                      定員{capacity}名
                    </div>
                  </div>
                  <div css={css`
                      padding: 0 16px;
                    `}>
                    <p className="t07">{location}</p>
                  </div>
                  {available && <Link href="/contact/form?mode=3">
                    <a className="seminar-btn" css={css`margin: 6px auto 0 !important;`}>セミナーのお申し込み</a>
                  </Link>}
                </div>
              </div>
          }
        </a>
      </Link>
    </li>
  );
}

export function SeminarInfo(props: {className?: string}) {
  const { className } = props;

	return (
    <section className={`${className ? `${className}` : ""} seminar-info`}>
      <div className="wrapper">
        <h3 className="mincho sylogo">
          {/* <img src="/images/tp0801.svg" alt="セミナーのご案内" /> */}
          <span className="tategaki">社葬セミナー<br />のご案内</span>
        </h3>
        {/* <img src="/images/tp0802.png?v=900" alt="セミナー風景" className="photo01 op" /> */}
        <img src="/images/tp0802_pc.png?v=900" alt="セミナー風景" className="photo01 op" />
        <img src="/images/tp0802_sp.png?202206291629" alt="セミナー風景" className="photo01 os" />
        <div className="box01">
          <p className="mincho t01">社葬セミナーでは、最近の社葬・お別れの会・合同葬の傾向についての事例を紹介しながら 事前準備の重要性を、具体的にご説明いたします。 総務・人事・秘書の担当者様の危機管理として、ぜひご参加ください。</p>
          <ul className="linklist">
            <li>
              <Link href="/seminar"
              ><a className="button2"><span>詳しく見る</span></a>
              </Link>
            </li>
            <li>
              <Link href="/seminar#sche">
              <a className="button3"><span>セミナーの開催スケジュール</span></a>
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
	);
}