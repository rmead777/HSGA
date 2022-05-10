import useHighScores from "../../../hooks/useHighScores";
import cx from "classnames";
import styles from "./styles.module.scss";
import Image from "../../atoms/Image";
import RoutesService from "../../../services/RoutesService";
import { ScoreRecord } from "../../../clients/HSWM/types";
import FormErrors from "../forms/FormErrors";

function createTableRow(score: ScoreRecord, idx: number) {
  return (
    <tr key={`${idx}${score}`}>
      <td>{idx + 1}. </td>
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

  if (isLoading) return <p>Loading...</p>;

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
        src={RoutesService.getImagePath("HS_reverse_horiz.png")}
        alt="HighScoreWinsMoney Logo"
        width={120}
        height={94}
      />
      <table className={cx(styles.table, "container mb-5")}>
        {/* <thead>
          <tr>
            <th>Rank</th>
            <th className={styles["col-name"]}>Name</th>
            <th>Score</th>
          </tr>
        </thead> */}
        <tbody>{data.map(createTableRow)}</tbody>
      </table>

      <FormErrors errors={errors} />
    </div>
  );
}
