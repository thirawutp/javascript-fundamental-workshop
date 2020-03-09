class Animal {
  constructor({ name, sound, type }) {
    this.name = name
    this.sound = type
    this.type = type
  }

  // ❓ fixing talk function to maintain Animal scope of this in any situations
  // 🦊 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
  talk() {
    return `${this.name} says ${this.sound}`
  }
}

class Cat extends Animal {
  constructor({ name }) {
    super({ name, sound: 'meow', type: 'cat' })
    // 💯 instead of fixing Animal this function using object utilities function to handle scope error situation
  }
}

export default Cat
