import { PATHS } from "./constants";
import defaultHighscores from "./defaultData/highscores.json";

enum Paths {
  HIGHSCORES = "highscores",
}

export type ScoreRecord = {
  name: string;
  score: number;
};

function highScoreTransformer(scores: { [name: string]: number }[]) {
  return scores.map((obj: any) => {
    const [score] = Object.values(obj);
    const [name] = Object.keys(obj);

    return {
      name,
      score,
    } as ScoreRecord;
  });
}

export class HSWM_API {
  static async fetchHighScores(gameId: number): Promise<ScoreRecord[]> {
    const path = `${PATHS[Paths.HIGHSCORES]}/${gameId}`;

    const result = await fetch(path)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
        return defaultHighscores;
      });

    return highScoreTransformer(result);
  }
}
