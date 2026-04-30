// import styles from "./styles.module.css";
import fonts from "@ui/styles/fonts.module.css";
import cx from "classnames";

type PropTypes = {
  score?: number;
  place?: number;
};
function CurrentHighScoreBlock({ score, place }: PropTypes) {
  return (
    <div className={cx(fonts.tagline, "text-center")}>
      <div className="text-lg">YOUR HIGH SCORE:</div>
      <div className="text-3xl text-primary-2 leading-4">{`${score || '00'} (#${place || '00'})`}</div>
    </div>
  );
}

export default CurrentHighScoreBlock;
