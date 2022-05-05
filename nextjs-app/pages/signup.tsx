import type { NextPage } from "next";
import { useState } from "react";
import NextHead from "next/head";
import Footer from "@ui/templates/Footer";
import Header from "@ui/templates/Header";
import SignupTemplate from "@ui/templates/pages/Signup";
import headtags from "../src/_headtags";
import { PATHNAME } from "./payment-preferences";
import client, { RegisterUserParams } from "../src/clients/HSWM/index";

function goToPath(path: string) {
  window.location.href = path + ".html";
}

const Signup: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);

  function onSubmit(values: RegisterUserParams) {
    client
      .registerUser(values)
      .then((res) => {
        console.log(res);
        goToPath(PATHNAME);
      })
      .catch((err) => {
        console.error(err);
        setErrors(["There was an error creating your account."]);
      });
  }

  return (
    <>
      <NextHead>{headtags}</NextHead>
      <Header />
      <SignupTemplate onSubmit={onSubmit} errors={errors} />
      <Footer />
    </>
  );
};

export default Signup;
