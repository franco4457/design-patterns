interface IChair {
  name: string
  hasArmrests: () => boolean
  sitOn: () => string
}
interface ITable {
  name: string
  height: number
  putOn: (object: string) => string
}

interface ISofa {
  name: string
  sitOn: () => string
  hasArmrests: () => boolean
  restOn: () => string
}
interface ICLient {
  sitOnChair: () => string
  putOnTable: () => string
  restOnSofa: () => string
  canArmrestsOnSofa: () => boolean
  canArmrestsOnChair: () => boolean
}
