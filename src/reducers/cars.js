const initalStore = {
  cars: [
    {
      name: 'Ford Ranger 3.2 TDCi Doppelkabine Limited',
      description: null,
      stockNumber: 'JP84315',
      auctionEndTime: null,
      firstRegistration: '07/2017',
      horsepower: '147 kW / 200 HP'
    },
    {
      name: 'Opel Movano 2.3 CDTI HKa L3H2 3,5t',
      description: null,
      stockNumber: 'YD35608',
      auctionEndTime: null,
      firstRegistration: '11/2007',
      horsepower: '107 kW / 145 HP'
    }
  ],
  selectedCar: null,
  counter: 0
}

export default function cars(state=initalStore, action={}) {
  return state
}
