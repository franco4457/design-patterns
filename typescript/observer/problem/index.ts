export class ShoesStore {
  private shoes: string[] = []

  addShoes(shoe: string | string[]) {
    if (typeof shoe === 'string') {
      shoe = [shoe]
    }
    this.shoes.push(...shoe)
  }

  isInStock(shoe: string): boolean {
    return this.shoes.includes(shoe)
  }

  buyShoes(shoe: string) {
    const index = this.shoes.indexOf(shoe)
    if (index > -1) {
      const s1 = this.shoes.slice(0, index)
      const s2 = this.shoes.slice(index + 1)
      this.shoes = [...s1, ...s2]
    }
  }
}

export class Customer {
  private readonly shoes: string[] = []
  constructor(private readonly name: string, private readonly store: ShoesStore) {}
  getShoes() {
    return this.shoes
  }

  buyShoes(shoe: string) {
    if (this.store.isInStock(shoe)) {
      this.store.buyShoes(shoe)
      this.shoes.push(shoe)
      return `${this.name} bought ${shoe}`
    } else {
      return 'Shoe not in stock'
    }
  }
}
