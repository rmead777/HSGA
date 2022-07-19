import "../styles/globals.css";
// import "../styles/bootstrap.css"
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HighScoreWinsMoney</title>
      </Head>
      <Component {...pageProps} />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KFK1PBWDP9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KFK1PBWDP9');
        `}
      </Script>
    </>
  );
}

export default MyApp;
