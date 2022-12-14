import React from "react";
import { RenderPageResult } from "next/dist/shared/lib/utils";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document'
import createEmotionServer from "@emotion/server/create-instance";
import createCache from '@emotion/cache';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/> */}

          {/* https://github.com/mui-org/material-ui/tree/master/examples/nextjs */}
          {/* prepend:true の設定と一致するように、最初にMUIスタイルを注入する。 */}
          {/* {this.props.emotionStyleTags} */}

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@400;700&family=Barlow:wght@400;700&family=Cormorant+Garamond:ital,wght@1,600&display=swap" rel="stylesheet"/>
          <link href="https://fonts.cdnfonts.com/css/bahnschrift" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4TPGLB" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument


// `getInitialProps` は (`_app` ではなく) `_document` に属します。
// `_document` は静的サイト生成（SSG）に対応しています。
MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
  // Resolution order
  //
  // サーバーの場合:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // サーバーでエラーが発生した場合:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // クライアント側
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // すべてのSSRリクエストで同じエモーションキャッシュを共有することで、パフォーマンスを高速化することを検討することができます。
  // しかし、グローバルな副作用があることに注意してください。
  const cache = createCache({ key: 'css'/*, prepend: true*/ });
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
    originalRenderPage({
      enhanceApp:
        (App: any) =>
        // eslint-disable-next-line react/display-name
        (props): JSX.Element =>
          <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  // これは重要なことです。無効なHTMLをレンダリングするemotionを防ぐことができます。
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // スタイルフラグメントは、アプリとページのレンダリングが終了した後にレンダリングされます。
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};