import { useState, useEffect } from "react";
import client from "../clients/HSWM";
import { ScoreRecord } from "../clients/HSWM/types";

const POLL_FREQUENCY = 5 * 1000;

export default function useHighScores(gameId = 1) {
  const [data, setData] = useState<ScoreRecord[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [pollCount, setPollCount] = useState(0);

  useEffect(() => {
    // Only set loading once
    if (!data?.length) {
      setLoading(true);
    }

    client
      .fetchHighScores(gameId)
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
  }, [gameId, pollCount, data?.length]);

  return {
    errors,
    data,
    isLoading,
  };
}
