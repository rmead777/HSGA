import Form from "@ui/organisms/forms/Form";
import Button from "@ui/atoms/Button/index";
import PasswordInput from "@ui/organisms/forms/PasswordInput/index";
import FormPageTemplate from "../FormPage/index";
import useForm from "../../../hooks/useForm";

function ChangePasswordTemplate() {
  const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
    useForm({
      onSubmit: (values) => {
        console.error("Not implemented yet", {
          values,
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
            <PasswordInput
              id="old-password"
              name="old-password"
              label="Current password"
              hideRules
            />
            <PasswordInput
              id="new-password"
              name="new-password"
              label="New password"
            />
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
