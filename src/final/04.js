function Animal({ name, sound, type }) {
  this.name = name
  this.sound = sound
  this.type = type

  this.talk = function() {
    return `${this.name} says ${this.sound}.`
  }
}

export default Animal
