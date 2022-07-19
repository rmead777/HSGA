/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";
import Head from "next/head";
import GamePageTemplate from "../../src/templates/pages/GamePage";
import Footer from "../../src/templates/Footer";
import headtags from "../../src/_headtags";
import Header from "@ui/templates/Header";
import { Suspense } from "react";

const GamePage: NextPage = () => {
  return (
    <section>
      <Head>{headtags}</Head>
      <Header />

      <GamePageTemplate />
      <Suspense>

      <Footer />
      </Suspense>
    </section>
  );
};

export default GamePage;
