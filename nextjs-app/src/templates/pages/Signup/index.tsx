import cx from "classnames";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import { HSWM_API } from "@services/HSWM_API";
import { FormEventHandler } from "react";
import FormPageTemplate from "../FormPage/index";
import PasswordInput from "../../../components/organisms/forms/PasswordInput/index";

function SignupTemplate() {
  const registerUser: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault(); // don't redirect the page

    const values = {
      username: event.currentTarget.username.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    HSWM_API.registerUser(values).then(console.log).catch(console.error);
  };

  return (
    <FormPageTemplate
      form={
        <Form onSubmit={registerUser} acceptCharset="utf-8">
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
          <Button type="submit">Register</Button>
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
        </Form>
      }
    />
  );
}

export default SignupTemplate;
