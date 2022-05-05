import client, { Paths } from ".";
import axios from "axios";
import mockResponses from "./mockResponses.json";

jest.mock("axios");

describe("client", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(axios, "get").mockResolvedValue({ data: undefined });
    jest.spyOn(axios, "post").mockResolvedValue({ data: undefined });
  });

  describe("#fetchHighScores", () => {
    const value = [
      {
        username: "johnny",
        score: 1234,
      },
    ];

    it("should send GET with correct endpoint", async () => {
      const spy = jest.spyOn(axios, "get");
      const gameId = 1;
      const path = Paths.GET_HIGHSCORES + "/" + gameId;
      await client.fetchHighScores(gameId);

      expect(spy).toHaveBeenCalledWith(path);
    });

    it("should return highscores", async () => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: value });
      const highscores = await client.fetchHighScores(1);
      expect(highscores).toBe(value);
    });
  });

  describe("#registerUser", () => {
    const path = Paths.POST_SIGNUP;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should POST with the correct information", async () => {
      const axiosPostSpy = jest.spyOn(axios, "post");

      await client.registerUser({
        username: "string",
        email: "string",
        password: "string",
      });

      expect(axiosPostSpy).toHaveBeenCalledWith(Paths.POST_SIGNUP, {
        data: '{"username":"string","email":"string","password":"string","_csrfToken":"MNdx+5geDmwktwDla1YBcpf25GRqyvV6BgmyzmWimxEQwSWf8+e9Pbj2TLRVDixDWodppMo6Dc2EYvlthdXq2pcBcrXpd3MMocDXXVivzUI3aoKqVcCuIyjzQ/3GgYRYicZ+hmE4GyZp5QjB+Apo+g==","_Token[fields]":"51a5b8fd1724f95296fe6e62f3c9e99ee760b831%3A","_Token[debug]":"%5B%22%5C%2Fusers%5C%2Fjsonsignupform%22%2C%5B%22username%22%2C%22password%22%2C%22email%22%5D%2C%5B%5D%5D"}',
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
  });

  describe("#loginUser", () => {
    const path = Paths.POST_LOGIN;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should POST with the correct information", async () => {
      const axiosPostSpy = jest.spyOn(axios, "post");

      await client.loginUser({
        password: "string",
        username: "string",
      });

      expect(axiosPostSpy).toHaveBeenCalledWith(Paths.POST_LOGIN, {
        data: JSON.stringify({
          password: "string",
          username: "string",
          _csrfToken:
            "MNdx+5geDmwktwDla1YBcpf25GRqyvV6BgmyzmWimxEQwSWf8+e9Pbj2TLRVDixDWodppMo6Dc2EYvlthdXq2pcBcrXpd3MMocDXXVivzUI3aoKqVcCuIyjzQ/3GgYRYicZ+hmE4GyZp5QjB+Apo+g==",
          "_Token[fields]": "51a5b8fd1724f95296fe6e62f3c9e99ee760b831%3A",
          "_Token[debug]":
            "%5B%22%5C%2Fusers%5C%2Fjsonsignupform%22%2C%5B%22username%22%2C%22password%22%2C%22email%22%5D%2C%5B%5D%5D",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
  });

  describe("#fetchAllGameInfo", () => {
    const path = Paths.GET_ALL_GAMES_INFO;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should return the game info", async () => {
      const gamesInfo = await client.fetchHighScores(1);
      expect(gamesInfo).toBe(mockResponses[path]);
    });
  });

  describe("#fetchUserInfo", () => {
    const path = Paths.GET_USER_INFO;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should return the game info", async () => {
      const userInfo = await client.fetchCurrentUserInfo();
      expect(userInfo).toBe(mockResponses[path]);
    });
  });
});
