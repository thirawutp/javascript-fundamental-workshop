import fetch from "isomorphic-fetch";

const pokemonUrl = [
  "https://pokeapi.co/api/v2/pokemon/ditto",
  "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  "https://pokeapi.co/api/v2/pokemon/eevee",
  "https://pokeapi.co/api/v2/pokemon/charizard"
];

async function getAllPokemonData() {
  const responses = pokemonUrl.map(url => fetch(url).then(res => res.json()));
  let data = [];
  for await (const { base_experience, height, weight } of responses) {
    data.push({ base_experience, height, weight });
  }
  return data;
}

export default getAllPokemonData;
