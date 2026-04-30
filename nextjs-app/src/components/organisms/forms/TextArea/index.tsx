// import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
// import styles from "./styles.module.css";
// import cx from "classnames";

// interface PropTypes
//   extends DetailedHTMLProps<
//     TextareaHTMLAttributes<HTMLTextAreaElement>,
//     HTMLTextAreaElement
//   > {
//   label: string;
// }

// function TextArea(props: PropTypes) {
//   const { label, ...rest } = props;

//   return (
//     <div className={cx(styles.wrapper, props.className)}>
//       <label htmlFor={props.name} className={cx(styles.label)}>
//         {label}
//         {props.required && `*`}
//       </label>
//       <textarea   { ...rest} className={styles.input}  />
//     </div>
//   );
// }

// export default TextArea;

import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.css";
import cx from "classnames";

interface PropTypes
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}

function TextArea(props: PropTypes) {
  const { label, ...rest } = props;

  return (
    <div className={cx(styles.wrapper, props.className)}>
      <label htmlFor={props.name} className={cx(styles.label)}>
        {label}
        {props.required && `*`}
      </label>
      <textarea  {...rest} className={styles.input}></textarea> 
    </div>
  );
}

export default TextArea;
