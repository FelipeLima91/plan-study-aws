import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "@jest/globals";
import { renderHook, act } from "@testing-library/react";
import {
  useLocalStorage,
  useLocalStorageString,
  useLocalStorageBoolean,
} from "../useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("deve iniciar com valor padrão", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "default"));
    expect(result.current[0]).toBe("default");
  });

  it("deve recuperar valor do localStorage se existir", () => {
    localStorage.setItem("test-key", JSON.stringify("stored-value"));
    const { result } = renderHook(() => useLocalStorage("test-key", "default"));
    expect(result.current[0]).toBe("stored-value");
  });

  it("deve atualizar valor no localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "default"));

    act(() => {
      result.current[1]("new-value");
    });

    expect(localStorage.getItem("test-key")).toBe(JSON.stringify("new-value"));
    expect(result.current[0]).toBe("new-value");
  });

  it("deve suportar objetos e arrays", () => {
    const obj = { name: "test", value: 123 };
    const { result } = renderHook(() => useLocalStorage("test-key", {}));

    act(() => {
      result.current[1](obj);
    });

    expect(JSON.parse(localStorage.getItem("test-key") || "{}")).toEqual(obj);
  });
});

describe("useLocalStorageString", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("deve iniciar com string vazia por padrão", () => {
    const { result } = renderHook(() => useLocalStorageString("test-key", ""));
    expect(result.current[0]).toBe("");
  });

  it("deve recuperar string do localStorage", () => {
    localStorage.setItem("test-key", "stored-string");
    const { result } = renderHook(() =>
      useLocalStorageString("test-key", "default")
    );
    expect(result.current[0]).toBe("stored-string");
  });

  it("deve atualizar string no localStorage", () => {
    const { result } = renderHook(() => useLocalStorageString("test-key", ""));

    act(() => {
      result.current[1]("new-string");
    });

    expect(localStorage.getItem("test-key")).toBe("new-string");
    expect(result.current[0]).toBe("new-string");
  });
});

describe("useLocalStorageBoolean", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("deve iniciar com boolean padrão", () => {
    const { result } = renderHook(() =>
      useLocalStorageBoolean("test-key", false)
    );
    expect(result.current[0]).toBe(false);
  });

  it("deve recuperar boolean do localStorage", () => {
    localStorage.setItem("test-key", "true");
    const { result } = renderHook(() =>
      useLocalStorageBoolean("test-key", false)
    );
    expect(result.current[0]).toBe(true);
  });

  it("deve alternar boolean value", () => {
    const { result } = renderHook(() =>
      useLocalStorageBoolean("test-key", false)
    );

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1](true);
    });

    expect(localStorage.getItem("test-key")).toBe("true");
    expect(result.current[0]).toBe(true);
  });

  it('deve converter string "true" para boolean true', () => {
    localStorage.setItem("test-key", "true");
    const { result } = renderHook(() =>
      useLocalStorageBoolean("test-key", false)
    );
    expect(result.current[0]).toBe(true);
  });

  it('deve converter string "false" para boolean false', () => {
    localStorage.setItem("test-key", "false");
    const { result } = renderHook(() =>
      useLocalStorageBoolean("test-key", true)
    );
    expect(result.current[0]).toBe(false);
  });
});
