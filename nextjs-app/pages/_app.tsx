import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import "../styles/bootstrap.css"
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Head>
          <title>HighScoreGameArcade</title>
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
    </QueryClientProvider>
  );
}

export default MyApp;
