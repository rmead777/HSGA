export enum Paths {
  // This endpoint takes a slug
  GET_HIGHSCORES = "/highscores/forgame",

  // Gets the info needed for the form
  GET_LOGIN_FORMDATA = "/users/jsonloginform",
  POST_LOGIN = "/users/jsonloginform",

  GET_ALL_GAMES_INFO = "/games/jsongames",

  GET_USER_INFO = "/users/jsoncurrentuserinfo",

  // Gets the info needed for the form
  GET_SIGNUP_FORMDATA = "/users/jsonsignupform",
  POST_SIGNUP = "/users/jsonsignupform",

  // Paypal
  GET_UPDATE_PAYPAL_FORMDATA = "/accounts/jsonupdatepaypal",
  POST_UPDATE_PAYPAL_FORMDATA = "/accounts/jsonupdatepaypal",

  // Password
  GET_UPDATE_PASSWORD_FORMDATA = "/users/jsonchangepw",
  POST_UPDATE_PASSWORD = "/users/jsonchangepw",

  // Featured game info
  GET_FEATURED_GAME_INFO = "/games/jsonfeature",
}

export type ScoreRecord = {
  username: string;
  score: number;
};

export type ApiResult<T = undefined> = {
  data?: T;
  errors?: string[];
};

export type RequiredFormData = Record<string, string>[];

export type UserInfo = {
  username: string;
  email: string;
  paypal_email: string;
};

export type GameInfo = {
  id: string;
  title: string;
  uri: string;
};
