import getAllPokemonData from "../exercises/11";

describe("11", () => {
  test("should return data correctly", async () => {
    expect.assertions(4);

    const pokemons = await getAllPokemonData();

    pokemons.map(pokemon => expect(pokemon).not.toBeUndefined());
  });
});
