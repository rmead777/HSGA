import type { NextPage } from "next";
import DefaultPage from "../src/Default";
import PaymentPreferenceTemplate from "../src/templates/pages/PaymentPreference/index";

export const PATHNAME = "payment-preferences";

const Login: NextPage = () => {
  return <DefaultPage body={<PaymentPreferenceTemplate />} />;
};

export default Login;
