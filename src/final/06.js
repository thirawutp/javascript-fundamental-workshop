const pets = [
  { type: "cat", sound: "meow", name: "fluffykins", color: "white" },
  { type: "cat", sound: "meow", name: "bengal" },
  { type: "dog", sound: "woof", name: "siberian husky" },
  { type: "dog", sound: "woof", name: "rottweiler", color: "black" },
  { type: "bird", name: "parrot" },
  { type: "bird", sound: "tweet", name: "hummingbird", color: "brown" }
];

export function petTypeCount() {
  return pets.reduce((result, pet) => {
    if (isNaN(result[pet.type])) {
      result[pet.type] = 0;
    }
    result[pet.type]++;
    return result;
  }, {});
}

export function letPetTalkByTypeAndName(type, name) {
  const filteredPet = pets
    .filter(pet => pet.type === type)
    .reduce((result, { name, sound, color }) => {
      result[name] = { sound, color };
      return result;
    }, {});
  return filteredPet[name]?.sound
}
