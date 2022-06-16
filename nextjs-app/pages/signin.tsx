import type { NextPage } from "next";
import LoginTemplate from "../src/templates/pages/Login";
import client from "../src/clients/HSWM";
import { useState, useEffect } from "react";
import DefaultPage from "../src/Default";
import { useRouter } from "next/router";

export const SIGNIN_PATHNAME = "/signin";

function goNext() {
  window.location.href = "/";
}

const Login: NextPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  async function signin(values: { email: string; password: string }) {
    client
      .loginUser(values)
      .then((res) => {
     //   console.log("Log in Response",res);
        
        if (res.errors?.length) {
          setErrors([
            "Username or password is incorrect. Please check and try again.",
          ]);
        } else {
          goNext();
        }
      })
      .catch((err) => {
        console.error(err);
        setErrors(["Something went wrong. Please contact support."]);
      });
  }

  useEffect(() => {
    client
      .fetchCurrentUserInfo()
      .then((result) => {
        const { data } = result;
// console.log(data)
        if (typeof data !== "string" && data?.username) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [router]);

  useEffect(() => {
    // User should not get to this page if logged in. If they do, redirect them.
    if (isLoggedIn) {
      setTimeout(() => {
        router.replace("/");
      }, 3000);
    }
  });

  if (isLoggedIn) {
    return (
      <div className="text-center">{`You're already logged in. Redirecting..`}</div>
    );
  }

  return (
    <DefaultPage body={<LoginTemplate onSubmit={signin} errors={errors} />} />
  );
};

export default Login;
