import { combineReducers } from 'redux'
import contactsReducer from './components/contactsReducer'

export default combineReducers({
  contacts: contactsReducer,
  user: () => ({ name: 'Ziv', email: 'ziv@levy.com' })
})
