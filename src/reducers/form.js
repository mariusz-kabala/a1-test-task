import { CHANGE_FIELDS } from '../actions/form'

const initalStore = {
  name: null,
  description: null,
  stockNumber: null,
  auctionEndTime: null,
  firstRegistration: null,
  horsepower: null
}

return function form(state = initalStore, action = {}) {
  switch (action.type) {
    case CHANGE_FIELDS: {
      return { ...state, ...action.fields }
    }
    default: {
      return state
    }
  }
}
