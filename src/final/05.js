class Animal {
  constructor({ name, sound, type }) {
    this.name = name
    this.sound = type
    this.type = type
  }

  talk = () => {
    return `${this.name} says ${this.sound}`
  }
}

class Cat extends Animal {
  constructor({ name }) {
    super({ name, sound: 'meow', type: 'cat' })
    this.talk = super.talk.bind(this)
  }
}

export default Cat
