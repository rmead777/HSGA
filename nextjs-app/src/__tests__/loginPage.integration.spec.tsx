import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import client from "../clients/HSWM";
import Signin from "../../pages/signin";

jest.mock("../clients/HSWM");

const spy = jest.spyOn(client, "loginUser");

/** SKIP: The testing library isn't updating the input values correctly */
describe.skip("Form", () => {
  describe("on submit", () => {
    it("should login user", () => {
      const email = "johnnybgud@sfsd.com";
      const password = "password12345";

      render(<Signin />);

      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: email },
      });

      fireEvent.change(screen.getByLabelText(/password/i), {
        target: { value: password },
      });

      waitFor(() => {
        fireEvent.click(screen.getByText("Login"));
      });

      expect(spy).toHaveBeenCalledWith({
        email,
        password,
      });
    });
  });
});
