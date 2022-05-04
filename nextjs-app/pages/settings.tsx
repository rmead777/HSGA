import type { NextPage } from "next";
import NextHead from "next/head";
import Footer from "@ui/templates/Footer";
import Header from "@ui/templates/Header";
import SettingsPageTemplate from "@ui/templates/pages/Settings";
import headtags from "../src/_headtags";

const Signup: NextPage = () => {
  return (
    <>
      <NextHead>{headtags}</NextHead>
      <Header />
      <SettingsPageTemplate />
      <Footer />
    </>
  );
};

export default Signup;
