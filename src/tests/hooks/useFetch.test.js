import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Test for useFetch hook", () => {

    jest.setTimeout(30000);
  test("should return default info", () => {
    const { result } = renderHook(() =>
      useFetch(`${process.env.REACT_APP_BB_LINK}/quotes/1`)
    );

    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("should await for the results", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`${process.env.REACT_APP_BB_LINK}/quotes/1ag`)
    );

    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBeGreaterThanOrEqual(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("should await for the results asd", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`${process.env.REACT_APP_BB_LINK}/quotesladf/1`)
    );

    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    console.log(error);

    // expect(data.length).toBeGreaterThanOrEqual(1);
    // expect(loading).toBe(false);
    expect(error).toBe(null);
  });
});
