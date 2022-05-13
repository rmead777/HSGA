import Footer from "./templates/Footer";
import Header from "./templates/Header";
import { ReactNode } from "react";

interface PropTypes {
  body: ReactNode;
  currentUserInfo?: {
    username: string;
  };
}

const DefaultPage = ({ body, currentUserInfo }: PropTypes) => {
  return (
    <>
      <Header username={currentUserInfo?.username} />
      {body}
      <Footer />
    </>
  );
};

export default DefaultPage;
