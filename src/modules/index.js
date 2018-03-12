import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer from '../Counter/reducer'
import githubReducer from '../Github/reducer'

export default combineReducers({
  routing: routerReducer,
  counter: counterReducer,
  github: githubReducer,
})
