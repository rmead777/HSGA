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
	gameId: string, group: string
): Promise<ApiResult<ScoreRecord[]>> {
	const path = `${Paths.GET_HIGHSCORES}/${gameId}/${group}`;
	return myGet<ScoreRecord[]>(path);
}
async function fetchFirstHighScore(
	gameId: string, group: string
): Promise<ApiResult<ScoreRecord[]>> {
	const path = `${Paths.GET_FIRST_HIGHSCORE}/${gameId}/${group}`;
	return myGet<ScoreRecord[]>(path);
}
async function getPlayersCount(
	gameId: string
): Promise<ApiResult<ScoreRecord[]>> {
	const path = `${Paths.GET_PLAYERS_COUNT}/${gameId}`;
	return myGet<ScoreRecord[]>(path);
}
async function getRatio(gameId: string): Promise<ApiResult<RatioType[]>> {
	const path = `${Paths.GET_RATIO}`;
	return myGet<RatioType[]>(path);
}
async function getCarouselData(): Promise<ApiResult<RatioType[]>> {
	const path = `${Paths.GET_CAROUSEL_DATA}`;
	return myGet<[]>(path);
}
async function getAllGames(): Promise<ApiResult<RatioType[]>> {
	const path = `${Paths.GET_ALL_GAMES}`;
	return myGet<[]>(path);
}
//export type SquadType = { name: string; hash: string };
async function getSquads(settingspage: string = ''): Promise<ApiResult<[]>> {
	const path = `${Paths.GET_SQUADS + '/' +settingspage}`;
	return myGet<[]>(path);
}
//export type OwnSquadUsers = { name: string; hash: string };
async function getOwnSquadUsers(): Promise<ApiResult<[]>> {
	const path = `${Paths.GET_OWN_SQUAD_USERS}`;
	return myGet<[]>(path);
}
//export type SquadType = { name: string; hash: string };
async function getOwnHash(): Promise<ApiResult<[]>> {
	const path = `${Paths.GET_OWN_SQUAD_HASH}`;
	return myGet<[]>(path);
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


export type SyncUserSquadsParams = {
    squads: string;
};
async function syncUserSquads(values: SyncUserSquadsParams) {
    return complexFormSubmit(
        values,
        Paths.GET_SQUAD_SYNC_FORM,
        Paths.POST_SQUAD_SYNC_FORM
    );
}

export type DeleteUserFromOwnSquadsParams = {
	uuid: string;
}
async function deleteUserFromOwnSquads(values: DeleteUserFromOwnSquadsParams) {
    return complexFormSubmit(
        values,
        Paths.GET_DELETE_USER_FROM_OWN_SQUAD,
        Paths.POST_DELETE_USER_FROM_OWN_SQUAD
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
async function fetchGameInfo(id:string) {
	return myGet<Array<GameInfo>>(`${Paths.GET_FEATURED_GAME_INFO}/${JSON.parse(id)}`);
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
	fetchGameInfo,
	resetPassword,
	contactUs,
	fetchFirstHighScore,
	getPlayersCount,
	getRatio,
	getCarouselData,
	getAllGames,
    getSquads,
    syncUserSquads,
    getOwnHash,
	getOwnSquadUsers,
	deleteUserFromOwnSquads,
};

export default client;
