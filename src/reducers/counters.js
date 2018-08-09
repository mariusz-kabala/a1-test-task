import { START_ALL_COUNTERS, STOP_ALL_COUNTERS } from '../actions/counters'

const initalStore = {
  isRunning: true
}

export default function counters(state = initalStore, action = {}) {
  switch (action.type) {
    case START_ALL_COUNTERS: {
      return { isRunning: true }
    }
    case STOP_ALL_COUNTERS: {
      return { isRunning: false }
    }
    default: {
      return state
    }
  }
}
