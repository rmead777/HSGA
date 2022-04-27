import styles from "./styles.module.scss";
import cx from "classnames";

type PropTypes = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button(props: PropTypes) {
  return (
    <button
      className={cx(props.className, styles.button, "mb-3 mx-auto")}
      {...props}
    >
      {props.children}
    </button>
  );
}
