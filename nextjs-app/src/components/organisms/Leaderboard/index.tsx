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
import  {jss_msg} from "../../../clients/JSServe/helper.js"

function createTableRow(score: ScoreRecord, idx: number) {
  return (
    <tr key={`${idx}${score}`}>
      <td>{idx + 1}. </td>
      <td className="sm:pr-[10px] pr-3">{score.username}</td>
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
    const [group, setGroup] = useState('main');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { data, isLoading, errors } = useHighScores({ gameInfo }, group);
  const [allStars, setAllStars] = useState<ScoreRecord[]>([{"username":"[[champion-high-scores]]","score":0}]);
  const [options, setOptions] = useState([]);

  const changeGroupCallback = (groupVal: string) => {
      setGroup(groupVal);

      gameInfo?.id && client
          .fetchFirstHighScore(gameInfo?.id || "", groupVal).then(res => {
              const { data } = res
              if (res.data) {

                  setAllStars(res.data);
              }
              // console.log(res , 'my api data <-------');
              //
          });
  }

    const menuIsOpenCallback = (menuVal: boolean) => {
      setMenuOpen(menuVal);
    }

  useEffect(() => {
    setInterval(function () {
      // toggle the class every five second
      $('.neonText').toggleClass('textwhite');
      $('.neonText').toggleClass('textyellow');


    }, 1000);
  }, [])

  useEffect(() => {
    gameInfo?.id && client
      .fetchFirstHighScore(gameInfo?.id || "", group).then(res => {
        const { data } = res
        if (res.data) {

          setAllStars(res.data);
        }
        // console.log(res , 'my api data <-------');
        // 
      })


  }, [gameInfo]);

    useEffect(() => {
        client
            .getSquads()
            .then((result) => {
                if (result.data?.length) {
                    const { data } = result;
                    setOptions(data);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

  return (
    <div
      className={cx(
        className,
        styles["table-wrapper"],
        "lg:max-w-3xl mx-auto pt-20 !px-4 !md:px-8"
      )}
    >
        {(() => {
            if(Array.isArray(options) && options.length != 0 ){
                return (
                    <CustomReactSelectDropDown parentCallback={changeGroupCallback} menuIsOpenCallback={menuIsOpenCallback} options={options}/>
                )
            }
        })()}


      <Image
        className={styles.logo}
        // src={RoutesService.getImagePath("HS_reverse_horiz.png")}
        src={"https://hswm.imgix.net/images/HS_reverse_horiz.png?auto=format&auto=compress"}
        alt="HighScoreGameArcade Logo"
        width={120}
        height={94}
      />
      {!isLoading ? (
        <>
          <div className={styles.allStars} >ALL STARS</div>
          <table className={cx(styles.table, "container mb-5")}>
            {/* <thead>
              <tr>
                <th>Rank</th>
                <th className={styles["col-name"]}>Name</th>
                <th style={{ textAlign: 'right' }}>Score</th>
              </tr>
            </thead> */}
            <tbody>
              {allStars.map(createTableRow1)}
            </tbody>
            <div className={cx("w-100", styles.mt_5)}>

              <hr className={styles.borderStyle} />
            </div>
          </table>
          <div className={styles.highScoreTitle} >Daily High Scores</div>
          <table className={cx(styles.table, "container mb-5")}>

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
