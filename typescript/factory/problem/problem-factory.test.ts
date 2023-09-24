import { Client } from './index'
const product = { name: 'book', distance: 100 }
describe('Factory problem', () => {
  it('should be delivered by truck', () => {
    const transport = new Client(product, 'truck')
    expect(transport.run()).toBe('book will be delivered and cost 200')
  })
  it('should be delivered by ship', () => {
    const transport = new Client(product, 'ship')
    expect(transport.run()).toBe('book will be delivered by ship and cost 400')
  })
  it('should be delivered by air', () => {
    const transport = new Client(product, 'air')
    expect(transport.run()).toBe('book will be delivered by air and cost 600')
  })
})
