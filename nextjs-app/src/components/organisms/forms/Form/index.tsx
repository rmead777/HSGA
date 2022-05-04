import cx from "classnames";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface PropTypes
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  showInvalidFields?: boolean;
}

function Form(props: PropTypes) {
  const { children, showInvalidFields, ...rest } = props;

  return (
    <form
      {...rest}
      className={cx(
        showInvalidFields && styles["show-invalid"],
        "flex flex-col space-y-5 max-w-md w-full mx-auto",
        props.className
      )}
    >
      {children}
    </form>
  );
}

export default Form;
