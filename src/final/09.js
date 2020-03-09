import { getPokemonData } from "../services";

function getPokemonDataPromise() {
  return getPokemonData().then(({ base_experience, weight, height }) => {
    return { base_experience, height, weight };
  });
}

function promiseSum(num1, num2) {
  return new Promise((resolve, reject) => {
    const result = num1 + num2;
    resolve(result);
  });
}

export { promiseSum, getPokemonDataPromise };
