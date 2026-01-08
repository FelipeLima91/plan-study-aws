import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CheckboxItem } from "../CheckboxItem";

describe("CheckboxItem", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("deve renderizar o checkbox com label", () => {
    render(
      <CheckboxItem id="test-1" text="Learn React" initialChecked={false} />
    );
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });

  it("deve iniciar marcado quando initialChecked é true", () => {
    render(
      <CheckboxItem id="test-1" text="Learn React" initialChecked={true} />
    );
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it("deve iniciar desmarcado quando initialChecked é false", () => {
    render(
      <CheckboxItem id="test-1" text="Learn React" initialChecked={false} />
    );
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it("deve alternar o estado ao clicar", async () => {
    const user = userEvent.setup();
    render(
      <CheckboxItem id="test-1" text="Learn React" initialChecked={false} />
    );

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    await user.click(checkbox);
    expect(checkbox.checked).toBe(true);

    await user.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it("deve salvar o estado no localStorage", async () => {
    const user = userEvent.setup();
    render(
      <CheckboxItem id="test-1" text="Learn React" initialChecked={false} />
    );

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(localStorage.getItem("test-1")).toBe("true");
  });
});
