import { handleSuccess } from "./helpers";

describe("helpers", () => {
  describe("handleSuccess", () => {
    describe("when there are errors by field", () => {
      const data = {
        user: {
          username: "test123@test123.com",
          email: "test123@test123.com",
        },
        error: {
          username: {
            _isUnique: "This value is already in use",
          },
          email: {
            _isUnique: "This value is already in use",
          },
        },
      };

      it("should return an errors array", () => {
        const { errors } = handleSuccess({ data });

        expect(errors).toEqual([
          "username: This value is already in use",
          "email: This value is already in use",
        ]);
      });
    });
  });
});
