import { complexFormSubmit, myGet } from "./helpers";
import {
	Paths,
	ApiResult,
	ScoreRecord,
	UserInfo,
	GameInfo,
	RatioType,
} from "./types";

async function fetchHighScores(
	gameId: number
): Promise<ApiResult<ScoreRecord[]>> {
	const path = `${Paths.GET_HIGHSCORES}/${gameId}`;
	return myGet<ScoreRecord[]>(path);
}
async function fetchFirstHighScore(
	gameId: number
): Promise<ApiResult<ScoreRecord[]>> {
	const path = `${Paths.GET_FIRST_HIGHSCORE}`;
	return myGet<ScoreRecord[]>(path);
}
async function getPlayersCount(
	gameId: number
): Promise<ApiResult<ScoreRecord[]>> {
	const path = `${Paths.GET_PLAYERS_COUNT}`;
	return myGet<ScoreRecord[]>(path);
}
async function getRatio(gameId: number): Promise<ApiResult<RatioType[]>> {
	const path = `${Paths.GET_RATIO}`;
	return myGet<RatioType[]>(path);
}

export type LoginUserParams = { email: string; password: string };
async function loginUser(values: LoginUserParams) {
	return complexFormSubmit(
		values,
		Paths.GET_LOGIN_FORMDATA,
		Paths.POST_LOGIN
	);
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
export type ContactUsParams = {
	email: string;
	subject: string;
	message: string;
};
async function contactUs(values: ContactUsParams) {
	return complexFormSubmit(
		values,
		Paths.GET_CONTACT_FORM,
		Paths.POST_CONTACT_FORM
	);
}

async function fetchCurrentUserInfo() {
	return myGet<UserInfo | "false">(Paths.GET_USER_INFO);
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

async function fetchFeaturedGameInfo() {
	return myGet<Array<GameInfo>>(Paths.GET_FEATURED_GAME_INFO);
}

export type ResetPasswordParams = {
	email: string;
};
async function resetPassword(values: ResetPasswordParams) {
	return complexFormSubmit(
		values,
		Paths.GET_RESET_PASSWORD_FORMDATA,
		Paths.POST_RESET_PASSWORD
	);
}

const client = {
	fetchHighScores,
	fetchCurrentUserInfo,
	registerUser,
	loginUser,
	updatePaypal,
	updatePassword,
	fetchFeaturedGameInfo,
	resetPassword,
	contactUs,
	fetchFirstHighScore,
	getPlayersCount,
	getRatio,
};

export default client;
