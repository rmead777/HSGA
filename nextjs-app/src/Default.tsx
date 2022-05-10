import Footer from "./templates/Footer";
import Header from "./templates/Header";
import { ReactNode } from "react";

interface PropTypes {
  body: ReactNode;
}

const DefaultPage = ({ body }: PropTypes) => {
  return (
    <>
      <Header />
      {body}
      <Footer />
    </>
  );
};

export default DefaultPage;
