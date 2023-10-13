import { Customer, ShoesStore } from '.'

describe('Observer problem', () => {
  it('should be buy a shoe', () => {
    const store = new ShoesStore()
    const c1 = new Customer('John', store)
    const c2 = new Customer('Jane', store)
    const c3 = new Customer('Jack', store)
    store.addShoes(['Nike', 'Adidas', 'Puma'])
    expect(c1.buyShoe('Nike')).toBe('John bought Nike')
    expect(c2.buyShoe('Adidas')).toBe('Jane bought Adidas')
    expect(c3.buyShoe('Puma')).toBe('Jack bought Puma')
  })
  it("should not be buy a shoe if store have't shock", () => {
    const store = new ShoesStore()
    const c1 = new Customer('John', store)
    expect(c1.buyShoe('Nike')).toBe('Shoe not in stock')
  })
  it('should be buy a shoe when have shock', () => {
    const store = new ShoesStore()
    const c1 = new Customer('John', store)
    store.addShoes('Adidas')
    expect(c1.buyShoe('Nike')).toBe('Shoe not in stock')
    store.addShoes('Puma')
    store.addShoes('Nike')
    // the customer was notified when the shoe was in stock
    expect(c1.getShoes()).toEqual(['Nike'])
  })
})
