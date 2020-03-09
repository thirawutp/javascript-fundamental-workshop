import { getPokemonData } from "../services";

async function getPokemonDataAsync() {
  const { base_experience, height, weight } = await getPokemonDataAsync();
  return { base_experience, height, weight };
}

export default getPokemonDataAsync;
