import type { NextPage } from "next";
import DefaultPage from "../src/Default";
import ChangePasswordTemplate from "../src/templates/pages/ChangePassword/index";
import FormSubmitSuccessTemplate from "../src/templates/pages/FormSubmitSuccess";
import { useState } from "react";
import client, { UpdatePasswordParams } from "../src/clients/HSWM";

export const CHANGE_PASSWORD_PATHNAME = "/change-password";

function goNext() {
  window.location.href = "/settings";
}

const ChangePasswordPage: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isSuccessful, setSuccess] = useState(false);

  async function updatePaypal(values: UpdatePasswordParams) {
    client
      .updatePassword(values)
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
            title="Password updated successfully"
          />
        ) : (
          <ChangePasswordTemplate onSubmit={updatePaypal} errors={errors} />
        )
      }
    />
  );
};

export default ChangePasswordPage;
