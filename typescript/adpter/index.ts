export interface IRoundHole {
  getRadius: () => number
  fits: (peg: IRoundPeg) => boolean
}

export interface IRoundPeg {
  getRadius: () => number
}
export interface ISquarePeg {
  getWidth: () => number
}
