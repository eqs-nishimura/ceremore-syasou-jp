import { FC } from "react";
import * as Constants from '@lib/Constants';
import { css } from "@emotion/react";
import Link from "next/link";
import { ViewListButton } from "./buttons";

export type CaseSliderProps = {
  syasou: boolean;
  owakarenokai: boolean;
  goudousou: boolean;
  labeled?: boolean;
  industry?: boolean;
  price?: boolean;
  listButton?: boolean;
};

export const CaseSlider: FC<CaseSliderProps> = (props) => {
  const { syasou, owakarenokai, goudousou, labeled, industry, price, listButton } = props;

  const sliderHelper = (category: "syasou" | "owakarenokai" | "goudousou") => {
    let categoryNum: string;
    let name: string;
    switch(category) {
      case "syasou":
        categoryNum = "01"
        name = "社葬";
        break;
      case "owakarenokai":
        categoryNum = "02";
        name = "お別れの会";
        break;
      case "goudousou":
        categoryNum = "03";
        name = "合同葬";
        break;
      default:
        categoryNum = "";
        name = "";
        break;
    }
    return (
      <>
        {(()=>{
            const a = [];
            const data = Constants.FUNERAL_CASE2[category];
            for(const k in data){
              a.push(<Link key={k} href="/case/[category]/[slug]" as={`/case/${category}/${k}`}>
                <a css={css`
                  cursor: pointer;
                  text-decoration: none;
                `}>
                  <li key={k} className={`li cat${categoryNum}`}>
                    {labeled && <p className={`t01 mincho lb_cat${categoryNum}`}><span>{name}</span></p>}
                    <div className="thumb">
                      <img src={data[k].mainImg.src} alt={data[k].mainImg.caption} />
                    </div>
                    <p className="t02 mincho">{data[k].catchphrase}</p>
                    <p className="t03">
                      <ul>
                        <li>
                          <span className="s1">参列者</span>
                          <span className="s2">{data[k].attendee}人</span>
                        </li>
                        {industry &&
                          <li>
                            <span className="s1">故人様</span>
                            <span className="s2">{data[k].industry} {data[k].position}</span>
                          </li>
                        }
                        <li>
                          <span className="s1">式場</span>
                          <span className="s2">{data[k].facility.name}</span>
                        </li>
                        {price &&
                          <li>
                            <span className="s1">費用</span>
                            <span className="s2">{data[k].cost}円</span>
                          </li>
                        }
                      </ul>
                    </p>
                  </li>
                </a>
              </Link>);
            }
            return a;
          })()}
      </>
    );
  };

  return (
    <div className="sliderbox">
      <ul className="slider">
        {syasou && sliderHelper("syasou")}
        {owakarenokai && sliderHelper("owakarenokai")}
        {goudousou && sliderHelper("goudousou")}
      </ul>
      {listButton &&
        <div>
          <ViewListButton href="/case" marginTop={30} />
        </div>
      }
    </div>
  );
};