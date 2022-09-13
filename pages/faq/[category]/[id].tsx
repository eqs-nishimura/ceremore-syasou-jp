import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { FAQ, FAQ_CATEGORY } from '@lib/faq'
import { OtherCategorySection, RelatedQuestions } from '@components/faq'

export const getStaticProps = async (ctx: { params: { id: string } }) => {
  return {
    props: {
      key: ctx.params.id,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: Object.keys(FAQ).map(key => Object.values(FAQ[key]).map(value => `/faq/${key}/${value.id}`)).flat().filter(item => !item.startsWith("/faq/reference") && !item.startsWith("/faq/manner")),
    fallback: false,
  };
}

const Page: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  const router = useRouter();
  const [category, setCategory] = useState<string | string[] | undefined>();
  const [id, setId] = useState<string | string[] | undefined>();
  useEffect(() => {
    if(router.isReady) {
      setCategory(router.query.category);
      setId(router.query.id);
    }
  }, [router.isReady]);
  if(!category || !id) return <></>;

  if(Array.isArray(category) || Array.isArray(id)) {
    throw new Error("予期せぬエラーが発生しました category or id is Array type");
  }

  let categoryName = FAQ_CATEGORY[category];
  if(!categoryName) {
    categoryName = FAQ_CATEGORY.syasou;
  }

  let faqs = FAQ[category];
  if(!faqs) {
    faqs = FAQ.syasou;
  }

  let faq = faqs[id];
  if(!faq) {
    faq = faqs["001"];
  }

  return (
    <>
      <Head>
        <title>{faq.question} │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「"+faq.question+"」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-faq-category-detail">
        <main>
          <section className="first-view">
            <div className="wrapper">
              <Breadcrumb
                pagenames={["セレモアの社葬トップ", "社葬のQ&A", `${categoryName}`]}
                pageurls={["/", "/faq", `/faq/${category}`]}
                targetpage={faq.question}
                className="bottom-margin-cancel"
              />
            </div>
          </section>

          <section className="answer-section">
            <div className="wrapper">
              <div className="answer-box">
                <div className="question">
                  <div className="label">
                    {`社葬のQ&A : ${categoryName}`}
                  </div>
                  <h1 className="mincho q">{faq.question}</h1>
                </div>
                <div className="img">
                  <img src={faq.imagePath} alt={faq.question} />
                </div>
                <div className="answer">
                  <span dangerouslySetInnerHTML={{__html: faq.answer}} />
                </div>
              </div>
            </div>
          </section>

          <section className="s03">
            <div className="wrapper">
              {/* <h3>
                <img src="/images/ft_category_detail_ref.png" alt="関連するご質問" />
              </h3> */}
              <div className="related-header mincho">関連のご質問</div>

              <RelatedQuestions
                category={category}
                current={faq}
              />
            </div>
          </section>

          <OtherCategorySection currentCategory={category} />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Page;

declare global {
  interface Window{
    [key: string]: any,
  }
}
