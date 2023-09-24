import { type IClient, type Product } from '..'

interface Transport {
  name: string
  costOperate: number
  calculateCost: () => number
  getProduct: () => Product
}

abstract class TransportFactory {
  public abstract createTransport(): Transport
  deliver(): string {
    const transport = this.createTransport()
    return `${transport.getProduct().name} will be delivered by ${
      transport.name
    } and cost ${transport.calculateCost()}`
  }
}

class Truck implements Transport {
  name = 'truck'
  costOperate = 2
  constructor(public readonly product: Product) {
    this.product = product
  }

  calculateCost(): number {
    return this.product.distance * this.costOperate
  }

  getProduct(): Product {
    return this.product
  }
}

class Air implements Transport {
  name = 'air'
  costOperate = 6
  constructor(public readonly product: Product) {}
  calculateCost(): number {
    return this.product.distance * this.costOperate
  }

  getProduct(): Product {
    return this.product
  }
}
class Ship implements Transport {
  name = 'ship'
  costOperate = 4
  constructor(public readonly product: Product) {}
  calculateCost(): number {
    return this.product.distance * this.costOperate
  }

  getProduct(): Product {
    return this.product
  }
}

export class AirTransport extends TransportFactory {
  constructor(private readonly product: Product) {
    super()
  }

  createTransport(): Transport {
    return new Air(this.product)
  }
}
export class ShipTransport extends TransportFactory {
  constructor(private readonly product: Product) {
    super()
  }

  createTransport(): Transport {
    return new Ship(this.product)
  }
}
export class TruckTransport extends TransportFactory {
  constructor(private readonly product: Product) {
    super()
  }

  public createTransport(): Transport {
    return new Truck(this.product)
  }
}
export class Client implements IClient {
  constructor(private readonly product: Product, private readonly transportby?: string) {}
  run(): string {
    let transport
    switch (this.transportby) {
      case 'truck':
        transport = new TruckTransport(this.product)
        break
      case 'air':
        transport = new AirTransport(this.product)
        break
      case 'ship':
        transport = new ShipTransport(this.product)
        break
      default:
        transport = new TruckTransport(this.product)
    }
    return transport.deliver()
  }
}
