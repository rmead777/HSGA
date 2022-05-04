import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";
import TextInput from "@ui/organisms/forms/TextInput";

interface PropTypes
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

function PasswordInput(props: PropTypes) {
  return (
    <>
      <TextInput
        type="password"
        name="password"
        required
        id="password"
        aria-required="true"
        label="Password"
        minLength={8}
        {...props}
      />
      <ul className={styles.rules}>
        <li>Must have 8 characters minimum</li>
      </ul>
    </>
  );
}

export default PasswordInput;
