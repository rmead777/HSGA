import { useState, useEffect } from "react";
import client from "../clients/HSWM";
import { ScoreRecord } from "../clients/HSWM/types";

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

export default function useHighScores(gameId = 1) {
  const [data, setData] = useState<ScoreRecord[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    client
      .fetchHighScores(gameId)
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
      });
  }, [gameId]);

  return {
    errors,
    data,
    isLoading,
  };
}
