import { CarBuilder, Director, ManualBuilder } from './index'
import { testTesla, testCustom, testRacing, testSUV, testTruck } from 'builder'

describe('Builder Solution', () => {
  it('client should be create a Tesla car and manual', () => {
    const director = new Director()
    const carBuilder = new CarBuilder()
    director.createTesla(carBuilder)
    const teslaCar = carBuilder.getResult()
    const manualBuilder = new ManualBuilder()
    director.createTesla(manualBuilder)
    const teslaManual = manualBuilder.getResult()
    expect(teslaCar).toEqual(testTesla.car)
    expect(teslaManual).toEqual(testTesla.manual)
  })
  it('client should be create a SUV car and manual', () => {
    const director = new Director()
    const carBuilder = new CarBuilder()
    director.createSUV(carBuilder)
    const suvCar = carBuilder.getResult()
    const manualBuilder = new ManualBuilder()
    director.createSUV(manualBuilder)
    const suvManual = manualBuilder.getResult()
    expect(suvCar).toEqual(testSUV.car)
    expect(suvManual).toEqual(testSUV.manual)
  })
  it('client should be create a Truck car and manual', () => {
    const director = new Director()
    const carBuilder = new CarBuilder()
    director.createTruck(carBuilder)
    const truckCar = carBuilder.getResult()
    const manualBuilder = new ManualBuilder()
    director.createTruck(manualBuilder)
    const truckManual = manualBuilder.getResult()
    expect(truckCar).toEqual(testTruck.car)
    expect(truckManual).toEqual(testTruck.manual)
  })
  it('client should be create a Racing car and manual', () => {
    const director = new Director()
    const carBuilder = new CarBuilder()
    director.createRacing(carBuilder)
    const racingCar = carBuilder.getResult()
    const manualBuilder = new ManualBuilder()
    director.createRacing(manualBuilder)
    const racingManual = manualBuilder.getResult()
    expect(racingCar).toEqual(testRacing.car)
    expect(racingManual).toEqual(testRacing.manual)
  })
  it('client should be create a Custom car and manual', () => {
    const customCar = new CarBuilder()
      .setColor('yellow')
      .setDoors(2)
      .setEngine('gasoline v8')
      .setExtra(['airbag', 'aircondition', 'aileron', 'polarized glasses'])
      .setGPS(true)
      .setAutoPilot(true)
      .setSeats(2)
      .getResult()

    const customManual = new ManualBuilder()
      .setDoors(2)
      .setEngine('gasoline v8')
      .setExtra(['airbag', 'aircondition', 'aileron', 'polarized glasses'])
      .setGPS(true)
      .setAutoPilot(true)
      .setSeats(2)
      .setColor('yellow')
      .getResult()
    expect(customCar).toEqual(testCustom.car)
    expect(customManual).toEqual(testCustom.manual)
  })
})
