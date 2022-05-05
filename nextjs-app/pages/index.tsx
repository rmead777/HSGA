import type { NextPage } from "next";
import HomePage from "../src/templates/pages/Home";
import client from "../src/clients/HSWM";
import { useEffect } from "react";
import DefaultPage from "../src/Default";

const Home: NextPage = () => {
  useEffect(() => {
    client
      .fetchCurrentUserInfo()
      .then((data) => {
        console.log("userdata", data);
      })
      .catch(console.error);
  }, []);

  return <DefaultPage body={<HomePage />} />;
};

export default Home;
