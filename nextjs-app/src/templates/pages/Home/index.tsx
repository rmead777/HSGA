import cx from "classnames";
import styles from "./styles.module.css";
import fonts from "../../../../styles/fonts.module.css";
import Leaderboard from "../../../components/organisms/Leaderboard";
import Link from "../../../components/atoms/Link";
import Button from "../../../components/atoms/Button";
import FeaturedImage from "../../../components/organisms/FeaturedImage";
import Countdown from "../../../components/organisms/Countdown";
import { GameInfo, ScoreRecord } from "../../../clients/HSWM/types";
import CurrentHighScoreBlock from "../../../components/organisms/CurrentHighScoreBlock";

type PropTypes = {
  featuredGameInfo?: GameInfo;
  currentUserInfo?: ScoreRecord & { rank: number };
};
const HomePage = (props: PropTypes) => {
  const { featuredGameInfo, currentUserInfo } = props;

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
      <FeaturedImage gameInfo={featuredGameInfo} />
      <div className="mb-10 max-w-md mx-auto">
        High Score Wins Money is a place where you can play unique games made by
        indie developers. If you get the high score on the game that day,{" "}
        <b className="font-black">we will give you $100 US.</b>
      </div>
      <div className="hidden">
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
      <Countdown />
      {currentUserInfo && <CurrentHighScoreBlock {...currentUserInfo} />}
      <Leaderboard className="container" />
    </main>
  );
};

export default HomePage;
