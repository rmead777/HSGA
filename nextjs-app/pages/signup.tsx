import type { NextPage } from "next";
import { useState } from "react";
import SignupTemplate from "@ui/templates/pages/Signup";
import { PAYMENT_PREFERENCES_PATHNAME } from "./payment-preferences";
import client, { RegisterUserParams } from "../src/clients/HSWM/index";
import DefaultPage from "../src/Default";

export const PATH = "signup";

function goNext() {
	window.location.href = PAYMENT_PREFERENCES_PATHNAME;
}

const Signup: NextPage = () => {
	const [errors, setErrors] = useState<string[]>([]);

	function onSubmit(values: RegisterUserParams) {
		client
			.registerUser(values)
			.then((res) => {
				if (res.errors?.length) {
					setErrors(res.errors);
				} else {
					goNext();
				}
			})
			.catch((err) => {
				console.error(err);
				setErrors(["There was an error creating your account."]);
			});
	}

	return (
		<DefaultPage
			body={<SignupTemplate onSubmit={onSubmit} errors={errors} />}
		/>
	);
};

export default Signup;
