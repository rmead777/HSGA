import { complexFormSubmit, myGet } from "./helpers";
import { Paths, ApiResult, ScoreRecord, UserInfo } from "./types";

async function fetchHighScores(
  gameId: number
): Promise<ApiResult<ScoreRecord[]>> {
  const path = `${Paths.GET_HIGHSCORES}/${gameId}`;
  return myGet<ScoreRecord[]>(path);
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

export type UpdatePasswordParams = {
  "password-old": string;
  password: string;
  "password-check": string;
};
async function updatePassword(values: UpdatePasswordParams) {
  return complexFormSubmit(
    values,
    Paths.GET_UPDATE_PASSWORD_FORMDATA,
    Paths.POST_UPDATE_PASSWORD
  );
}

const client = {
  fetchHighScores,
  fetchCurrentUserInfo,
  registerUser,
  loginUser,
  updatePaypal,
  updatePassword,
};

export default client;
