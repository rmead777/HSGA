import cx from "classnames";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import FormPageTemplate from "../FormPage/index";
import useForm from "../../../hooks/useForm";
import { UpdatePaypalParams } from "../../../clients/HSWM";
import FormErrors from "../../../components/organisms/forms/FormErrors";
import { useState } from "react";

interface PropTypes {
  errors: string[];
  onSubmit(values: UpdatePaypalParams): Promise<void>;
}
function PaymentPreferenceTemplate({ onSubmit, errors }: PropTypes) {
  const [isSubmitting, setSubmitting] = useState(false);

  const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
    useForm({
      onSubmit: async (values) => {
        setSubmitting(true);
        await onSubmit(values as unknown as UpdatePaypalParams);
        setSubmitting(false);
      },
    });

  console.log(isDirty);

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
            name="paypalemail"
            required
            id="paypalemail"
            aria-required="true"
            maxLength={255}
            label="PayPal Email Address"
          />

          <FormErrors errors={errors} />

          <div className="text-left mb-4">
            <b>Why do we need this?</b>
            <p className="mb-5">
              We’ll use PayPal to pay you when you win! But we need to know
              where to send the money.
            </p>
          </div>

          <div>
            <Button
              disabled={!isValid || isSubmitting}
              type="submit"
              onClick={validateForm}
            >
              {isSubmitting ? "Submitting.." : "Save"}
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
