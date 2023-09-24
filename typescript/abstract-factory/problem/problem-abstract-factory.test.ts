import {
  ArtDecoChairFactory,
  ArtDecoSofaFactory,
  ArtDecoTableFactory,
  Client,
  ModernChairFactory,
  ModernSofaFactory,
  ModernTableFactory,
  VictorianChairFactory,
  VictorianSofaFactory,
  VictorianTableFactory
} from '.'

describe('Abstract Factory Problem', () => {
  it('Client should be test Art Decó Fortnitures', () => {
    const client = new Client(
      new ArtDecoChairFactory(),
      new ArtDecoTableFactory(),
      new ArtDecoSofaFactory()
    )
    expect(client.putOnTable()).toBe('Putting object on ArtDeco Table')
    expect(client.sitOnChair()).toBe('Sitting on ArtDeco Chair')
    expect(client.restOnSofa()).toBe('Resting on ArtDeco Sofa')
    expect(client.canArmrestsOnChair()).toBe(true)
    expect(client.canArmrestsOnSofa()).toBe(true)
  })
  it('Client should be test Victorian Fortnitures', () => {
    const client = new Client(
      new VictorianChairFactory(),
      new VictorianTableFactory(),
      new VictorianSofaFactory()
    )
    expect(client.putOnTable()).toBe('Putting object on Victorian Table')
    expect(client.sitOnChair()).toBe('Sitting on Victorian Chair')
    expect(client.restOnSofa()).toBe('Resting on Victorian Sofa')
    expect(client.canArmrestsOnChair()).toBe(true)
    expect(client.canArmrestsOnSofa()).toBe(true)
  })
  it('Client should be test Modern Fortnitures', () => {
    const client = new Client(
      new ModernChairFactory(),
      new ModernTableFactory(),
      new ModernSofaFactory()
    )
    expect(client.putOnTable()).toBe('Putting object on Modern Table')
    expect(client.sitOnChair()).toBe('Sitting on Modern Chair')
    expect(client.restOnSofa()).toBe('Resting on Modern Sofa')
    expect(client.canArmrestsOnChair()).toBe(false)
    expect(client.canArmrestsOnSofa()).toBe(false)
  })
})
