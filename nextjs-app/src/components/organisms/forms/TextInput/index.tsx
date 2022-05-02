import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";
import cx from "classnames";

interface PropTypes
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

function TextInput(props: PropTypes) {
  const { id, label, ...rest } = props;

  return (
    <div className={cx(styles.wrapper, props.className)}>
      <label htmlFor={id} className={cx(styles.label)}>
        {label}
        {props.required && `*`}
      </label>
      <input {...rest} className={styles.input} />
    </div>
  );
}

export default TextInput;
