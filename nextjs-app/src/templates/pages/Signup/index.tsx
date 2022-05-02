import cx from "classnames";
import isEmpty from "lodash/isEmpty";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import { HSWM_API } from "@services/HSWM_API";
import { FormEventHandler, useState } from "react";
import FormPageTemplate from "../FormPage/index";
import PasswordInput from "../../../components/organisms/forms/PasswordInput/index";
import FormErrors from "../../../components/organisms/forms/FormErrors";

function redirectToHome() {
  window.location.href = "/";
}

function validate(obj: Record<string, string>) {
  const emptyValue = Object.values(obj).find((value) => isEmpty(value));

  return typeof emptyValue === "undefined";
}

function SignupTemplate() {
  const [isValid, setValid] = useState(false);
  const [isTouched, setTouched] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const registerUser: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault(); // don't redirect the page

    const values = {
      username: event.currentTarget.username.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    HSWM_API.registerUser(values)
      .then((res) => {
        console.log(res);
        redirectToHome();
      })
      .catch((err) => {
        console.error(err);
        setErrors(["There was an error creating your account."]);
      });
  };

  const handleValidForm = () => {
    setTouched(true);
    setErrors([]);
    return false;
  };

  const handleChange: FormEventHandler<HTMLFormElement> = (event) => {
    const values = {
      username: event.currentTarget.username.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    const _isValid = validate(values);

    setValid(_isValid);
  };

  return (
    <FormPageTemplate
      form={
        <Form
          onSubmit={registerUser}
          acceptCharset="utf-8"
          onChange={handleChange}
          showInvalidFields={isTouched}
        >
          <>
            <TextInput
              type="text"
              name="username"
              required
              id="username"
              aria-required="true"
              maxLength={255}
              label="Username"
            />
            <TextInput
              type="email"
              name="email"
              required
              id="email"
              aria-required="true"
              maxLength={255}
              label="Email"
            />
            <PasswordInput />
            <FormErrors errors={errors} />
            <Button disabled={!isValid} type="submit" onClick={handleValidForm}>
              Register
            </Button>
            <div
              className={cx(
                fonts.button,
                "text-primary-1 mb-5 text-lg font-size-3"
              )}
            >
              <Link href="/login" as="/login.html">
                OR LOGIN INSTEAD
              </Link>
            </div>
          </>
        </Form>
      }
    />
  );
}

export default SignupTemplate;
