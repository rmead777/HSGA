import useHighScores from "../../hooks/useHighScores";
import { ScoreRecord } from "../../services/HSWM_API";
import cx from "classnames";
import styles from "./styles.module.scss";

function createTableRow(score: ScoreRecord, idx: number) {
  return (
    <tr>
      <td>{idx + 1}. </td>
      <td>{score.name}</td>
      <td>{score.score}</td>
    </tr>
  );
}

interface PropTypes {
  className: string;
}

export default function HighScoresTable({ className }: PropTypes) {
  const { data, isLoading } = useHighScores(1);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <div>MISSING DATA</div>;

  // return <div>{JSON.stringify(data)}</div>;

  return (
    <div className={cx(className, "max-w-3xl mx-auto pt-20")}>
      <table className={cx(styles.table, "container")}>
        {/* <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead> */}
        <tbody>{data.map(createTableRow)}</tbody>
      </table>
    </div>
  );
}
