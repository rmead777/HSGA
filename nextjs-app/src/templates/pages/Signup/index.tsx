import cx from "classnames";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import FormPageTemplate from "../FormPage/index";
import PasswordInput from "@ui/organisms/forms/PasswordInput/index";
import FormErrors from "@ui/organisms/forms/FormErrors";
import useForm from "../../../hooks/useForm";
import { RegisterUserParams } from "../../../clients/HSWM";

interface PropTypes {
  errors: string[];
  onSubmit(values: RegisterUserParams): void;
}

function SignupTemplate({ errors, onSubmit }: PropTypes) {
  const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
    useForm({
      onSubmit: (values) => onSubmit(values as unknown as RegisterUserParams),
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
            {/* <PasswordInput /> */}
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
              <Link href="/signin">OR LOGIN INSTEAD</Link>
            </div>
          </>
        </Form>
      }
    />
  );
}

export default SignupTemplate;
