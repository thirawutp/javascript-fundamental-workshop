const pets = [
  { type: "cat", sound: "meow", name: "fluffykins", color: "white" },
  { type: "cat", sound: "meow", name: "bengal" },
  { type: "dog", sound: "woof", name: "siberian husky" },
  { type: "dog", sound: "woof", name: "rottweiler", color: "black" },
  { type: "bird", name: "parrot" },
  { type: "bird", sound: "tweet", name: "hummingbird", color: "brown" }
];

export function petTypeCount() {
  return pets.reduce((result, pet) => {}, {
    // ❓ implement data count for each type { [type]: amount }  
    // 🧙‍♂️ using object dynamic key and optional object destructuing technique
    // 🦊 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Accessing_properties
    return result
  });
}

export function letPetTalkByTypeAndName(type, name) {
  const filteredPet = pets
    .filter(pet => pet.type === type)
    .reduce((result, pet) => {
      // ❓ regrouping pets data to be { [name]: { sound, color } }
      // 🧙‍♂️ using object dynamic key and optional object destructuing technique
      // 🦊 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Accessing_properties
    }, {});
    // 💯 find other ways to get specific animal and and type be not using reduce

  // ❓ show the correct animal sound
  // 🧙‍♂️ using object dynamic key and optional chaining techniques
  return "";
}
