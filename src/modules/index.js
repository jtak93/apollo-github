import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import githubReducer from '../Github/reducer'

export default combineReducers({
  routing: routerReducer,
  github: githubReducer,
})
