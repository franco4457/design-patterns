import { NumberFinder } from '.'

const numbers = [10, 22, 3, 14, 51, 26]
describe('Strategy Solution', () => {
  it('should be find a number linear', () => {
    const nummberFinder = new NumberFinder('linear')
    const number = 3
    const finded = nummberFinder.exec(numbers, number)
    expect(finded).toBe(3)
  })
  it('should be find a number reverse', () => {
    const nummberFinder = new NumberFinder('reverse')
    const number = 3
    const finded = nummberFinder.exec(numbers, number)
    expect(finded).toBe(3)
  })
  it('should be find a number binary', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const nummberFinder = new NumberFinder('binary')
    const number = 6
    const finded = nummberFinder.exec(numbers, number)
    expect(finded).toBe(6)
  })
  it('should be return false', () => {
    const nummberFinder = new NumberFinder('linear')
    const number = 100
    const finded = nummberFinder.exec(numbers, number)
    expect(finded).toBe(false)
  })
  it('should be change method', () => {
    const nummberFinder = new NumberFinder('linear')
    const number = 51
    const finded = nummberFinder.exec(numbers, number)
    expect(finded).toBe(51)
    nummberFinder.setMethod('reverse')
    const findedReverse = nummberFinder.exec(numbers, number)
    expect(findedReverse).toBe(51)
  })
})
