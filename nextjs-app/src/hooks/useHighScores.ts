import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import client from "../clients/HSWM";
import { ScoreRecord } from "../clients/HSWM/types";

function validateData(data?: ScoreRecord[]) {
  if (!Array.isArray(data) || data[0].username !== "string") {
    throw new Error("Invalid highscores");
  }
}

export default function useHighScores(gameId = 1) {
  const [errors, setErrors] = useState<string[]>([]);
  const {
    isLoading,
    error,
    data: result,
  } = useQuery("highscores", () => client.fetchHighScores(gameId));

  useEffect(() => {
    if (error || !result) {
      setErrors([
        "Failed to load highscores. Please check your internet connection.",
      ]);
    } else if (result.errors) {
      setErrors(result.errors);
      return;
    } else {
      validateData(result.data);
    }
  }, [error, result]);

  return {
    errors,
    data: result?.data,
    isLoading,
  };
}
