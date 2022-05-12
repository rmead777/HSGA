import cx from "classnames";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import FormPageTemplate from "../FormPage/index";
import useForm from "../../../hooks/useForm";
import { LoginUserParams } from "../../../clients/HSWM";
import FormErrors from "../../../components/organisms/forms/FormErrors";
import PasswordInput from "../../../components/organisms/forms/PasswordInput";

interface PropTypes {
  errors: string[];
  onSubmit(values: LoginUserParams): void;
}

function LoginTemplate({ onSubmit, errors }: PropTypes) {
  const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
    useForm({
      onSubmit: (values) => onSubmit(values as unknown as LoginUserParams),
    });

  return (
    <FormPageTemplate
      form={
        <Form
          onSubmit={handleSubmit}
          onChange={handleFormChange}
          acceptCharset="utf-8"
          showInvalidFields={isDirty}
        >
          <TextInput
            type="email"
            name="email"
            required
            id="email"
            aria-required="true"
            label="Email"
          />
          <PasswordInput />
          <FormErrors errors={errors} />
          <Button disabled={!isValid} type="submit" onClick={validateForm}>
            Login
          </Button>
          <div
            className={cx(
              fonts.button,
              "mb-5 text-lg font-size-3 flex-col flex"
            )}
          >
            <Link className="text-secondary-1" href="/signup" as="/signup.html">
              NOT REGISTERED? SIGNUP NOW
            </Link>
            <Link href="/reset-password" as="/signup.html">
              {`> RESET YOUR PASSWORD`}
            </Link>
          </div>
        </Form>
      }
    />
  );
}

export default LoginTemplate;
