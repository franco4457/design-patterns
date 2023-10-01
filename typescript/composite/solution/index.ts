interface IProduct {
  getPrice: () => number
}

export class Phone implements IProduct {
  constructor(public name: string, public price: number) {}
  getPrice(): number {
    return this.price
  }
}

export class AirPods implements IProduct {
  constructor(public name: string, public price: number) {}
  getPrice(): number {
    return this.price
  }
}

export class Box implements IProduct {
  private readonly products: IProduct[] = []
  getPrice(): number {
    let price = 5
    this.products.forEach((product) => {
      price += product.getPrice()
    })
    return price
  }

  addProduct(product: IProduct) {
    this.products.push(product)
  }
}

export class Package implements IProduct {
  private readonly products: IProduct[] = []
  getPrice(): number {
    let price = 0
    this.products.forEach((product) => {
      price += product.getPrice()
    })
    return price
  }

  addProduct(product: IProduct) {
    this.products.push(product)
  }
}
