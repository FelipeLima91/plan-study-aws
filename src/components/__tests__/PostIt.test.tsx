import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PostIt } from "../PostIt";

describe("PostIt", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("deve renderizar componente PostIt", () => {
    render(<PostIt dayId="day-1" />);
    expect(screen.getByPlaceholderText(/anotações|note/i)).toBeInTheDocument();
  });

  it("deve renderizar botão de adicionar anotação", () => {
    render(<PostIt dayId="day-1" />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("deve permitir adicionar nova anotação", async () => {
    const user = userEvent.setup();
    render(<PostIt dayId="day-1" />);

    const textarea = screen.getByPlaceholderText(/anotações|note/i);
    const buttons = screen.getAllByRole("button");

    await user.type(textarea, "Minha primeira anotação");
    await user.click(buttons[0]);

    expect(localStorage.getItem("day-1-postits")).toBeDefined();
  });

  it("deve converter URLs em links", async () => {
    const user = userEvent.setup();
    render(<PostIt dayId="day-1" />);

    const textarea = screen.getByPlaceholderText(/anotações|note/i);
    const buttons = screen.getAllByRole("button");

    await user.type(textarea, "Visite https://aws.amazon.com");
    await user.click(buttons[0]);

    const link = screen.getByRole("link", {
      name: /https:\/\/aws.amazon.com/i,
    });
    expect(link).toBeInTheDocument();
  });

  it("deve permitir deletar anotação", async () => {
    const user = userEvent.setup();
    render(<PostIt dayId="day-1" />);

    const textarea = screen.getByPlaceholderText(/anotações|note/i);
    const buttons = screen.getAllByRole("button");

    await user.type(textarea, "Anotação para deletar");
    await user.click(buttons[0]);

    const deleteButton = screen.getByLabelText(/Deletar nota/i);
    expect(deleteButton).toBeInTheDocument();
  });
});
