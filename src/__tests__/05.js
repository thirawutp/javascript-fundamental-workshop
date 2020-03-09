import Cat from '../exercises/05'

test('should talk correctly in any scope', () => {
  const fullykinsCat = new Cat({ name: 'fullykins' })
  const fullykinsCatTalk = fullykinsCat.talk

  expect(fullykinsCatTalk()).toBe(fullykinsCat.talk())
})
