import cx from "classnames";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import { HSWM_API, RegisterUserParams } from "@services/HSWM_API";
import { useState } from "react";
import FormPageTemplate from "../FormPage/index";
import PasswordInput from "@ui/organisms/forms/PasswordInput/index";
import FormErrors from "@ui/organisms/forms/FormErrors";
import useForm from "../../../hooks/useForm";
import { PATHNAME } from "../../../../pages/payment-preferences";

function goToPath(path: string) {
  window.location.href = path;
}

function SignupTemplate() {
  const [errors, setErrors] = useState<string[]>([]);
  const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
    useForm({
      onSubmit: (values) => {
        HSWM_API.registerUser(values as unknown as RegisterUserParams)
          .then((res) => {
            console.log(res);
            goToPath(PATHNAME);
          })
          .catch((err) => {
            console.error(err);
            setErrors(["There was an error creating your account."]);
          });
      },
    });

  return (
    <FormPageTemplate
      form={
        <Form
          onSubmit={handleSubmit}
          acceptCharset="utf-8"
          onChange={handleFormChange}
          showInvalidFields={isDirty}
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
            <Button disabled={!isValid} type="submit" onClick={validateForm}>
              Register
            </Button>
            <div
              className={cx(
                fonts.button,
                "text-primary-1 mb-5 text-lg font-size-3"
              )}
            >
              <Link href="/">OR LOGIN INSTEAD</Link>
            </div>
          </>
        </Form>
      }
    />
  );
}

export default SignupTemplate;
