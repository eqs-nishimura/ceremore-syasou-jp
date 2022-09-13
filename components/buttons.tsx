import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'

export function ViewListButton(props: {
  className?: string,
  href: string,
  as?: string,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  margin?: string,
}) {
  const { className, href, as, marginTop, marginBottom, marginLeft, marginRight, margin } = props;

  return(
    <div
      className={className}
      css={css`
        max-width: 200px;
        margin-top: ${marginTop ? marginTop: 0}px !important;
        margin-bottom: ${marginBottom ? marginBottom : 0}px !important;
        margin-left: ${marginLeft ? `${marginLeft}px` : "auto"} !important;
        margin-right: ${marginRight ? `${marginRight}px` : "auto"} !important;
        ${margin ? `margin: ${margin} !important;` : ""}
        cursor: pointer;
      `}
    >
      <Link href={href} as={as}>
        <a className="button"><span>一覧を見る</span></a>
      </Link>
    </div>
  );
}

export function OtherQAButton(props: {
  className?: string,
  href: string,
  as?: string,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  margin?: string,
}) {
  const { className, href, as, marginTop, marginBottom, marginLeft, marginRight, margin } = props;

  return(
    <div
      className={className}
      css={css`
        max-width: 200px;
        margin-top: ${marginTop ? marginTop: 0}px !important;
        margin-bottom: ${marginBottom ? marginBottom : 0}px !important;
        margin-left: ${marginLeft ? `${marginLeft}px` : "auto"} !important;
        margin-right: ${marginRight ? `${marginRight}px` : "auto"} !important;
        ${margin ? `margin: ${margin} !important;` : ""}
        cursor: pointer;
      `}
    >
      <Link href={href} as={as}>
        <a>
          <img src="/images/btn_faq.svg" alt="その他の質問を見る" />
        </a>
      </Link>
    </div>
  );
}

export function ViewMoreButton(props: {
  className?: string,
  href: string,
  as?: string,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  margin?: string,
}) {
  const { className, href, as, marginTop, marginBottom, marginLeft, marginRight, margin } = props;

  return(
    <div
      className={className}
      css={css`
        max-width: 200px;
        margin-top: ${marginTop ? marginTop: 0}px !important;
        margin-bottom: ${marginBottom ? marginBottom : 0}px !important;
        margin-left: ${marginLeft ? marginLeft : "auto"} !important;
        margin-right: ${marginRight ? marginRight : "auto"} !important;
        ${margin ? `margin: ${margin} !important;` : ""}
        cursor: pointer;
      `}
    >
      <Link href={href} as={as}>
        <a className="button4"><span>さらに見る</span></a>
      </Link>
    </div>
  );
}

// export function SyasouTypeListButton(props: {
//   type: "goudousou" | "owakarenokai" | "syasou" | "all",
//   className?: string,
//   marginTop?: number,
//   marginBottom?: number,
//   marginLeft?: number,
//   marginRight?: number,
//   margin?: string,
// }) {
//   const { type, className, marginTop, marginBottom, marginLeft, marginRight, margin } = props;
//   return(
//     <div className={`${type} syasouTypeList`}>
//       <ul className="planlist">
//       {(type=="goudousou" || type=="owakarenokai" || type=="all") && <>
//         <li><Link href="/plan/syasou">
//           <a>
//             <img className="op" src="/images/sy0804.jpg?202206291629" alt="社葬" />
//             <img className="os" src="/images/sy0804_sp.jpg?202206291629" alt="社葬" />
//           </a>
//         </Link></li>
//       </>}
//       {(type=="syasou" || type=="goudousou" || type=="all") && <>
//         <li><Link href="/plan/owakarenokai">
//           <a>
//             <img className="op" src="/images/sy0802.jpg?202206291629" alt="お別れの会" />
//             <img className="os" src="/images/sy0802_sp.jpg?202206291629" alt="お別れの会" />
//           </a>
//         </Link></li>
//         </>}
//         {(type=="syasou" || type=="owakarenokai" || type=="all") && <>
//         <li><Link href="/plan/goudousou">
//           <a>
//             <img className="op" src="/images/sy0803.jpg?202206291629" alt="合同葬" />
//             <img className="os" src="/images/sy0803_sp.jpg?202206291629" alt="合同葬" />
//           </a>
//         </Link></li>
//         </>}
//       </ul>
//       {(type=="syasou" || type=="owakarenokai" || type=="all") && <>
//         <div className="misso btn_missou">
//           <h4 className="mincho">密葬について</h4>
//           <div className="body">
//           <p>社葬、お別れの会の前に行う、<br className="os" />密葬についても承ります</p>
//           <p className="btn">詳しくはこちら</p>
//           </div>
//         </div>
//       </>}
//     </div>
//   );
// }

