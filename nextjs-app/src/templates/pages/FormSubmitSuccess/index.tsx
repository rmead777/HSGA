import Button from "@ui/atoms/Button/index";
import styles from "./styles.module.css";
import cx from "classnames";
import { ReactNode } from "react";

interface PropTypes {
  onClick(): void;
  title: string | ReactNode;
}

function FormSubmitSuccessTemplate({ title, onClick }: PropTypes) {
  const message =
    typeof title === "string" ? (
      <h1 className="subtitle uppercase text-3xl mb-5">{title}</h1>
    ) : (
      title
    );

  return (
    <div
      className={cx(
        styles.wrapper,
        "container full text-center flex flex-col mx-auto"
      )}
    >
      {message}
      <Button onClick={onClick}>Continue</Button>
    </div>
  );
}

export default FormSubmitSuccessTemplate;
