import type { NextPage } from "next";
import NextHead from "next/head";
import Footer from "@ui/templates/Footer";
import Header from "@ui/templates/Header";
import SignupTemplate from "@ui/templates/pages/Signup";
import headtags from "../src/_headtags";

const Signup: NextPage = () => {
  return (
    <>
      <NextHead>{headtags}</NextHead>
      <Header />
      <SignupTemplate />
      <Footer />
    </>
  );
};

export default Signup;
