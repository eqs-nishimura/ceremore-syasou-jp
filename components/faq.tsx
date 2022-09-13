import { css } from '@emotion/react';
import { FAQ, FAQ_CATEGORY, FAQ_SYASOUTYPE, QuestionAndAnswer } from '@lib/faq';
import Link from 'next/link';
import { FC } from 'react';
import { ViewListButton, OtherQAButton } from './buttons';

export function FaqBox(props: {
  className?: string;
  category: string;
  title: string;
  caption?: string;
  toStatic?: boolean;
}) {

  const { className, category, title, caption, toStatic } = props;

  let faqs = FAQ[category];
  if(!faqs) faqs = FAQ["syasou"]!;

  return (
    <div className={`slightly-colored-bg faq-box${className ? ` ${className}` : ""}`}>
      <div className="title">{title}</div>
      {caption ? <div className="caption">{caption}</div> : <></>}
      <div className="list">
        <ul>
          {Object.values(faqs).map((item, i) => {
            if(i > 2) return false;

            return (
              <Link key={i} href={toStatic ? `/faq/${category}/${item.id}` : "/faq/[category]/[id]"} as={toStatic ? undefined : `/faq/${category}/${item.id}`}>
                <li>
                  <div className="img-area">
                    <img src={item.thumbnail} alt="画像イメージ" />
                  </div>
                  <div className="content">
                    {item.question}
                  </div>
                  <div className="arrow">
                    <img src="/images/arrow_forward_ios.svg" alt="進む" />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <ViewListButton
        href={toStatic ? `/faq/${category}` : "/faq/[category]"} as={toStatic ? undefined : `/faq/${category}`}
      />
    </div>
  );
}

export function RelatedQuestions(props: {
  category: string;
  current: QuestionAndAnswer;
  toStatic?: boolean;
}) {

  const { category, current, toStatic } = props;
  let faqs = FAQ[category];
  if(!faqs) faqs = FAQ["syasou"];

  let count = 0;

  return (
    <div className="box01">
      <ul>
        {Object.values(faqs).map((item, i) => {
          if(count > 2) return false;
          if(item.id === current.id) return false;

          count++;
          return (
            <li key={i}>
              <Link href={toStatic ? `/faq/${category}/${item.id}` : "/faq/[category]/[id]"} as={toStatic ? undefined : `/faq/${category}/${item.id}`}>
                <a>
                  <dl>
                    <dt>
                      <img src={item.thumbnail} alt={item.question} />
                    </dt>
                    <dd>{item.question}</dd>
                  </dl>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="list-button">
        <Link href="/faq/[category]" as={`/faq/${category}`}>
          <a>
            <div className="button-box">
              <div className="label">このカテゴリーの質問一覧に戻る</div>
              <div className="end-icon">
                <img src="/images/icon_arrow04.svg" alt="このカテゴリーの質問一覧に戻る" />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export function SyasouTypeFaqBox(props: {
  className?: string,
  type: "syasou" | "owakarenokai" | "goudousou";
  }) {
  const { className, type } = props;
  let faqs = FAQ_SYASOUTYPE[type];
  if(!faqs) faqs = FAQ_SYASOUTYPE["syasou"];

  const moreType: "社葬" | "合同葬" | "お別れの会" = type === "syasou" ? "社葬" : type === "goudousou" ? "合同葬" : "お別れの会";
  const imgPath: "/images/sy0701.svg" | "/images/gd0701.svg" | "/images/ow0701.svg" = type === "syasou" ? "/images/sy0701.svg" : type === "goudousou" ? "/images/gd0701.svg" : "/images/ow0701.svg";


  return (
    <section className={`${className ? `${className}` : ""} faq-${type} slightly-colored-bg`} id="faq">
      <div className="wrapper">
        <h3 className="mincho sylogo">
          <span className="tategaki">{moreType}に関する<br />よくあるご質問</span>
        </h3>
        <div className="qas">
          {Object.values(faqs).map((item, i) => {
            return (
              <dl key={i} className="dl_qa">
                <dt>
                  <span className="num mincho">Q.</span>
                  <p className="mincho">{item.question}</p>
                </dt>
                <dd><span className="mincho num">A.</span><p className="mincho"><>{item.answer}</></p></dd>
              </dl>
            );
          })}
        </div>
        <div>
          <OtherQAButton href="/faq" marginTop={30} />
        </div>
      </div>
    </section>
  );
}

export const OtherCategorySection: FC<{hideTopBar?: boolean, currentCategory: string}> = (props) => {
  const { hideTopBar, currentCategory } = props;

  return (
    <section className="s03 other">
      {hideTopBar ? <></> : <div className="split-border" />}
      <div className="wrapper">
        <div className="related-header mincho">その他のカテゴリー</div>
        <div className="box01">
          <ul className="category">
            {Object.entries(FAQ_CATEGORY).map(([key, value]) => {
              const toCovid = key.startsWith("covid19");
              const toStatic = key === "reference" || key === "manner";
              if(key === currentCategory) return false;

              return (
                <li key={key} className="each-category">
                  <Link
                    href={toCovid
                      ? `/${key}`
                      : toStatic
                        ? `/faq/${key}`
                        : "/faq/[category]"
                    }
                    as={toStatic || toCovid ? undefined : `/faq/${key}`}
                  >
                    <a>
                      <div className="category-box">
                        <div className="category-label">
                          {key === "until" ? "ご逝去直後から\n当日まで" : value}
                        </div>
                        <div className="end-icon">
                          <img src="/images/icon_arrow04.svg" alt={value} />
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="split-border" />
    </section>
  );
}

export const FaqBoxV2: FC<{
  key?: any;
  category: string;
  title: string;
  desc: string;
  imgPath: string;
}> = (props) => {
  const { key, category, title, desc, imgPath } = props;
  const toCovid = category.startsWith("covid19");
  const toStatic = category === "reference" || category === "manner";

  return (
    <Link
      key={key}
      href={toCovid
        ? `/${category}`
        : toStatic
          ? `/faq/${category}`
          : "/faq/[category]"
      }
      as={toStatic || toCovid ? undefined : `/faq/${category}`}
    >
      <a css={css`
        display: block;
        border: 1px solid #ccc;
        margin: 10px 4px;
        background-color: #fff;
        width: 32%;
        min-height: 250px;
        cursor: pointer;
        @media screen and (max-width: 1030px) {
          max-width: 300px;
          min-height: 250px;
        }
        @media screen and (max-width: 880px) {
          margin: 8px 4px;
        }
        @media screen and (max-width: 640px) {
          max-width: none;
          width: 49%;
          margin: 6px 0;
        }
      `}>
        <div css={css`
          padding: 12px;
        `}>
          <img
            css={css`
              width: 100%;
              object-fit: cover;
              height: 120px;
              @media screen and (max-width: 600px) {
                height: 100px;
              }
              @media screen and (max-width: 430px) {
                height: 80px;
              }
            `}
            src={imgPath}
            alt={title}
          />
        </div>
        <div css={css`
          background-color: #f1f2f2;
          padding: 4px 4px 4px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}>
          <div className="mincho" css={css`
            font-size: 18px;
            font-weight: bold;
            white-space: pre-wrap;
            @media screen and (max-width: 430px) {
              font-size: 17px;
            }
          `}>
            {title}
          </div>
          <div css={css`margin-top: 4px;`}>
            <img src="/images/icon_arrow04.svg" alt={`${title}へ進む`} />
          </div>
        </div>
        <div css={css`
          padding: 12px;
          font-size: 14px;
        `}>
          {desc}
        </div>
      </a>
    </Link>
  );
}

export const FaqCategoryBreadcrumbWrapper: FC = (props) => {
  return (
    <section>
      <div className="wrapper" css={css`
        padding: 20px 50px 0;
        @media screen and (max-width: 880px) {
          padding: 20px 20px 0;
        }
      `}>
        {props.children}
      </div>
    </section>
  );
}

export const FaqReferenceSection: FC = () => {
  return (
    <section className="reference">
      <div className="wrapper">
        <div className="flex-wrapper justify-content-center align-items-center unchange-flex-direction-on-tablet">
          <div className="banner-button">
            <Link href="/plan/syasou#faq"><a>
              <img src="/images/ft_qa_syasou.png" alt="社葬のQ&A" className="op" />
              <img src="/images/ft_qa_syasou_sp.jpg" alt="社葬のQ&A" className="os" />
            </a></Link>
          </div>
          <div className="banner-button">
            <Link href="/plan/owakarenokai#faq"><a>
              <img src="/images/ft_qa_owakare.png" alt="お別れの会のQ&A" className="op" />
              <img src="/images/ft_qa_owakarenokai_sp.jpg" alt="お別れの会のQ&A" className="os" />
            </a></Link>
          </div>
          <div className="banner-button">
            <Link href="/plan/goudousou#faq"><a>
              <img src="/images/ft_qa_goudousou.png" alt="合同葬のQ&A" className="op" />
              <img src="/images/ft_qa_goudousou_sp.jpg" alt="合同葬のQ&A" className="os" />
            </a></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export const FaqQuestionList: FC<{
  category: string;
}> = (props) => {
  const { category } = props;
  let faqs = FAQ[category];
  if(!faqs) faqs = FAQ["syasou"];

  const toStatic = category === "reference" || category === "manner";

  return (
    <section className="s01">
      <div className="wrapper">
        <div className="box01">
          <ul className="questions">
            {Object.values(faqs).map(item => (
              <li key={item.id} className="each-question">
                <Link href={toStatic ? `/faq/${category}/${item.id}` : "/faq/[category]/[id]"} as={toStatic ? undefined : `/faq/${category}/${item.id}`}>
                  <a>
                    <dl>
                      <dt>
                        <img src={item.thumbnail} alt={item.question} />
                      </dt>
                      <dd>{item.question}</dd>
                    </dl>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}