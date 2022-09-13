import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import { FAQ_CATEGORY, FAQ_CATEGORY_LIST } from '@lib/faq'
import { FaqCategoryBreadcrumbWrapper, FaqQuestionList, OtherCategorySection } from '@components/faq'

export const getStaticProps = async (ctx: { params: { category: string } }) => {
  return {
    props: {
      key: ctx.params.category,
    },
  };
}

export const getStaticPaths = async () => {
  let array = Object.keys(FAQ_CATEGORY);
  array = array.filter(item => item !== "manner" && item !== "reference" && !item.startsWith("covid19"));

  const paths = array.map(item => ({
    params: {
      category :item
    }
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

const Page: NextPage = () => {
  const router = useRouter();
  const [category, setCategory] = useState<string | string[] | undefined>();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  useEffect(() => {
    if(router.isReady) {
      setCategory(router.query.category);
    }
  }, [router.isReady]);
  if(!category) return <></>;

  if(Array.isArray(category)) {
    throw new Error("予期せぬエラーが発生しました category is Array type");
  }

  let categoryName = FAQ_CATEGORY[category];
  if(!categoryName) {
    categoryName = FAQ_CATEGORY.syasou;
  }

  let faqCategory = FAQ_CATEGORY_LIST[category];
  if(!faqCategory) {
    faqCategory = FAQ_CATEGORY_LIST.syasou;
  }

  return (
    <>
      <Head>
        <title>{categoryName} │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「"+categoryName+"」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-faq-category">
        <main>
          <FaqCategoryBreadcrumbWrapper>
            <Breadcrumb
              pagenames={["セレモアの社葬トップ", "社葬のQ&A"]}
              pageurls={["/", "/faq"]}
              targetpage={categoryName}
            />
          </FaqCategoryBreadcrumbWrapper>

          <section className="first-view">
            <h1 className="fv">
              <div className="caption">
                <div className="title mincho">
                  {categoryName}
                </div>
                <div className="divider" />
                <div className="desc">
                  {faqCategory.desc}
                </div>
              </div>
            </h1>
          </section>

          <FaqQuestionList category={category} />

          <OtherCategorySection hideTopBar currentCategory={category} />
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Page

declare global {
  interface Window{
    [key: string]: any,
  }
}
