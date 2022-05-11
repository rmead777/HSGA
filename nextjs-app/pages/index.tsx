import type { NextPage } from "next";
import HomePage from "../src/templates/pages/Home";
import DefaultPage from "../src/Default";
import { useEffect, useState } from "react";
import client from "../src/clients/HSWM";
import { GameInfo } from "../src/clients/HSWM/types";

const Home: NextPage = () => {
  const [featuredGameInfo, setGameInfo] = useState<GameInfo>();

  useEffect(() => {
    client
      .fetchFeaturedGameInfo()
      .then((result) => {
        if (result.data?.length) {
          const { data } = result;
          setGameInfo(data[0]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <DefaultPage body={<HomePage featuredGameInfo={featuredGameInfo} />} />
  );
};

export default Home;
