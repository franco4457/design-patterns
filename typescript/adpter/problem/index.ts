import { type IRoundPeg, type IRoundHole, type ISquarePeg } from 'adpter'

export class RoundHole implements IRoundHole {
  private readonly radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  public getRadius(): number {
    return this.radius
  }

  public fits(peg: IRoundPeg): boolean {
    return this.getRadius() >= peg.getRadius()
  }
}

export class RoundPeg implements IRoundPeg {
  private readonly radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  public getRadius(): number {
    return this.radius
  }
}

export class SquarePeg implements ISquarePeg {
  private readonly width: number

  constructor(width: number) {
    this.width = width
  }

  public getWidth(): number {
    return this.width
  }
}
