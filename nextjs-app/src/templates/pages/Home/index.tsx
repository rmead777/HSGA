import Image from "../../../components/Image";
import styles from "./styles.module.scss";
import cx from "classnames";

const HomePage = () => {
  return (
    <main className={cx(styles.main, "container mx-auto flex")}>
      <Image
        className="mx-auto"
        src={"./images/HS_reverse_portrait.png"}
        alt="HighScoreWinsMoney Logo"
        width={120 * 2}
        height={94 * 2}
      />
    </main>
  );
};

export default HomePage;
