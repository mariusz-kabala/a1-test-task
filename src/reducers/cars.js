import { CREATE_CAR, SHOW_CAR } from '../actions/cars'
import moment from 'moment';


//toDate()
const initalStore = {
  cars: [
    {
      name: 'Ford Ranger 3.2 TDCi Doppelkabine Limited',
      description: null,
      stockNumber: 'JP84315',
      auctionEndTime: moment(new Date(Date.now() + 300000)),
      firstRegistration: moment('06/07/2017'),
      horsepower: '147 kW / 200 HP'
    },
    {
      name: 'Opel Movano 2.3 CDTI HKa L3H2 3,5t',
      description: null,
      stockNumber: 'YD35608',
      auctionEndTime: moment(new Date(Date.now() + 2700000)),
      firstRegistration: moment('11/11/2007'),
      horsepower: '107 kW / 145 HP'
    }
  ],
  selectedCar: null,
  counter: 0
}

export default function cars(state = initalStore, action = {}) {
  switch (action.type) {
    case CREATE_CAR:
      return {
        ...state,
        cars: [...state.cars, action.car]
      }

    case SHOW_CAR:
      return {
        ...state,
        selected: {...state.cars[action.carIndex]}
      }
    default: {
      return state
    }
  }
}
