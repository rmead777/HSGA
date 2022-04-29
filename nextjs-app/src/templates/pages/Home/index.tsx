import Image from "../../../components/atoms/Image";
import cx from "classnames";
import styles from "./styles.module.scss";
import fonts from "../../../../styles/fonts.module.css";
import HighScoresTable from "../../../components/organisms/HighScoresTable";
import Link from "../../../components/atoms/Link";
import Button from "../../../components/atoms/Button";
import RoutesService from "../../../services/RoutesService";

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

function scrollToGame() {
  const element = document.getElementById("game");
  element?.scrollIntoView({ behavior: "smooth" });
}

const HomePage = () => {
  return (
    <main
      className={cx(
        styles["is-landing-page"],
        "container",
        "mx-auto",
        "text-center",
        "mt-20"
      )}
    >
      <Image
        className={styles.logo}
        src={RoutesService.createAssetsPath("/images/HS_reverse_portrait.png")}
        alt="HighScoreWinsMoney Logo"
        width={120 * 3}
        height={94 * 3}
      />
      <div className="mb-10 max-w-md mx-auto">
        High Score Wins Money is a place where you can play unique games made by
        indie developers. If you get the high score on the game that day,{" "}
        <b className="font-black">we will give you $100 US.</b>
      </div>
      <div className="flex flex-col">
        <Button
          className={cx(styles.button, "mb-3 mx-auto")}
          onClick={scrollToGame}
        >
          <span>{`Let's Go!`}</span>
        </Button>
        <div
          className={cx(
            fonts.button,
            "text-primary-2 mb-5 text-lg font-size-3"
          )}
        >
          <Link href="/login" as="/login">
            Login
          </Link>
          {` /  `}
          <Link href="./signup" as="/signup.html">
            Signup
          </Link>
        </div>
      </div>
      <div id="game" className={styles.gameframe}>
        <div className={styles.game}>{renderIframe()}</div>
      </div>
      <HighScoresTable className="container" />
    </main>
  );
};

export default HomePage;
