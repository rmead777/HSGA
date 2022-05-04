import NextHead from "next/head";
import Footer from "./templates/Footer";
import Header from "./templates/Header";
import headtags from "./_headtags";
import { ReactNode } from "react";

interface PropTypes {
  body: ReactNode;
}

const DefaultPage = ({ body }: PropTypes) => {
  return (
    <>
      <NextHead>{headtags}</NextHead>
      <Header />
      {body}
      <Footer />
    </>
  );
};

export default DefaultPage;
