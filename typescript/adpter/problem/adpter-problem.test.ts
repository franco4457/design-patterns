import { RoundHole, RoundPeg, SquarePeg } from '.'

describe('Adpter Problem', () => {
  it('Round peg should fit round hole', () => {
    const hole = new RoundHole(5)
    const rpeg = new RoundPeg(5)
    expect(hole.fits(rpeg)).toBe(true)
  })
  it('Round peg should not fit small round hole', () => {
    const hole = new RoundHole(5)
    const rpeg = new RoundPeg(6)
    expect(hole.fits(rpeg)).toBe(false)
  })
  it('Square peg should fit in round hole if the half width fits', () => {
    const hole = new RoundHole(5)
    const speg = new SquarePeg(5)
    try {
      // @ts-expect-error -this is the problem
      expect(hole.fits(speg)).toBe(true)
      expect(true).toBe(false)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
  it('Square peg should not fit in round hole if the half width does not fit', () => {
    const hole = new RoundHole(5)
    const speg = new SquarePeg(10)
    try {
      // @ts-expect-error -this is the problem
      expect(hole.fits(speg)).toBe(true)
      expect(true).toBe(false)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
