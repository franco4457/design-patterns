import { type Product } from '..'

interface Transport {
  name: string
  costOperate: number
  deliver: () => string
  calculateCost: () => number
}

abstract class TransportFactory {
  public abstract createTransport(): Transport
}

class Truck implements Transport {
  name = 'truck'
  costOperate = 2
  constructor(private readonly product: Product) {}
  calculateCost(): number {
    return this.product.distance * this.costOperate
  }

  deliver(): string {
    return `${this.product.name} will be delivered and cost ${this.calculateCost()}`
  }
}

class Air implements Transport {
  name = 'air'
  costOperate = 6
  constructor(private readonly product: Product) {}
  calculateCost(): number {
    return this.product.distance * this.costOperate
  }

  deliver(): string {
    return `${this.product.name} will be delivered by air and cost ${this.calculateCost()}`
  }
}
class Ship implements Transport {
  name = 'ship'
  costOperate = 4
  constructor(private readonly product: Product) {}
  calculateCost(): number {
    return this.product.distance * this.costOperate
  }

  deliver(): string {
    return `${this.product.name} will be delivered by ship and cost ${this.calculateCost()}`
  }
}

class LogistcTrasnport implements TransportFactory {
  constructor(private readonly product: Product, private readonly transportby?: string) {}

  createTransport(): Transport {
    switch (this.transportby) {
      case 'truck':
        return new Truck(this.product)
      case 'air':
        return new Air(this.product)
      case 'ship':
        return new Ship(this.product)
      default:
        return new Truck(this.product)
    }
  }
}
export class Client {
  constructor(private readonly product: Product, private readonly transportby?: string) {}
  run(): string {
    const transport = new LogistcTrasnport(this.product, this.transportby)
    return transport.createTransport().deliver()
  }
}
