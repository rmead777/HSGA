import styles from "./styles.module.css";
import cx from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type PropTypes = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button(props: PropTypes) {
  const { children, className, ...rest } = props;
  return (
    <button className={cx(className, styles.button, "mb-3 mx-auto")} {...rest}>
      <span>{children}</span>
    </button>
  );
}
