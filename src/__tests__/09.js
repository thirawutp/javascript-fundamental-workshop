import { promiseSum, getPokemonDataPromise } from "../exercises/09";

describe("09", () => {
  test("should resolved fetch promise correctly", () => {
    const data = { base_experience: 101, height: 3, weight: 40 };

    expect.assertions(3);
    getPokemonDataPromise().then(pokemonData => {
      expect(pokemonData.base_experience).toBe(data.base_experience);
      expect(pokemonData.height).toBe(data.height);
      expect(pokemonData.weight).toBe(data.weight);
    });
  });

  test("should resolved custom promise correctly", () => {
    expect(promiseSum(10, 10)).resolves.toBe(20);
  });
});
