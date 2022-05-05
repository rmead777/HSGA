import Image from "../../../components/atoms/Image";
import cx from "classnames";
import styles from "./styles.module.css";
import fonts from "../../../../styles/fonts.module.css";
import Leaderboard from "../../../components/organisms/Leaderboard";
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

const HomePage = () => {
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
      <div className={styles["logo-wrapper"]}>
        <Link className="inline-block" href="/">
          <Image
            className={styles.logo}
            src={RoutesService.getImagePath("HS_reverse_horiz.png")}
            alt="HighScoreWinsMoney Logo"
            width={120}
            height={94}
            zoom={3}
          />
        </Link>
      </div>
      <div id="game" className={styles.gameframe}>
        <div className={styles.game}>{renderIframe()}</div>
      </div>
      <div className="mb-10 max-w-md mx-auto">
        High Score Wins Money is a place where you can play unique games made by
        indie developers. If you get the high score on the game that day,{" "}
        <b className="font-black">we will give you $100 US.</b>
      </div>
      <div>
        <Link
          className="inline-block"
          href={{
            pathname: "/gamepage/[pid]",
            query: { pid: 1 },
          }}
        >
          <Button
            className={cx(styles.button, "mb-3 mx-auto")}
            // onClick={scrollToGame}
          >
            <span>{`Let's Go!`}</span>
          </Button>
        </Link>
        <div
          className={cx(
            fonts.button,
            "text-primary-2 mb-5 text-lg font-size-3"
          )}
        >
          <Link href="/signin">Login</Link>
          {` /  `}
          <Link href="/signup">Signup</Link>
        </div>
      </div>
      <Leaderboard className="container" />
    </main>
  );
};

export default HomePage;
