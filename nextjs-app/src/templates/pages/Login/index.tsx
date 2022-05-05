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
            type="username"
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
          <FormErrors errors={errors} />
          <Button disabled={!isValid} type="submit" onClick={validateForm}>
            Login
          </Button>
          <div
            className={cx(
              fonts.button,
              "text-primary-1 mb-5 text-lg font-size-3"
            )}
          >
            <Link href="/signup" as="/signup.html">
              NOT REGISTERED? SIGNUP NOW
            </Link>
          </div>
        </Form>
      }
    />
  );
}

export default LoginTemplate;
