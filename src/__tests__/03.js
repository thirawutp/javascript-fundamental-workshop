import calculate from '../exercises/03'

test('should return correct plus result', () => {
  const values = calculate(8, 4, "+")
  expect(values).toBe(12)
})

test('should return correct minus result', () => {
  const values = calculate(8, 4, "-")
  expect(values).toBe(4)
})

test('should return correct multiply result', () => {
  const values = calculate(8, 4, "*")
  expect(values).toBe(32)
})

test('should return correct divided result', () => {
  const values = calculate(8, 4, "/")
  expect(values).toBe(2)
})

test('should throw error if not provided', () => {
  expect(() => calculate(8, 4, ".")).toThrow()
})
