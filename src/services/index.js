export function getPokemonData() {
  return fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(res => {
    return res.json();
  });
}
