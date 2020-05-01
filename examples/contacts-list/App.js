import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import ContactsScreen from './components/Contacts/ContactsScreen'

const middlewares = applyMiddleware(thunk)
const store = createStore(rootReducer, compose(middlewares))

export default function App() {
  return (
    <Provider store={store}>
      <ContactsScreen />
    </Provider>
  )
}
