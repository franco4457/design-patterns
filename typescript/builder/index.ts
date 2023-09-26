export interface ICar {
  engine: string
  doors: number
  color: string
  hasGPS: boolean
  hasAutoPilot: boolean
  seats: number
  extra: string[]
}

export interface IManual {
  engine: string
  doors: string
  color: string
  hasGPS: string
  hasAutoPilot: string
  seats: string
  extra: string[]
}

export const testTesla = {
  car: {
    color: 'red',
    doors: 4,
    engine: 'electric',
    extra: ['airbag', 'aircondition'],
    hasAutoPilot: true,
    hasGPS: true,
    seats: 4
  },
  manual: {
    color: 'red',
    doors: '4',
    engine: 'Electrical',
    extra: ['has 4 airbag', 'has aircondition'],
    hasAutoPilot: 'Yes',
    hasGPS: 'Yes',
    seats: '4'
  }
}
export const testSUV = {
  car: {
    color: 'black',
    doors: 4,
    engine: 'diesel',
    extra: ['airbag'],
    hasAutoPilot: false,
    hasGPS: true,
    seats: 4
  },
  manual: {
    color: 'black',
    doors: '4',
    engine: 'Diesel',
    extra: ['has 2 airbag'],
    hasAutoPilot: 'No',
    hasGPS: 'Yes',
    seats: '4'
  }
}
export const testTruck = {
  car: {
    engine: 'diesel',
    doors: 2,
    color: 'white',
    hasGPS: true,
    hasAutoPilot: false,
    seats: 2,
    extra: ['triler', 'airacondition', 'airbag']
  },
  manual: {
    engine: 'Diesel',
    doors: '2',
    color: 'white',
    hasGPS: 'Yes',
    hasAutoPilot: 'No',
    seats: '2',
    extra: ['has space to 3 trilers', 'has airacondition', 'has 1 airbag']
  }
}
export const testRacing = {
  car: {
    engine: 'gasoline',
    doors: 0,
    color: 'blue',
    hasGPS: false,
    hasAutoPilot: false,
    seats: 1,
    extra: ['roll cage', 'aileron']
  },
  manual: {
    engine: 'Gasoline v12',
    doors: "Don't have",
    color: 'blue',
    hasGPS: 'No',
    hasAutoPilot: 'No',
    seats: '1',
    extra: ['has roll cage', 'has aileron']
  }
}
export const testCustom = {
  car: {
    engine: 'gasoline',
    doors: 2,
    color: 'yellow',
    hasGPS: true,
    hasAutoPilot: true,
    seats: 2,
    extra: ['airbag', 'aircondition', 'aileron', 'polarized glasses']
  },
  manual: {
    engine: 'Gasoline v8',
    doors: '2',
    color: 'yellow',
    hasGPS: 'Yes',
    hasAutoPilot: 'Yes',
    seats: '2',
    extra: ['has 2 airbag', 'has aircondition', 'has aileron', 'has polarized glasses']
  }
}
