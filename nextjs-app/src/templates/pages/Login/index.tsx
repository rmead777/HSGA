import cx from "classnames";
import Link from "@ui/atoms/Link";
import Image from "@ui/atoms/Image";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import { HSWM_API } from "@services/HSWM_API";
import { FormEventHandler } from "react";
import FormPageTemplate from "../FormPage/index";

function LoginTemplate() {
  const loginUser: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault(); // don't redirect the page

    const values = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    console.error("Not implemented yet", {
      values,
    });
  };

  return (
    <FormPageTemplate
      form={
        <Form onSubmit={loginUser} acceptCharset="utf-8">
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
            type="password"
            name="password"
            required
            id="password"
            aria-required="true"
            label="Password"
            minLength={8}
          />
          <Button type="submit">Login</Button>
          <div
            className={cx(
              fonts.button,
              "text-primary-1 mb-5 text-lg font-size-3"
            )}
          >
            <Link href="/signup">NOT REGISTERED? SIGNUP NOW</Link>
          </div>
        </Form>
      }
    />
  );
}

export default LoginTemplate;
