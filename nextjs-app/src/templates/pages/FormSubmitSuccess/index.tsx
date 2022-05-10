import Button from "@ui/atoms/Button/index";
import styles from "./styles.module.css";
import cx from "classnames";

interface PropTypes {
  onClick(): void;
  title: string;
}

function FormSubmitSuccessTemplate({ title, onClick }: PropTypes) {
  return (
    <div
      className={cx(
        styles.wrapper,
        "container full text-center flex flex-col mx-auto"
      )}
    >
      <h1 className="subtitle uppercase text-3xl mb-5">{title}</h1>
      <Button onClick={onClick}>Continue</Button>
    </div>
  );
}

export default FormSubmitSuccessTemplate;
