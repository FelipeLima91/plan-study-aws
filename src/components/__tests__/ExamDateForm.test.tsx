import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { ExamDateForm } from "../ExamDateForm";

describe("ExamDateForm", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("deve renderizar o formulário em modo de entrada", () => {
    render(<ExamDateForm planId="plan-1" />);
    const input = screen.getByDisplayValue("");
    expect(input).toBeInTheDocument();
  });

  it("deve renderizar botão de salvar", () => {
    render(<ExamDateForm planId="plan-1" />);
    expect(screen.getByRole("button", { name: /salvar/i })).toBeInTheDocument();
  });

  it("deve renderizar label data da prova", () => {
    render(<ExamDateForm planId="plan-1" />);
    expect(screen.getByText(/Data da Prova/i)).toBeInTheDocument();
  });
});
