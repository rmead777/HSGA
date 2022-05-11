import type { NextPage } from "next";
import DefaultPage from "../src/Default";
import ResetPasswordTemplate from "../src/templates/pages/ResetPassword/index";
import FormSubmitSuccessTemplate from "../src/templates/pages/FormSubmitSuccess";
import { useState } from "react";
import client, { ResetPasswordParams } from "../src/clients/HSWM";
import { SIGNIN_PATHNAME } from "./signin";

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
        isSuccessful ? (
          <FormSubmitSuccessTemplate
            onClick={goNext}
            title="Password reset sent. Please click continue to signin."
          />
        ) : (
          <ResetPasswordTemplate onSubmit={resetPassword} errors={errors} />
        )
      }
    />
  );
};

export default ResetPasswordPage;
