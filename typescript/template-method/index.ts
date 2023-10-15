export interface Hero {
  health: number
  name: string
  attack: () => string
  isTurn: () => boolean
  notifyDamage: (damage: number) => void
}
