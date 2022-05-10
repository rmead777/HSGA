import axios from "axios";
import { complexFormSubmit, handleSuccess, myGet } from "./helpers";
import { Paths, Result, ScoreRecord, UserInfo } from "./types";

async function fetchHighScores(gameId: number): Promise<Result<ScoreRecord[]>> {
  const path = `${Paths.GET_HIGHSCORES}/${gameId}`;
  return await axios
    .get<ScoreRecord[] | { error: string }>(path)
    .then((data) => handleSuccess(data));
}

export type LoginUserParams = { email: string; password: string };
async function loginUser(values: LoginUserParams) {
  return complexFormSubmit(values, Paths.GET_LOGIN_FORMDATA, Paths.POST_LOGIN);
}

export type RegisterUserParams = {
  username: string;
  email: string;
  password: string;
};
async function registerUser(values: RegisterUserParams) {
  return complexFormSubmit(
    values,
    Paths.GET_SIGNUP_FORMDATA,
    Paths.POST_SIGNUP
  );
}

async function fetchCurrentUserInfo() {
  return myGet<UserInfo>(Paths.GET_USER_INFO);
}

export type UpdatePaypalParams = { paypalemail: string };
async function updatePaypal(values: UpdatePaypalParams) {
  return complexFormSubmit(
    values,
    Paths.GET_UPDATE_PAYPAL_FORMDATA,
    Paths.POST_UPDATE_PAYPAL_FORMDATA
  );
}

const client = {
  fetchHighScores,
  fetchCurrentUserInfo,
  registerUser,
  loginUser,
  updatePaypal,
};

export default client;
