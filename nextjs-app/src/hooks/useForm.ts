import { FormEvent, FormEventHandler, useState } from "react";
import isEmpty from "lodash/isEmpty";

function validate(obj: Record<string, string>) {
	const emptyValue = Object.values(obj).find((value) => isEmpty(value));

	return typeof emptyValue === "undefined";
}

function getInputValuesFromEvent(event: FormEvent<HTMLFormElement>) {
	const hold = Array.from(
		event.currentTarget.getElementsByTagName("textarea")
	).map((el) => el.name);

	const otherNames = Array.from(
		event.currentTarget.getElementsByTagName("input")
	).map((el) => el.name);

	const names = hold.concat(otherNames);

	const values = names.reduce((acc, curr) => {
		return {
			...acc,
			[curr]: event.currentTarget[curr]?.value,
		};
	}, {});

	return values;
}

interface Params {
	onSubmit: (_values: Record<string, string>) => void;
}
function useForm({ onSubmit }: Params) {
	const [isValid, setValid] = useState(false);
	const [isDirty, setDirty] = useState(false);

	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault(); // don't redirect the page
		const values = getInputValuesFromEvent(event);
		onSubmit(values);
	};

	const validateForm = () => {
		setDirty(true);
		return isValid;
	};

	const handleFormChange: FormEventHandler<HTMLFormElement> = (event) => {
		const values = getInputValuesFromEvent(event);
		// console.log(values)
		const _isValid = validate(values);

		setValid(_isValid);
	};

	return {
		isValid,
		isDirty,
		validateForm,
		handleSubmit,
		handleFormChange,
	};
}

export default useForm;
