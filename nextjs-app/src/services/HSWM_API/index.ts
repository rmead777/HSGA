import axios from "axios";
import { PATHS } from "./constants";
import defaultHighscores from "./defaultData/highscores.json";

enum Paths {
  HIGHSCORES = "highscores",
}

export type ScoreRecord = {
  username: string;
  score: number;
};

interface RegisterUserParams {
  username: string;
  email: string;
  password: string;
}

function parseFormData(
  data: Record<string, string>[]
): Record<string, string | undefined> {
  const _csrfToken = data.find((obj) => obj.name === "_csrfToken")?.value;
  const _Token_fields = data.find(
    (obj) => obj.name === "_Token[fields]"
  )?.value;
  const _Token_debug = data.find((obj) => obj.name === "_Token[debug]")?.value;

  return {
    _csrfToken,
    "_Token[fields]": _Token_fields,
    "_Token[debug]": _Token_debug,
  };
}

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

  static async registerUser(values: RegisterUserParams) {
    const endpoint = "https://testing2.ttechr.com/users/jsonsignupform";
    const method = "POST";
    const data = await HSWM_API.fetchRegisterUserFormData();

    const body = {
      ...values,
      ...parseFormData(data),
    };

    console.log(method, endpoint, body);

    const res = await axios.post("/users/jsonsignupform", {
      data: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("response", res);

    return res;
  }

  private static async fetchRegisterUserFormData() {
    const endpoint = "https://testing2.ttechr.com/users/jsonsignupform";
    console.log("GET", endpoint);
    const res = await fetch(endpoint).then((response) => response.json());
    console.log("reponse", res);
    return res;
  }

  private static async fetchCSRF() {
    const endpoint = PATHS.csrf;
    console.log("GET", endpoint);
    return fetch(endpoint).then((response) => response.json());
  }
}
