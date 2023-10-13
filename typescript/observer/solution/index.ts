interface Notifier {
  notify: (event: string) => void
  suscribe: (observer: Observer, event: string) => void
  unsuscribe: (observer: Observer, event: string) => void
}
interface Observer {
  update: (event: string) => void
}

export class ShoesStore implements Notifier {
  private readonly suscribers = new Map<string, Observer[]>()
  private readonly shoes: string[] = []
  notify(event: string) {
    this.suscribers.get(event)?.forEach((observer) => {
      observer.update(event)
    })
  }

  suscribe(observer: Observer, shoe: string) {
    if (!this.suscribers.has(shoe)) {
      this.suscribers.set(shoe, [])
    }
    this.suscribers.get(shoe)?.push(observer)
  }

  unsuscribe(observer: Observer, shoe: string) {
    const subs = this.suscribers.get(shoe) ?? []
    subs.splice(subs.indexOf(observer), 1)
    this.suscribers.set(shoe, subs)
  }

  addShoes(shoe: string | string[]) {
    if (typeof shoe === 'string') {
      shoe = [shoe]
    }
    this.shoes.push(...shoe)
    shoe.forEach((s) => {
      this.notify(s)
    })
  }

  isInStock(shoe: string): boolean {
    return this.shoes.includes(shoe)
  }
}

export class Customer implements Observer {
  private readonly shoes: string[] = []
  update(event: string) {
    this.buyShoe(event)
  }

  constructor(private readonly name: string, private readonly store: ShoesStore) {}
  getShoes() {
    return this.shoes
  }

  buyShoe(shoe: string) {
    if (this.store.isInStock(shoe)) {
      this.shoes.push(shoe)
      this.store.unsuscribe(this, shoe)
      return `${this.name} bought ${shoe}`
    } else {
      this.store.suscribe(this, shoe)
      return 'Shoe not in stock'
    }
  }
}
