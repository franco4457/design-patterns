import { AirTransport, ShipTransport, TruckTransport, Client } from './index'
const product = { name: 'book', distance: 100 }
describe('Factory problem', () => {
  it('should be delivered by truck', () => {
    const transport = new TruckTransport(product)
    expect(transport.deliver()).toBe('book will be delivered by truck and cost 200')
  })
  it('should be delivered by air', () => {
    const transport = new AirTransport(product)
    expect(transport.deliver()).toBe('book will be delivered by air and cost 600')
  })
  it('should be delivered by ship', () => {
    const transport = new ShipTransport(product)
    expect(transport.deliver()).toBe('book will be delivered by ship and cost 400')
  })
  it('Client should be select transport', () => {
    const clientRoad = new Client(product)
    expect(clientRoad.run()).toBe('book will be delivered by truck and cost 200')
    const clientAir = new Client(product, 'air')
    expect(clientAir.run()).toBe('book will be delivered by air and cost 600')
    const clientShip = new Client(product, 'ship')
    expect(clientShip.run()).toBe('book will be delivered by ship and cost 400')
  })
})
