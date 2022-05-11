import Form from "@ui/organisms/forms/Form";
import Button from "@ui/atoms/Button/index";
import PasswordInput from "@ui/organisms/forms/PasswordInput/index";
import FormPageTemplate from "../FormPage/index";
import useForm from "../../../hooks/useForm";
import { UpdatePasswordParams } from "../../../clients/HSWM/index";
import FormErrors from "../../../components/organisms/forms/FormErrors";

interface PropTypes {
  errors: string[];
  onSubmit(values: UpdatePasswordParams): void;
}
function ChangePasswordTemplate({ errors, onSubmit }: PropTypes) {
  const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
    useForm({
      onSubmit: (values) => onSubmit(values as unknown as UpdatePasswordParams),
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
            <PasswordInput
              id="password-old"
              name="password-old"
              label="Current password"
              hideRules
            />
            <PasswordInput
              id="password"
              name="password"
              label="New password"
              hideRules
            />
            <PasswordInput
              id="password-check"
              name="password-check"
              label="Retype New Password"
            />
            <FormErrors errors={errors} />
            <Button disabled={!isValid} type="submit" onClick={validateForm}>
              Save New Password
            </Button>
          </>
        </Form>
      }
    />
  );
}

export default ChangePasswordTemplate;
