import cx from "classnames";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";

type PropTypes = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

function Form(props: PropTypes) {
  const { children, ...rest } = props;

  return (
    <form
      {...rest}
      className={cx(
        "flex flex-col space-y-5 max-w-md w-full mx-auto text-black",
        props.className
      )}
    >
      {children}
    </form>
  );
}

export default Form;
