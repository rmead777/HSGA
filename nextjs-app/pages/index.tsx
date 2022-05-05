import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../src/templates/pages/Home";
import Footer from "../src/templates/Footer";
import headtags from "../src/_headtags";
import client from "../src/clients/HSWM";
import { useEffect, useState } from "react";
import GamePage from "./gamepage/[[...pid]]";

const Home: NextPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    client
      .fetchCurrentUserInfo()
      .then((data) => {
        console.log(data);
        if (data?.email) setLoggedIn(true);
      })
      .catch(console.error);
  }, [setLoggedIn]);

  return (
    <>
      <Head>{headtags}</Head>
      {isLoggedIn ? <GamePage /> : <HomePage />}
      <Footer />
    </>
  );
};

export default Home;
