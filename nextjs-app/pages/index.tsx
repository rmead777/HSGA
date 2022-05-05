import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../src/templates/pages/Home";
import Footer from "../src/templates/Footer";
import headtags from "../src/_headtags";
import client from "../src/clients/HSWM";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    client
      .fetchCurrentUserInfo()
      .then((data) => {
        console.log("userdata", data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Head>{headtags}</Head>
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
