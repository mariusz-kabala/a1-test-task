import { combineReducers } from 'redux'
import cars from './cars'
import counters from './counters'
import form from './form'

export default combineReducers({
  cars,
  counters,
  form
})
