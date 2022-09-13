import createStore from '@lib/createStore'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'
import { Provider } from 'react-redux'
import createCache from '@emotion/cache'
import { CacheProvider, EmotionCache } from "@emotion/react"
import PropTypes from "prop-types"

import 'nprogress/nprogress.css'
import '/styles/globals.scss'

// クライアント側のキャッシュで、ブラウザのユーザーのセッション全体に対して共有される。
const clientSideEmotionCache = createCache({ key: 'css'/*, prepend: true*/ });

// バーの設定
//    showSpinner: バーと一緒にローディングスピナーを表示するかどうか
//    speed: バーが右端に到達し消えるまでの時間 (msec)
//    minimum: バーの開始地点
NProgress.configure({ showSpinner: false, speed: 300, minimum: 0.25 })

// [Next.jsのルーティング](https://qiita.com/tetsutaroendo/items/e444bd606c5fa79d2209)
// ルートが変化を開始する際に発火
Router.events.on('routeChangeStart', (url)=>{
  // console.log("routeChangeStart",url);
  NProgress.start()
})
// ルートの変化が完了した際に発火
Router.events.on('routeChangeComplete', (url)=>{
  // console.log("routeChangeComplete",url);
  NProgress.done()
})
// ルートが変化する最中、エラーが起こった際に発火
Router.events.on('routeChangeError', (err)=>{
  // console.log("routeChangeError",err);
  NProgress.done()
})
// // ブラウザ履歴が変化する直前に発火
// Router.events.on('beforeHistoryChange', (url)=>{
//   console.log("beforeHistoryChange",url);
// })
// // ページが遷移せず、ハッシュでの遷移（id付きのaタグでスクロールするなど）が開始する際に発火
// Router.events.on('hashChangeStart', (url)=>{
//   console.log("hashChangeStart",url);
// })
// // ページが遷移せず、ハッシュでの遷移が完了した際に発火
// Router.events.on('hashChangeComplete', (url)=>{
//   console.log("hashChangeComplete",url);
// })

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const router = useRouter()

  return <>
    <CacheProvider value={emotionCache}>
      <Head>
        {/* テスト環境のページが検索エンジンに登録されることを回避する */}
        {/* <meta name="robots" content="noindex,nofollow"/> */}

        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        <meta name="keywords" content="社葬,合同葬,セレモア,お別れの会"/>
        <meta name="description" content="社葬・お別れの会・合同葬は信頼と安心のセレモアへお任せください"/>
        <meta name="google-site-verification" content="wRTBEjA-ebpY3Ykihglm4Cww9HgX10EvRhGEDtscPJ8" />
        <title>社葬・お別れの会・合同葬ならセレモアの社葬</title>

        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&display=swap" rel="stylesheet"/> */}

        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="canonical" href={`https://www.syasou.jp${router.asPath}`}/>

        {/* <meta name="format-detection" content="telephone=no"/>
        <meta property="og:title" content="セレモア｜セレパク〈セレモアパック葬〉 | 信頼と安心の葬儀社 セレモア"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://www.ceremore.co.jp/images/common/ogp.jpg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:url" content="https://www.ceremore.co.jp/"/>
        <meta property="og:description" content="社葬・お別れの会・合同葬は信頼と安心のセレモアへお任せください"/>
        <meta property="og:site_name" content="サイト名"/>
        <meta property="og:locale" content="ja"/>
        <meta name="twitter:card" content="summary_large_image"/> */}

        {/* <link rel="stylesheet" href="/styles/base.css"/> */}
        {/* <link rel="stylesheet" href="/styles/layout.css"/>
        <link rel="stylesheet" href="/styles/module.css"/> */}
      </Head>

      {/* <!-- Google Tag Manager --> */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W4TPGLB');
        `}
      </Script>
      {/* <!-- End Google Tag Manager --> */}

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VEGP6HYNPK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VEGP6HYNPK');
        `}
      </Script>
      {/*
        strategy="afterInteractive" を指定すると、useEffectより後にScriptが読み込まれる
        [next/scriptのJavaScriptの基本](https://zenn.dev/aiji42/articles/9a6ab12ab5f6e6)
        */}
      <Script src="//ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js" strategy="beforeInteractive" defer/>
      {/* <Script src="//yubinbango.github.io/yubinbango/yubinbango.js" strategy="beforeInteractive" defer/> */}
      <Script src="/js/slick.min.js" strategy="beforeInteractive" defer/>
      <Script src="/js/common.js" strategy="beforeInteractive" defer/>
      {/* <Script src="/js/swiper.js" strategy="beforeInteractive" defer/> */}
      {/* <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCmhtkapLhWU-9E4vDDlJj2zdpORWj6FM" strategy="beforeInteractive" defer/> */}

      <Provider store={createStore}>
        <Component {...pageProps} />
      </Provider>
    </CacheProvider>
  </>
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp

declare global {
  interface Window{
    [key: string]: any,
  }
}
