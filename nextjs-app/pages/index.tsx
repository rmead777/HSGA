/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "../src/templates/pages/Home";
import Footer from "../src/templates/Footer";
import headtags from "../src/_headtags";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>{headtags}</Head>
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;
