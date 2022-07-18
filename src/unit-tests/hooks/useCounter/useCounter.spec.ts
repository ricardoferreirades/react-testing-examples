import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  describe("When initiates", () => {
    it("inits with 0 when no value is passed", () => {
      const { result } = renderHook(() => useCounter());
      const { count } = result.current;
      expect(count).toBe(0);
    });

    it("inits with 10 when the initial value is set as 10", () => {
      const { result } = renderHook(useCounter, { initialProps: 10 });
      const { count } = result.current;
      expect(count).toBe(10);
    });
  });

  describe("when the increment method is called", () => {
    it("sets the count to 1 when its inital value is 0", async () => {
      const { result } = renderHook(useCounter, { initialProps: 0 });

      act(() => {
        result.current.increment();
      });

      expect(result.current.count).toBe(1);
    });
  });

  describe("when the decrement methot is called", () => {
    it("sets the count to 0 when its inital value is 1", () => {
      const { result } = renderHook(useCounter, { initialProps: 1 });

      act(() => {
        result.current.decrement();
      });

      expect(result.current.count).toBe(0);
    });
  });
});
