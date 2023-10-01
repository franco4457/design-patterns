export class Phone {
  constructor(public name: string, public price: number) {}
}
export class AirPods {
  constructor(public name: string, public price: number) {}
}

export class Box {
  constructor(public products: Array<Phone | AirPods>) {}
}

export class Package {
  constructor(public boxes: Array<Box | Phone | AirPods>) {}
  getPrice(): number {
    let price = 0
    this.boxes.forEach((box) => {
      if (box instanceof Box) {
        box.products.forEach((product) => {
          price += product.price
        })
        price += 5
      } else {
        price += box.price
      }
    })
    return price
  }
}
