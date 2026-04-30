import { useState, useEffect } from "react";
import client from "../clients/HSWM";
import { GameInfo, ScoreRecord } from "../clients/HSWM/types";

const POLL_FREQUENCY = 5 * 1000;
interface PropTypes {
  gameInfo?: GameInfo;
  id?: string;
 
}
export default function useHighScores({gameInfo}:PropTypes, group: string) {
  const [data, setData] = useState<ScoreRecord[]>([{"username":"[[high-scores]]","score":0}]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [pollCount, setPollCount] = useState(0);

  useEffect(() => {
    // Only set loading once
    if (!data?.length) {
      setLoading(true);
    }
console.log("Game Info fetchHighScore", gameInfo);

  gameInfo?.id &&  client
      .fetchHighScores(gameInfo?.id || "", group || "main")
      .then((result) => {
        if (result.data) setData(result.data);
        if (result.errors) setErrors(result.errors);
      })
      .catch(() => {
        setErrors([
          "Failed to load highscores. Please check your internet connection.",
        ]);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setPollCount(pollCount + 1), POLL_FREQUENCY);
      });
    }, [gameInfo?.id, pollCount, data?.length]);
    //  }, []);

  return {
    data,
    errors,
    isLoading,
  };
}
