import { combineReducers } from 'redux'
import todoReducer from './components/Todo/todoReducer'

export default combineReducers({
  todo: todoReducer,
  user: () => ({ name: 'ziv', email: 'ziv@levy.com' })
})
