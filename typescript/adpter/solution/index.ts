import { type ISquarePeg, type IRoundHole, type IRoundPeg } from 'adpter'

export class RoundHole implements IRoundHole {
  constructor(private readonly radius: number) {}

  getRadius() {
    return this.radius
  }

  fits(peg: IRoundPeg) {
    return this.getRadius() >= peg.getRadius()
  }
}

export class RoundPeg implements IRoundPeg {
  constructor(private readonly radius: number) {}

  getRadius() {
    return this.radius
  }
}
export class SquarePeg implements ISquarePeg {
  constructor(private readonly width: number) {}

  getWidth() {
    return this.width
  }
}
export class SquarePegAdapter implements IRoundPeg {
  constructor(private readonly peg: ISquarePeg) {}

  getRadius() {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2
  }
}
