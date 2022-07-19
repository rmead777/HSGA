import type { NextPage } from "next";
import { useState } from "react";
import ContactUsTemplate from "@ui/templates/pages/ContactUs";
import client, { ContactUsParams } from "../src/clients/HSWM/index";
import DefaultPage from "../src/Default";
import { useRouter } from "next/router";

export const PATH = "contactus";



const ContactUs: NextPage = () => {
	const router = useRouter();
	const [errors, setErrors] = useState<string[]>([]);
	const [success, setSuccess] = useState<string[]>([]);

	function onSubmit(values: ContactUsParams) {
		client
			.contactUs(values)
			.then((res) => {
				//  console.log(res);

				if (res.errors?.length) {
					setErrors(res.errors);
				} else {
					// goNext();
					setSuccess(["Your message has been sent"]);
					setTimeout(() => {
						router.replace("/");
					}, 4000);
				}
			})
			.catch((err) => {
				console.error(err);
				setErrors([
					"There was an error submitting your request, please check your internet connection.",
				]);
			});
	}

	return (
		<DefaultPage
			body={
				<ContactUsTemplate
					onSubmit={onSubmit}
					errors={errors}
					success={success}
				/>
			}
		/>
	);
};

export default ContactUs;
