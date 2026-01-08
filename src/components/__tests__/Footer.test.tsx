import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("deve renderizar footer sem erro", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector(".footer")).toBeInTheDocument();
  });

  it("deve renderizar crédito do autor", () => {
    render(<Footer />);
    expect(screen.getByText(/Felipe Lima/i)).toBeInTheDocument();
  });

  it("deve renderizar links para GitHub e LinkedIn", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("deve renderizar informações de configuração quando fornecidas", () => {
    const mockConfig = {
      examName: "AWS Certified Solutions Architect",
      examLink: "https://aws.amazon.com/certification/",
      lastAccessDate: "2026-01-08",
    };

    render(<Footer config={mockConfig} />);
    expect(
      screen.getByText(/AWS Certified Solutions Architect/i)
    ).toBeInTheDocument();
  });

  it("deve renderizar link correto para GitHub", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/FelipeLima91/plan-study-aws"
    );
  });
});
