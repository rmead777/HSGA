import axios from "axios";
import defaultHighscores from "./defaultData/highscores.json";

export enum Paths {
  // This endpoint takes a slug
  GET_HIGHSCORES = "/highscores",

  // Gets the info needed for the form
  GET_LOGIN_FORMDATA = "/users/jsonloginform",
  POST_LOGIN = "/users/jsonloginform",

  GET_ALL_GAMES_INFO = "/games/jsongames",

  GET_USER_INFO = "/users/jsoncurrentuserinfo",

  // Gets the info needed for the form
  GET_SIGNUP_FORMDATA = "/users/jsonsignupform",
  POST_SIGNUP = "/users/jsonsignupform",
}

export type ScoreRecord = {
  username: string;
  score: number;
};

export interface RegisterUserParams {
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

async function fetchHighScores(gameId: number): Promise<ScoreRecord[]> {
  const path = `${Paths.GET_HIGHSCORES}/${gameId}`;
  try {
    const res = await axios.get(path);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch highscores");
    return defaultHighscores;
  }
}

async function loginUser(values: { password: string; email: string }) {
  const formData = await loginUserFormData();

  const data = {
    ...values,
    ...parseFormData(formData),
  };

  const res = await axios.post(Paths.POST_LOGIN, { data });
  return res.data;
}

async function loginUserFormData() {
  const res = await axios.get<Record<string, string>[]>(
    Paths.GET_LOGIN_FORMDATA
  );

  return res.data;
}

async function registerUser(values: RegisterUserParams) {
  const formData = await fetchRegisterUserFormData();

  const data = {
    ...values,
    ...parseFormData(formData),
  };

  const res = await axios.post(Paths.POST_SIGNUP, { data });
  return res.data;
}

async function fetchRegisterUserFormData() {
  const res = await axios.get(Paths.GET_SIGNUP_FORMDATA);
  return res.data;
}

async function fetchCurrentUserInfo(): Promise<{
  username: string;
  email: string;
  paypal_email: string;
}> {
  const res = await axios.get(Paths.GET_USER_INFO);
  return res.data;
}

const client = {
  fetchHighScores,
  fetchCurrentUserInfo,
  registerUser,
  loginUser,
};

export default client;
