import { Computer } from '.'

describe('Facade Problem ', () => {
  it('turn on Computer', () => {
    const computer = new Computer()
    let error = false
    try {
      computer.powerOn()
      computer.post()
      computer.showBIOS()
      computer.showWelcome()
      computer.showDesktop()
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
    let error = false
    try {
      computer.powerOn()
      computer.post()
      computer.showBIOS()
      computer.showWelcome()
      computer.showDesktop()
      computer.closeApps()
      computer.showLoadingScreen()
      computer.saveMemory()
      computer.shotDown()
      computer.powerOff()
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
