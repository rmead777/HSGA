import type { NextPage } from "next";
import HomePage from "../src/templates/pages/Home";
import DefaultPage from "../src/Default";

const Home: NextPage = () => {
  return <DefaultPage body={<HomePage />} />;
};

export default Home;
