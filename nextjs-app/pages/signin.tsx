import type { NextPage } from "next";
import LoginTemplate from "../src/templates/pages/Login";
import client from "../src/clients/HSWM";
import { useState } from "react";
import DefaultPage from "../src/Default";
import FormSubmitSuccessTemplate from "../src/templates/pages/FormSubmitSuccess";

function goNext() {
  window.location.href = "/";
}

const Login: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isSuccessful, setSuccess] = useState(false);

  async function signin(values: { email: string; password: string }) {
    client
      .loginUser(values)
      .then((res) => {
        if (res.errors?.length) {
          setErrors([
            "Username or password is incorrect. Please check and try again.",
          ]);
        } else {
          setSuccess(true);
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
        isSuccessful ? (
          <FormSubmitSuccessTemplate
            onClick={goNext}
            title="Payment Method Saved"
          />
        ) : (
          <LoginTemplate onSubmit={signin} errors={errors} />
        )
      }
    />
  );
};

export default Login;
