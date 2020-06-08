import { NOTIFICATION } from '../actions/types'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION:
      return action.payload;
    default:
      return state
  }
}