import type { NextPage } from "next";
import { useState } from "react";
import DefaultPage from "../src/Default";
import PaymentPreferenceTemplate from "../src/templates/pages/PaymentPreference/index";
import client from "../src/clients/HSWM/index";

export const PATHNAME = "payment-preferences";

function goToPath(path: string) {
  window.location.href = path;
}

const Login: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);

  async function updatePaypal(values: { paypalemail: string }) {
    client
      .updatePaypal(values)
      .then((res) => {
        console.log(res);
        if (res.error) {
          console.error(res.error);

          setErrors([res.error]);
        } else {
          goToPath("/");
        }
      })
      .catch((err) => {
        console.error(err);
        setErrors(["Something went wrong. Please contact support."]);
      });
  }

  return (
    <DefaultPage
      body={
        <PaymentPreferenceTemplate onSubmit={updatePaypal} errors={errors} />
      }
    />
  );
};

export default Login;
