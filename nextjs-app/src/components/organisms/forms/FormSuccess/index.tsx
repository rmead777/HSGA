import styles from "./styles.module.css";

interface PropTypes {
 
  success: string[];
}

function FormSuccess({ success }: PropTypes) {
  return (
    <ul className={styles.success}>
      {success.map((succ, idx) => {
        return <li key={succ + idx}>{succ}</li>;
      })}
    </ul>
  );
}

export default  FormSuccess;
