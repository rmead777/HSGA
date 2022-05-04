import cx from "classnames";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import FormPageTemplate from "../FormPage/index";
import useForm from "../../../hooks/useForm";

function PaymentPreferenceTemplate() {
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
          onChange={handleFormChange}
          acceptCharset="utf-8"
          showInvalidFields={isDirty}
        >
          <TextInput
            type="text"
            name="paypal"
            required
            id="username"
            aria-required="true"
            maxLength={255}
            label="PayPal Email Address"
          />

          <div className="text-left mb-4">
            <b>Why do we need this?</b>
            <p className="mb-5">
              We’ll use PayPal to pay you when you win! But we need to know
              where to send the money.
            </p>
          </div>

          <div>
            <Button disabled={!isValid} type="submit" onClick={validateForm}>
              Save
            </Button>

            <div
              className={cx(
                fonts.button,
                "text-primary-1 mb-2 text-lg font-size-3"
              )}
            >
              <Link href="/">SKIP</Link>
            </div>
          </div>
        </Form>
      }
    />
  );
}

export default PaymentPreferenceTemplate;
