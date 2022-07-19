import cx from "classnames";
import styles from "./styles.module.css";
import fonts from "../../../../styles/fonts.module.css";
import Leaderboard from "../../../components/organisms/Leaderboard";
import Link from "../../../components/atoms/Link";
import Button from "../../../components/atoms/Button";
import FeaturedImage from "../../../components/organisms/FeaturedImage";
import { GameInfo, ScoreRecord, UserInfo } from "../../../clients/HSWM/types";
import Countdown from "../../../components/organisms/Countdown";
import CurrentHighScoreBlock from "../../../components/organisms/CurrentHighScoreBlock";
import { useEffect, useState } from "react";
import client from "src/clients/HSWM";
import MultiCarousel from '../../../components/MultiCarousel';
import { useRouter } from 'next/router'
type PropTypes = {
  featuredGameInfo?: GameInfo ;
  currentUserInfo?: UserInfo;
};
const HomePage = (props: PropTypes) => {
  const router = useRouter()
  const { featuredGameInfo, currentUserInfo } = props;
  
    const [count, setCount] = useState<ScoreRecord[]>([])

 // const [allStars, setAllStars] = useState<ScoreRecord[]>([])

  useEffect(() => {
   featuredGameInfo?.id && client.getPlayersCount(featuredGameInfo?.id ).then(res=>{
    //  console.log(res)
      const {data} = res
      if(res.data){

        setCount(res.data); 
      }
// console.log(res);
// 
    })
  
   
  }, [featuredGameInfo])
  console.log("Game info From Home Index", featuredGameInfo)
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
      <div className={styles.upperGame}>
      <a href={`${router.basePath + featuredGameInfo?.uri}`} className={styles.playersCount } >FULL SCREEN</a>
      <div className={styles.playersCount } >{`${count} Players`}</div>
      </div>

      <FeaturedImage gameInfo={featuredGameInfo} />

      {/* HERE will be Carousel */}
      <div className="carouselContainer">

      <p className="moreGames" >
          <Link href="/allgames">MORE GAMES</Link>
        </p>
<MultiCarousel  />
      </div>


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
      <div className="mb-7">
        <Countdown />
      </div>
      {/* {currentUserInfo && (
        <CurrentHighScoreBlock {...currentUserInfo.user_rank} />
      )} */}
      <Leaderboard gameInfo={featuredGameInfo} className="container" />
    </main>
  );
};

export default HomePage;
