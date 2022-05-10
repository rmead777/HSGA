import type { NextPage } from "next";
import { useState } from "react";
import DefaultPage from "../src/Default";
import PaymentPreferenceTemplate from "../src/templates/pages/PaymentPreference/index";
import client from "../src/clients/HSWM/index";
import FormSubmitSuccessTemplate from "../src/templates/pages/FormSubmitSuccess";
import { PATH as SIGNUP_PATH } from "./signup";

export const PAYMENT_PREFERENCES_PATHNAME = "/payment-preferences";

function goNext() {
  if (document.referrer.includes(SIGNUP_PATH)) {
    window.location.href = "/";
  } else {
    window.location.href = "/settings";
  }
}

const PaymentPreferences: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isSuccessful, setSuccess] = useState(false);

  async function updatePaypal(values: { paypalemail: string }) {
    client
      .updatePaypal(values)
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
            title="Payment Method Saved"
          />
        ) : (
          <PaymentPreferenceTemplate onSubmit={updatePaypal} errors={errors} />
        )
      }
    />
  );
};

export default PaymentPreferences;
