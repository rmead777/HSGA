import { HSWM_API } from ".";
import axios from "axios";
import mockResponses from "./mockResponses.json";

jest.mock("axios");
const axiosSpy = jest.spyOn(axios, "post");

global.fetch = jest.fn().mockResolvedValue({
  json: () => mockResponses["https://testing2.ttechr.com/users/jsonsignupform"],
});

describe("HSWM_API", () => {
  describe("#registerUser", () => {
    it("should POST with the correct information", async () => {
      await HSWM_API.registerUser({
        username: "string",
        email: "string",
        password: "string",
      });

      expect(axiosSpy).toHaveBeenCalledWith("/users/jsonsignupform", {
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          username: "string",
          email: "string",
          password: "string",
          _csrfToken:
            "MNdx+5geDmwktwDla1YBcpf25GRqyvV6BgmyzmWimxEQwSWf8+e9Pbj2TLRVDixDWodppMo6Dc2EYvlthdXq2pcBcrXpd3MMocDXXVivzUI3aoKqVcCuIyjzQ/3GgYRYicZ+hmE4GyZp5QjB+Apo+g==",
          "_Token[fields]": "51a5b8fd1724f95296fe6e62f3c9e99ee760b831%3A",
          "_Token[debug]":
            "%5B%22%5C%2Fusers%5C%2Fjsonsignupform%22%2C%5B%22username%22%2C%22password%22%2C%22email%22%5D%2C%5B%5D%5D",
        }),
      });
    });
  });
});
