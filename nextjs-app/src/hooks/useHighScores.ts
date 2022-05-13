import { useState, useEffect } from "react";
import client from "../clients/HSWM";
import { ScoreRecord } from "../clients/HSWM/types";

export default function useHighScores(gameId = 1) {
  const [data, setData] = useState<ScoreRecord[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    client
      .fetchHighScores(gameId)
      .then((result) => {
        if (result.data?.length) setData(result.data);
        else throw new Error("Bad data");

        if (result.errors) setErrors(result.errors);
      })
      .catch(() => {
        setErrors([
          "Failed to load highscores. Please check your internet connection.",
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [gameId]);

  return {
    errors,
    data,
    isLoading,
  };
}
