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
    },
    {
      name: 'BMW 3er 318 Ci',
      description: null,
      stockNumber: 'LX73019',
      auctionEndTime: moment(new Date(Date.now() + 390000)),
      firstRegistration: moment('22/10/2004'),
      horsepower: '105 kW / 143 HP'
    },
    {
      name: 'Volkswagen T5 2.0 TDI Kombi lang',
      description: null,
      stockNumber: 'YL77560',
      auctionEndTime: moment(new Date(Date.now() + 1400000)),
      firstRegistration: moment('02/02/2014'),
      horsepower: '75 kW / 102 HP'
    },
    {
      name: 'Audi A2 1.4 TDI',
      description: null,
      stockNumber: 'YN46180',
      auctionEndTime: moment(new Date(Date.now() + 400000)),
      firstRegistration: moment('04/12/2005'),
      horsepower: '55 kW / 75 HP'
    },
    {
      name: 'Audi TT 1.8 Turbo T Coupe',
      description: null,
      stockNumber: 'NV78539',
      auctionEndTime: moment(new Date(Date.now() + 2800000)),
      firstRegistration: moment('14/09/1999'),
      horsepower: '132 kW / 180 HP'
    },
    {
      name: 'Hyundai Santa Fe 2.2 CRDi Pack Edition Cuir',
      description: null,
      stockNumber: 'SS33767',
      auctionEndTime: moment(new Date(Date.now() + 300000)),
      firstRegistration: moment('06/07/2017'),
      horsepower: '147 kW / 200 HP'
    },
    {
      name: 'Nissan Micra 1.2 Visia First',
      description: null,
      stockNumber: 'FM22739',
      auctionEndTime: moment(new Date(Date.now() + 2700000)),
      firstRegistration: moment('11/11/2007'),
      horsepower: '107 kW / 145 HP'
    },
    {
      name: 'Ford C-Max 1.6 TDCi Fun',
      description: null,
      stockNumber: 'EV77172',
      auctionEndTime: moment(new Date(Date.now() + 390000)),
      firstRegistration: moment('22/10/2004'),
      horsepower: '105 kW / 143 HP'
    },
    {
      name: 'Audi A3 2.0 TDI S line Sportpaket plus',
      description: null,
      stockNumber: 'ET70955',
      auctionEndTime: moment(new Date(Date.now() + 1400000)),
      firstRegistration: moment('02/02/2014'),
      horsepower: '75 kW / 102 HP'
    },
    {
      name: 'Skoda Octavia 1.9 TDI DPF Ambiente',
      description: null,
      stockNumber: 'BV66241',
      auctionEndTime: moment(new Date(Date.now() + 400000)),
      firstRegistration: moment('04/12/2005'),
      horsepower: '55 kW / 75 HP'
    },
    {
      name: 'Toyota Auris 1.8 Hybrid Life+',
      description: null,
      stockNumber: 'HP47220',
      auctionEndTime: moment(new Date(Date.now() + 2800000)),
      firstRegistration: moment('14/09/1999'),
      horsepower: '132 kW / 180 HP'
    }
  ],
  selectedCar: null,
  counter: 12
}

export default function cars(state = initalStore, action = {}) {
  switch (action.type) {
    case CREATE_CAR:
      return {
        ...state,
        cars: [...state.cars, action.car],
        counter: state.counter += 1
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
