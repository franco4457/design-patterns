abstract class FornitureFactory {
  abstract createChair(): IChair
  abstract createTable(): ITable
  abstract createSofa(): ISofa
  sitOnChair(): string {
    return this.createChair().sitOn()
  }

  putOnTable(object: string): string {
    return this.createTable().putOn(object)
  }

  restOnSofa(): string {
    return this.createSofa().restOn()
  }

  canArmrestsOnChair(): boolean {
    return this.createChair().hasArmrests()
  }

  canArmrestsOnSofa(): boolean {
    return this.createSofa().hasArmrests()
  }
}

class Sofa implements ISofa {
  constructor(public readonly name: string, private readonly armrests: boolean) {
    this.name = name
  }

  sitOn(): string {
    return `Sitting on ${this.name}`
  }

  hasArmrests(): boolean {
    return this.armrests
  }

  restOn(): string {
    return `Resting on ${this.name}`
  }
}

class Chair implements IChair {
  constructor(public readonly name: string, private readonly armrests: boolean) {
    this.name = name
  }

  sitOn() {
    return `Sitting on ${this.name}`
  }

  hasArmrests() {
    return this.armrests
  }
}

class Table implements ITable {
  constructor(public readonly name: string, public readonly height: number) {
    this.name = name
  }

  putOn(object: string) {
    return `Putting ${object} on ${this.name}`
  }
}

/* VICTORIAN */
export class VictorianFornitureFactory extends FornitureFactory {
  createChair(): Chair {
    return new Chair('Victorian Chair', true)
  }

  createTable(): Table {
    return new Table('Victorian Table', 0.5)
  }

  createSofa(): Sofa {
    return new Sofa('Victorian Sofa', true)
  }
}
export class ArtDecoFornitureFactory extends FornitureFactory {
  createChair(): Chair {
    return new Chair('ArtDeco Chair', true)
  }

  createTable(): Table {
    return new Table('ArtDeco Table', 0.6)
  }

  createSofa(): Sofa {
    return new Sofa('ArtDeco Sofa', true)
  }
}
export class ModernFornitureFactory extends FornitureFactory {
  createChair(): Chair {
    return new Chair('Modern Chair', false)
  }

  createTable(): Table {
    return new Table('Modern Table', 0.4)
  }

  createSofa(): Sofa {
    return new Sofa('Modern Sofa', false)
  }
}
export class Client {
  constructor(private readonly fornitureFactory: FornitureFactory) {}

  sitOnChair(): string {
    return this.fornitureFactory.sitOnChair()
  }

  putOnTable(): string {
    return this.fornitureFactory.putOnTable('object')
  }

  restOnSofa(): string {
    return this.fornitureFactory.restOnSofa()
  }

  canArmrestsOnChair(): boolean {
    return this.fornitureFactory.canArmrestsOnChair()
  }

  canArmrestsOnSofa(): boolean {
    return this.fornitureFactory.canArmrestsOnSofa()
  }
}

const CLIENT_DICTIONARY = {
  'art-deco': new Client(new ArtDecoFornitureFactory()),
  modern: new Client(new ModernFornitureFactory()),
  victorian: new Client(new VictorianFornitureFactory())
}

export class App {
  constructor(private readonly type: 'art-deco' | 'modern' | 'victorian') {}
  run() {
    return CLIENT_DICTIONARY[this.type]
  }
}
