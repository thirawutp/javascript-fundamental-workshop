import localScopeVariable from "../exercises/02";

describe("02", () => {
  test("should receive string and return number result", () => {
    const value = localScopeVariable(
      "the quick brown fox jumps over the lazy dogs"
    );
    expect(typeof value).toBe("number");
  });

  test("should receive array of string and return number", () => {
    const value = localScopeVariable(["fox", "cat", "rat"]);
    expect(typeof value).toBe("number");
    expect(value).toBe(9);
  });
});
