import delaySum from "../exercises/08";

describe("08", () => {
  test("should have called", () => {
    const callback = jest.fn();
    delaySum({}, callback);
    expect(callback).toHaveBeenCalled();
  });

  test("should work correctly", () => {
    const callback = result => {
      expect(result).toBe(20);
    };

    delaySum({ num1: 10, num2: 10 }, callback);
  });
});
