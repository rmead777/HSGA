import cx from "classnames";
import styles from "./styles.module.css";
import Leaderboard from "../../../components/organisms/Leaderboard";

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

const GamePageTemplate = () => {
  return (
    <main
      className={cx(
        styles.main,
        styles["is-landing-page"],
        "container",
        "mx-auto",
        "text-center",
        "max-w-7xl"
      )}
    >
      <div id="game" className={styles.gameframe}>
        <div className={styles.game}>{renderIframe()}</div>
      </div>
      <Leaderboard />
    </main>
  );
};

export default GamePageTemplate;
