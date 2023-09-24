abstract class ChairFactory {
  abstract createChair(): Chair
}
abstract class TableFactory {
  abstract createTable(): Table
}
abstract class SofaFactory {
  abstract createSofa(): Sofa
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
/* MODERN */
export class ModernChairFactory extends ChairFactory {
  createChair(): Chair {
    return new Chair('Modern Chair', false)
  }
}
export class ModernTableFactory extends TableFactory {
  createTable(): ITable {
    return new Table('Modern Table', 0.4)
  }
}

export class ModernSofaFactory extends SofaFactory {
  createSofa(): Sofa {
    return new Sofa('Modern Sofa', false)
  }
}

/* VICTORIAN */
export class VictorianChairFactory extends ChairFactory {
  createChair(): Chair {
    return new Chair('Victorian Chair', true)
  }
}
export class VictorianTableFactory extends TableFactory {
  createTable(): ITable {
    return new Table('Victorian Table', 0.5)
  }
}

export class VictorianSofaFactory extends SofaFactory {
  createSofa(): Sofa {
    return new Sofa('Victorian Sofa', true)
  }
}

/* ARTDECO */
export class ArtDecoChairFactory extends ChairFactory {
  createChair(): Chair {
    return new Chair('ArtDeco Chair', true)
  }
}
export class ArtDecoTableFactory extends TableFactory {
  createTable(): ITable {
    return new Table('ArtDeco Table', 0.6)
  }
}
export class ArtDecoSofaFactory extends SofaFactory {
  createSofa(): Sofa {
    return new Sofa('ArtDeco Sofa', true)
  }
}
export class Client implements ICLient {
  constructor(
    private readonly chairFactory: ChairFactory,
    private readonly tableFactory: TableFactory,
    private readonly sofaFactory: SofaFactory
  ) {}

  sitOnChair(): string {
    const chair = this.chairFactory.createChair()
    return chair.sitOn()
  }

  putOnTable(): string {
    const table = this.tableFactory.createTable()
    return table.putOn('object')
  }

  restOnSofa(): string {
    const sofa = this.sofaFactory.createSofa()
    return sofa.restOn()
  }

  canArmrestsOnSofa(): boolean {
    const sofa = this.sofaFactory.createSofa()
    return sofa.hasArmrests()
  }

  canArmrestsOnChair(): boolean {
    const chair = this.chairFactory.createChair()
    return chair.hasArmrests()
  }
}
