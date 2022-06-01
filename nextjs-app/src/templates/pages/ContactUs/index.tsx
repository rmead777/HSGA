import cx from "classnames";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import TextArea from "@ui/organisms/forms/TextArea";
import Button from "@ui/atoms/Button/index";
import FormPageTemplate from "../FormPage/index";
import PasswordInput from "@ui/organisms/forms/PasswordInput/index";
import FormErrors from "@ui/organisms/forms/FormErrors";
import FormSuccess from "@ui/organisms/forms/FormSuccess";
import useForm from "../../../hooks/useForm";
import { ContactUsParams } from "../../../clients/HSWM";

interface PropTypes {
	errors: string[];
	success: string[];
	onSubmit(values: ContactUsParams): void;
}

function ContactUsTemplate({ errors, onSubmit, success }: PropTypes) {
	const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
		useForm({
			onSubmit: (values) =>
				onSubmit(values as unknown as ContactUsParams),
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
							maxLength={255}
							label="Email"
						/>
						<TextInput
							type="text"
							name="subject"
							required
							id="subject"
							aria-required="true"
							maxLength={255}
							label="Subject"
						/>
						<TextArea
							name="message"
							required
							id="message"
							aria-required="true"
							label="Message"
						/>
						<FormErrors errors={errors} />
						<FormSuccess success={success} />
						<Button
							disabled={!isValid}
							type="submit"
							onClick={validateForm}
						>
							Submit
						</Button>
						<div
							className={cx(
								fonts.button,
								"text-primary-1 mb-5 text-lg font-size-3"
							)}
						></div>
					</>
				</Form>
			}
		/>
	);
}

export default ContactUsTemplate;
