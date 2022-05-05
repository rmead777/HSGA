import type { NextPage } from "next";
import NextHead from "next/head";
import Footer from "../src/templates/Footer";
import Header from "../src/templates/Header";
import headtags from "../src/_headtags";
import LoginTemplate from "../src/templates/pages/Login";
import client from "../src/clients/HSWM";
import { useState } from "react";

function goToPath(path: string) {
  window.location.href = path;
}

const Login: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);

  async function signin(values: { email: string; password: string }) {
    client
      .loginUser(values)
      .then((res) => {
        console.log(res);
        if (res.error) {
          setErrors([
            "Username or password is incorrect. Please check and try again.",
          ]);
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
    <>
      <NextHead>{headtags}</NextHead>
      <Header />
      <LoginTemplate onSubmit={signin} errors={errors} />
      <Footer />
    </>
  );
};

export default Login;
