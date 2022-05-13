import type { NextPage } from "next";
import HomePage from "../src/templates/pages/Home";
import DefaultPage from "../src/Default";
import { useEffect, useState } from "react";
import client from "../src/clients/HSWM";
import { GameInfo, UserInfo } from "../src/clients/HSWM/types";

const POLL_FREQUENCY = 5 * 1000;

const Home: NextPage = () => {
  const [featuredGameInfo, setGameInfo] = useState<GameInfo>();
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [pollCount, setPollCount] = useState(0);

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
        const { data } = result;

        if (typeof data !== "string" && data?.id) {
          setUserInfo(data);
        } else {
          setUserInfo(undefined);
        }
      })
      .catch((err) => {
        console.error(err);
        setUserInfo(undefined);
      });

    setTimeout(() => setPollCount(pollCount + 1), POLL_FREQUENCY);
  }, [pollCount]);

  return (
    <DefaultPage
      body={
        <HomePage
          featuredGameInfo={featuredGameInfo}
          currentUserInfo={userInfo}
        />
      }
    />
  );
};

export default Home;
