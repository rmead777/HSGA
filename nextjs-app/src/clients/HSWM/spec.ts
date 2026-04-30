import client from ".";
import axios from "axios";
import mockResponses from "./mockResponses.json";
import { Paths } from "./types";

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
      const gameId = "1";
      const path = Paths.GET_HIGHSCORES + "/" + gameId;
      await client.fetchHighScores(gameId);
      
      expect(spy).toHaveBeenCalledWith(path);
    });
    
    it("should return highscores", async () => {
      const gameId = "1";
      jest.spyOn(axios, "get").mockResolvedValue({ data: value });
      const result = await client.fetchHighScores(gameId);
      expect(result.data).toBe(value);
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
        email: "string",
      });

      expect(axiosPostSpy).toHaveBeenCalledWith(Paths.POST_LOGIN, {
        data: JSON.stringify({
          password: "string",
          email: "string",
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

  describe("#fetchUserInfo", () => {
    const path = Paths.GET_USER_INFO;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should return the user info", async () => {
      const userInfo = await client.fetchCurrentUserInfo();
      expect(userInfo.data).toBe(mockResponses[path]);
    });
  });

  describe("#updatePaypal", () => {
    const path = Paths.POST_UPDATE_PAYPAL_FORMDATA;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should POST with the correct information", async () => {
      const axiosPostSpy = jest.spyOn(axios, "post");

      await client.updatePaypal({
        paypalemail: "string",
      });

      expect(axiosPostSpy).toHaveBeenCalledWith(
        Paths.POST_UPDATE_PAYPAL_FORMDATA,
        {
          data: JSON.stringify({
            paypalemail: "string",
            _csrfToken:
              "MNdx+5geDmwktwDla1YBcpf25GRqyvV6BgmyzmWimxEQwSWf8+e9Pbj2TLRVDixDWodppMo6Dc2EYvlthdXq2pcBcrXpd3MMocDXXVivzUI3aoKqVcCuIyjzQ/3GgYRYicZ+hmE4GyZp5QjB+Apo+g==",
            "_Token[fields]": "51a5b8fd1724f95296fe6e62f3c9e99ee760b831%3A",
            "_Token[debug]":
              "%5B%22%5C%2Fusers%5C%2Fjsonsignupform%22%2C%5B%22username%22%2C%22password%22%2C%22email%22%5D%2C%5B%5D%5D",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });
  });

  describe("#updatePassword", () => {
    const path = Paths.GET_UPDATE_PASSWORD_FORMDATA;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should POST with the correct information", async () => {
      const axiosPostSpy = jest.spyOn(axios, "post");

      await client.updatePassword({
        "password-old": "string",
        password: "string",
        "password-check": "string",
      });

      expect(axiosPostSpy).toHaveBeenCalledWith(Paths.POST_UPDATE_PASSWORD, {
        data: JSON.stringify({
          "password-old": "string",
          password: "string",
          "password-check": "string",
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

  describe("#updatePassword", () => {
    const path = Paths.GET_UPDATE_PASSWORD_FORMDATA;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should POST with the correct information", async () => {
      const axiosPostSpy = jest.spyOn(axios, "post");

      await client.updatePassword({
        "password-old": "string",
        password: "string",
        "password-check": "string",
      });

      expect(axiosPostSpy).toHaveBeenCalledWith(Paths.POST_UPDATE_PASSWORD, {
        data: JSON.stringify({
          "password-old": "string",
          password: "string",
          "password-check": "string",
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

  describe("#resetPassword", () => {
    const path = Paths.GET_RESET_PASSWORD_FORMDATA;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should POST with the correct information", async () => {
      const axiosPostSpy = jest.spyOn(axios, "post");

      await client.resetPassword({
        email: "string",
      });

      expect(axiosPostSpy).toHaveBeenCalledWith(Paths.POST_RESET_PASSWORD, {
        data: JSON.stringify({
          email: "string",
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

  describe("#fetchFeaturedGameInfo", () => {
    const path = Paths.GET_FEATURED_GAME_INFO;

    beforeEach(() => {
      jest.spyOn(axios, "get").mockResolvedValue({ data: mockResponses[path] });
    });

    it("should return the game info", async () => {
      const gameInfo = await client.fetchFeaturedGameInfo();
      expect(gameInfo.data).toBe(mockResponses[path]);
    });
  });
});
