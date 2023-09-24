import { App } from '.'

describe('Abstract Factory Solution', () => {
  it('Client should be test Art Decó Fortnitures', () => {
    const client = new App('art-deco').run()

    expect(client.putOnTable()).toBe('Putting object on ArtDeco Table')
    expect(client.sitOnChair()).toBe('Sitting on ArtDeco Chair')
    expect(client.restOnSofa()).toBe('Resting on ArtDeco Sofa')
    expect(client.canArmrestsOnChair()).toBe(true)
    expect(client.canArmrestsOnSofa()).toBe(true)
  })
  it('Client should be test Victorian Fortnitures', () => {
    const client = new App('victorian').run()

    expect(client.putOnTable()).toBe('Putting object on Victorian Table')
    expect(client.sitOnChair()).toBe('Sitting on Victorian Chair')
    expect(client.restOnSofa()).toBe('Resting on Victorian Sofa')
    expect(client.canArmrestsOnChair()).toBe(true)
    expect(client.canArmrestsOnSofa()).toBe(true)
  })
  it('Client should be test Modern Fortnitures', () => {
    const client = new App('modern').run()
    expect(client.putOnTable()).toBe('Putting object on Modern Table')
    expect(client.sitOnChair()).toBe('Sitting on Modern Chair')
    expect(client.restOnSofa()).toBe('Resting on Modern Sofa')
    expect(client.canArmrestsOnChair()).toBe(false)
    expect(client.canArmrestsOnSofa()).toBe(false)
  })
})
