import { combineReducers } from 'redux'
import contactsReducer from './components/Contacts/contactsReducer'
import userReducer from './components/User/userReducer'

export default combineReducers({
  contacts: contactsReducer,
  user: userReducer
})
