import cx from "classnames";
import styles from "./styles.module.css";
import Leaderstyles from "../../../components/organisms/Leaderboard/styles.module.scss";
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
import {jss_msg} from "../../../clients/JSServe/helper.js";
import MultiCarousel from '../../../components/MultiCarousel';
import { useRouter } from 'next/router'
type PropTypes = {
  featuredGameInfo?: GameInfo;
  currentUserInfo?: UserInfo;
};
const HomePage = (props: PropTypes) => {
  const router = useRouter()
  const { featuredGameInfo, currentUserInfo } = props;

  const [count, setCount] = useState<ScoreRecord[]>([])

  // const [allStars, setAllStars] = useState<ScoreRecord[]>([])

  useEffect(() => {
    featuredGameInfo?.id && client.getPlayersCount(featuredGameInfo?.id).then(res => {
      //  console.log(res)
      const { data } = res
      if (res.data) {

        setCount(res.data);
      }
      // console.log(res);
      // 
    })


  }, [featuredGameInfo])

  const [showFeaturedImage, setShowFeaturedImage] = useState(true);

  const featuredImageCallback = (callbackState: boolean) => {
    setShowFeaturedImage(callbackState);
  }

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

      {(() => {
        if(jss_msg("[[main_page_message]]", "main_page_message") != null ){
          let message = "[[main_page_message]]";
            return (
                <div className="mb-10 max-w-md mx-auto"
                     style={{
                         borderStyle: "solid",
                         borderWidth: "3px",
                         borderColor: "#09bfd5",
                     }}
                >{message}
                </div>
            )
        }
      })()}
      {(() => {
        const message = "[[all_page_message]]";
        if (message != "[[" + "all_page_message" + "]]") {
          return (
            <div className="mb-10 max-w-md mx-auto"
              style={{
                borderStyle: "solid",
                borderWidth: "3px",
                borderColor: "#09bfd5",
              }}
            >{message}
            </div>
          )
        }
      })()}


      {
        /* <div style={{height: "95px", marginBottom: "18px"}}><a href="https://itch.io/jam/high-score-wins-money-jam"><img src="https://hswm.imgix.net/images/gamejam.png?auto=format&auto=compress?auto=format&auto=compress" style={{marginLeft: 'auto', marginRight: 'auto'}} width="550px" /></a></div> */
      }
      <div className={styles.upperGame}>
        <a href={`${router.basePath + featuredGameInfo?.uri}`} className={styles.playersCount} >FULL SCREEN</a>
        <div className={styles.playersCount} >{`${count} Players`}</div>
      </div>

      <FeaturedImage gameInfo={featuredGameInfo} parentCallback={featuredImageCallback} />

      <div className={cx(showFeaturedImage && styles.gameDescriptionBefore, styles.gameDescription)} style={{ width: '800px' }}>
        {featuredGameInfo?.description}
      </div>



      {(() => {
        if (featuredGameInfo?.prize != null) {
          console.log("Prize is ", featuredGameInfo?.prize);
          return (
            <div className="mb-10 max-w-md mx-auto" style={{ fontSize: '2em', marginBottom: '0em', marginTop: '1.5em' }}>
              <b style={{ fontWeight: '501', color: '#05bed6' }}>Prize:</b> <span style={{ fontWeight: '501', color: 'white' }}>{featuredGameInfo?.prize}</span><br />
            </div>
          )
        }
      })()}

      {/*<div className="mb-10 max-w-md mx-auto">
          {featuredGameInfo?.description}High Score Wins Money is a place where you can play unique games made by
        indie developers. If you get the high score on the game that day,{" "}
        <b className="font-black">we will give you $100 US.</b>
      </div>*/}

      <div className="mb-7" style={{ marginTop: '3.5em', marginBottom: '4em' }}>
        <Countdown />
      </div>
      <div className={cx(
        "container",
        Leaderstyles["table-wrapper"],
        "lg:max-w-3xl mx-auto pt-20"
      )}
        style={{
          margin: '0',
          padding: '0',
          marginBottom: '4rem',
        }}
      ></div>
      {/* HERE will be Carousel */}
      <div className="carouselContainer">
        <p className="moreGames" >
          <Link href="/allgames">MORE GAMES</Link>
        </p>
        <MultiCarousel />
      </div>

      {/* {currentUserInfo && (
        <CurrentHighScoreBlock {...currentUserInfo.user_rank} />
      )} */}
      <Leaderboard gameInfo={featuredGameInfo} className="container" />
    </main>
  );
};

export default HomePage;
