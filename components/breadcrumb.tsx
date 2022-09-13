import React from 'react';
import Link from 'next/link'
import { css } from '@emotion/react';


export function Breadcrumb(props: {
  className?: string,
  pagenames?: string[],
  pageurls?: string[],
  targetpage: string,
}) {
  const pagenames = props.pagenames || ['セレモアの社葬トップ']
  const pageurls = props.pageurls || ['/']

  return (
    <div
      className={props.className}
      css={css`
        padding: 0 20px;
        margin-bottom: 20px;
        a {
          color: #007197;
        }
        span {
          color: #333333;
        }
        a, span {
          text-decoration: none;
          font-size: 12px;
        }
        @media screen and (max-width: 880px) {
          padding: 0;
        }
      `}
    >
      {(()=>{
        const a = [];
        for(const p in pagenames){
          a.push(

            <Link key={p} href={pageurls[p]}><a>{pagenames[p]}</a></Link>
          );
          a.push(
            <span key={`${p}_part2`}>＞</span>
          );
        }
        return a;
      })()}
      <span>{props.targetpage}</span>
    </div>
  )
}