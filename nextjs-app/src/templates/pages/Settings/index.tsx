import cx from "classnames";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import FormPageTemplate from "../FormPage/index";
import PasswordInput from "../../../components/organisms/forms/PasswordInput/index";
// import FormErrors from "../../../components/organisms/forms/FormErrors";
import useForm from "../../../hooks/useForm";

function SettingsPageTemplate() {
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
            <TextInput
              type="email"
              name="email"
              id="email"
              aria-required="true"
              maxLength={255}
              label="Email"
            />
            <TextInput
              type="email"
              name="paypal"
              id="paypal"
              aria-required="true"
              maxLength={255}
              label="PayPal"
            />
            <PasswordInput label="Current password" hideRules />
            {/* TODO: Need to make one of these required */}
            <PasswordInput labal="New password" />
            {/* <FormErrors errors={errors} /> */}
            <Button disabled={!isValid} type="submit" onClick={validateForm}>
              Register
            </Button>
          </>
        </Form>
      }
    />
  );
}

export default SettingsPageTemplate;
