import { Computer, ComputerFacade } from '.'

describe('Facade Problem ', () => {
  it('turn on Computer', () => {
    const computer = new Computer()
    const computerFacade = new ComputerFacade(computer)
    let error = false
    try {
      computerFacade.turnOn()
    } catch {
      error = true
    }
    expect(error).toBe(false)
    expect(computer.getStatus()).toEqual({
      processor: true,
      gpu: true,
      memory: true,
      os: true,
      apps: true
    })
  })
  it('turn off Computer', () => {
    const computer = new Computer()
    const computerFacade = new ComputerFacade(computer)
    let error = false
    try {
      computerFacade.turnOn()
      computerFacade.turnOff()
    } catch {
      error = true
    }
    expect(error).toBe(false)
    expect(computer.getStatus()).toEqual({
      processor: false,
      gpu: false,
      memory: false,
      os: false,
      apps: false
    })
  })
})
