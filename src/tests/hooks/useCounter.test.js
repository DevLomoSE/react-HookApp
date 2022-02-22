import { act, renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Test for useCounter hook", () => {
  test("should return the default values", () => {
    const { result } = renderHook(() => useCounter());

    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
    expect(typeof result.current.counter).toBe("number");

    expect( result.current.counter).toEqual(10);
  });

  test('should counter to be 50', () => {
    const { result } = renderHook(() => useCounter(50));
    
    expect(result.current.counter).toEqual(50);
  });

  test("should increment by 1 and return 51", () => {
    const { result } = renderHook(() => useCounter(50));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(51);
  });

  test("should decrement by 1 and return 49", () => {
    const { result } = renderHook(() => useCounter(50));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(49);
  });

  test("should reset to 50 after increment  by 1", () => {
    const { result } = renderHook(() => useCounter(50));
    const { reset, increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(51);

    act(() => {
      reset();
    });

    expect(result.current.counter).toBe(50);
  });

  test('should reset to 50 after decrement by 1', () => {
      const { result } = renderHook( () => useCounter(50));
      const { reset, decrement } = result.current;

      act( () => {
          decrement();
      });

      expect(result.current.counter).toBe(49);

      act(() => {
          reset();
      });

      expect(result.current.counter).toBe(50);
  });
});
