import type { NextPage } from "next";
import HomePage from "../src/templates/pages/Home";
import DefaultPage from "../src/Default";
import { useEffect, useState } from "react";
import client from "../src/clients/HSWM";
import { GameInfo } from "../src/clients/HSWM/types";

const Home: NextPage = () => {
  const [featuredGameInfo, setGameInfo] = useState<GameInfo>();
  const [username, setUsername] = useState("");

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

  useEffect(() => {
    client
      .fetchCurrentUserInfo()
      .then((result) => {
        if (result.data?.username) {
          setUsername(result.data?.username);
        }
      })
      .catch((err) => {
        console.error(err);
        setUsername("");
      });
  }, []);

  return (
    <DefaultPage
      currentUserInfo={{ username }}
      body={<HomePage featuredGameInfo={featuredGameInfo} />}
    />
  );
};

export default Home;
