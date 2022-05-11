import Form from "@ui/organisms/forms/Form";
import Button from "@ui/atoms/Button/index";
import FormPageTemplate from "../FormPage/index";
import useForm from "../../../hooks/useForm";
import { ResetPasswordParams } from "../../../clients/HSWM/index";
import FormErrors from "../../../components/organisms/forms/FormErrors";
import TextInput from "../../../components/organisms/forms/TextInput";

interface PropTypes {
  errors: string[];
  onSubmit(values: ResetPasswordParams): void;
}
function ResetPasswordTemplate({ errors, onSubmit }: PropTypes) {
  const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
    useForm({
      onSubmit: (values) => onSubmit(values as unknown as ResetPasswordParams),
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
              type="email"
              name="email"
              required
              id="email"
              aria-required="true"
              label="Email"
            />
            <FormErrors errors={errors} />

            <div className="text-left mb-4">
              <p className="mb-5">
                <b>{`Clicking the button below will reset your password.`}</b>
                <br />
                {`Please check your email and follow the instructions for signing in again.`}
              </p>
            </div>

            <Button disabled={!isValid} type="submit" onClick={validateForm}>
              Reset Password
            </Button>
          </>
        </Form>
      }
    />
  );
}

export default ResetPasswordTemplate;
