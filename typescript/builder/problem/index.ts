import type { IManual, ICar } from 'builder'

export class Car implements ICar {
  constructor(
    public engine: string,
    public doors: number,
    public color: string,
    public hasGPS: boolean,
    public hasAutoPilot: boolean,
    public seats: number,
    public extra: string[]
  ) {}
}

export class Manual implements IManual {
  constructor(
    public engine: string,
    public doors: string,
    public color: string,
    public hasGPS: string,
    public hasAutoPilot: string,
    public seats: string,
    public extra: string[]
  ) {}
}
