import { CHANGE_FIELDS } from '../actions/form'

const initalStore = {
  name: { value: 'test' },
  description: null,
  stockNumber: null,
  auctionEndTime: null,
  firstRegistration: null,
  horsepower: null
}

export default function form(state = initalStore, action = {}) {
  switch (action.type) {
    case CHANGE_FIELDS: {
      return { ...state, ...action.fields }
    }
    default: {
      return state
    }
  }
}
