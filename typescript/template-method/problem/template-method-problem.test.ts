import { Archer, Warrior } from '.'

describe('Template Method Problem', () => {
  it('Arhcer should be attack and defend', () => {
    const archer = new Archer('Legolas', 10, true)
    expect(archer.attack()).toBe('Legolas make 10 with arrow!')
    expect(archer.isTurn()).toBe(false)
    archer.notifyDamage(20)
    expect(archer.health).toBe(80)
    expect(archer.isTurn()).toBe(true)
  })
  it('Warrior should be attack and defend', () => {
    const warrior = new Warrior('Conan', 20, true, 10)
    expect(warrior.attack()).toBe('Conan make 20 with sword!')
    expect(warrior.isTurn()).toBe(false)
    warrior.notifyDamage(10)
    expect(warrior.health).toBe(200)
    expect(warrior.isTurn()).toBe(true)
    warrior.notifyDamage(20)
    expect(warrior.health).toBe(190)
    expect(warrior.isTurn()).toBe(false)
  })
})
