import getPokemonDataAsync from "../final/10";

const data = { base_experience: 101, height: 3, weight: 40 };

describe("10", () => {
  test("should have correct data", () => {
    expect.assertions(3);
    getPokemonDataAsync().then(pokemonData => {
      expect(pokemonData.base_experience).toBe(data.base_experience);
      expect(pokemonData.weight).toBe(data.weight);
      expect(pokemonData.height).toBe(data.height);
    });
  });
});
