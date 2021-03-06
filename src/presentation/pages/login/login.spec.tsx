import React from "react";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import Login from "./index";
import { ValidationSpy } from "@/presentation/test";
import faker from "faker";

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const sut = render(<Login validation={validationSpy} />);
  return {
    sut,
    validationSpy,
  };
};
describe("Login component", () => {
  afterEach(cleanup);
  test("Should start with initial state", () => {
    const { sut } = makeSut();
    const errorWrap = sut.getByTestId("error-wrap");
    const submitButton = sut.getByTestId("submit") as HTMLButtonElement;
    const emailStatus = sut.getByTestId("email-status");
    const passwordStatus = sut.getByTestId("password-status");
    expect(errorWrap.childElementCount).toBe(0);
    expect(submitButton.disabled).toBe(true);
    expect(emailStatus.title).toBe("Campo obrigatório");
    expect(emailStatus.textContent).toBe("🔴");
    expect(passwordStatus.title).toBe("Campo obrigatório");
    expect(passwordStatus.textContent).toBe("🔴");
  });

  test("Should call validation with correct email", () => {
    const { sut, validationSpy } = makeSut();
    const emailInput = sut.getByTestId("email");
    const email = faker.internet.email();
    fireEvent.input(emailInput, { target: { value: email } });
    expect(validationSpy.fieldName).toBe("email");
    expect(validationSpy.fieldValue).toBe(email);
  });

  test("Should call validation with correct password", () => {
    const { sut, validationSpy } = makeSut();
    const passwordInput = sut.getByTestId("password");
    const password = faker.internet.password();

    fireEvent.input(passwordInput, { target: { value: password } });
    expect(validationSpy.fieldName).toBe("password");
    expect(validationSpy.fieldValue).toBe(password);
  });
});
