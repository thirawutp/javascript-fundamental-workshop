import globalScopeVariable from '../exercises/01'

test('should receive string and return number result', () => {
  const value = globalScopeVariable("the quick brown fox jumps over the lazy dogs")
  expect(typeof (value)).toBe("number")
})

test('should receive array of string adn return number result', () => {
  const value = globalScopeVariable([])
  expect(typeof (value)).toBe("number")
})
