import { useState, useEffect } from "react";
import { HSWM_API, ScoreRecord } from "../services/HSWM_API";

export default function useHighScores(gameId = 1) {
  const [data, setData] = useState<ScoreRecord[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    HSWM_API.fetchHighScores(gameId).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [gameId]);

  return {
    data,
    isLoading,
  };
}
