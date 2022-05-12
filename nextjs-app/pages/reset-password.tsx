import type { NextPage } from "next";
import DefaultPage from "../src/Default";
import ResetPasswordTemplate from "../src/templates/pages/ResetPassword/index";
import { useState } from "react";
import client, { ResetPasswordParams } from "../src/clients/HSWM";
import { SIGNIN_PATHNAME } from "./signin";
import Button from "../src/components/atoms/Button";
import cx from "classnames";

export const RESET_PASSWORD_PATHNAME = "/reset-password";

function goNext() {
  window.location.href = SIGNIN_PATHNAME;
}

const ResetPasswordPage: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isSuccessful, setSuccess] = useState(false);

  async function resetPassword(values: ResetPasswordParams) {
    client
      .resetPassword(values)
      .then((res) => {
        if (res.errors?.length) {
          setErrors(res.errors);
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
        !isSuccessful ? (
          <>
            <div
              className={cx(
                "container full text-center flex flex-col mx-auto flex-1"
              )}
            >
              <div className="mb-7">
                <h1 className="subtitle uppercase text-4xl mb-4">
                  <span>Password reset sent to your email</span>
                </h1>
                <span>(check your spam)</span>
              </div>
              <Button onClick={goNext}>Continue</Button>
              <small>Click to continue to proceed</small>
            </div>
          </>
        ) : (
          <ResetPasswordTemplate onSubmit={resetPassword} errors={errors} />
        )
      }
    />
  );
};

export default ResetPasswordPage;
