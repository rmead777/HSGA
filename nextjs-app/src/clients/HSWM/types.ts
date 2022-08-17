
export enum Paths {
	// This endpoint takes a slug
	CONTACT_FORM = "/users/jsoncontactform",
	POST_CONTACT_FORM = "/users/jsoncontactform",
	GET_CONTACT_FORM = "/users/jsoncontactform",
	GET_PLAYERS_COUNT = "/games/jsonnumplayersforgame",
	POST_PLAYERS_COUNT = "/games/jsonnumplayersforgame",
	GET_RATIO = "/games/jsonaspectratio",
	GET_CAROUSEL_DATA = "/games/jsongamescarousel",
    GET_ALL_GAMES = "/games/jsongames",
    GET_FIRST_HIGHSCORE = "/highscores/jsonchampionsforgame",

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

	// Reset Password
	GET_RESET_PASSWORD_FORMDATA = "/users/jsonresetpw",
	POST_RESET_PASSWORD = "/users/jsonresetpw",

	// Featured game info
	GET_FEATURED_GAME_INFO = "/games/jsonfeature",
}
/*

//  For local environment, uncomment this block, and comment everything before it

export enum Paths {
    // This endpoint takes a slug
    CONTACT_FORM = "https://test.ttechr.com/users/jsoncontactform",
    POST_CONTACT_FORM = "https://test.ttechr.com/users/jsoncontactform",
    GET_CONTACT_FORM = "https://test.ttechr.com/users/jsoncontactform",
    GET_PLAYERS_COUNT = "https://test.ttechr.com/games/jsonnumplayersforgame",
    POST_PLAYERS_COUNT = "https://test.ttechr.com/games/jsonnumplayersforgame",
    GET_RATIO = "https://test.ttechr.com/games/jsonaspectratio",
    GET_CAROUSEL_DATA = "https://test.ttechr.com/games/jsongamescarousel",
    GET_ALL_GAMES = "https://test.ttechr.com/games/jsongames",
    GET_FIRST_HIGHSCORE = "https://test.ttechr.com/highscores/jsonchampionsforgame",

    GET_HIGHSCORES = "https://test.ttechr.com/highscores/forgame",

    // Gets the info needed for the form
    GET_LOGIN_FORMDATA = "https://test.ttechr.com/users/jsonloginform",
    POST_LOGIN = "https://test.ttechr.com/users/jsonloginform",

    GET_ALL_GAMES_INFO = "https://test.ttechr.com/games/jsongames",

    // GET_USER_INFO = "https://test.ttechr.com/users/jsoncurrentuserinfo",
    GET_USER_INFO = "https://test.ttechr.com/users/jsoncurrentuserinfo",

    // Gets the info needed for the form
    GET_SIGNUP_FORMDATA = "https://test.ttechr.com/users/jsonsignupform",
    POST_SIGNUP = "https://test.ttechr.com/users/jsonsignupform",

    // Paypal
    GET_UPDATE_PAYPAL_FORMDATA = "https://test.ttechr.com/accounts/jsonupdatepaypal",
    POST_UPDATE_PAYPAL_FORMDATA = "https://test.ttechr.com/accounts/jsonupdatepaypal",

    // Password
    GET_UPDATE_PASSWORD_FORMDATA = "https://test.ttechr.com/users/jsonchangepw",
    POST_UPDATE_PASSWORD = "https://test.ttechr.com/users/jsonchangepw",

    // Reset Password
    GET_RESET_PASSWORD_FORMDATA = "https://test.ttechr.com/users/jsonresetpw",
    POST_RESET_PASSWORD = "https://test.ttechr.com/users/jsonresetpw",

    // Featured game info
    GET_FEATURED_GAME_INFO = "https://test.ttechr.com/games/jsonfeature",
}
*/

export type ScoreRecord = {
	username: string;
	score: number;
};
export type RatioType = {
	data: number;
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
	id: string;
	paypalemail: string;
	user_rank: {
		place: number;
		score: number;
	};
};
export type FirstHighScore = {};

export type GameInfo = {
	id: string;
	title: string;
	image: string;
	uri: string;
    description: string;
    author: string;
    aspect_ratio: string;
    enabled: boolean;
    prize: string;
    interval: string;
};


