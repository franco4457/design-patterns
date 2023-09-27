import type { ICar, IManual } from 'builder'
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
interface Builder {
  reset: () => void
  setEngine: (engine: string) => void
  setDoors: (doors: number) => void
  setSeats: (seats: number) => void
  setColor: (color: string) => void
  setGPS: (hasGPS: boolean) => void
  setAutoPilot: (hasAutoPilot: boolean) => void
  setExtra: (extra: string[]) => void
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

  reset(): void {
    this.car = new Car()
  }

  setDoors(doors: number): void {
    this.car.doors = doors
  }

  setEngine(engine: string): void {
    this.car.engine = engine
  }

  setSeats(seats: number): void {
    this.car.seats = seats
  }

  setColor(color: string): void {
    this.car.color = color
  }

  setGPS(hasGPS: boolean): void {
    this.car.hasGPS = hasGPS
  }

  setAutoPilot(hasAutoPilot: boolean): void {
    this.car.hasAutoPilot = hasAutoPilot
  }

  setExtra(extra: string[]): void {
    this.car.extra = extra
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
  }

  setAutoPilot(hasAutoPilot: boolean) {
    this.manual.hasAutoPilot = hasAutoPilot ? 'Yes' : 'No'
  }

  setColor(color: string) {
    this.manual.color = color
  }

  setDoors(doors: number) {
    this.manual.doors = doors === 0 ? "Don't have" : doors.toString()
  }

  setGPS(hasGPS: boolean) {
    this.manual.hasGPS = hasGPS ? 'Yes' : 'No'
  }

  setSeats(seats: number) {
    this.manual.seats = seats.toString()
  }

  setExtra(extra: string[]) {
    this.manual.extra = extra.map((e) => `has ${e}`)
  }

  reset() {
    this.manual = new Manual()
  }

  getResult(): IManual {
    return this.manual
  }
}

export class Director {
  createTesla(builder: Builder) {
    builder.setColor('red')
    builder.setEngine('electric')
    builder.setExtra(['airbag', 'aircondition'])
    builder.setGPS(true)
    builder.setAutoPilot(true)
    builder.setSeats(4)
    builder.setDoors(4)
  }

  createSUV(builder: Builder) {
    builder.setColor('black')
    builder.setDoors(4)
    builder.setEngine('diesel')
    builder.setExtra(['airbag'])
    builder.setGPS(true)
    builder.setAutoPilot(false)
    builder.setSeats(4)
  }

  createTruck(builder: Builder) {
    builder.setColor('white')
    builder.setEngine('diesel')
    builder.setExtra(['triler', 'airacondition', 'airbag'])
    builder.setGPS(true)
    builder.setAutoPilot(false)
    builder.setSeats(2)
    builder.setDoors(2)
  }

  createRacing(builder: Builder) {
    builder.setColor('blue')
    builder.setEngine('gasoline')
    builder.setExtra(['roll cage', 'aileron'])
    builder.setGPS(false)
    builder.setAutoPilot(false)
    builder.setSeats(1)
    builder.setDoors(0)
  }
}
