import { WordCollection } from '.'

describe('Iterator Problem', () => {
  it('should be iterated words colection', () => {
    const collection = new WordCollection(['first', 'second', 'third'])
    collection.addItem('fourth')
    collection.addItem('fifth')
    expect(collection.getItems()).toEqual(['first', 'second', 'third', 'fourth', 'fifth'])
    const items = []
    for (let i = 0; i < collection.getCount(); i++) {
      items.push(collection.getItems()[i])
    }
    expect(items).toEqual(['first', 'second', 'third', 'fourth', 'fifth'])
  })
  it('should be iterated numbers colection reversed', () => {
    const collection = new WordCollection(['first', 'second', 'third'])
    collection.addItem('fourth')
    collection.addItem('fifth')
    expect(collection.getItems()).toEqual(['first', 'second', 'third', 'fourth', 'fifth'])
    const items = []
    for (let i = collection.getCount() - 1; i >= 0; i--) {
      items.push(collection.getItems()[i])
    }
    expect(items).toEqual(['fifth', 'fourth', 'third', 'second', 'first'])
  })
})
