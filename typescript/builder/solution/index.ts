import type { ICar, IManual } from 'builder'
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
interface Builder {
  reset: () => Builder
  setEngine: (engine: string) => Builder
  setDoors: (doors: number) => Builder
  setSeats: (seats: number) => Builder
  setColor: (color: string) => Builder
  setGPS: (hasGPS: boolean) => Builder
  setAutoPilot: (hasAutoPilot: boolean) => Builder
  setExtra: (extra: string[]) => Builder
}

class Manual implements IManual {
  public engine: string = ''
  public doors: string = ''
  public color: string = ''
  public hasGPS: string = ''
  public hasAutoPilot: string = ''
  public seats: string = ''
  public extra: string[] = []
}
class Car implements ICar {
  public engine: string = ''
  public doors: number = 0
  public color: string = ''
  public hasGPS: boolean = false
  public hasAutoPilot: boolean = false
  public seats: number = 0
  public extra: string[] = []
}
export class CarBuilder implements Builder {
  private car!: Car

  constructor() {
    this.reset()
  }

  reset() {
    this.car = new Car()
    return this
  }

  setDoors(doors: number) {
    this.car.doors = doors
    return this
  }

  setEngine(engine: string) {
    this.car.engine = engine
    return this
  }

  setSeats(seats: number) {
    this.car.seats = seats
    return this
  }

  setColor(color: string) {
    this.car.color = color
    return this
  }

  setGPS(hasGPS: boolean) {
    this.car.hasGPS = hasGPS
    return this
  }

  setAutoPilot(hasAutoPilot: boolean) {
    this.car.hasAutoPilot = hasAutoPilot
    return this
  }

  setExtra(extra: string[]) {
    this.car.extra = extra
    return this
  }

  getResult(): ICar {
    return this.car
  }
}
export class ManualBuilder implements Builder {
  private manual!: Manual
  constructor() {
    this.reset()
  }

  setEngine(engine: string) {
    this.manual.engine = capitalize(engine)
    return this
  }

  setAutoPilot(hasAutoPilot: boolean) {
    this.manual.hasAutoPilot = hasAutoPilot ? 'Yes' : 'No'
    return this
  }

  setColor(color: string) {
    this.manual.color = color
    return this
  }

  setDoors(doors: number) {
    this.manual.doors = doors === 0 ? "Don't have" : doors.toString()
    return this
  }

  setGPS(hasGPS: boolean) {
    this.manual.hasGPS = hasGPS ? 'Yes' : 'No'
    return this
  }

  setSeats(seats: number) {
    this.manual.seats = seats.toString()
    return this
  }

  setExtra(extra: string[]) {
    this.manual.extra = extra.map((e) => `has ${e}`)
    return this
  }

  reset() {
    this.manual = new Manual()
    return this
  }

  getResult(): IManual {
    return this.manual
  }
}

export class Director {
  createTesla(builder: Builder) {
    builder
      .setColor('red')
      .setEngine('electric')
      .setExtra(['airbag', 'aircondition'])
      .setGPS(true)
      .setAutoPilot(true)
      .setSeats(4)
      .setDoors(4)
  }

  createSUV(builder: Builder) {
    builder
      .setColor('black')
      .setDoors(4)
      .setEngine('diesel')
      .setExtra(['airbag'])
      .setGPS(true)
      .setAutoPilot(false)
      .setSeats(4)
  }

  createTruck(builder: Builder) {
    builder
      .setColor('white')
      .setEngine('diesel')
      .setExtra(['triler', 'airacondition', 'airbag'])
      .setGPS(true)
      .setAutoPilot(false)
      .setSeats(2)
      .setDoors(2)
  }

  createRacing(builder: Builder) {
    builder
      .setColor('blue')
      .setEngine('gasoline')
      .setExtra(['roll cage', 'aileron'])
      .setGPS(false)
      .setAutoPilot(false)
      .setSeats(1)
      .setDoors(0)
  }
}
