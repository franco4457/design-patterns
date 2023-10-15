import { type Hero } from 'template-method'

export class Archer implements Hero {
  public health: number = 100
  private turn = 0
  constructor(
    public name: string,
    private readonly damage: number,
    private readonly turnTime: boolean
  ) {}

  attack() {
    this.turn++
    return `${this.name} make ${this.damage} with arrow!`
  }

  notifyDamage(damage: number) {
    this.turn++
    this.health -= damage
  }

  isTurn() {
    return (this.turn % 2 === 0) === this.turnTime
  }
}

export class Warrior implements Hero {
  public health: number = 200
  private turn = 0
  constructor(
    public name: string,
    private readonly damage: number,
    private readonly turnTime: boolean,
    private readonly shield: number
  ) {}

  attack() {
    this.turn++
    return `${this.name} make ${this.damage} with sword!`
  }

  notifyDamage(damage: number) {
    this.turn++
    damage -= this.shield
    if (damage > 0) {
      this.health -= damage
    }
  }

  isTurn() {
    return (this.turn % 2 === 0) === this.turnTime
  }
}
