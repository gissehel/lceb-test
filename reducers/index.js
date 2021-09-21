import { combineReducers } from 'redux'
import timer from './timerReducer'
import counter from './counterReducer'
import lceb from './lceb'

// COMBINED REDUCERS
const reducers = {
  counter,
  timer,
  lceb,
}

export default combineReducers(reducers)
