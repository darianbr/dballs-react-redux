import {combineReducers} from 'redux-immutable'
import {Map} from 'immutable'

const init = Map({})

function foo (state = init, action) {
  return state
}

export default combineReducers({foo})
