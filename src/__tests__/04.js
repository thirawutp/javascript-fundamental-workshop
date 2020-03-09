import Animal from '../exercises/04'

let myCat

beforeAll(() => {
  myCat = new Animal({ name: "fluffykins", sound: "meow", type: "cat" })
})

test('should have name and sound', () => {
  expect(myCat.name).toBe("fluffykins")
  expect(myCat.sound).toBe("meow")
  expect(myCat.type).toBe("cat")
})

test('should talk correctly', () => {
  expect(myCat.talk()).toBe(`${myCat.name} says ${myCat.sound}.`)
})


