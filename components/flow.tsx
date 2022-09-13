import { FC } from "react";
import * as Constants from '@lib/Constants';
import { SyasouMoreJunbi, SyasouMoreKokuchi, SyasouMoreShuryo, SyasouMoreToujitsu } from "./syasoumore";
import Link from "next/link";

export type FlowProps = {
  type: "syasou" | "owakarenokai" | "goudousou";
  wrap?: boolean;
  beginner?: boolean;
};

export const SougiFlow: FC<FlowProps> = (props) => {
  const { type, wrap, beginner } = props;
  const moreType: "社葬" | "合同葬" | "お別れの会" = type === "syasou" ? "社葬" : type === "goudousou" ? "合同葬" : "お別れの会";

  const flowHelper = () => {
    return (
      <>
        {(()=>{
          const a = [];
          const data = Constants.FUNERAL_FLOW[type].flow;
          for(const k in data){
            a.push(
            <dl key={k}>
              <dt><p className="num mincho">{data[k].id}</p></dt>
              <dd className="dd01">
                <div className="inner">
                  <p className="t01 mincho">{data[k].title}</p>
                  <p className="t02">{data[k].text}</p>
                    {data[k].link &&  <>
                      <Link
                        href={beginner ? `/beginner/[category]/[slug]` : `/plan/${type}/[slug]`}
                        as={beginner ? `/beginner/${type}/${data[k].link.id}` : `/plan/${type}/${data[k].link.id}`}
                        scroll={false}
                      >
                        <a>
                          <div className={"btn_"+data[k].link.id+" btn"}>{data[k].link.caption}</div>
                        </a>
                      </Link>
                    </>}
                    {data[k].additional=='kokuchi' && <>
                      <SyasouMoreKokuchi type={moreType} />
                    </>}
                    {data[k].additional=='junbi' && <>
                      <SyasouMoreJunbi type={moreType} />
                    </>}
                    {data[k].additional=='toujitsu' && <>
                      <SyasouMoreToujitsu type={moreType} />
                    </>}
                    {data[k].additional=='shuryou' && <>
                      <SyasouMoreShuryo type={moreType} />
                    </>}
                    {data[k].additional &&  <>
                        <div className={data[k].additional + " btn2"}>つづきを見る</div>
                    </>}
                </div>
              </dd>
              <dd className="dd02">
                <img src={data[k].image.src} alt={data[k].image.caption} />
              </dd>
            </dl>
            );
          }
          return a;
        })()}
      </>
    );
  };

  return (
    <>
      {wrap ? <div className={`plan ${type}`}>
        {flowHelper()}
      </div> : flowHelper()}
    </>
  );
};