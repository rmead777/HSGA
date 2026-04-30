import { render, screen } from "@testing-library/react";
import HomePage from ".";

describe("HomepageTemplate", () => {
  describe("when player info is provided", () => {
    it("should be displayed", () => {
      render(
        <HomePage
          featuredGameInfo={{
            id: "",
            title: "",
            uri: "",
          }}
          currentUserInfo={{
            username: "Bob",
            score: 123,
            rank: 12,
          }}
        />
      );

      screen.getByText("123 (#12)");
    });
  });
});
