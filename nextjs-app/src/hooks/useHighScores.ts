import { useState, useEffect } from "react";
import client from "../clients/HSWM";
import { GameInfo, ScoreRecord } from "../clients/HSWM/types";

function validateData(data?: unknown): asserts data is ScoreRecord[] {
  if (!Array.isArray(data)) {
    throw new Error("Invalid highscores");
  }

  if (data.length === 0) {
    return;
  }

  if (data.some((record) => typeof record?.username !== "string")) {
    throw new Error("Invalid highscores");
  }
}

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
        const { data } = result;
        if (result.errors) {
          setErrors(result.errors);
          return;
        }
        try {
          validateData(data);
          setData(data);
        } catch (e) {
          setErrors([e instanceof Error ? e.message : "Invalid highscores"]);
        }
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
    errors,
    data,
    isLoading,
  };
}
