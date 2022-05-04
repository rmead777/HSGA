import styles from "./styles.module.css";

interface PropTypes {
  errors: string[];
}

function FormErrors({ errors }: PropTypes) {
  return (
    <ul className={styles.errors}>
      {errors.map((error, idx) => {
        return <li key={error + idx}>{error}</li>;
      })}
    </ul>
  );
}

export default FormErrors;
