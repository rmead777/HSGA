import Image from "../../../components/Image";
import styles from "./styles.module.scss";
import cx from "classnames";
import HighScoresTable from "../../../components/organisms/HighScoresTable";

const renderIframe = () => {
  return (
    <iframe
      className="_3Xz9Z ui-droppable"
      title="Embedded Content"
      name="htmlComp-iframe"
      width="100%"
      height="100%"
      data-src=""
      src="https://gamesnacks.com/embed/games/trex_v3"
    ></iframe>
  );
};

const HomePage = () => {
  return (
    <main
      className={cx(
        styles.main,
        styles["is-landing-page"],
        "container",
        "mx-auto",
        "text-center",
        "mt-20"
      )}
    >
      {/* <div className={styles.title}>SAMPLE TITLE FONT EXAMPLE</div> */}
      <Image
        className={styles.logo}
        src={"./images/logo_dropshadow.png"}
        alt="HighScoreWinsMoney Logo"
        width={120 * 3}
        height={94 * 3}
      />
      <div className="mb-10 max-w-md mx-auto">
        High Score Wins Money is a place where you can play unique games made by
        indie developers. If you get the high score on the game that day,{" "}
        <b>we will give you $100 US.</b>
      </div>
      <div className={styles.gameframe}>
        <div className={styles.game}>{renderIframe()}</div>
        <div className={styles["logo-wrapper"]}></div>
      </div>
      <button className={styles.button}>
        <span>{`Let's Go!`}</span>
      </button>
      <HighScoresTable className="container" />
    </main>
  );
};

export default HomePage;
