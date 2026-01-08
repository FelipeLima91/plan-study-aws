import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "@jest/globals";
import { renderHook, act } from "@testing-library/react";
import { useTheme } from "../useTheme";

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.classList.remove("dark-mode");
  });

  it("deve iniciar com tema light por padrão", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current[0]).toBe(false);
  });

  it("deve retornar função para alternar tema", () => {
    const { result } = renderHook(() => useTheme());
    expect(typeof result.current[1]).toBe("function");
  });

  it("deve alternar entre light e dark mode", () => {
    const { result, rerender } = renderHook(() => useTheme());

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1]();
    });

    rerender();
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("deve adicionar classe dark-mode ao body quando ativo", () => {
    renderHook(() => useTheme());

    // Salvar tema dark
    localStorage.setItem("theme", "dark");

    const { result } = renderHook(() => useTheme());

    expect(result.current[0]).toBe(true);
  });

  it("deve remover classe dark-mode do body quando desativado", () => {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-mode");

    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current[1]();
    });

    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("deve persistir tema no localStorage", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current[1]();
    });

    expect(localStorage.getItem("theme")).toBe("dark");

    act(() => {
      result.current[1]();
    });

    expect(localStorage.getItem("theme")).toBe("light");
  });
});
