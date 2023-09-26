import { testCustom, testRacing, testSUV, testTesla, testTruck } from 'builder'
import { Car, Manual } from '.'

describe('Builder Problem', () => {
  it('client should be create a Tesla car and manual', () => {
    const teslaCar = new Car('electric', 4, 'red', true, true, 4, ['airbag', 'aircondition'])
    const teslaManual = new Manual('Electrical', '4', 'red', 'Yes', 'Yes', '4', [
      'has 4 airbag',
      'has aircondition'
    ])
    expect(teslaCar).toEqual(testTesla.car)
    expect(teslaManual).toEqual(testTesla.manual)
  })
  it('client should be create a SUV car and manual', () => {
    const suvCar = new Car('diesel', 4, 'black', true, false, 4, ['airbag'])
    const suvManual = new Manual('Diesel', '4', 'black', 'Yes', 'No', '4', ['has 2 airbag'])
    expect(suvCar).toEqual(testSUV.car)
    expect(suvManual).toEqual(testSUV.manual)
  })
  it('client should be create a Truck car and manual', () => {
    const truckCar = new Car('diesel', 2, 'white', true, false, 2, [
      'triler',
      'airacondition',
      'airbag'
    ])
    const truckManual = new Manual('Diesel', '2', 'white', 'Yes', 'No', '2', [
      'has space to 3 trilers',
      'has airacondition',
      'has 1 airbag'
    ])
    expect(truckCar).toEqual(testTruck.car)
    expect(truckManual).toEqual(testTruck.manual)
  })
  it('client should be create a Racing car and manual', () => {
    const racingCar = new Car('gasoline', 0, 'blue', false, false, 1, ['roll cage', 'aileron'])
    const racingManual = new Manual('Gasoline v12', "Don't have", 'blue', 'No', 'No', '1', [
      'has roll cage',
      'has aileron'
    ])
    expect(racingCar).toEqual(testRacing.car)
    expect(racingManual).toEqual(testRacing.manual)
  })
  it('client should be create a Custom car and manual', () => {
    const customCar = new Car('gasoline', 2, 'yellow', true, true, 2, [
      'airbag',
      'aircondition',
      'aileron',
      'polarized glasses'
    ])
    const customManual = new Manual('Gasoline v8', '2', 'yellow', 'Yes', 'Yes', '2', [
      'has 2 airbag',
      'has aircondition',
      'has aileron',
      'has polarized glasses'
    ])
    expect(customCar).toEqual(testCustom.car)
    expect(customManual).toEqual(testCustom.manual)
  })
})
