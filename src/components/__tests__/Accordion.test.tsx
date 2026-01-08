import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "../Accordion";
import { Domain } from "../../types";

const mockDomain: Domain = {
  id: "domain-1",
  title: "EC2",
  days: [
    {
      id: "day-1",
      title: "Day 1 - Basics",
      checklist: [{ id: "check-1", text: "Learn about instances" }],
    },
  ],
};

describe("Accordion", () => {
  it("deve renderizar o título do domínio", () => {
    render(<Accordion domain={mockDomain} />);
    expect(screen.getByText("EC2")).toBeInTheDocument();
  });

  it("deve alternar entre aberto e fechado ao clicar", async () => {
    const user = userEvent.setup();
    render(<Accordion domain={mockDomain} />);

    const button = screen.getByRole("button", { name: /EC2/i });

    // Começa fechado
    expect(button).toHaveClass("accordion-button");

    // Clica para abrir
    await user.click(button);
    expect(button).toHaveClass("active");

    // Clica para fechar
    await user.click(button);
    expect(button).not.toHaveClass("active");
  });

  it("deve exibir os dias quando aberto", async () => {
    const user = userEvent.setup();
    render(<Accordion domain={mockDomain} />);

    const button = screen.getByRole("button", { name: /EC2/i });
    await user.click(button);

    expect(screen.getByText("Day 1 - Basics")).toBeInTheDocument();
  });
});
