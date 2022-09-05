import useHighScores from "../../../hooks/useHighScores";
import cx from "classnames";
import styles from "./styles.module.scss";
import Image from "../../atoms/Image";
import RoutesService from "../../../services/RoutesService";
import { FirstHighScore, GameInfo, ScoreRecord } from "../../../clients/HSWM/types";
import $ from 'jquery';
import FormErrors from "../forms/FormErrors";
import client from "src/clients/HSWM";
import { useEffect, useState } from "react";
import CustomReactSelectDropDown from "../../CustomSelectDropDown/index";

function createTableRow(score: ScoreRecord, idx: number) {
  return (
    <tr key={`${idx}${score}`}>
      <td>{idx + 1}. </td>
      <td>{score.username}</td>
      <td>{score.score}</td>
    </tr>
  );
}
function createTableRow1(score: ScoreRecord, idx: number) {
  return (
    <tr className={cx((idx == 0) ? "neonText textyellow" : styles.allStars)} key={`${score}`}>
      <td>{idx + 1}. </td>
      <td>{score.username.indexOf("* ") != -1 ? <span style={{ 'color': '#05bed6' }}>* </span> : ''} {score.username.indexOf("* ") != -1 ? score.username.substr(2) : score.username}</td>
      <td>{score.score}</td>
    </tr>
  );
}

interface PropTypes {
  className?: string;
  gameInfo?: GameInfo;
  id?: string
}

export default function Leaderboard({ className, gameInfo }: PropTypes) {
  // const {id} = gameInfo || ""
  const { data, isLoading, errors } = useHighScores({ gameInfo });
  const [allStars, setAllStars] = useState<ScoreRecord[]>([])
  useEffect(() => {
    // setAllStars([
    //   { username: 'Arslan', score: 1234 },
    //   { username: 'Arslan', score: 1234 },
    //   { username: 'Arslan', score: 1234 },
    //   { username: 'Arslan', score: 1234 },
    //   { username: 'Arslan', score: 1234 },
    // ])
    setInterval(function () {
      // toggle the class every five second
      $('.neonText').toggleClass('textwhite');
      $('.neonText').toggleClass('textyellow');


    }, 1000);
  }, [])

  useEffect(() => {
    gameInfo?.id && client
      .fetchFirstHighScore(gameInfo?.id || "").then(res => {
        const { data } = res
        if (res.data) {

          setAllStars(res.data);
        }
        // console.log(res , 'my api data <-------');
        // 
      })


  }, [gameInfo])

  return (
    <div
      className={cx(
        className,
        styles["table-wrapper"],
        "lg:max-w-3xl mx-auto pt-20"
      )}
    >
      {/* <select name="" id="" className={styles["select-score"]}>
        <option value="1" className={styles["select-score-option"]}>aaa</option>
        <option value="1" className={styles["select-score-option"]}>aaa</option>
        <option value="1" className={styles["select-score-option"]}>aaa</option>
        <option value="1" className={styles["select-score-option"]}>aaa</option>
        <option value="1" className={styles["select-score-option"]}>aaa</option>
        <option value="1" className={styles["select-score-option"]}>aaa</option>
      </select> */}
      <CustomReactSelectDropDown />
      <Image
        className={styles.logo}
        // src={RoutesService.getImagePath("HS_reverse_horiz.png")}
        src={"https://hswm.imgix.net/images/HS_reverse_horiz.png?auto=format&auto=compress"}
        alt="HighScoreWinsMoney Logo"
        width={120}
        height={94}
      />
      {!isLoading ? (
        <>
          <div className={styles.allStars} >ALL STARS</div>
          <table className={cx(styles.table, "container mb-5")}>
            <thead>
              <tr>
                <th>Rank</th>
                <th className={styles["col-name"]}>Name</th>
                <th style={{ textAlign: 'right' }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {allStars.map(createTableRow1)}
            </tbody>
            <div className={cx("w-100", styles.mt_5)}>

              <hr className={styles.borderStyle} />
            </div>
          </table>
          <div className={styles.highScoreTitle} >Daily High Scores</div>
          <table className={cx(styles.table, "container mb-5")}>

            <tbody>
              {/* {[{ username: 'Arslan', score: 1234 }, { username: 'Arslan', score: 1234 }].map(createTableRow)} */}
            </tbody>
            {/* <tbody>{data.map(createTableRow)}</tbody> */}
          </table>
        </>
      )
        : (
          <p className="mt-5">Loading...</p>
        )}

      <FormErrors errors={errors} />
    </div>
  );
}
