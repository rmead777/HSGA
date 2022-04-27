import { PATHS } from "./constants";
import defaultHighscores from "./defaultData/highscores.json";

enum Paths {
  HIGHSCORES = "highscores",
}

export type ScoreRecord = {
  username: string;
  score: number;
};

export class HSWM_API {
  static async fetchHighScores(gameId: number): Promise<ScoreRecord[]> {
    const path = `${PATHS[Paths.HIGHSCORES]}/${gameId}`;

    return fetch(path)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
        return defaultHighscores;
      });
  }
}