export function SyasouTypeListButton(props: {
  type: "goudousou" | "owakarenokai" | "syasou" | "all",
  beginner?: boolean;
  currentType?: "goudousou" | "owakarenokai" | "syasou",
  staticButton?: boolean;
  className?: string,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  margin?: string,
}) {
  const { type, beginner, currentType, staticButton, className, marginTop, marginBottom, marginLeft, marginRight, margin } = props;
  return(
    <div className={`${type} syasouTypeList`}>
      <ul className="planlist sans-jp">
      {(type=="goudousou" || type=="owakarenokai" || type=="all") && <>
        <SyasouTypeListButtonLi
          type={type}
          href="/plan/syasou"
          pcBackgroundImg="/images/pc_syasou.jpg?20220827"
          spBackgroundImg="/images/sy0804_sp.jpg?202206291629"
          alt="社葬"
          title="社葬"
          body={<>企業主体で行う<br/>儀式を重んじたお葬儀</>}
          arrowImg="/images/arrow_syasou.svg"
          color="#004b35"
          letterSpacing={6}
        />
      </>}
      {(type=="syasou" || type=="goudousou" || type=="all") && <>
        <SyasouTypeListButtonLi
          type={type}
          href="/plan/owakarenokai"
          pcBackgroundImg="/images/pc_owakarenokai.jpg?20220827"
          spBackgroundImg="/images/sy0802_sp.jpg?202206291629"
          alt="お別れの会"
          title="お別れの会・偲ぶ会"
          body={<>宗教色を抑え、自由な<br/>形式で故人を偲ぶお葬儀</>}
          arrowImg="/images/arrow_owakarenokai.svg"
          color="#803b3b"
          letterSpacing={1}
        />
        </>}
        {(type=="syasou" || type=="owakarenokai" || type=="all") && <>
        <SyasouTypeListButtonLi
          type={type}
          href="/plan/goudousou"
          pcBackgroundImg="/images/pc_goudousou.jpg?20220827"
          spBackgroundImg="/images/sy0803_sp.jpg?202206291629"
          alt="合同葬"
          title="合同葬"
          body={<>ご家族と企業が合同で<br/>行うお葬儀</>}
          arrowImg="/images/arrow_goudousou.svg"
          color="#3b4180"
          letterSpacing={6}
        />
        </>}
      </ul>
      {(type=="syasou" || type=="owakarenokai" || type=="all") && <>
        {staticButton
          ? <div className="misso btn_missou">
              <h4 className="mincho">密葬について</h4>
              <div className="body">
                <p>社葬、お別れの会の前に行う、<br className="os" />密葬についても承ります</p>
                <p className="btn">詳しくはこちら</p>
              </div>
            </div>
          : <Link
              href={beginner ? `/beginner/[category]/[slug]` : `/plan/${type === "all" ? currentType : type}/missou`}
              as={beginner ? `/beginner/${type === "all" ? currentType : type}/missou` : undefined}
              scroll={false}
            >
              <div className="misso btn_missou">
                <h4 className="mincho">密葬について</h4>
                <div className="body">
                  <p>社葬、お別れの会の前に行う、<br className="os" />密葬についても承ります</p>
                  <p className="btn">詳しくはこちら</p>
                </div>
              </div>
            </Link>
        }
      </>}
    </div>
  );
}

