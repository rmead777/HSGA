// https://nextjs.org/docs/messages/no-stylesheets-in-head-component

import { Html, Head, Main, NextScript } from "next/document";
import headtags from "../src/_headtags";

export default function Document() {
  return (
    <Html>
      <Head>{headtags}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
