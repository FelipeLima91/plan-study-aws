import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CheckboxItem } from "../CheckboxItem";

// Mock do hook useStudyPlan
const mockToggleItem = jest.fn();
const mockInputValues: Record<string, boolean> = {};

jest.mock("../../contexts/StudyPlanContext", () => ({
  useStudyPlan: () => ({
    inputValues: mockInputValues,
    toggleItem: mockToggleItem,
  }),
}));

describe("CheckboxItem", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Limpar o objeto mockInputValues
    for (const key in mockInputValues) delete mockInputValues[key];
  });

  it("deve renderizar o checkbox com label", () => {
    render(<CheckboxItem id="test-1" text="Learn React" />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });

  it("deve iniciar marcado quando inputValues tem o id como true", () => {
    mockInputValues["test-1"] = true;
    render(<CheckboxItem id="test-1" text="Learn React" />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it("deve iniciar desmarcado quando inputValues não tem o id", () => {
    render(<CheckboxItem id="test-1" text="Learn React" />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it("deve chamar toggleItem ao clicar", async () => {
    const user = userEvent.setup();
    render(<CheckboxItem id="test-1" text="Learn React" />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(mockToggleItem).toHaveBeenCalledWith("test-1");
  });
});
