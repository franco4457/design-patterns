import { type Hero } from 'template-method'

abstract class HeroTemplate implements Hero {
  public health: number = 100
  protected turn = 0
  constructor(public name: string, protected readonly turnTime: boolean) {}

  abstract attack(): string

  notifyDamage(damage: number) {
    this.turn++
    this.health -= damage
  }

  isTurn() {
    return (this.turn % 2 === 0) === this.turnTime
  }
}

export class Archer extends HeroTemplate {
  public health: number = 100
  protected turn = 0
  constructor(public name: string, private readonly damage: number, turnTime: boolean) {
    super(name, turnTime)
  }

  attack() {
    this.turn++
    return `${this.name} make ${this.damage} with arrow!`
  }
}

export class Warrior extends HeroTemplate {
  public health: number = 200
  protected turn = 0
  constructor(
    public name: string,
    private readonly damage: number,
    turnTime: boolean,
    private readonly shield: number
  ) {
    super(name, turnTime)
  }

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
}
