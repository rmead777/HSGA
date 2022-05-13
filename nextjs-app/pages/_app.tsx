import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import Head from "next/head";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Head>
          <title>HighScoreWinsMoney</title>
        </Head>
        <Component {...pageProps} />
      </>
    </QueryClientProvider>
  );
}

export default MyApp;
