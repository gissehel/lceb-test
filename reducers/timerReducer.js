import * as types from '../constants/types'

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

const timerReducer = (state = initialTimerState, { type, payload }) => {
    switch (type) {
      case types.TICK:
        return {
          lastUpdate: payload.ts,
          light: !!payload.light,
        }
      default:
        return state
    }
  }

  export default timerReducer;