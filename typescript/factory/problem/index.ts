import { type Product } from '..'

export class Transport {
  private readonly truckOperateCost = 2
  private readonly airOperateCost = 6
  private readonly shipOperateCost = 4
  constructor(private readonly product: Product) {}
  calculateCost(): number {
    return this.product.distance * this.truckOperateCost
  }

  deliver(): string {
    return `${this.product.name} will be delivered and cost ${this.calculateCost()}`
  }

  calculateCostByAir(): number {
    return this.product.distance * this.airOperateCost
  }

  deliverByAir(): string {
    return `${this.product.name} will be delivered by air and cost ${this.calculateCostByAir()}`
  }

  calculateCostByShip(): number {
    return this.product.distance * this.shipOperateCost
  }

  deliverByShip(): string {
    return `${this.product.name} will be delivered by ship and cost ${this.calculateCostByShip()}`
  }
}
export class LogistcTrasnport {
  constructor(private readonly product: Product, private readonly transportby?: string) {}
  run(): string {
    let deliver
    switch (this.transportby) {
      case 'truck':
        deliver = new Transport(this.product).deliver()
        return deliver
      case 'air':
        deliver = new Transport(this.product).deliverByAir()
        return deliver
      case 'ship':
        deliver = new Transport(this.product).deliverByShip()
        return deliver
      default:
        deliver = new Transport(this.product).deliver()
        return deliver
    }
  }
}