export function SyasouTypeListButtonLi(props: {
  type: "goudousou" | "owakarenokai" | "syasou" | "all",
  href: string,
  pcBackgroundImg: string,
  spBackgroundImg: string,
  alt: string,
  title: string,
  body: React.ReactElement,
  arrowImg: string,
  color: string,
  letterSpacing: number,
}) {
  const router = useRouter();
  let maxWidth = 880;
  if(router.asPath.startsWith('/beginner')){
    maxWidth = 1116;
  }else if (props.type!='all') {
    maxWidth = 716;
  }
  const mediumSize = props.type=='all' && !router.asPath.startsWith('/beginner');
  return(
    <li><Link href={props.href}>
      <a>
        <div className="op" css={{position:'relative'}}>
          <img src={props.pcBackgroundImg} width={873} height={873} alt={props.alt} css={{height:'auto'}}/>
          <div className="op" css={{
            position:'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}>
            <div css={{
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'center',
              color: '#fff',
              marginTop: '19%',
            }}>
              <div className="serif-jp" css={{
                fontSize: 28,
                letterSpacing: props.letterSpacing,
                marginBottom: '7%',
                ...mediumSize && {'@media screen and (max-width: 1060px)':{
                  fontSize: 23,
                }},
                [`@media screen and (max-width: ${maxWidth}px)`]:{
                  fontSize: props.type=='all'? '2.4vw' : '3.9vw',
                }
              }}>{props.title}</div>
              <div css={{
                fontSize: 19,
                textAlign: 'center',
                color:'rgba(255,255,255,0.8)',
                marginBottom: '11%',
                lineHeight: 1.5,
                ...mediumSize && {'@media screen and (max-width: 1060px)':{
                  fontSize: 15,
                }},
                [`@media screen and (max-width: ${maxWidth}px)`]:{
                  fontSize: props.type=='all'? '1.6vw' : '2.7vw',
                }
              }}>{props.body}</div>
              <div css={{
                display: 'flex',
                alignItems: 'center',
                background:'#fff',
                padding: '12px 10px 12px 33px',
                lineHeight: 1,
                fontWeight: 'bold',
                fontSize: 16,
                ...mediumSize && {'@media screen and (max-width: 1060px)':{
                  fontSize: 13,
                  padding: '9px 7px 9px 26px',
                }},
                [`@media screen and (max-width: ${maxWidth}px)`]:{
                  fontSize: props.type=='all'? '1.4vw' : '2.3vw',
                  padding: props.type=='all'? '1.0vw 0.7vw 1.0vw 2.6vw' : '1.7vw 1.2vw 1.7vw 4.3vw',
                }
              }}>
                <div css={{
                  color: props.color,
                  marginRight: 14,
                  ...mediumSize && {'@media screen and (max-width: 1060px)':{
                    marginRight: 10,
                  }},
                  [`@media screen and (max-width: ${maxWidth}px)`]:{
                    marginRight: props.type=='all'? '1.0vw' : '1.7vw',
                  }
                }}>詳しくはこちら</div>
                <div>
                  <img src={props.arrowImg} width={97} height={150} css={{
                    width: '9px !important',
                    height:'auto',
                    [`@media screen and (max-width: ${maxWidth}px)`]:{
                      width: props.type=='all'? '0.8vw !important' : '1.3vw !important',
                    }
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="os" css={{position:'relative'}}>
          {/* <img src="/images/sp_syasou.jpg?20220827" alt={props.alt} /> */}
          <img className="os" src={props.spBackgroundImg} alt={props.alt} />
        </div>
        {/* <img className="op" src={props.pcBackgroundImg} alt={props.alt} />
        <img className="os" src={props.spBackgroundImg} alt={props.alt} /> */}
      </a>
    </Link></li>
  );
}