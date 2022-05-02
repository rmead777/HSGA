import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";
import TextInput from "@ui/organisms/forms/TextInput";

interface PropTypes
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  hideRules?: boolean;
}

function PasswordInput(props: PropTypes) {
  const { hideRules, label = "Password" } = props;
  return (
    <>
      <TextInput
        type="password"
        name="password"
        required
        id="password"
        aria-required="true"
        label={label}
        minLength={8}
        {...props}
      />
      {!hideRules && (
        <ul className={styles.rules}>
          <li>Must have 8 characters minimum</li>
        </ul>
      )}
    </>
  );
}

export default PasswordInput;
