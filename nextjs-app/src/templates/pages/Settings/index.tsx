import Link from "@ui/atoms/Link";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import FormPageTemplate from "../FormPage/index";
import useForm from "../../../hooks/useForm";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";

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
            <Link
              className={cx(fonts.button, "font-bold text-lg uppercase")}
              href="/change-password"
            >{`> Change password ?`}</Link>
            <Button disabled={!isValid} type="submit" onClick={validateForm}>
              Save Changes
            </Button>
          </>
        </Form>
      }
    />
  );
}

export default SettingsPageTemplate;
