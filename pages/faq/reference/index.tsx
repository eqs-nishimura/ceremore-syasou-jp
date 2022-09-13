import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { Breadcrumb } from '@components/breadcrumb'
import {  FAQ_CATEGORY, FAQ_CATEGORY_LIST } from '@lib/faq'
import { FaqCategoryBreadcrumbWrapper, FaqQuestionList, OtherCategorySection } from '@components/faq'

const Page: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  const categoryName = FAQ_CATEGORY.reference;
  const faqCategory = FAQ_CATEGORY_LIST.reference;

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

          <FaqQuestionList category="reference" />

          <OtherCategorySection hideTopBar currentCategory="reference" />
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
