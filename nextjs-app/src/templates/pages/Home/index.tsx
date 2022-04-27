import Image from "../../../components/Image";
import styles from "./styles.module.scss";
import cx from "classnames";

const HomePage = () => {
  return (
    <main
      className={cx(
        styles.main,
        "container",
        "mx-auto",
        "text-center",
        "mt-20"
      )}
    >
      <div className={styles.title}>TITLE FONT EXAMPLE</div>
      <Image
        className="mx-auto"
        src={"./images/HS_reverse_portrait.png"}
        alt="HighScoreWinsMoney Logo"
        width={120 * 2}
        height={94 * 2}
      />
      <div className="mb-10 max-w-md mx-auto">
        High Score Wins Money is a place where you can play unique games made by
        indie developers. If you get the high score on the game that day,{" "}
        <b>we will give you $100 US.</b>
      </div>
      <button className={styles.button}>
        <span>{`Let's Go!`}</span>
      </button>
    </main>
  );
};

export default HomePage;
