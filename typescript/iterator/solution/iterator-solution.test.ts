import { WordsCollection } from '.'

const collection = new WordsCollection(['first', 'second', 'third'])
collection.addItem('fourth')
collection.addItem('fifth')

describe('Iterator Solution', () => {
  it('should be iterated words colection', () => {
    const iterator = collection.getIterator()
    expect(iterator.current()).toBe('first')
    const items = []
    while (iterator.hasMore()) {
      items.push(iterator.next())
    }
    expect(items).toEqual(['first', 'second', 'third', 'fourth', 'fifth'])
  })
  it('should be iterated numbers colection reversed', () => {
    const iterator = collection.getReverseIterator()
    expect(iterator.current()).toBe('fifth')
    const items = []
    while (iterator.hasMore()) {
      items.push(iterator.next())
    }
    expect(items).toEqual(['fifth', 'fourth', 'third', 'second', 'first'])
  })
  it('should be rewinded', () => {
    const iterator = collection.getIterator()
    expect(iterator.current()).toBe('first')
    let firstRewind = true
    const items = []
    while (iterator.hasMore()) {
      if (iterator.key() === 3 && firstRewind) {
        iterator.rewind()
        firstRewind = false
      }
      items.push(iterator.next())
    }
    expect(items).toEqual([
      'first',
      'second',
      'third',
      'first',
      'second',
      'third',
      'fourth',
      'fifth'
    ])
  })
})
