import type { NextPage } from "next";
import cx from "classnames";
import NextHead from "next/head";
import Footer from "../src/templates/Footer";
import Header from "../src/templates/Header";
import headtags from "../src/_headtags";
import LoginTemplate from "../src/templates/pages/Login";

const Login: NextPage = () => {
  return (
    <>
      <NextHead>{headtags}</NextHead>
      <Header />
      <LoginTemplate />
      <Footer />
    </>
  );
};

export default Login;
