import useHighScores from "../../../hooks/useHighScores";
import cx from "classnames";
import styles from "./styles.module.scss";
import Image from "../../atoms/Image";
import RoutesService from "../../../services/RoutesService";
import { FirstHighScore, ScoreRecord } from "../../../clients/HSWM/types";
import FormErrors from "../forms/FormErrors";
import client from "src/clients/HSWM";
import { useEffect, useState } from "react";

function createTableRow(score: ScoreRecord, idx: number) {
  return (
    <tr key={`${idx}${score}`}>
      <td>{idx + 1}. </td>
      <td>{score.username}</td>
      <td>{score.score}</td>
    </tr>
  );
}
function createTableRow1(score: ScoreRecord) {
  return (
    <tr className={styles.allStars} key={`${score}`}>
      <td> </td>
      <td>{score.username}</td>
      <td>{score.score}</td>
    </tr>
  );
}

interface PropTypes {
  className?: string;
}

export default function Leaderboard({ className }: PropTypes) {
  const { data, isLoading, errors } = useHighScores(1);
  const [allStars, setAllStars] = useState<ScoreRecord[]>([])


  useEffect(() => {
    client
    .fetchFirstHighScore(1).then(res=>{
      const {data} = res
      if(res.data){

        setAllStars(res.data); 
      }
// console.log(res);
// 
    })
  
   
  }, [])
  
  return (
    <div
      className={cx(
        className,
        styles["table-wrapper"],
        "lg:max-w-3xl mx-auto pt-20"
      )}
    >
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
          <div className={styles.allStars } >ALL STARS</div>
        <table className={cx(styles.table, "container mb-5")}>
          {/* <thead>
          <tr>
          <th>Rank</th>
          <th className={styles["col-name"]}>Name</th>
          <th>Score</th>
          </tr>
        </thead> */}
          <tbody>
            {allStars.map(createTableRow1)}
          </tbody>
          <div className={cx("w-100", styles.mt_5)}>

        <hr className={styles.borderStyle} />
          </div>
          <tbody>{data.map(createTableRow)}</tbody>
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
