/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import HomePage from "../../src/templates/pages/Home";
import Footer from "../../src/templates/Footer";
import headtags from "../../src/_headtags";

const GamePage: NextPage = () => {
  return (
    <>
      <Head>{headtags}</Head>
      <HomePage />
      <Footer />
    </>
  );
};

export default GamePage;
