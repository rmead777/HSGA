import { useState, useEffect } from "react";
import client, { ScoreRecord } from "../clients/HSWM";

export default function useHighScores(gameId = 1) {
  const [data, setData] = useState<ScoreRecord[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    client.fetchHighScores(gameId).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [gameId]);

  return {
    data,
    isLoading,
  };
}
