import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";
import { renderHook } from "@testing-library/react";
import { useCountdown } from "../useCountdown";

describe("useCountdown", () => {
  it("deve exibir mensagem padrão quando sem data", () => {
    const { result } = renderHook(() => useCountdown(null));
    expect(result.current).toBe("Insira a data da prova abaixo.");
  });

  it("deve exibir mensagem padrão quando data é string vazia", () => {
    const { result } = renderHook(() => useCountdown(""));
    expect(result.current).toBe("Insira a data da prova abaixo.");
  });

  it("deve calcular dias restantes corretamente", () => {
    // Data futura
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);

    const { result } = renderHook(() => useCountdown(futureDate.toISOString()));

    expect(result.current).toContain("Faltam");
    expect(result.current).toContain("dias");
  });

  it("deve exibir mensagem quando prova já ocorreu", () => {
    // Data passada
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);

    const { result } = renderHook(() => useCountdown(pastDate.toISOString()));

    expect(result.current).toContain("já ocorreu");
  });

  it("deve retornar countdown text correto", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);

    const { result } = renderHook(() => useCountdown(futureDate.toISOString()));

    expect(result.current).toMatch(/Faltam \d+ dias para a prova!/);
  });
});
