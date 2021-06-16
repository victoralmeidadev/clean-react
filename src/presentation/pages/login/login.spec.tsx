import React from "react";
import { render } from "@testing-library/react";
import Login from "./index";

describe("Login component", () => {
  test("Should start with initial state", () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId("error-wrap");
    const submitButton = getByTestId("submit") as HTMLButtonElement;
    expect(errorWrap.childElementCount).toBe(0);
    expect(submitButton.disabled).toBe(true);
  });
});
