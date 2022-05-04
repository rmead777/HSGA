import type { NextPage } from "next";
import DefaultPage from "../src/Default";
import ChangePasswordTemplate from "../src/templates/pages/ChangePassword/index";

const ChangePasswordPage: NextPage = () => {
  return <DefaultPage body={<ChangePasswordTemplate />} />;
};

export default ChangePasswordPage;
